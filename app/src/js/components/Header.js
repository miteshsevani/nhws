import React from "react";
import Image from "./Image";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Header extends React.Component {
	render() {
		const { content } = this.props;
		return (
			<header>
				<Grid>
					<Row className="show-grid">
						<Col xs={3} sm={1} className="logo">
							<Image image="images/nhws-logo.png" />
						</Col>
						<Col xs={9} sm={11} className="header-title">
							<h1>{content}</h1>
						</Col>
					</Row>
				</Grid>
			</header>
		);
	}
}