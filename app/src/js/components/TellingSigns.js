import React from "react";
import BoxContent from "./BoxContent";
export default class TellingSigns extends React.Component {

	render() {
		const { content } = this.props;
		return (
			<div className="telling-signs box-content">
				<h4>Know the signs</h4>
				<ul>
					{content.map((sign, key) => (
						<BoxContent key={key} item={sign.item} />
					))}
				</ul>
			</div>
		)
	}

}