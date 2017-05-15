import React from "react";
import Header from "./Header.js";
import Banner from "./Banner.js";
import Awareness from "./Awareness.js";
import Grooming from "./Grooming.js";
import Prevention from "./Prevention";
import StayingSafe from "./StayingSafe.js";
import Footer from "./Footer.js"

export default class Main extends React.Component {	
	render() {
		return(
			<div>
				<Header />
				<Banner />
				<Awareness />
				<Grooming />
				<Prevention />
				<StayingSafe />
			</div>
		);
	}
}