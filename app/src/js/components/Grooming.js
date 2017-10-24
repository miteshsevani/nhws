import React from "react";
import ScrollableAnchor from 'react-scrollable-anchor';
import { Grid,Row,Col } from 'react-bootstrap';
import Title from "./Title";
import Image from "./Image";

export default class Grooming extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section className="grooming">
                <ScrollableAnchor id={'grooming'}>
                <Grid>
                    <Row className="show-grid">
                        <Col md={7}>
                            <Title title={content[0].title}></Title>
                            {content[0].text.map((paragraphs,key) => {
                                return(
                                    <p key={key}>{paragraphs}</p>
                                )
                            })}
                        </Col>
                        <Col md={5}>
                            <Image image="images/grooming-stages.png" />
                        </Col>
                    </Row>
                </Grid>
                </ScrollableAnchor>
            </section>
        )
    }
}