import React from "react";

export default class Footer extends React.Component {

    getDate() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>&copy; Copyright {this.getDate()}, National Hindu Welfare Support. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}