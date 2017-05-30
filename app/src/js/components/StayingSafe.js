import React from "react";

export default class StayingSafe extends React.Component {
    constructor() {
        super();
        this.stayingSafe = require("../content/staying-safe.json");
    }

    render() {
        return(
                <section id="staying-safe">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-6">
                                <h3>Staying Safe</h3>
                                <ul>
                                {this.stayingSafe.map((item, key) => {
                                    return(
                                        <li key={key}>{item}</li>
                                    )
                                })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}