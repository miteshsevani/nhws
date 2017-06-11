import React from "react";

export default class Documentaries extends React.Component {

    render() {
        const {content} = this.props;
        return(
            <section id="documentaries">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Documentaries</h2>
                        </div>
                        <div className="col-sm-7">
                            <iframe width="100%" height="315" src="https://www.youtube-nocookie.com/embed/7hXTM7ehvtk?rel=0" frameborder="0" allowfullscreen></iframe>
                        </div>
                        <div className="col-sm-5">
                            <h3>{content[0].title}: {content[0].subtitle}</h3>
                            <p>{content[0].description}</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}