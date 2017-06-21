import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';

export default class Documentaries extends React.Component {

    render() {
        const {content} = this.props;
        return(
            <section id="documentaries">
                <Grid>
                    <Row className="show-grid">
                        
                        <Col md={12}>
                            <h2>Documentaries</h2>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col md={12} lg={7}>
                            <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/7hXTM7ehvtk?rel=0" frameBorder="0" allowFullScreen></iframe>
                        </Col>
                        <Col md={12} lg={5}>
                            <h3>{content[0].title}: {content[0].subtitle}</h3>
                            <p>{content[0].description}</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}