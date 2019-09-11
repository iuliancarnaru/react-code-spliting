import React from "react";

const Page1 = ({ onRouteChange }) => (
  <div style={{ backgroundColor: "navy" }}>
    <h1>Page1</h1>
    <button onClick={() => onRouteChange("page2")}>Page2</button>
    <button onClick={() => onRouteChange("page3")}>Page3</button>
  </div>
);

export default Page1;
