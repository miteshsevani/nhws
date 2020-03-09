import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Daterape from "./DateRapeDrugs";
import Documentaries from "./Documentaries";
import Footer from "./Footer";
import Grooming from "./Grooming";
import GroomingProcess from "./GroomingProcess";
import Header from "./Header";
import Media from "./Media";
import Navigation from "./Navigation";
import Prevention from "./Prevention";
import StayingSafe from "./StayingSafe";


export default class Main extends React.Component {

	render() {
		const navigation = require("../content/nav.json");
		const content = require("../content/content.json");

		return (
			<div>
				<Header content={content.title} />
				<Navigation navigation={navigation} content={content.contact} />
				<Contact content={content.contact} styleName="desktop" />
				<Banner content={content.banner} />
				<Grooming content={content.grooming} />
				<GroomingProcess content={content.grooming_process} />
				<Daterape content={content.date_rape_drugs} />
				<Prevention content={content} />
				<StayingSafe content={content.staying_safe} />
				<Media content={content.media} />
				<Documentaries content={content.documentaries} />
				<Footer content={content} />
			</div>
		);
	}
}