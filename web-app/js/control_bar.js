'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ControlBar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "newClicked", () => {
      this.props.resetDisplay(600, 600);
    });

    _defineProperty(this, "loadClicked", () => {
      var img = new Image();
      img.src = "web-app/test-image.jpeg";
      var t = this;

      img.onload = function () {
        t.props.resetDisplay(img.width, img.height);
        t.getCtx().drawImage(img, 0, 0);
      };
    });

    this.state = {};
  }

  getCtx() {
    return document.getElementById("display").getContext("2d");
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "control-bar",
      className: "container mb-2 mt-2"
    }, /*#__PURE__*/React.createElement("div", {
      className: "row"
    }, /*#__PURE__*/React.createElement("div", {
      className: "col-md-2"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.newClicked,
      className: "btn btn-default btn-secondary",
      title: "New"
    }, "New"), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.loadClicked,
      className: "btn btn-default btn-secondary",
      title: "Load"
    }, "Load"))));
  }

}