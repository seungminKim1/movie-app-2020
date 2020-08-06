import React from "react";
import PropTypes from "prop-types";

//{fav } = props.fav

const foodILike = [
  {
    id: 1,
    name: "sushi",
    from: "Japan",
    rating: 5,
  },
  {
    id: 2,
    name: "ramen",
    from: "Korea",
    rating: 5,
  },
  {
    id: 3,
    name: "taco",
    from: "mexico",
    rating: 4,
  },
  {
    id: 4,
    name: "water",
    from: "nature",
    rating: 5,
  },
];

function Food({ name, from, rating }) {
  return (
    <div>
      <h2>I like {name} </h2>
      <h3>from {from}</h3>
      <h4>{rating}/5.0</h4>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          from={dish.from}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
