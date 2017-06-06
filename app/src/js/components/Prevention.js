import React from "react";
export default class Prevention extends React.Component {
    
    constructor() {
        super();
        this.state = require("../content/content.json");
    }
    render() {        
        return(
            <section id="prevention">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Prevention</h3>
                            {this.state.prevention.map((text,key) => {
                                return(
                                    <p key={key}>{text}</p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}