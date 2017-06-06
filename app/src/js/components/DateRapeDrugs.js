import React from "react";
import Image from "./Image.js";
export default class DateRapeDrugs extends React.Component {
    
    constructor() {
        super();
        this.state = require("../content/content.json");
    }

    render() {
        return(
            <section id="date-rape-drugs">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 dr-bg">
                            <Image image="images/drink-spiking.jpg" />
                        </div>
                        <div className="col-sm-6 dr-text">
                            <h3>Date Rape Drugs</h3>
                            {this.state.date_rape_drugs.map((text,key) => {
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