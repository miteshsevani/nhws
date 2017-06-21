import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';
import TellingSigns from "./TellingSigns";
export default class Prevention extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="prevention">                
                <Grid>
                    <Row className="show-grid">                        
                        <Col sm={12} md={6}>
                            <h3>Prevention</h3>
                            <p>{content.prevention}</p>
                        </Col>
                        <Col sm={12} md={5} mdOffset={1}>
                            <TellingSigns content={content.telling_signs} />
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}