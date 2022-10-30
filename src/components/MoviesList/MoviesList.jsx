import { Link, useLocation } from "react-router-dom";
import { List, MovieItem, Img } from "./MoviesList.module";

import PropTypes from "prop-types";

const MoviesList = ({ items }) => {
    const location = useLocation();
    const element = items.map(({ title, id, poster_path }) =>
        <MovieItem key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Img
          src={
            `https://image.tmdb.org/t/p/w500/${ poster_path }`}
          alt={title}
        />
        </Link>
        </MovieItem>)
  return <List>{element}</List>;
}

export default MoviesList;

MoviesList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    }))
  }