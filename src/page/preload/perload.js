import React from "react";

class Preload extends React.Component {
	constructor(props) {
		super(props);
		this.$store.preloadDone = true;
		this.props.history.push("/home");
	}

	// TODO 需要在此写一个预加载方法，自动加载build文件夹的内容

	render() {
		return <div className="preload">预加载</div>;
	}
}

export default Preload;
