import React from "react";
import "./home.scss";
import Rule from "@component/rule/rule.js";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ruleShow: false,
			eggList: [],
			activeIndex: 0,
		};
	}

	componentDidMount() {
		let eggList = [
			{
				status: "normal",
			},
			{
				status: "lock",
			},
			{
				status: "normal",
			},
			{
				status: "normal",
			},
			{
				status: "normal",
			},
		];
		const lsEggList = this.$ls.get("eggList");
		if (lsEggList != null) {
			eggList = lsEggList;
		}

		this.setState({
			eggList,
		});
	}

	triggerRule() {
		this.setState({
			ruleShow: !this.state.ruleShow,
		});
	}

	clickEgg() {
		// 当前蛋的状态
		const status = this.state.eggList[this.state.activeIndex].status;
		const eggList = this.state.eggList;
		if (status === "lock") {
			this.$toast("当前蛋尚未解锁");
		} else if (status === "normal") {
			eggList[this.state.activeIndex].status = "open";
			this.setState({ eggList });
			this.$ls.set("eggList", eggList);
		} else {
			this.$toast("当前蛋已经解锁了");
		}
	}

	slideChange(sw) {
		this.setState({
			activeIndex: sw.activeIndex,
		});
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
						<Swiper onSlideChange={this.slideChange.bind(this)}>
							{this.state.eggList.map((item, index) => {
								return (
									<SwiperSlide key={index}>
										<div
											className={"egg egg-" + item.status}
											status={item.status}
										></div>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</div>
					<div className="egg-footer">
						<div className="egg-button" onClick={this.clickEgg.bind(this)}>
							<span className="button-content">砸蛋</span>
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
