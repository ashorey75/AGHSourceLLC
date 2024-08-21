import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
//the backdrop import is added solely to back out of the sidedrawer 
import Backdrop from '../UIElements/Backdrop';
import './MainNavigation.css';

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  }
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  }
  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className='main-navigation__menu-btn' onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>

        <h1 className='main-navigation__title'>
        <Link to='/home'><h2>AGH</h2></Link>
        </h1>
        
      
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  )
}
// add logo png to header

export default MainNavigation;