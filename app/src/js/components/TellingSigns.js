import React from "react";
import BoxContent from "./BoxContent";
export default class TellingSigns extends React.Component {

    constructor() {
        super();
        this.state = require('../content/content.json');
    }


    render() {        
        
        return(    
            <div className="telling-signs box-content">
                <h4>Know the signs</h4>
                <ul>                    
                    {this.state.telling_signs.map((sign,key) => (
                        <BoxContent key={key} item={sign.item} />
                    ))}        
                </ul>                    
            </div>
        )
    }

}