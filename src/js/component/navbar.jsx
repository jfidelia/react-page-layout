import React from "react";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
				<div className="container">
					<a className="navbar-brand" href="#">
						Start Bootstrap
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarResponsive"
						aria-controls="navbarResponsive"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon" />
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarResponsive">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active">
								<a className="nav-link" href="#">
									Home
									<span className="sr-only">(current)</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									About
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Services
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			// <nav classNameName="navbar navbar-light bg-light mb-3">
			// 	<Link to="/">
			// 		<span classNameName="navbar-brand mb-0 h1">
			// 			React Webapp Boilerplate
			// 		</span>
			// 	</Link>
			// 	<div classNameName="ml-auto">
			// 		<Link to="/demo">
			// 			<button classNameName="btn btn-primary">
			// 				Check the Context in action
			// 			</button>
			// 		</Link>
			// 	</div>
			// </nav>
		);
	}
}
