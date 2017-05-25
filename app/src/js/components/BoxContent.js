import React from "react";

export default class BoxContent extends React.Component {
    render() {
        const {item} = this.props;

        return (
            <li>{item}</li>
        )
    }
}