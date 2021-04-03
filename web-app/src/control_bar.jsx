'use strict'

class ControlBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	newClicked = () => {
		this.props.resetDisplay(600, 600);
	}

	loadClicked = () => {
		var img = new Image();
		img.src = "web-app/test-image.jpeg";
		var t = this;
		img.onload = function() {
			t.props.resetDisplay(img.width, img.height);
			t.getCtx().drawImage(img, 0, 0);
		}
	}

	getCtx() {
		return document.getElementById("display").getContext("2d");
	}
	
	render() {
		return (
			<div id="control-bar" className="container mb-2 mt-2">
				<div className="row">
					<div className="col-md-2">
						<button type="button" onClick={ this.newClicked } className="btn btn-default btn-secondary" title="New">New</button>
						<button type="button" onClick={ this.loadClicked } className="btn btn-default btn-secondary" title="Load">Load</button>
					</div>
				</div>
			</div>
		);
	}
}
