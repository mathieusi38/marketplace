import React from 'react';



 const AutorizationContext = React.createContext(null);

 const withAutorization = (Component)=>
  
  (props) => (<AutorizationContext.Consumer>
            { value => <Component {...value} {... props}/>}
            </AutorizationContext.Consumer>);
  
class AutorizationProvider extends React.Component{
  
  state = {
    
    isLogged: false,
    tologin: (email) => {this.setState({"isLogged": true, email: email})},
    tologout: () => {this.setState({"isLogged": false})},
    email: "",
    nbr_achat: 0,
    add_achat: () => {this.setState({"nbr_achat": this.state.nbr_achat+1})},
    
    
  };
  
  render(){
    
    return(
      
      <AutorizationContext.Provider value={this.state}>
        {this.props.children}
      </AutorizationContext.Provider>
      
      
      
      );
    
    
    
    
  }
  
  
}
  


export {AutorizationContext, withAutorization, AutorizationProvider};