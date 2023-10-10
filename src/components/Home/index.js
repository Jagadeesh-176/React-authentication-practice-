import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Header from '../Header'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    console.log('Jwt Token is undefined')
    return <Redirect to="/login" />
  }

  console.log('Jwt token is verified')

  return (
    <div>
      <Header />
      <h1>This is Home</h1>
    </div>
  )
}
export default Home
