import React, { useReducer, createContext } from 'react';
import ProductBuilder from './ProductBuilder';
import ItemsSummeary from './ItemsSummeary';
//import UserContext from './User';
export const ProductContext = createContext();

function reducer(state, item) {
  return [...state, item];
}
export default function ProductMaker() {
  const [product, setProduct] = useReducer(reducer, []);
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      <h1 className="product-wrapper">
        <span role="img" aria-label="salad">
          🥗
        </span>
        Build Your Own Products
        <span role="img" aria-label="salad">
          🥗
        </span>
      </h1>
      <ProductBuilder />
      <ItemsSummeary />
    </ProductContext.Provider>
  );
}
