'use strict'

class ControlBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			newModal: false,
			newModalWidth: 600,
			newModalHeight: 400
		};
	}

	newClicked = () => {
		this.openModal("newModal");
	}

	loadClicked = () => {
		document.getElementById("loadInput").click();
	}

	loadImage = () => {
		var img = new Image();
		var t = this;
		var file = document.getElementById("loadInput").files[0];
		var reader = new FileReader();

		reader.onloadend = function () {
			img.src = reader.result;
		}
		img.onload = function() {
			t.props.resetDisplay(img.width, img.height);
			t.getCtx().drawImage(img, 0, 0);
		}

		if(file) {
			reader.readAsDataURL(file);
		}
	}

	getCtx() {
		return document.getElementById("display").getContext("2d");
	}

	handleChange = (ev) => {
		this.setState({[ev.target.name]: ev.target.value});
	}

	handleSubmit = (ev) => {
		this.props.resetDisplay(this.state.newModalWidth, this.state.newModalHeight);
		this.closeModal("newModal");
	}

	openModal = (m) => {
		this.setState({[m]: true});
	}

	closeModal = (m) => {
		this.setState({[m]: false});
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
				<Modal show={this.state.newModal} handleClose={ e => this.closeModal("newModal") }>
					<h2>New Image</h2>
					<div className="form-group">
						<label>Width:</label>
						<input type="number" min="1" step="1" value={this.state.newModalWidth} name="newModalWidth" onChange={ this.handleChange } className="form-control"/>
					</div>
					<div className="form-group">
						<label>Height:</label>
						<input type="number" min="1" step="1" value={this.state.newModalHeight} name="newModalHeight" onChange={ this.handleChange } className="form-control"/>
					</div>
					<div className="form-group">
						<button type="button" onClick={ this.handleSubmit } title="SubmitNew">Submit</button>
					</div>
				</Modal>
				<input type="file" id="loadInput" style={{display: "none"}} accept=".jpg, .jpeg, .png" onChange={ this.loadImage }/>
			</div>
		);
	}
}
