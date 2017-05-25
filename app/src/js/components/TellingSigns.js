import React from "react";
import BoxContent from "./BoxContent";
export default class TellingSigns extends React.Component {    
    render() {
        const tellingsigns = [
            "Regularly missing from home, school, college or university and/or staying out all night",
            "Change in behaviour-becoming aggressive and disruptive, quiet or withdrawn",
            "Appearance of unexplained gifts, new possessions such as clothes, jewellery, mobile phones or money that cannot be accounted for",
            "Secretive usage of mobile phone and social media",
            "Sudden involvement in criminal behaviour or increased offending",
            "Sexual health problems",
            "Change in physical appearance"
        ];

        return(    
            <div className="telling-signs box-content">
                <h4>Telling Signs</h4>
                <ul>                    
                    {tellingsigns.map((item,key) => (
                        <BoxContent key={key} item={item} />
                    ))}        
                </ul>
                    
            </div>
        )
    }
}