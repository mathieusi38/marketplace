import React from 'react';
import Component from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home.js';
import Navigation from './Navigation.js';
import Article from './article.js';
import SignIn from './Signin.js';
import SignUn from './SignUp.js';
import {AutorizationProvider} from './Autorization.js';

class App extends React.Component{
  

  
  render(){
    
    return(
     
      
     <React.Fragment>
     
     <AutorizationProvider>
     
       <Navigation/>
       
       <Switch>
       
       <Route exact path="/"> 
       <Article/>
          <Home/>
      </Route>
      
      <Route path="/signin"> 
          <SignIn/>
      </Route>
      
        <Route path="/signup"> 
          <SignUn/>
      </Route>
      
       
     
     </Switch>
     
     
  </AutorizationProvider>
     
     </React.Fragment>
  
      )  
    
  }
  
}

export default App;
