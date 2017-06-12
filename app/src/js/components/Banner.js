import React from "react";

export default class Banner extends React.Component {	
    render() {
        const {content} = this.props;
        return (
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-10">
                            <div className="banner-content">
                                <h2>{content}</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}