import React from "react";

export default class StayingSafe extends React.Component {
    render() {
        const {content} = this.props;
        return(
            <section id="staying-safe">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3>Staying Safe</h3>
                        </div>
                        <ul>
                        {content.map((safe, key) => {
                            return(
                                <div key={key} className="col-sm-6">  
                                    <li>{safe.item}</li>
                                </div>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}