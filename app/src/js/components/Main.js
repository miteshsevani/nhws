import React from "react";

import Awareness from "./Awareness.js";
import Banner from "./Banner.js";
import Documentaries from "./Documentaries.js";
import Footer from "./Footer.js"
import Grooming from "./Grooming.js";
import Header from "./Header.js";
import PastEvents from "./PastEvents";
import Prevention from "./Prevention";
import StayingSafe from "./StayingSafe.js";


export default class Main extends React.Component {	
	render() {
		return(
			<div>
				<Header />
				<Banner />
				<Grooming />
				<Prevention />
				<StayingSafe />
				<PastEvents />
				<Documentaries />
				<Footer />
			</div>
		);
	}
}