import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const getMovies = async () => {
    const json = (
      await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
    ).json();
    console.log("data : ", json);
  };

  const effectFuntion = () => {
    getMovies();
  };

  useEffect(effectFuntion, []);
  return <h1>Detail</h1>;
}

export default Detail;
