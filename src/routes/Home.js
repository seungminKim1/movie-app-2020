import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//{fav } = props.fav

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                trailer={movie.yt_trailer_code}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}
//this.add 는 함수 자체를 onClick 프로퍼티에 할당해두는것, this.add() 는 add 함수를 '실행'한 결과를 담는것
//react life cycle
//state가 필요할 때만 class component
export default Home;
