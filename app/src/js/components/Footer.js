import React from "react";
import Image from "./Image";

export default class Footer extends React.Component {

    getDate() {
        return new Date().getFullYear();
    }

    render() {
        const {content} = this.props;
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-3 col-sm-2">
                            <Image image="images/nhws-logo.png" />
                        </div>
                        <div className="col-xs-8 col-xs-offset-1 col-sm-4 col-sm-offset-1">
                            <ul className="contact">
                                <li><Image image="images/icons/icon-phone.svg" />{content.contact[0].text}</li>
                                <li>{content.contact[0].phone}</li>
                                <li><Image image="images/icons/icon-mail.svg" /><a href={"mailto:"+content.contact[0].email}>{content.contact[0].email}</a></li>
                            </ul>
                        </div>
                        <div className="col-xs-8 col-xs-offset-4 col-sm-4 col-sm-offset-0">
                            <h5>Useful Links</h5>
                            <ul>
                            {content.useful_links.map((item,key) => {
                                return(
                                    <li key={key}><a href={item.lik}>{item.item}</a></li>
                                )
                            })}
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <p>&copy; Copyright {this.getDate()}, National Hindu Welfare Support. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}