import React from "react";
import classnames from 'classnames';
import Sticky from 'react-sticky-el';
import Image from "./Image.js";

export default class Contact extends React.Component {
    render() {
        const {content} = this.props;
        const {styleName} = this.props;
        return(
            <Sticky>
            <div id="contact" className={classnames(this.props.styleName)}>
                <h5><Image image="images/icons/icon-phone.svg" />{content[0].text}</h5>
                <h3>{content[0].phone}</h3>
            </div>
            </Sticky>
        );
    }
}