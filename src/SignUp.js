import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import {withAutorization} from './Autorization.js';

class SignUp extends React.Component {
state={
  email:"",
  password: ""

}

handleInput=(event)=> {
  console.log(event.target.name, event.target.value);
  this.setState({[event.target.name]: event.target.value});
  
}

handleSubmit=(event)=>{
  event.preventDefault();
  
  this.props.tologin();
  this.props.history.push("/");
  
}

  render() {
    return (


      
      
<form onSubmit={this.handleSubmit}>

<h2> Page de création de compte  </h2>

  <input type="text" name="email" placeholder="Email" onChange={this.handleInput}/>
  <input type="text" name="password" placeholder="Password" onChange={this.handleInput}/>
  <input type="submit" name="email" value="Nouveau compte"/>
     

</form>


     
     );
  }

}

export default withRouter (withAutorization(SignUp));
