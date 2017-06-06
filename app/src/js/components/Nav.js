import React from "react";

export default class Nav extends React.Component {
	
	constructor() {
		super();
		this.state = require("../content/nav.json");
	}

	getNav() {		
		return(		
			<ul className="nav navbar-nav">
				{this.state.navigation.map((nav,key) => {
					return (
						<li key={key}><a href={nav.link}>{nav.text}</a></li>
					);
				})}
			</ul>
		)
	}

	render() {
		return(

			<nav className="navbar navbar-inverse navbar-static-top">
				<div className="container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>          
					</div>
					<div id="navbar" className="navbar-collapse collapse">		
						{this.getNav()}
					</div>
				</div>
			</nav>
		);
	}
}