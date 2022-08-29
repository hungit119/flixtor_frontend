import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React, { useRef, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import TippyWrapper from "../../../../TippyWrapper";
import ToolTipBox from "../../../../ToolTipBox";
import styles from "./Add.module.scss";
const cx = className.bind(styles);

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    poster: "",
    thumnail: "",
    time: "",
    type: "",
    quantity: "",
    description: "",
    tags: "",
    productions: "",
    genre: "",
    countries: "",
    rating: "",
    imdb: "",
    release: "",
    director: "",
    cast: "",
    year: "",
    trailerURL: "",
  });
  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    document
      .querySelector(`[name="${e.target.name}"]`)
      .classList.remove(cx("error-input"));
  };
  const validateFormInputByClassName = () => {
    var result = true;
    const inputFormCreate =
      document.getElementsByClassName("form-input-create");
    const array_inputFormCreate = Object.values(inputFormCreate);
    array_inputFormCreate.forEach((input) => {
      if (
        input.value === "" &&
        input.name !== "description" &&
        input.name !== "tags" &&
        input.name !== "director"
      ) {
        input.classList.add(cx("error-input"));
        result = false;
      }
    });
    return result;
  };
  const handleClickCreate = async () => {
    try {
      if (validateFormInputByClassName() === false) {
        toast.warning("Please fill in the required fields !!", {
          theme: "colored",
        });
        return;
      }
      const filmData = {
        title: form.title,
        poster: form.poster,
        trailerURL: form.trailerURL,
        thumnail: form.thumnail,
        time: form.time,
        description: form.description,
        tags: form.tags,
        rating: form.rating,
        imdb: form.imdb,
        release: form.release,
        director: form.director,
        type_id: `${form.type}_id`,
        quantity_id: `${form.quantity}_id`,
        year_id: `${form.year}_id`,
      };
      const payload = {
        filmData,
        genres_film: form.genre,
        countries_film: form.countries,
        casts_film: form.cast,
        productions_film: form.productions,
      };
      const response = await axios.post(
        "http://localhost:8000/api/film/create",
        { payload }
      );
      if (response.data.success) {
        toast.success(response.data.message, {
          theme: "colored",
        });
        setForm({
          ...form,
          title: "",
          poster: "",
          thumnail: "",
          time: "",
          type: "",
          quantity: "",
          description: "",
          tags: "",
          productions: "",
          genre: "",
          countries: "",
          rating: "",
          imdb: "",
          release: "",
          director: "",
          cast: "",
          year: "",
          trailerURL: "",
        });
        inputRef.current.focus();
      } else {
        toast.error(response.data.message, {
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Error creating film !");
    }
  };
  const handleClickReset = () => {
    setForm({
      ...form,
      title: "",
      poster: "",
      thumnail: "",
      time: "",
      type: "",
      quantity: "",
      description: "",
      tags: "",
      productions: "",
      genre: "",
      countries: "",
      rating: "",
      imdb: "",
      release: "",
      director: "",
      cast: "",
      year: "",
      trailerURL: "",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className={cx("wrapper")}>
        <Form className={cx("form-wrapper")}>
          <Container>
            <Row>
              <Col lg={6}>
                <Form.Group className={cx("mb-2")}>
                  <Form.Label>
                    Title <span className={cx("required")}>*</span>
                  </Form.Label>
                  <Form.Control
                    className={cx("form-control", "form-input-create")}
                    type="text"
                    placeholder="Enter title"
                    value={form.title}
                    name="title"
                    ref={inputRef}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row>
                  <Col lg={8}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter description"
                        as="textarea"
                        rows={2}
                        value={form.description}
                        name="description"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Tags</Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter director"
                        as="textarea"
                        rows={2}
                        value={form.tags}
                        name="tags"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className={cx("mb-2")}>
                  <Form.Label>
                    Poster URL <span className={cx("required")}>*</span>
                  </Form.Label>
                  <Form.Control
                    className={cx("form-control", "form-input-create")}
                    placeholder="Enter poster URL"
                    as="input"
                    value={form.poster}
                    name="poster"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className={cx("mb-2")}>
                  <Form.Label>
                    Thumnail URL <span className={cx("required")}>*</span>
                  </Form.Label>
                  <Form.Control
                    className={cx("form-control", "form-input-create")}
                    placeholder="Enter thumnail URL"
                    as="input"
                    value={form.thumnail}
                    name="thumnail"
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Row>
                  <Col lg={3}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Rating <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Select
                        className={cx("form-control", "form-input-create")}
                        value={form.rating}
                        name="rating"
                        onChange={handleInputChange}
                      >
                        <option value=""> Enter rating </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col lg={3}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Imdb <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="input"
                        className={cx("form-control", "form-input-create")}
                        placeholder={"Enter imdb"}
                        value={form.imdb}
                        name="imdb"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Time <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="input"
                        className={cx("form-control", "form-input-create")}
                        placeholder={"Enter time"}
                        value={form.time}
                        name="time"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={3}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Release <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        as="input"
                        className={cx("form-control", "form-input-create")}
                        placeholder={"Enter release"}
                        value={form.release}
                        name="release"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Director</Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter director"
                        as="input"
                        value={form.director}
                        name="director"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Casts <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter casts name"
                        as="input"
                        value={form.cast}
                        name="cast"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Countries <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter countries"
                        as="input"
                        value={form.countries}
                        name="countries"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Genre <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter genre"
                        as="input"
                        value={form.genre}
                        name="genre"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={6}>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className={cx("mb-2")}>
                          <Form.Label>
                            Quanity <span className={cx("required")}>*</span>
                          </Form.Label>
                          <Form.Select
                            className={cx("form-control", "form-input-create")}
                            value={form.quantity}
                            name="quantity"
                            onChange={handleInputChange}
                          >
                            <option value="">Enter quantity</option>
                            <option value="HD">HD</option>
                            <option value="HDRip">HDRip</option>
                            <option value="TS">TS</option>
                            <option value="SD">SD</option>
                            <option value="CAM">CAM</option>
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className={cx("mb-2")}>
                          <Form.Label>
                            Type <span className={cx("required")}>*</span>
                          </Form.Label>
                          <Form.Select
                            className={cx("form-control", "form-input-create")}
                            value={form.type}
                            name="type"
                            onChange={handleInputChange}
                          >
                            <option value="">Enter type</option>
                            <option value="Movie">Movie</option>
                            <option value="TV-Serie">TV-Serie</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className={cx("mb-2")}>
                          <Form.Label>
                            Year <span className={cx("required")}>*</span>
                          </Form.Label>
                          <Form.Select
                            className={cx("form-control", "form-input-create")}
                            value={form.year}
                            name="year"
                            onChange={handleInputChange}
                          >
                            <option value="">Enter year</option>
                            {[...Array(30)].map((item, index) => (
                              <option
                                value={new Date().getFullYear() - index}
                                key={index}
                              >
                                {new Date().getFullYear() - index}
                              </option>
                            ))}
                          </Form.Select>
                        </Form.Group>
                        <Form.Group className={cx("mb-2")}>
                          <Form.Label>
                            Trailer URL{" "}
                            <span className={cx("required")}>*</span>
                          </Form.Label>
                          <Form.Control
                            className={cx("form-control", "form-input-create")}
                            placeholder="Enter trailer URL"
                            as="input"
                            value={form.trailerURL}
                            name="trailerURL"
                            onChange={handleInputChange}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Productions <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control", "form-input-create")}
                        placeholder="Enter productions name"
                        as="input"
                        value={form.productions}
                        name="productions"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <div className={cx("btn-group-custom")}>
                      <Button
                        className={cx("btn-custom")}
                        onClick={handleClickCreate}
                      >
                        Create
                      </Button>
                      <Button
                        className={cx("btn-custom")}
                        variant="danger"
                        onClick={handleClickReset}
                      >
                        Reset
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6} className={cx("preview-wrapper")}>
                <div className={cx("preview")}>
                  <TippyWrapper
                    content={
                      <ToolTipBox
                        item={{
                          title: form.title,
                          imdb: form.imdb,
                          quantity: form.quantity,
                          description: form.description,
                          countries: form.countries || "",
                          genres: form.genres || "",
                        }}
                      />
                    }
                    position={"right"}
                    animation={true}
                  >
                    <div className={cx("movie")}>
                      <div className={cx("movie-image")}>
                        <img
                          className={cx("movie-image-src")}
                          src={form.poster}
                          alt="img"
                        />
                        <div className={cx("movie-overlay")}></div>
                        <div className={cx("movie-overlay-icon-wrapper")}>
                          <FontAwesomeIcon
                            className={cx("movie-play-icon")}
                            icon={faCirclePlay}
                          />
                        </div>
                      </div>
                      <div className={cx("movie-info")}>
                        <div className={cx("movie-title")}>{form.title}</div>
                        <div className={cx("movie-body")}>
                          <span className={cx("movie-meta")}>
                            <span>{form.year}</span> &#8226;{" "}
                            <span>{form.time} min</span>
                          </span>
                          <span className={cx("movies-type")}>{form.type}</span>
                        </div>
                      </div>
                      <div className={cx("movie-quantity")}>
                        {form.quantity}
                      </div>
                    </div>
                  </TippyWrapper>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </>
  );
};

export default Add;
