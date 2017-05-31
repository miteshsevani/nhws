import React from "react";

import Awareness from "./Awareness.js";
import Banner from "./Banner.js";
import Daterape from "./DateRapeDrugs";
import Documentaries from "./Documentaries.js";
import Footer from "./Footer.js"
import Grooming from "./Grooming.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import PastEvents from "./PastEvents";
import Prevention from "./Prevention";
import StayingSafe from "./StayingSafe.js";


export default class Main extends React.Component {	
	render() {
		return(
			<div>
				<Header />
				<Nav />
				<Banner />
				<Grooming />
				<Daterape />
				<Prevention />
				<StayingSafe />
				<PastEvents />
				<Documentaries />
				<Footer />
			</div>
		);
	}
}