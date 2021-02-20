import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import Image from "./Image";

export default class Footer extends React.Component {

	getDate() {
		return new Date().getFullYear();
	}

	render() {
		const { content } = this.props;
		return (
			<footer>
				<Grid>
					<Row className="show-grid">
						<Col xs={3} sm={2}>
							<Image image="images/nhws-logo.png" />
						</Col>
						<Col xs={8} sm={4} xsOffset={1} smOffset={1}>
							<ul className="contact">
								<li><Image image="images/icons/icon-mail.svg" /><a href="mailto:info@nhws.org.uk">info@nhws.org.uk</a></li>
								<li><Image image="images/icons/icon-mail.svg" /><a href="mailto:support@nhws.org.uk">support@nhws.org.uk</a></li>
							</ul>
						</Col>
						<Col xs={8} sm={4} xsOffset={4} smOffset={0}>
							<h5>Useful Links</h5>
							<ul>
								{content.useful_links.map((item, key) => {
									return (
										<li key={key}><a href={item.link} target="_blank">{item.item}</a></li>
									)
								})}
							</ul>
						</Col>
					</Row>
					<Row className="show-grid">
						<Col sm={12}>
							<p>&copy; Copyright {this.getDate()}, National Hindu Welfare Support. All Rights Reserved.</p>
						</Col>
					</Row>
				</Grid>
			</footer>
		);
	}
}
