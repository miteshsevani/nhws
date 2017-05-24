import React from "react";
import TellingSigns from "./TellingSigns.js";
export default class Grooming extends React.Component {
    render() {
        return(
            <section id="grooming">                
                <div className="row">
                    <div className="col col-sm-8">
                        <h3>Grooming</h3>
                        <p>Grooming is when someone builds an emotional connection with you to gain your trust for the purposes of sexual abuse leading to conversion to another faith. Many victims do not understand that they have been groomed or that what has happened is abuse.</p>

                        <p>Grooming starts with the offender targeting and profiling suitable girls to be exploited or converted. Over time the girls’ trust may be gained by attention, flattery and gifts. The intention of the offender is to draw the girl in more deeply, by making her feel special and then to isolate her from friends and family. Groomers often seek out girls usinBirmighamg social media.</p>

                        <p>Once the relationship is sexualised the offender will take advantage by threats, blackmail and exposure unless demands are fulfilled. Once the offender gains control the girl is subject to further manipulation and eventually she will be left isolated and destitute, with little or no help available.</p>
                    </div>
                    <div className="col col-sm-4">
                        <TellingSigns />
                    </div>
                </div>
            </section>
        )
    }
}