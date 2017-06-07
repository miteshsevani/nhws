import React from "react";

export default class StayingSafe extends React.Component {
    constructor() {
        super();
        this.state = require("../content/content.json");
    }

    render() {
        const {content} = this.props;
        return(
                <section id="staying-safe">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6">
                                <h3>Staying Safe</h3>
                                <ul>
                                {content.map((safe, key) => {
                                    return(
                                        <li key={key}>{safe.item}</li>
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