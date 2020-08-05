import React from "react";

//{fav } = props.fav
function Food({ name, from }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h3>from {from}</h3>
    </div>
  );
}

const foodILike = [
  {
    name: "sushi",
    from: "Japan",
  },
  {
    name: "ramen",
    from: "Korea",
  },
  {
    name: "taco",
    from: "mexico",
  },
  {
    name: "water",
    from: "nature",
  },
];

function App() {
  return (
    <div className="App">
      {foodILike.map((dish) => (
        <Food name={dish.name} from={dish.from} />
      ))}
    </div>
  );
}

export default App;
