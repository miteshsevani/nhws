import React from "react";
import Image from "./Image.js";

export default class Header extends React.Component {	
	render() {
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<Image image="images/nhws-logo.png" />
						</div>
					</div>
				</div>
			</header>
		);
	}
}