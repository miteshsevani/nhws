import React from "react";
import DateRapeDrugs from "./DateRapeDrugs";

export default class Prevention extends React.Component {
    render() {
        return(
            <section id="prevention">
                <div className="row">
                    <div className="col col-xs-8">
                        <h3>Prevention</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-8">
                        <DateRapeDrugs />
                     </div>
                </div>
            </section>
        )
    }
}