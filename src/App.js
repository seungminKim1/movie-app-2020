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
    id: 1,
    name: "sushi",
    from: "Japan",
  },
  {
    id: 2,
    name: "ramen",
    from: "Korea",
  },
  {
    id: 3,
    name: "taco",
    from: "mexico",
  },
  {
    id: 4,
    name: "water",
    from: "nature",
  },
];

function renderFood(dish) {
  return <Food id={dish.id} name={dish.name} from={dish.from} />;
}

function App() {
  return <div className="App">{foodILike.map(renderFood)}</div>;
}

export default App;
