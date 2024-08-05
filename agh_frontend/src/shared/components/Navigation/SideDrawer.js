import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group'

import './SideDrawer.css'

const SideDrawer = props => {
  const content = (
    <CSSTransition
    /* props.show gathers the show prop from the MainNavigation component*/
      in={props.show} //In triggers the transition based on the value of props.show
      timeout={200} //duration of transition
      classNames="slide-in-left" //class name prefix for the transition
      mountOnEnter //ensures that the drawer is only added to the DOM only when it is shown
      unmountOnExit
    >
    {/* props.onClick is derived from the MainNavigation component which passes the closeDrawerHandler.
     props.children passes in everything between the SideDrawer component on the MainNavigation component*/}
      <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
    </CSSTransition>
  )
  /*This content generated is passed to the drawer-hook id in the index.html file*/ 
  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
};


export default SideDrawer;