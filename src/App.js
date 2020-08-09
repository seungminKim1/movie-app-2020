import React from "react";
import axios from "axios";

//{fav } = props.fav

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}
//this.add 는 함수 자체를 onClick 프로퍼티에 할당해두는것, this.add() 는 add 함수를 '실행'한 결과를 담는것
//react life cycle
export default App;
