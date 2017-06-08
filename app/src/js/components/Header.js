import React from "react";
import Image from "./Image.js";

export default class Header extends React.Component {	
	render() {
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-xs-3 col-sm-2">
							<Image image="images/nhws-logo.png" />
						</div>						
						<div className="col-xs-9 col-sm-9 header-title">
							<h1>National Hindu Welfare Support</h1>
						</div>						
					</div>
				</div>
			</header>
		);
	}
}