'use strict'

class Display extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<canvas id="display" width={this.props.displayProps.width} height={this.props.displayProps.height} style={{ border: '1px solid #000000' }}></canvas>
		);
	}
}
