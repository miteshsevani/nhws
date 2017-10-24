import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';
import ScrollableAnchor from 'react-scrollable-anchor';
import Title from "./Title";
import Image from "./Image.js";

export default class DateRapeDrugs extends React.Component {

    render() {
        const {content} = this.props;
        return(
            <section className="date-rape-drugs">
                <ScrollableAnchor id={'date-rape-drugs'}>
                <Grid>
                    <Row className="show-grid">                        
                        <Col sm={6} className="dr-bg">
                            <Image image="images/drink-spiking.jpg" />
                        </Col>                        
                        <Col sm={6} className="dr-text">
                            <Title styleType="primary-blue" title={content[0].title}></Title>
                            <p>{content[0].text}</p>
                        </Col>
                    </Row>
                </Grid>
                </ScrollableAnchor>
            </section>
        )
    }
}