import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {listDetails} = props
  const {id, title, imageUrl} = listDetails
  return (
    <Link to={`/blogs/${id}`}>
      <>
        <h1>{title}</h1>
        <p>{imageUrl}</p>
        <img src={imageUrl} alt={title} />
      </>
    </Link>
  )
}

export default BlogItem
