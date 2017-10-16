import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';

export default class GroomingProcess extends React.Component {    
    render() {
        const {content} = this.props;
        return(            
            <section className="grooming-process">
                <Grid>                    
                {content.map((video, key) => {
                    return(    
                        <Row key={key} className="show-grid">
                            <Col sm={6}>
                                <iframe width="100%" height="250" src={video.link} frameBorder="0" allowFullScreen></iframe>
                            </Col>
                            <Col sm={6}>
                                <h3>{video.title}</h3>
                                {video.text.map((paragraph, key) => {
                                    return(
                                        <p key={key}>{paragraph}</p>
                                    )
                                })}                                
                            </Col>
                        </Row>
                    )
                })}
                </Grid>
            </section>
        )
    }
}