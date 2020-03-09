import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';

export default class Banner extends React.Component {
	render() {
		const { content } = this.props;
		return (
			<section className="banner">
				<Grid>
					<Row className="show-grid">
						<Col sm={12} md={10}>
							<div className="banner-content">
								<h2>{content}</h2>
							</div>
						</Col>
					</Row>
				</Grid>
			</section>
		)
	}
}