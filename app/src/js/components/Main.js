import React from "react";

import Awareness from "./Awareness.js";
import Banner from "./Banner.js";
import Contact from "./Contact.js";
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
		const navigation = require("../content/nav.json");
		const content = require("../content/content.json");
		
		return(
			<div>
				<Contact content={content.contact} />
				<Header />
				<Nav navigation={navigation} />
				<Banner />
				<Grooming content={content} />
				<Daterape content={content.date_rape_drugs} />
				<Prevention content={content.prevention} />
				<StayingSafe content={content.staying_safe} />
				<PastEvents />
				<Documentaries />
				<Footer />
			</div>
		);
	}
}