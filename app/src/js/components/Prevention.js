import React from "react";
export default class Prevention extends React.Component {
    
    render() {
        const {content} = this.props;
        return(
            <section id="prevention">                
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Prevention</h3>
                            <p>{content}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}