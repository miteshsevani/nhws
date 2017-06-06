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
						<div className="col-sm-6">
							<h1>National Hindu Welfare Support</h1>
						</div>

						<div className="col-sm-4 ">
							<div className="contact box-content">
								<div className="phone">
									<Image image="images/icons/icon-phone.svg" />
									<div className="phone-text">
										Confidential helpline<br />
										020 7341 6279
									</div>
								</div>
								<div className="email">
									<Image image="images/icons/icon-mail.svg" />																
									<div><a href="mailto:info.nhws@gmail.com">info.nhws@gmail.com</a></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}