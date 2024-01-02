import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./nav.js";
import Container from "./container.js";
import Footer from "./footer.js";

//create your first component
   function Home() {
	return (
		<>
	<Navbar	/>
	<Container />
	<Footer/>
	</>
	);

};



export default Home; 


