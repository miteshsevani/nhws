import React from "react";

export default class Prevention extends React.Component {
    
    render() {
        const {data} = this.props;
        
        return(
            <div id="prevention">                
                <div className="col-sm-7">
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