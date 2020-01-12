import React, {Fragment} from 'react'

/* function Membre(){
    return (
        <h2>Membre</h2>    
    )
}
 */  
//component stateless

const Membre = ({nom,classement, children, cacherNom, handleChange}) => {
    //const name = props.nom;
    //console.log(props);
    return(
        <Fragment>
            <h4 style={{
                backgroundColor: classement < 2 ? 'purple' : 'green', 
                color: classement < 2 ? 'white' : 'black'}}>Joueur: {nom}
            </h4>
            <input value={nom} onChange={handleChange} type='text'/>
            <h4>classement: {classement}</h4>
            <button onClick= {cacherNom}>X</button>
            {children ? <p>{children}</p> : <p>Aucune description</p>}
        </Fragment>
        
    )
}


export default Membre