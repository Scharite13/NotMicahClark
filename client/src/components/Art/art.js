import React from 'react';
import './styles.art.css';
import arts from './art_database.js';



const ArtObject = () => {
    return(
        <div  className="tile_container">
                {arts.map((art) => (  
                    <div>    
                        <div id={art.id} className="image_container">
                            <img className="art_tile" src={art.image} alt='Tile of Art work.' />
                        </div>
                        <div className="description_contianer"> 
                            <h2>{art.title}</h2>
                            <p>{art.description}</p>
                        </div>  
                    </div>
                ))} 
           </div>
            
    ) 
}

export default ArtObject;