import React from "react";
import {
	Switch,
	HashRouter as Router,
	Route,
	Redirect,
} from "react-router-dom";
import { config } from "./config";
import Home from "../page/home/home";

class Guard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			preloadDone: false,
		};
	}

	render() {
		const currentPath = this.props.location.pathname;
		const target = config.find((item) => {
			return item.path === currentPath;
		});

		console.log(this.props);

		if (target && this.state.preloadDone) {
			// 路径存在且已经预加载完毕
			return <Route path={target.path} component={target.component}></Route>;
		} else {
			// 统一进入预加载页面
			return <Redirect to="/preload"></Redirect>;
		}
	}
}

export default Guard;
