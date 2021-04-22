import React from "react";
import {
	Switch,
	HashRouter as Router,
	Route as RouteDom,
} from "react-router-dom";
import About from "../page/about/about";
import { config } from "./config";

class Route extends React.Component {
	constructor(props) {
		super(props);
		console.log(config);
	}

	render() {
		return (
			<Router>
				<Switch>
					{config.map((item) => {
						return (
							<RouteDom path={item.path}>
								<item.component></item.component>
							</RouteDom>
						);
					})}
				</Switch>
			</Router>
		);
	}
}

export default Route;
