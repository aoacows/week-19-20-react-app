import React from "react";
const name = "Matthew";
const numName = 7;
const thoughts = "I think React will be extremly beneficial to me"
function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name} </h1>
          <h2>My name has  {numName} letters</h2>
          <h2>I think React {thoughts}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
