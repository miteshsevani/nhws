import React from "react";
import Image from "./Image.js";

export default class Header extends React.Component {	
	render() {
		return(
			<header>
				<div className="container">
					<div className="row">
						<div className="col-sm-2">
							<Image image="images/nhws-logo.png" />
						</div>						

						<div className="col-sm-5 col-sm-offset-5">
							<div className="contact box-content">
								<Image image="images/icons/icon-phone.svg" />
								<div className="phone-text">Confidential helpline</div>
								<div className="phone-number">0207 341 6279</div>
								<Image image="images/icons/icon-mail.svg" />
								<div className="email"><a href="mailto:info.nhws@gmail.com">info.nhws@gmail.com</a></div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}