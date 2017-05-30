import React from "react";
import BoxContent from "./BoxContent";
export default class TellingSigns extends React.Component {

    constructor() {
        super();
        this.tellingsigns = require('../content/telling-signs.json');
    }


    render() {        
        
        return(    
            <div className="telling-signs box-content">
                <h4>Know the signs</h4>
                <ul>                    
                    {this.tellingsigns.map((item,key) => (
                        <BoxContent key={key} item={item} />
                    ))}        
                </ul>                    
            </div>
        )
    }

}