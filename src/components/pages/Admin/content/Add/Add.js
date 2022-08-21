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
    poster: "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif",
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
  const handleClickCreate = async () => {
    try {
      if (
        form.title === "" ||
        form.poster ===
          "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif" ||
        form.trailerURL === "" ||
        form.thumnail === "" ||
        form.time === "" ||
        form.rating === "" ||
        form.imdb === "" ||
        form.release === "" ||
        form.type === "" ||
        form.quantity === "" ||
        form.year === "" ||
        form.genre === "" ||
        form.countries === "" ||
        form.type === "" ||
        form.productions === "" ||
        form.cast === ""
      ) {
        toast.warning("Please fill in the data completely!", {
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
          poster:
            "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif",
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
  const handleClickReset = (e) => {
    setForm({
      ...form,
      title: "",
      poster: "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif",
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
                    className={cx("form-control")}
                    type="text"
                    placeholder="Enter title"
                    value={form.title}
                    name="title"
                    ref={inputRef}
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                  />
                </Form.Group>
                <Row>
                  <Col lg={8}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter description"
                        as="textarea"
                        rows={2}
                        value={form.description}
                        name="description"
                        onChange={(e) =>
                          setForm({ ...form, description: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                  <Col lg={4}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Tags</Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter director"
                        as="textarea"
                        rows={2}
                        value={form.tags}
                        name="tags"
                        onChange={(e) =>
                          setForm({ ...form, tags: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className={cx("mb-2")}>
                  <Form.Label>
                    Poster URL <span className={cx("required")}>*</span>
                  </Form.Label>
                  <Form.Control
                    className={cx("form-control")}
                    placeholder="Enter poster URL"
                    as="input"
                    value={form.poster}
                    name="poster"
                    onChange={(e) =>
                      setForm({ ...form, poster: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group className={cx("mb-2")}>
                  <Form.Label>
                    Thumnail URL <span className={cx("required")}>*</span>
                  </Form.Label>
                  <Form.Control
                    className={cx("form-control")}
                    placeholder="Enter thumnail URL"
                    as="input"
                    value={form.thumnail}
                    name="thumnail"
                    onChange={(e) =>
                      setForm({ ...form, thumnail: e.target.value })
                    }
                  />
                </Form.Group>
                <Row>
                  <Col lg={3}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Rating <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Select
                        className={cx("form-control")}
                        value={form.rating}
                        name="rating"
                        onChange={(e) =>
                          setForm({ ...form, rating: e.target.value })
                        }
                      >
                        <option> Enter rating </option>
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
                        className={cx("form-control")}
                        placeholder={"Enter imdb"}
                        value={form.imdb}
                        name="imdb"
                        onChange={(e) =>
                          setForm({ ...form, imdb: e.target.value })
                        }
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
                        className={cx("form-control")}
                        placeholder={"Enter time"}
                        value={form.time}
                        name="time"
                        onChange={(e) =>
                          setForm({ ...form, time: e.target.value })
                        }
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
                        className={cx("form-control")}
                        placeholder={"Enter release"}
                        value={form.release}
                        name="release"
                        onChange={(e) =>
                          setForm({ ...form, release: e.target.value })
                        }
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>Director</Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter director"
                        as="input"
                        value={form.director}
                        name="director"
                        onChange={(e) =>
                          setForm({ ...form, director: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Casts <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter casts name"
                        as="input"
                        value={form.cast}
                        name="cast"
                        onChange={(e) =>
                          setForm({ ...form, cast: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Countries <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter countries"
                        as="input"
                        value={form.countries}
                        name="countries"
                        onChange={(e) =>
                          setForm({ ...form, countries: e.target.value })
                        }
                      />
                    </Form.Group>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Genre <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter genre"
                        as="input"
                        value={form.genre}
                        name="genre"
                        onChange={(e) =>
                          setForm({ ...form, genre: e.target.value })
                        }
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
                            className={cx("form-control")}
                            value={form.quantity}
                            name="quantity"
                            onChange={(e) =>
                              setForm({ ...form, quantity: e.target.value })
                            }
                          >
                            <option>Enter quantity</option>
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
                            className={cx("form-control")}
                            value={form.type}
                            name="type"
                            onChange={(e) =>
                              setForm({ ...form, type: e.target.value })
                            }
                          >
                            <option>Enter type</option>
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
                            className={cx("form-control")}
                            value={form.year}
                            name="year"
                            onChange={(e) =>
                              setForm({ ...form, year: e.target.value })
                            }
                          >
                            <option>Enter year</option>
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
                            className={cx("form-control")}
                            placeholder="Enter trailer URL"
                            as="input"
                            value={form.trailerURL}
                            name="trailerURL"
                            onChange={(e) =>
                              setForm({ ...form, trailerURL: e.target.value })
                            }
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className={cx("mb-2")}>
                      <Form.Label>
                        Productions <span className={cx("required")}>*</span>
                      </Form.Label>
                      <Form.Control
                        className={cx("form-control")}
                        placeholder="Enter productions name"
                        as="input"
                        value={form.productions}
                        name="productions"
                        onChange={(e) =>
                          setForm({ ...form, productions: e.target.value })
                        }
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
                    content={<ToolTipBox />}
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
