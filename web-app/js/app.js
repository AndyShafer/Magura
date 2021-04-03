'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const e = React.createElement;

class App extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "reset", (width, height) => {
      this.setState({
        displayProps: {
          width,
          height
        }
      });
    });

    this.state = {
      displayProps: {
        width: 1080,
        height: 600
      }
    };
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement(ControlBar, {
      resetDisplay: this.reset
    }))), /*#__PURE__*/React.createElement("div", {
      className: "row",
      style: {
        textAlign: "left"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "col"
    }, /*#__PURE__*/React.createElement(Display, {
      displayProps: this.state.displayProps
    }))));
  }

}

const domContainer = document.querySelector('#app_container');
var app = React.createElement(App);
ReactDOM.render(app, domContainer);