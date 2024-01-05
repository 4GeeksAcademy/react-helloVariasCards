import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./nav.js";
import Container from "./container.js";
import Footer from "./footer.js";
import Jumbotron from "./jumbotron.js";

//create your first component
function Home() {
	return (
		<>
			<div className="text-center">
				<Navbar />
				<div>
					<Jumbotron />
					</div >
					<div className="container">
						<div className="row p-2 g-5">
							<div class="col-sm-3 col-md-3 ">
								<Container title="Picture1" image="https://viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg" />
								</div>
							<div className="col-sm-3  col-md-3 ">
								<Container title="Picture1" image="https://viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg" />
							</div>
						<div className="col-sm-3 col-md-3 ">
							<Container title="Picture1" image="https://viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg" />
						</div>
						<div className="col-sm-3 col-md-3 ">
							<Container title="Picture1" image="https://viajes.nationalgeographic.com.es/medio/2017/04/24/bali-indonesia_5ae3dbfe.jpg" />
						</div>
					</div>

					</div>
				
			</div >
		
			<Footer />
			</>

			);

};



export default Home;


