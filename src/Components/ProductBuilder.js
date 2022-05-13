import React from 'react';
import AvailableItems from './AvailableItems';
const ingredients = [
  {
    image: '🍎',
    name: 'apple',
  },
  {
    image: '🥑',
    name: 'avocado',
  },
  {
    image: '🥦',
    name: 'broccoli',
  },
  {
    image: '🥕',
    name: 'carrot',
  },
  {
    image: '🍷',
    name: 'red wine dressing',
  },
  {
    image: '🍚',
    name: 'seasoned rice',
  },
];
export default function ProductBuilder() {
  return (
    <div className = "build-Wrapper">
      {ingredients.map((ingredient) => (
        <AvailableItems
          key={ingredient.name}
          image={ingredient.image}
          name={ingredient.name}
        />
      ))}
    </div>
  );
}
