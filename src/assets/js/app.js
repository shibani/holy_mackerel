import css from "../css/app.css"
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainPageBody from './components/MainPageBody';
import NotFoundPage from './components/NotFoundPage';
import RestaurantDetail from "./components/RestaurantDetail";

class Login extends React.Component {
    render() {
      return (
        <div className="login">
            <h1>Hello Boring Login Page!</h1>
        </div>
      )
    }
}

class App extends React.Component {

    render() {
      return (
        <Router>
            <div className='app'>
                <header>
                    <Header />
                </header>
                <div>
                <Switch>
                    <Route path="/" exact={true} component={MainPageBody} />
                    <Route path="/restaurants/:id" component={RestaurantDetail} />
                    <Route path="/login" component={Login} />
                    <Route component={NotFoundPage} />
                </Switch>
                </div>
                <footer>
                    <Footer /> 
                </footer>  
            </div>
        </Router>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById("react-app"));
