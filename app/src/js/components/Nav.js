import React from "react";

export default class Nav extends React.Component {
	
	constructor() {
		super();
		this.state = {			
			"navigation": [				
				{
					"text":"Grooming",
					"link":"#grooming"
				},
				{
					"text":"Date Rape Drugs",
					"link":"#date-rape-drugs"
				},
				{
					"text":"Prevention",
					"link":"#prevention"
				},
				{
					"text":"Staying Safe",
					"link":"#staying-safe"
				},
				{
					"text":"Past Events",
					"link":"#past-events"
				},
				{
					"text":"Documentaries",
					"link":"#documentaries"
				}
			]
		};
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