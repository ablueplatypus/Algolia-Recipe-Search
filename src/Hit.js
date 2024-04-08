import React,  {useState} from 'react';
import { Highlight } from 'react-instantsearch';



function Hit({ hit }) {
    return (
      <div className="hit-list"> 
      <img src={hit.img_src} alt={hit.recipe_name} />
      <h3>
        <Highlight attribute="recipe_name" hit={hit} />
      </h3>
      <p><b>Ingredients: </b><Highlight attribute="ingredients" hit={hit} /></p>
      <p><b>Directions: </b><Highlight attribute="directions" hit={hit} /></p>
      <p><b>Rating: </b>{hit.rating}</p>
      {/* Conditional rendering for cook time */}
      <p><b>Cook Time: </b>{hit.cook_time ? hit.cook_time : 'N/A'}</p>
    </div>
    );
  }

  export default Hit;