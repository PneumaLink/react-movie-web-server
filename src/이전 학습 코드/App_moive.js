import { useEffect, useState } from "react";
import MovieComp from "../components/movie_component";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
    );

    const json = await response.json();

    //  위의 두 줄을 하나로 압축
    // const json = await (
    //   await fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year",
    //   )
    // ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1>영화 추천</h1>
          <hr />
          <hr />
          {movies.map((movie) => (
            <MovieComp
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default App;

// hasOwnProperty()
//  hasOwnProperty() 메소드는 객체가 특정 프로퍼티를 가지고 있는지를 나타내는 불리언 값을 반환한다.
/**
const object1 = {};
object1.property1 = 42;

console.log(object1.hasOwnProperty('property1'));
// expected output: true

console.log(object1.hasOwnProperty('toString'));
// expected output: false

console.log(object1.hasOwnProperty('hasOwnProperty'));
// expected output: false
*/

// React Router 사용
//  npm install react-router-dom
