import React from "react";
import Image from "./Image.js";
import { Grid,Row,Col } from 'react-bootstrap';

export default class DateRapeDrugs extends React.Component {

    render() {
        const {content} = this.props;
        return(
            <section id="date-rape-drugs">                
                <Grid>
                    <Row className="show-grid">                        
                        <Col sm={6} className="dr-bg">
                            <Image image="images/drink-spiking.jpg" />
                        </Col>                        
                        <Col sm={6} className="dr-text">
                            <h3>Date Rape Drugs</h3>
                            <p>{content}</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}