'use strict';

const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			displayProps: {
				width: 1080,
				height: 600
			}
		}
	}

	reset = (width, height) => {
		this.setState({
			displayProps: {
				width,
				height
			}
		});
	}

	render() {
		return (
			<div className="container">
				<div className="row"><div className="col">
					<ControlBar resetDisplay={this.reset}/>
				</div></div>
				<div className="row" style={{textAlign: "left"}}><div className="col">
					<Display displayProps={this.state.displayProps}/>
				</div></div>
			</div>
		);
	}
}

const domContainer = document.querySelector('#app_container');
var app = React.createElement(App);
ReactDOM.render(app, domContainer);
