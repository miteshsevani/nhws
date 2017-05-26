import React from "react";
import DateRapeDrugs from "./DateRapeDrugs";

export default class Prevention extends React.Component {
    render() {
        return(
            <section id="prevention">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-6">
                            <h3>Prevention</h3>
                        </div>                
                        <div className="col col-xs-6">
                            <DateRapeDrugs />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}