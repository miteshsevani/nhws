import React from "react";
import Image from "./Image";

export default class Grooming extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="grooming">                
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h3>Grooming</h3>
                            {content.map((text,key) => {
                                return(
                                    <p key={key}>{text}</p>
                                )
                            })}
                        </div>
                        <div className="col-md-5">                            
                            <Image image="../images/grooming-stages.png" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}