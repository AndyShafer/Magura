'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class ControlBar extends React.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "newClicked", () => {
      this.openModal("newModal");
    });

    _defineProperty(this, "loadClicked", () => {
      document.getElementById("loadInput").click();
    });

    _defineProperty(this, "loadImage", () => {
      var img = new Image();
      var t = this;
      var file = document.getElementById("loadInput").files[0];
      var reader = new FileReader();

      reader.onloadend = function () {
        img.src = reader.result;
      };

      img.onload = function () {
        t.props.resetDisplay(img.width, img.height);
        t.getCtx().drawImage(img, 0, 0);
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    });

    _defineProperty(this, "handleChange", ev => {
      this.setState({
        [ev.target.name]: ev.target.value
      });
    });

    _defineProperty(this, "handleSubmit", ev => {
      this.props.resetDisplay(this.state.newModalWidth, this.state.newModalHeight);
      this.closeModal("newModal");
    });

    _defineProperty(this, "openModal", m => {
      this.setState({
        [m]: true
      });
    });

    _defineProperty(this, "closeModal", m => {
      this.setState({
        [m]: false
      });
    });

    this.state = {
      newModal: false,
      newModalWidth: 600,
      newModalHeight: 400
    };
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
    }, "Load"))), /*#__PURE__*/React.createElement(Modal, {
      show: this.state.newModal,
      handleClose: e => this.closeModal("newModal")
    }, /*#__PURE__*/React.createElement("h2", null, "New Image"), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Width:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      step: "1",
      value: this.state.newModalWidth,
      name: "newModalWidth",
      onChange: this.handleChange,
      className: "form-control"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("label", null, "Height:"), /*#__PURE__*/React.createElement("input", {
      type: "number",
      min: "1",
      step: "1",
      value: this.state.newModalHeight,
      name: "newModalHeight",
      onChange: this.handleChange,
      className: "form-control"
    })), /*#__PURE__*/React.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: this.handleSubmit,
      title: "SubmitNew"
    }, "Submit"))), /*#__PURE__*/React.createElement("input", {
      type: "file",
      id: "loadInput",
      style: {
        display: "none"
      },
      accept: ".jpg, .jpeg, .png",
      onChange: this.loadImage
    }));
  }

}