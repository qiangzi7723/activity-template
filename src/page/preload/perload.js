import React from "react";
import assetList from "./asset";

class Preload extends React.Component {
	constructor(props) {
		super(props);
		this.preload();
		// this.$store.preloadDone = true;
		// this.props.history.push("/home");
	}

	preload() {
		console.log(assetList);
		for (let i = 0; i < assetList.length; i++) {
			const item = assetList[i];
			const img = new Image();
			img.src = item;
			img.onload = () => {};
		}
	}

	// TODO 需要在此写一个预加载方法，自动加载build文件夹的内容

	render() {
		return <div className="preload">预加载</div>;
	}
}

export default Preload;
