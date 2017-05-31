import React from "react";
export default class Prevention extends React.Component {
    
    constructor() {
        super();
        this.data = require("../content/prevention.json");
    }
    render() {        
        return(
            <section id="prevention">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Prevention</h3>
                            {this.data.map((text,key) => {
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