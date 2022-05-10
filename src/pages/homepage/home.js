import React from "react";
import "./home.css";
import { Carousel } from "react-bootstrap";

function Carouselcomp() {
	return (
		<>
			<Carousel>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="images/ai1.jpg"
						alt="First slide"
					/>

					{/* <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
				</Carousel.Item>

				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="images/arduino.jpg"
						alt="Second slide"
					/>
					{/* <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="images/ml.jpg"
						alt="Third slide"
					/>
					{/* <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption> */}
				</Carousel.Item>
				<Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="images/dataScience.jpg"
						alt="Fourth slide"
					/>
					{/* <Carousel.Caption>
                    <h3>Fourth slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
		</>
	);
}
function Cards() {
	return (
		<>
			<div className="container-fluid">
				<h4 className="mt-5">Features</h4>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
					<div className="col-1">
						<div className="card card-block card-2">
							<img
								src="images/svgs_collection/register.png"
								alt="Delhi"
							/>
							<h5>Registration</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-3">
							<img
								src="images/svgs_collection/apply.svg"
								alt="Banglore"
							/>
							<h5>Apply for Interns</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-3">
							<img
								src="images/svgs_collection/status.png"
								alt="Banglore"
							/>
							<h5>View Status</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-3">
							<img
								src="images/svgs_collection/chat.png"
								alt="Banglore"
							/>
							<h5>Chat with Faculty</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-3">
							<img
								src="images/svgs_collection/discuss1.jpg"
								alt="Banglore"
							/>
							<h5>Common Discussions</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

function Cards_cate() {
	return (
		<>
			<div className="container-fluid">
				<h4 className="mt-5">Popular categories</h4>
				<div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
					<div className="col-1">
						<div className="card card-block card-1">
							<img
								src="images/svgs_collection/svg15.svg"
								alt="part-timr"
							/>
							<h5>Part-time</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-2">
							<img
								src="images/svgs_collection/svg16.svg"
								alt="Engineering"
							/>
							<h5>Engineering</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-3">
							<img
								src="images/svgs_collection/svg17.svg"
								alt="NGO"
							/>
							<h5>NGO</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-4">
							<img
								src="images/svgs_collection/svg18.svg"
								alt="MBA"
							/>
							<h5>MBA</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-5">
							<img
								src="images/svgs_collection/svg19.svg"
								alt="Design"
							/>
							<h5>Design</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-6">
							<img
								src="images/svgs_collection/svg20.svg"
								alt="Science"
							/>
							<h5>Science</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-7">
							<img
								src="images/svgs_collection/svg21.svg"
								alt="Media"
							/>
							<h5>Media</h5>
						</div>
					</div>
					<div className="col-1">
						<div className="card card-block card-8">
							<img
								src="images/svgs_collection/svg22.svg"
								alt="Humanities"
							/>
							<h5>Humanities</h5>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export { Carouselcomp, Cards, Cards_cate };
