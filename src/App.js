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
  }

  handleChange = (event,joueur) => {
    const joueurs= {... this.state.joueurs}
    const nom = event.target.value
    joueurs[joueur].nom = nom
    this.setState({joueurs})
  }

  cacherNom = id => {
    const joueurs= {... this.state.joueurs};
    joueurs[id].nom='X'
    this.setState({joueurs})
  }

  handleShowDescription = () =>{
    const isShow=!this.state.isShow;
    this.setState({isShow})
  }
  
  UpdateName = () =>{
    const isShow=!this.state.isShow;
    this.setState({isShow})
  }
  
  render(){
    const {titre, auteur}=this.props;
    const {joueurs, isShow}=this.state;

    let description = null
    if(isShow)
    {
      description = <strong>C'est le plus rigoureux</strong>
    }

    const liste = Object.keys(joueurs)
      .map(joueur => (
        <Membre 
        key={joueur}
        handleChange={event => this.handleChange(event,joueur)}
        cacherNom= {()=>this.cacherNom(joueur)}
        nom = {joueurs[joueur].nom} 
        classement = {joueurs[joueur].classement} />
      ))

    return (
      <Fragment>
       <div className="App">
         <h1>{titre}</h1>
         <h2>Mon second titre</h2>
         <h3>Auteur: {auteur.toUpperCase()}</h3>  

          {liste} 
         {/* <Membre 
          nom ={joueurs.joueur3.nom}
          classement = {joueurs.joueur3.classement}>
         
         {description} 
         <button onClick={this.handleShowDescription}>
         {
           isShow ? 'Cacher' : 'Montrer'  
         } 
           
           </button> 
         
         </Membre>  */}
         <Button
         vieillir= {() => {this.handleClick(2);}}
         />
           
       </div>
     </Fragment>
   );
  }
}

export default App;
