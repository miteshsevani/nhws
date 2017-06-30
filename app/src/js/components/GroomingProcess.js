import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';

export default class GroomingProcess extends React.Component {    
    render() {
        const {content} = this.props;
        return(
            
            <section className="grooming-process">
                <Grid>                    
                    <Row className="show-grid">
                        <Col sm={7}>
                            <iframe width="100%" height="315" src={content[0].link} frameBorder="0" allowFullScreen></iframe>
                        </Col>
                        <Col sm={5}>
                            <h2>{content[0].title}</h2>
                            <p>{content[0].text}</p>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}