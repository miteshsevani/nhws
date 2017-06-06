import React from "react";
import TellingSigns from "./TellingSigns.js";
export default class Grooming extends React.Component {
    constructor() {
        super();
        this.state = require("../content/content.json");
    }
    
    render() {
        return(
            <section id="grooming">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-8">
                            <h3>Grooming</h3>
                            {this.state.grooming.map((text,key) => {
                                return(
                                    <p key={key}>{text}</p>
                                )
                            })}
                        </div>
                        <div className="col-sm-12 col-md-4">
                            <TellingSigns />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}