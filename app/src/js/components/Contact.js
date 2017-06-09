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
                            <h5><Image image="images/icons/icon-phone.svg" />{content[0].text}</h5>
                            <h3>{content[0].phone}</h3>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}