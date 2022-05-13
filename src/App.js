import React from 'react';
import './style.css';
import Navigation from './Components/Navigation';
import UserContext from './Components/User';

const user = {
  name: 'Kwame',
  favorites: [
    'avocado',
    'carrot'
  ]
}
export default function App() {
  return (
    <UserContext.Provider value={user}>
      <Navigation />
      </UserContext.Provider>
  );
}
