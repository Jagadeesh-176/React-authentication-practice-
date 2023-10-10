import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

class Products extends Component {
  state = {
    blogsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const formattedData = data.map(e => ({
      id: e.id,
      title: e.title,
      imageUrl: e.image_url,
      avatarUrl: e.avatar_url,
      author: e.author,
      topic: e.topic,
    }))
    this.setState({
      blogsList: formattedData,
      isLoading: false,
    })
  }

  render() {
    const {isLoading, blogsList} = this.state

    return (
      <div>
        <h1>This is Products</h1>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogsList.map(each => <BlogItem listDetails={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default Products
