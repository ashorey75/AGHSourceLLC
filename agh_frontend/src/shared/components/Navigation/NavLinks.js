import React/*, { useContext }*/ from 'react';
import { NavLink } from 'react-router-dom';
/*import { AuthContext } from '../../context/auth-context'; */
import './NavLinks.css';


const NavLinks = props => {
  /*const auth = useContext(AuthContext)*/
  return <ul className='nav-links'>
    {/* removed but commented out in case it is needed
    <li>
      <NavLink to='/places/boroughs'>ALL PLACES</NavLink>
    </li>
    <li>
      <NavLink to='/' exact>ALL USERS</NavLink>
    </li>
    */}
    <li>
      <NavLink to='/home' exact>HOME</NavLink>
    </li>
    <li>
      <NavLink to='/products/zippers' exact>ZIPPERS</NavLink>
    </li>
    <li>
      <NavLink to='/products/sliders' exact>CUSTOM SLIDERS</NavLink>
    </li>
    <li>
      <NavLink to='/products/tape' exact>CUSTOM TAPE</NavLink>
    </li>
    <li>
      <NavLink to='/products/other' exact>RELATED PRODUCTS</NavLink>
    </li>
    <li>
      <NavLink to='/contactus' exact>CONTACT US</NavLink>
    </li>
    {/* Removed but commented out in case it is needed
    {auth.isLoggedIn &&
    <li>
      <NavLink to={`/${auth.userId}/places`}>MY PLACES</NavLink>
    </li>}
    {auth.isLoggedIn &&
    <li>
      <NavLink to='/places/new'>NEW PLACES</NavLink>
    </li>}
    
    {!auth.isLoggedIn &&
    <li>
      <NavLink to='/auth'>AUTHENTICATE</NavLink>
    </li>}
    {auth.isLoggedIn &&
      <li><button onClick={auth.logout}>LOGOUT</button></li>
    } 
      */}
  </ul>
}


export default NavLinks;
