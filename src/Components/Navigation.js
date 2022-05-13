import React, {useContext} from 'react';
import '../style.css';
import ProductMaker from './ProductMaker';
import UserContext from './User'


export default function Navigation() {
  const user = useContext(UserContext);
  return (
    <div>
      <h3 className= "nav-wrapper"> Welcome {user.name}</h3>
      <ProductMaker />
    </div>
  );
}
