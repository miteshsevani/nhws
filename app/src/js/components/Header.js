import React from "react";
import Nav from "./Nav.js";

export default class Header extends React.Component {	
	render() {
		return(
			<div>
				<div className="row">
					<div className="col col-sm-12">
						<header>
							<Nav />
						</header>
					</div>
				</div>
			</div>
		);
	}
}