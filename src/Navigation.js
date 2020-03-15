import React from 'react';
import logo from './logo.svg';
import img_achat from './market.png';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import {withAutorization} from './Autorization.js';




class Navigation extends React.Component {


tologoutSubmit=(event)=>{
  event.preventDefault();
  
  this.props.tologout();
 
  
}


  render() {
    return (
     
     /*
     
     <ul>
     
     
     
     
       {this.props.isLogged?  <li> {this.props.email} </li>: ""}
       {this.props.isLogged?  <li> <button onClick={this.tologoutSubmit}>Je me déconnecte</button> </li>: ""}
     
     <li>
      <h1>{this.props.isLogged?"Connecté": "déconnecté"}</h1>
     </li>
        
        <li> <Link to="/">Home</Link>  </li>
        <li> <Link to="/signin">SignIn</Link>  </li>
        <li> <Link to="/signup">SignUp</Link>  </li>
       </ul>,
     */
     
<header class="header">
  <a href="" class="logo">MarketPlace</a>
  <input class="menu-btn" type="checkbox" id="menu-btn" />
  <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
  <ul class="menu">
        <li> <Link to="/">Home</Link>  </li>
        <li> <Link to="/signin">SignIn</Link>  </li>
        <li> <Link to="/signup">SignUp</Link>  </li>
        {this.props.isLogged?  <li> <Link to=""> <img class="img_achat" src={img_achat}/> {this.props.nbr_achat}</Link> </li>: ""}
        {this.props.isLogged?  <li> <Link to=""> Votre adresse mail : {this.props.email}</Link> </li>: ""}
       {this.props.isLogged?  <li> <Link to="" onClick={this.tologoutSubmit}>Je me déconnecte</Link> </li>: ""}
       {this.props.isLogged?  <li> <Link to=""> Connecté </Link> </li>: ""}
  </ul>
</header>
   
     );
  }

}

export default withAutorization(Navigation);
