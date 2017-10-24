import React from "react";
import { Grid,Row,Col } from 'react-bootstrap';
import Title from "./Title";
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
                                <Title title={video.title}></Title>
                                {video.text.map((paragraph, key) => {
                                    return(
                                        <p key={key}>{paragraph}</p>
                                    )
                                })}
                                {(video.link2) ? <p><a href={video.link2} target="_blank">Watch in English</a></p>:null}
                            </Col>
                        </Row>
                    )
                })}
                </Grid>
            </section>
        )
    }
}