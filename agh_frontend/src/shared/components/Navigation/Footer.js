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
						<a href="/workinprogress">
							Aim
						</a>
						<a href="workinprogress">
							Vision
						</a>
						<a href="workinprogress">
							Testimonials
						</a>
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
            <p style={{"color": "red", 'margin': '4px'}}>###-###-####</p>
            <p style={{"color": "red", 'margin': '4px'}}>temporary@aghsource.com</p>
            <p style={{"color": "white", 'margin': '4px'}}>M-F 9:00am-5:00pm EST</p>
						{/*<NavLink to="/contactus">Address</NavLink>
						<NavLink to="/contactus" exact>Email</NavLink>
            <NavLink to="contactus" exact>Telephone</NavLink>*/}
					</div>
					<div className="column">
						<p className="heading">Our Links</p>
						<a href="/facebook" target="_blank" className="fa-brands fa-facebook">
							<span>
								Facebook
							</span>
						</a>
						<a href="/instagram" target="_blank" className="fa-brands fa-instagram">
							<span>
								Instagram
							</span>
						</a>
						<a href="#" className="fa-brands fa-x-twitter">
							<span>
								Twitter
							</span>
						</a>
						<a href="workinprogress" className="fa-brands fa-youtube">
							<span>
								Youtube
							</span>
						</a>
            <a href="workinprogress" className="fa-brands fa-shopify">
							<span>
								Shopify
							</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Footer;
