import React from "react";

class Preload extends React.Component {
	constructor(props) {
		super(props);
		this.$store.preloadDone = true;
		this.props.history.push("/home");
	}

	render() {
		return <div className="preload">预加载</div>;
	}
}

export default Preload;
