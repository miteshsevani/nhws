import React from "react";
import Image from "./Image";
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
                        <DateRapeDrugs data={this.data} />
                        <Prevention data={this.data} />
                    </div>
                </div>
            </section>
        )
    }
}