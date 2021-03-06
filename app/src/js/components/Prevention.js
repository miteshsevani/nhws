import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import TellingSigns from "./TellingSigns";
export default class Prevention extends React.Component {

	render() {
		const { content } = this.props;
		return (
			<section className="prevention">
				<ScrollableAnchor id={'prevention'}>
					<Grid>
						<Row className="show-grid">
							<Col sm={12} md={6}>
								<h3>{content.prevention[0].title}</h3>
								<p>{content.prevention[0].text}</p>
							</Col>
							<Col sm={12} md={5} mdOffset={1}>
								<TellingSigns content={content.telling_signs} />
							</Col>
						</Row>
					</Grid>
				</ScrollableAnchor>
			</section>
		)
	}
}