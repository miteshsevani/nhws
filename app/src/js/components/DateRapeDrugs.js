import React from "react";
import Image from "./Image.js";
export default class DateRapeDrugs extends React.Component {
    
    constructor() {
        super();
        this.data = require("../content/date-rape-drugs.json");
    }

    render() {
        return(
            <section id="date-rape-drugs">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <Image image="../images/date-rape-stats.png" />
                        </div>
                        <div className="col-sm-7 dr-text">
                            <h3>Date Rape Drugs</h3>
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