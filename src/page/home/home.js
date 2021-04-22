import React from "react";
import "./home.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="home">
				<section className="content-container">
					<div className="title"></div>
				</section>

				<section className="egg-container">
					<div className="egg-top">
						<div className="egg"></div>
					</div>
					<div className="egg-footer">
						<div className="egg-button">
							<span className="button-content">砸蛋</span>
						</div>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
