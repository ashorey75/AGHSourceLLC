// Filename - components/Footer.js

import React from "react";
//import {
//	Box,
//	FooterContainer,
//	Row,
//	Column,
//	FooterLink,
//	Heading,
//} from "./FooterStyles";
import "./Footer.css"
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
	return (
		<div className="box">
			
			<div className="footer-container">
				<div className="row">
					<div className="column">
						<p className="heading">About Us</p>
						<NavLink to='/workinprogress' exact>Aim</NavLink>
						<NavLink to='/workinprogress' exact>Vision</NavLink>
						<NavLink to='/workinprogress' exact>Testimonials</NavLink>
					</div>
					<div className="column">
						<p className="heading">Products</p>
						<NavLink to='/products/sliders' exact>Custom Sliders</NavLink>
						<NavLink to='/products/tape' exact>Custom Tape</NavLink>
						<NavLink to="/products/zippers" exact >Zippers</NavLink>
            <NavLink to="/products/other" exact> Related Products</NavLink>
					</div>
					<div className="column">
						<p className="heading">Contact Us</p>
            <p style={{"color": "white", 'margin': '4px'}}>327 W 36th St. 11th Floor <br/>New York, NY 10018</p>            
            <p style={{"color": "white", 'margin': '4px'}}>212-643-7300</p>
            <p style={{"color": "white", 'margin': '4px'}}>EMAIL COMING SOON!</p>
            <p style={{"color": "white", 'margin': '4px'}}>M-F 9:00am-5:00pm EST</p>
					</div>
					<div className="column">
						<p className="heading">Our Links</p>
						<NavLink to="/workinprogress"  className="fa-brands fa-facebook">
							<span>
								Facebook
							</span>
						</NavLink>
						<NavLink to="/workinprogress/#" className="fa-brands fa-instagram">
							<span>
								Instagram
							</span>
						</NavLink>
						<NavLink to="/workinprogress" className="fa-brands fa-x-twitter">
							<span>
								Twitter
							</span>
						</NavLink>
						<NavLink to="/workinprogress" className="fa-brands fa-youtube">
							<span>
								Youtube
							</span>
						</NavLink>
            <NavLink to="/workinprogress" className="fa-brands fa-shopify">
							<span>
								Shopify
							</span>
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
