import React from "react";
import Image from "./Image.js";

export default class Contact extends React.Component {
    render() {
        const {content} = this.props;
        return(
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            {content.map((item, key) => {
                                return(
                                    <span key={key}>
                                        <span className="text"> {item.text} </span>                                        
                                        <span className="phone"> {item.phone} </span>
                                        <span className="email"> {item.email} </span>
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}