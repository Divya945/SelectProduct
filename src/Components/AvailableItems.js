import React, {useContext, useReducer} from 'react';
import UserContext from './User';
import {ProductContext} from './ProductMaker';
import useContext from 'User';

const reducer = key => key + 1;

export default function AvailableItems({ image, name }) {
  const {setProduct} = useContext(ProductContext)
  const user = useContext(UserContext);
  const favorite = user.favorites.includes(name);
  const [id, updateId] = useReducer(reducer, 0);
  function update() {
    setProduct({
      name,
      id: `${name}-${id}`
    })
    updateId();
  };
  return (
    <div className="Item-wrapper">
      <h3>{name}</h3>
      <span
        className="favorite-item"
        aria-label={favorite ? 'Favorite' : 'Not Favorite'}
      >
        {favorite ? '😋' : ''}
      </span>
      <button className="add-Item" onClick={update}>
        <span className="add-image">{image}</span>
      </button>
    </div>
  );
}
