import React from "react";
import TellingSigns from "./TellingSigns";
export default class Prevention extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="prevention">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h3>Prevention</h3>
                            <p>{content.prevention}</p>
                        </div>                    
                        <div className="col-sm-12 col-md-5 col-md-offset-1">
                            <TellingSigns content={content.telling_signs} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}