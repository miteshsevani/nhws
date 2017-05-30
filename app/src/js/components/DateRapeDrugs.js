import React from "react";

export default class DateRapeDrugs extends React.Component {
    render() {
        const {data} = this.props;

        return(
            <div id="date-rape-drugs">                
                <div className="col-sm-5">
                    <h3>Date Rape Drugs</h3>
                    {data.map((item,key) => {
                        return(
                            <p key={key}>{item.daterapedrugs}</p>
                        )
                    })}
                </div>                
            </div>
        )
    }
}