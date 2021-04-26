import React from "react";
import "./home.scss";
import Rule from "@component/rule/rule.js";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ruleShow: false,
		};
	}

	triggerRule() {
		this.setState({
			ruleShow: !this.state.ruleShow,
		});
	}

	clickEgg() {
		this.$toast("很抱歉，砸蛋功能开发中");
	}

	render() {
		return (
			<div className="home">
				<section className="content-container">
					<div className="title"></div>
					<div className="ruleBtn" onClick={this.triggerRule.bind(this)}></div>
				</section>

				<section className="egg-container">
					<div className="egg-top">
						<div className="egg"></div>
					</div>
					<div className="egg-footer">
						<div className="egg-button">
							<span
								className="button-content"
								onClick={this.clickEgg.bind(this)}
							>
								砸蛋
							</span>
						</div>
					</div>
				</section>
				{/* 活动规则内容 */}
				<seceion style={{ display: this.state.ruleShow ? "block" : "none" }}>
					<Rule triggerRule={this.triggerRule.bind(this)}></Rule>
				</seceion>
			</div>
		);
	}
}

export default Home;
