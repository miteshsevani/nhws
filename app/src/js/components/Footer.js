import React from "react";

export default class Footer extends React.Component {

    getDate() {
        return new Date().getFullYear();
    }

    render() {
        return (
            <footer>
                <p>Copyright &copy; National Hindu Welfare Support {this.getDate()}</p>
            </footer>
        );
    }
}