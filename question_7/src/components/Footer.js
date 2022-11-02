import React from 'react';
import {
  Navbar,
} from 'reactstrap';
import { Google,EnvelopeFill ,Facebook,Github,Skype,Slack} from 'react-bootstrap-icons';

export default function NavBar() {
  
    return (
      <div>
        <Navbar className='navbar-dark bg-dark navbar-expand-lg'>
        <EnvelopeFill color="royalblue" className='mx-4' size={32}/> 
        <Facebook color="royalblue" className='mx-4'  size={32}/> 
        <Github color="royalblue" className='mx-4'  size={32}/> 
        <Google color="royalblue" className='mx-4'  size={32}/> 
        <Skype color="royalblue" className='mx-4'  size={32}/> 
        <Slack color="royalblue" className='mx-4'  size={32}/> 
          <div className='text-light h3 m-auto'> © 2022 Copyright: NoBody</div>
        </Navbar>
      </div>
    );
}
