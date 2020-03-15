import React from 'react';
import logo from './logo.svg';
import './App.css';
import { withRouter } from 'react-router-dom';
import {withAutorization} from './Autorization.js';

class Article extends React.Component {
state={
  
article_info : [
  { id: 0, name: 'Adidas Stan Smith', prix: '95 €', img: 'https://images-na.ssl-images-amazon.com/images/I/71vos9AHtoL._AC_UX500_.jpg' },
  { id: 1, name: 'Nike Air Jordan One', prix: '150 €', img: 'https://media.gqmagazine.fr/photos/5b9925ba21de720011929029/master/w_828%2cc_limit/nike___air_jordan_one_3496.jpg' },
],

utilisateur_paniers : [
  { id: 3, name: 'Adidas Stan Smith', prix: '95 €'},
]




}

add_article=()=>{
 
 this.props.add_achat();
  
}


/*
add_panier = id =>{
    
  const paniers = this.state.article_info.map(function(panier){
    return panier;
  })
  
  console.log(paniers)
  
  
  const articles_id = this.state.article_info.map(function(article_id){
    return article_id.id;
  })
  

  const articles_name = this.state.article_info.map(function(article_name){
    return article_name.name;
  })
  
  
  const id_art = articles_id; 
  const name_art = articles_name; 
  
  const utilisateur_paniers = {id : id_art, name: name_art }
  
  const test = this.state.utilisateur_paniers.slice();
  
  test.push(utilisateur_paniers)
  
  this.setState({test :test})
  
  const tests = this.state.utilisateur_paniers.map(function(test){
    return test;
  })
  
    this.setState({ utilisateur_paniers: [...this.state.utilisateur_paniers, ...[1,2,3] ] }) //another array
    
    console.log(id_art)
  
  console.log(tests)
  

  
}*/

  render() {
   
   
    

  const paniers = this.state.article_info.map(function(panier){
    return panier;
  })
  


  const articles_id = this.state.article_info.map(function(article_id){
    return article_id.id;
  })
  

  const articles_name = this.state.article_info.map(function(article_name){
    return article_name.name;
  })
  
  const articles_prix = this.state.article_info.map(function(article_prix){
    return article_prix.prix;
  })

  const articles_img = this.state.article_info.map(function(article_img){
    return article_img.img;
  })
  


    return (

<div class="main">

      <figure class="snip1249">
  <div class="image">
    <img src={articles_img[0]} alt="sample90"/><i class="ion-ios-basketball-outline"></i>
  </div>
  <figcaption>
    <h3>{articles_name[0]}</h3>
    <div class="price">
      <s>{articles_prix[0]}</s>
    </div>
    {this.props.isLogged?   <a href="#" class="add-to-cart" onClick={()=>this.add_article()}>Add to Cart</a>: <h4>Connectez vous pour ajouter un article</h4>}
  </figcaption>
</figure>

      <figure class="snip1249">
  <div class="image">
    <img src={articles_img[1]} alt="sample90"/><i class="ion-ios-basketball-outline"></i>
  </div>
  <figcaption>
    <h3>{articles_name[1]}</h3>
    <div class="price">
      <s>{articles_prix[1]}</s>
    </div>
   {this.props.isLogged?   <a href="#" class="add-to-cart" onClick={()=>this.add_article()}>Add to Cart</a>: <h4>Connectez vous pour ajouter un article</h4>}
  </figcaption>
</figure>


</div>


     
     );
  }
  

}

export default withRouter (withAutorization(Article));
