import { SINGLE_MOVIE } from "../assets/constents";
import axios from "axios";

class MovieService {
  singleMovieDetails = async (id) => {
    const url = SINGLE_MOVIE.singleMovieApi(id);
    return await axios.get(url);
  };
}

const movieService = new MovieService();

export default movieService;
