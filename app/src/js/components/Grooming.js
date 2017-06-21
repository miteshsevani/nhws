import React from "react";
import Image from "./Image";
import { Grid,Row,Col } from 'react-bootstrap';

export default class Grooming extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="grooming">                
                <Grid>
                    <Row className="show-grid">
                        <Col md={7}>
                            <h3>Grooming</h3>
                            {content.map((text,key) => {
                                return(
                                    <p key={key}>{text}</p>
                                )
                            })}
                        </Col>
                        <Col md={5}>
                            <Image image="images/grooming-stages.png" />
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}