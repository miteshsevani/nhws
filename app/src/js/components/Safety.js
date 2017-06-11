import React from "react";
import Prevention from "./Prevention";
import StayingSafe from "./StayingSafe";

export default class Safety extends React.Component {
    render() {
        const {content} = this.props;
        return(
            <section id="safety">                
                <div className="container">
                    <div className="row">
                        <div id="prevention" className="col-sm-5">
                            <Prevention content={content.prevention} />
                        </div>
                        <div id="staying-safe" className="col-sm-6 col-sm-offset-1">
                            <StayingSafe content={content.staying_safe} />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}