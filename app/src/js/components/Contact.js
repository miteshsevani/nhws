import React from "react";
import Image from "./Image.js";

export default class Contact extends React.Component {
    render() {
        const {content} = this.props;
        return(
            <div id="contact" className="hidden-xs">            
                <h5><Image image="images/icons/icon-phone.svg" />{content[0].text}</h5>
                <h3>{content[0].phone}</h3>
            </div>
        );
    }
}