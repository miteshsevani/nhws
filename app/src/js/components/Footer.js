import React from "react";

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
                        <div className="col-sm-6">
                            <h5>{content.title}</h5>
                            <ul>
                                <li>{content.contact[0].text} {content.contact[0].phone}</li>
                                <li><a href={"mailto:"+content.contact[0].email}>{content.contact[0].email}</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6">
                            <h5>Useful Links</h5>
                            <ul>
                            {content.useful_links.map((item,key) => {
                                return(
                                    <li key={key}>{item.item}</li>
                                )
                            })}
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <p>&copy; Copyright {this.getDate()}, National Hindu Welfare Support. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}