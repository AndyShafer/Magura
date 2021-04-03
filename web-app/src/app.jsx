'use strict';

const e = React.createElement;

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="container">
				<span>Hello</span>
			</div>
		);
	}
}

const domContainer = document.querySelector('#app_container');
var app = React.createElement(App);
ReactDOM.render(app, domContainer);
