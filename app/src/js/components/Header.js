import React from "react";
import Image from "./Image";

export default class Header extends React.Component {	
	render() {
		const {content} = this.props;
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-xs-3 col-sm-1 logo">
							<Image image="images/nhws-logo.png" />
						</div>						
						<div className="col-xs-9 col-sm-11 header-title">
							<h1>{content}</h1>
						</div>
					</div>
				</div>
			</header>
		);
	}
}