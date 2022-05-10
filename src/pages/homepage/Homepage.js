import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "../../components/navbar/Navbar";
import Footer from "../../components/footer/footer";
import { Carouselcomp, Cards, Cards_cate } from "./home";

export default function Homepage() {
	return (
		<>
			{/* <NavbarComp/> */}

			<br />
			<br />
			<br />
			<Carouselcomp />
			<br />
			<br />
			<Cards />
			<br />
			<Cards_cate />
			<br />
			<br />
			<br />
			<br />
			<br />
			<br />
			<Footer />
		</>
	);
}
