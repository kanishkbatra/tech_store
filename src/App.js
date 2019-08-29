import React, {Component} from 'react'; 
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/Products';
import SingleProducts from './pages/SingleProductPage';
import Default from './pages/DefaultPage';
import Contact from './pages/ContactPage';
import Cart from './pages/CartPage';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/products" exact component={Products}/>
        <Route path="/products/:id" exact component={SingleProducts}/>
        <Route path="/default" exact component={Default}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/cart" exact component={Cart}/>
      </Switch>
    )
  }
}


export default App;
