import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';

export default class GroomingProcess extends React.Component {    
    render() {
        const {content} = this.props;
        return(
            <section className="grooming-process">
                <Grid>                    
                    <Row className="show-grid">
                        <Col sm={5}>
                            <h2>The Grooming Process</h2>
                            <p>Internet predators use a process called grooming to develop a relationship with their victim. After the victim's trust develops, the groomer may use this trust to exploit their victims in sexual ways.</p>
                            <br />
                            <h3>Be aware | Be alert | Be safe</h3>
                        </Col>
                        <Col sm={7}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/vUaN3Q5EU4E?rel=0" frameborder="0" allowfullscreen></iframe>
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}