import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import Blogs from './components/Blogs'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={Home} />
      <ProtectedRoute exact path="/cart" component={Cart} />
      <ProtectedRoute exact path="/blogs" component={Blogs} />
      <Route exact path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
