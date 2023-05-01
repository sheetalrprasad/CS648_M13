let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let sheetal = "Sheetal Prasad";
let ujjwal = "Ujjwal Kumar";
let indu = "Indu Prasad";
const element = /*#__PURE__*/React.createElement("ul", {
  style: {
    color: "blue",
    fontSize: "24px"
  }
}, /*#__PURE__*/React.createElement("li", null, sally), /*#__PURE__*/React.createElement("li", null, mark), /*#__PURE__*/React.createElement("li", null, holly), /*#__PURE__*/React.createElement("li", null, sheetal.toUpperCase()), /*#__PURE__*/React.createElement("li", null, ujjwal), /*#__PURE__*/React.createElement("li", null, indu));
ReactDOM.render(element, document.getElementById("content"));