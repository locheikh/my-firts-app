import React, {Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Membre from './components/Membre'
import Button from './components/Button'

const joueurs ={
  joueur1 :{
    nom: 'Pele',
    classement:1
  },
  joueur2 :{
   nom:'Messi',
    classement:2
  },
  joueur3 :{
    nom:'Ronaldo',
    classement:3 
  }
}

class App extends Component {  //à la base fonction ss render ni compenent, fragment  
  state={
    joueurs,
    isShow: false
  }

  handleClick =(num) => {
    const joueurs= {... this.state.joueurs};
    joueurs.joueur1.classement +=num;
    this.setState({joueurs})
    //this.setState({joueurs})
  }

  handleChange = event => {
    const joueurs= {... this.state.joueurs};
    const nom = event.target.value
    joueurs.joueur1.nom= nom;
    this.setState({joueurs})
    //this.setState({joueurs})
  }

  handleShowDescription = () =>{
    const isShow=!this.state.isShow;
    this.setState({isShow})
  }
  render(){
    const {titre, auteur}=this.props;
    const {joueurs, isShow}=this.state;
    return (
      <Fragment>
       <div className="App">
         <h1>{titre}</h1>
         <input value={joueurs.joueur1.nom} onChange=
         {this.handleChange} type='text'/>
         <h2>Mon second titre</h2>
         <h3>Auteur: {auteur.toUpperCase()}</h3>  
         <Membre 
          nom = {joueurs.joueur1.nom} 
          classement = {joueurs.joueur1.classement} 
          />
         
         <Membre 
          nom = {joueurs.joueur2.nom}
          classement = {joueurs.joueur2.classement} /> 
         <Membre 
          nom ={joueurs.joueur3.nom}
          classement = {joueurs.joueur3.classement}>
         {
           isShow ? <strong>C'est le plus rigoureux</strong> : null   
         } 
         <button onClick={this.handleShowDescription}>
         {
           isShow ? 'Cacher' : 'Montrer'  
         } 
           
           </button> 
         
         </Membre> 
         <Button
         vieillir= {() => {this.handleClick(2);}}
         />
           
       </div>
     </Fragment>
   );
  }
}

export default App;
