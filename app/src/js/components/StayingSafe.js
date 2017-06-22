import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Grid,Row,Col } from 'react-bootstrap';

export default class StayingSafe extends React.Component {
    render() {
        const {content} = this.props;
        return(
            <section className="staying-safe">
                <ScrollableAnchor id={'staying-safe'}>
                <Grid>
                    <Row className="show-grid">
                        <Col sm={12}>
                            <h3>Staying Safe</h3>
                        </Col>
                        <ul>
                        {content.map((safe, key) => {
                            return(
                                <Col key={key} sm={6}>
                                    <li>{safe.item}</li>
                                </Col>
                            )
                        })}
                        </ul>
                    </Row>
                </Grid>
                </ScrollableAnchor>
            </section>
        )
    }
}