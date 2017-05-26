import React from "react";

export default class Prevention extends React.Component {
    
    render() {
        const {data} = this.props;
        
        return(
            <div id="prevention">                
                <div className="col col-xs-6">
                    <h3>Prevention</h3>
                    {data.map((item,key) => {
                        return(
                            <p key={key}>{item.prevention}</p>
                        )
                    })}
                </div>                
            </div>
        )
    }
}