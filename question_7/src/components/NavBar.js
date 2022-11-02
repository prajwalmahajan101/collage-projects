import React from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';


export default function NavBar() {
  
    return (
      <div>
        <Navbar className='navbar-dark bg-dark navbar-expand-lg'>
          <NavbarBrand href="/">Shop</NavbarBrand>
        </Navbar>
      </div>
    );
}

