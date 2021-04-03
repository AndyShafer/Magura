'use strict'

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			width: 1080,
			height: 600
		};
	}

	componentDidMount() {
		this.loadImage("web-app/test-image.jpeg");
		
	}

	reset(w, h) {
		this.setState({
			width: w,
			height: h
		});
	}

	pasteImage(src, x, y) {
		var ctx = this.getCtx();
		var img = new Image();
		img.src = src;
		img.onload = function() {
			ctx.drawImage(img, x, y);
		}
	}

	loadImage(src) {
		var img = new Image();
		img.src = src;
		var t = this;
		img.onload = function() {
			t.reset(img.width, img.height);
			t.getCtx().drawImage(img, 0, 0);
		}
	}

	getCtx() {
		return document.getElementById("display").getContext("2d");
	}

	render() {
		return (
			<canvas id="display" width={this.state.width} height={this.state.height} style={{ border: '3px solid #000000' }}></canvas>
		);
	}
}
