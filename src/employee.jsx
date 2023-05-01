let sally = "Sally Smith";
let mark = "Mark Martin";
let holly = "Holly Unlikely";
let sheetal = "Sheetal Prasad";
let ujjwal = "Ujjwal Kumar";
let indu = "Indu Prasad";
const element = (
  <ul style={{ color: "blue", fontSize: "24px" }}>
    <li>{sally}</li>
    <li>{mark}</li>
    <li>{holly}</li>
    <li>{sheetal.toUpperCase()}</li>
    <li>{ujjwal}</li>
    <li>{indu}</li>
  </ul>
);
ReactDOM.render(element, document.getElementById("content"));
