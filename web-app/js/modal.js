'use strict';

const Modal = ({
  handleClose,
  show,
  children
}) => {
  const showHideClassName = show ? "modal d-block" : "modal d-none";
  return /*#__PURE__*/React.createElement("div", {
    className: showHideClassName
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-dialog",
    role: "document"
  }, /*#__PURE__*/React.createElement("div", {
    class: "modal-content"
  }, /*#__PURE__*/React.createElement("div", {
    class: "modal-body"
  }, children, /*#__PURE__*/React.createElement("a", {
    className: "modal-close",
    onClick: handleClose
  }, "close")))));
};