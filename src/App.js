import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import BlogItemDetails from './components/BlogItemDetails'
import NotFound from './components/NotFound'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
      <Route exact path="/blogs" component={Products} />
      <Route exact path="/blogs/:id" component={BlogItemDetails} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
)

export default App
