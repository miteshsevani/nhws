import React from "react";

export default class Nav extends React.Component {
	
	constructor() {
		super();
		this.state = {			
			"navigation": [
				{
					"id":"1",
					"text":"Home",
					"link":"#home"
				},
				{
					"id":"2",
					"text":"Awareness",
					"link":"#awareness"
				},
				{
					"id":"3",
					"text":"Grooming",
					"link":"#grooming"
				},
				{
					"id":"4",
					"text":"Prevention",
					"link":"#prevention"
				},
				{
					"id":"5",
					"text":"Staying Safe",
					"link":"#staying-safe"
				},
				{
					"id":"6",
					"text":"BBC Inside Out",
					"link":"#bbcinsideout"
				}
			]
		};
	}

	getNav() {		
		return(		
			<ul className="nav navbar-nav">
				{this.state.navigation.map(nav => {
					return (
						<li key={nav.id}><a href={nav.link}>{nav.text}</a></li>
					);
				})}
			</ul>
		)
	}

	render() {
		return(
			<nav className="navbar navbar-default navbar-fixed-top">
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