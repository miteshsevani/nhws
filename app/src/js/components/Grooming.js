import React from "react";
import TellingSigns from "./TellingSigns.js";
export default class Grooming extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="grooming">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-7">
                            <h3>Grooming</h3>
                            {content.grooming.map((text,key) => {
                                return(
                                    <p key={key}>{text}</p>
                                )
                            })}
                        </div>
                        <div className="col-sm-12 col-md-4 col-md-offset-1">
                            <TellingSigns content={content.telling_signs} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}