import className from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import styles from "./List.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { filmsSelector } from "../../../../../redux/selectors";
import {
  readAllFilms,
  setFilmsListAdmin,
} from "../../../../../redux/actions/filmsAction";
import axios from "axios";
const cx = className.bind(styles);
const List = () => {
  const dispatch = useDispatch();
  const filmsList = useSelector(filmsSelector);
  const getFullFilms = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/films");
      if (response.data.success) {
        dispatch(setFilmsListAdmin(response.data.films));
      }
    } catch (errors) {
      console.log(errors.message);
    }
  };

  useEffect(() => {
    getFullFilms();
  }, []);
  return (
    <div className={cx("wrapper")}>
      <h2>List Film</h2>
      <div className={cx("content")}>
        <Table bordered>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID</th>
              <th>Title</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filmsList.map((film, index) => (
              <tr key={index} className={cx("film")}>
                <td>{index}</td>
                <td>{film.film_id}</td>
                <td>{film.title}</td>
                <td className={cx("text-center")}>
                  <Link to={`/admin/film/${film.film_id}`}>
                    <Button size="lg" variant="danger">
                      Detail
                    </Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default List;
