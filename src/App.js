// import logo from './logo.svg';
import React from 'react'
import './App.css';
import Login from './Components/Login';
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import EditNews from './Components/EditNews';
import PublicNavigation from './Components/PublicNavigation';
import Navigation from './Components/Navigation';
import Logout from './Components/Logout';
import PublicNews from './Components/PublicNews';
import Register from './Components/Register';
import AddNews from './Components/AddNews';
import NotFound from './Components/404';
import About from './Components/About';
function App() {
  return (
    <React.Fragment>
      {sessionStorage.getItem('user_id') == null ? <PublicNavigation /> : <Navigation />}
      <Switch>
        <Route exact path="/" component={PublicNews} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/add" component={AddNews} />
        <Route exact path="/edit/:id" component={EditNews} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/about" component={About} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
