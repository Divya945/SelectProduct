import React, { useContext } from 'react';
import { ProductContext } from './ProductMaker';

export default function ItemsSummeary() {
  const { product } = useContext(ProductContext);
  return (
    <div className="summery-wrapper">
      <ul>
        {product.map(({ name, id }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
