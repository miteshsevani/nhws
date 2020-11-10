import React from "react";
import classnames from 'classnames';
import Sticky from 'react-sticky-el';
import Image from "./Image.js";

export default class Contact extends React.Component {
	render() {
		const { content } = this.props;
		const { styleName } = this.props;
		return (
			<Sticky>
				<div className={classnames(this.props.styleName, "contact")}>
					{/*<h5><Image image="images/icons/icon-phone.svg" />{content[0].text}</h5>
					<h3>{content[0].phone}</h3>*/}
					<a className={classnames("hidden-xs")} href={"mailto:" + content[0].email}>{content[0].email}</a>
				</div>
			</Sticky>
		);
	}
}
