import React from "react";
import { Grid, Row, Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

import Image from "./Image.js";

export default class Media extends React.Component {

	render() {
		const { content } = this.props;
		return (
			<section className="media">
				<ScrollableAnchor id={'media'}>
					<Grid>
						<Row className="show-grid">
							<Col sm={12}>
								<h2>{content[0].title}</h2>
							</Col>
						</Row>
						<Row className="show-grid news">
							{content[0].news.map((item, key) => {
								return (
									<Col key={key} sm={4} className="news">
										<a href={item.link} target="_blank">
											<div className="image-wrapper">
												<Image image={item.image} />
											</div>
											<div className="agency">{item.agency}</div>
											<h4>{item.title}</h4>
										</a>
									</Col>
								)
							})}
						</Row>
					</Grid>
				</ScrollableAnchor>
			</section>
		)
	}
}