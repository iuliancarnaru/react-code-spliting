import React from "react";

const Page2 = ({ onRouteChange }) => (
  <div style={{ backgroundColor: "orange" }}>
    <h1>Page2</h1>
    <button onClick={() => onRouteChange("page1")}>Page1</button>
    <button onClick={() => onRouteChange("page3")}>Page3</button>
  </div>
);

export default Page2;