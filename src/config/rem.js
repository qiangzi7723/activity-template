class Rem {
	constructor() {
		document.addEventListener(
			"DOMContentLoaded",
			function (e) {
				document.getElementsByTagName("html")[0].style.fontSize =
					window.innerWidth / 10 + "px";
			},
			false
		);
	}
}

export default new Rem();
