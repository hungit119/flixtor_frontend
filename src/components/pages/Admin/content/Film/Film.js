import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setFilm } from "../../../../../redux/actions/filmAction";
import { Table } from "react-bootstrap";
import { filmSelector } from "../../../../../redux/selectors";
const Film = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const film = useSelector(filmSelector);
  const getFilm = async () => {
    const response = await axios.get(
      `http://localhost:8000/api/film/${params.id}`
    );
    if (response.data.success) {
      dispatch(setFilm(response.data.film));
    }
  };
  useEffect(() => {
    getFilm();
  }, []);
  return (
    <div>
      <Table bordered>
        <tbody>
          <tr>
            <th>ID</th>
            <td>{film.id}</td>
          </tr>
          <tr>
            <th>Title</th>
            <td>{film.title}</td>
          </tr>
          <tr>
            <th>Poster</th>
            <td>{film.poster}</td>
          </tr>
          <tr>
            <th>TrailerURL</th>
            <td>{film.trailerURL}</td>
          </tr>
          <tr>
            <th>Thumnail</th>
            <td>{film.thumnail}</td>
          </tr>
          <tr>
            <th>Time</th>
            <td>{film.times}</td>
          </tr>
          <tr>
            <th>Description</th>
            <td>{film.description}</td>
          </tr>
          <tr>
            <th>Tags</th>
            <td>{film.tags}</td>
          </tr>
          <tr>
            <th>Rating</th>
            <td>{film.rating}</td>
          </tr>
          <tr>
            <th>Imdb</th>
            <td>{film.imdb}</td>
          </tr>
          <tr>
            <th>Release</th>
            <td>{film.releases}</td>
          </tr>
          <tr>
            <th>Director</th>
            <td>{film.director}</td>
          </tr>
          <tr>
            <th>Countries</th>
            <td>{film.countries}</td>
          </tr>
          <tr>
            <th>Genre</th>
            <td>{film.genres}</td>
          </tr>
          <tr>
            <th>Productions</th>
            <td>{film.productions}</td>
          </tr>
          <tr>
            <th>Casts</th>
            <td>{film.casts}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Film;
