import React from "react";
//{fav } = props.fav
function Food({ fav }) {
  return <h1>I like {fav} </h1>;
}

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Food fav="sushi" />
      <Food fav="pizza" />
      <Food fav="burger" />
      <Food fav="water" />
    </div>
  );
}

export default App;
