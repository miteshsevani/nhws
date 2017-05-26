import React from "react";
import Prevention from "./Prevention";
import DateRapeDrugs from "./DateRapeDrugs";

export default class PreventionDaterape extends React.Component {
    constructor() {
        super();
        this.data = require("../content/prevention-daterape.json");
    }
    render() {
        return(
            <section id="prevention-daterape">
                <div className="container">
                    <div className="row">
                        <Prevention data={this.data} />
                        <DateRapeDrugs data={this.data} />
                    </div>
                </div>
            </section>
        )
    }
}