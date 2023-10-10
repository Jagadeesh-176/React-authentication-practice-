import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {history} = props
  const onClickButton = () => {
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ul className="list">
      <div className="link">
        <li>
          <Link to="/">Home</Link>
        </li>
      </div>
      <div className="link">
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>
      <div className="link">
        <li>
          <Link to="/blogs">Products</Link>
        </li>
      </div>
      <div>
        <button type="button" onClick={onClickButton}>
          Log out
        </button>
      </div>
    </ul>
  )
}

export default withRouter(Header)
