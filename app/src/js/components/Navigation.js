import React from "react";
import ReactDOM from "react-dom";
import classnames from 'classnames';
import { configureAnchors } from 'react-scrollable-anchor';
import Sticky from 'react-sticky-el';
import Contact from "./Contact.js";

configureAnchors({offset: -100, scrollDuration: 900})

export default class Navigation extends React.Component {

	getNav(nav) {		
		return(		
			<ul className="nav navbar-nav">
				{nav.navigation.map((nav,key) => {
					return (
						<li key={key}><a href={nav.link}>{nav.text}</a></li>
					);
				})}
			</ul>
		)
	}

	render() {
		const {navigation} = this.props;
		const {content} = this.props;

		return(
			<Sticky>
			<nav className="navbar navbar-inverse">
				<div className="container">
					<div className="navbar-header">						
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<div className="navbar-brand">
							<Contact content={content} styleName="mobile" />
						</div>
					</div>
					<div id="navbar" className="navbar-collapse collapse">		
						{this.getNav(navigation)}
					</div>
				</div>
			</nav>
			</Sticky>
		);
	}
}