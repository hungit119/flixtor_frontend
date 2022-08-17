import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import className from "classnames/bind";
import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TippyWrapper from "../../../../TippyWrapper";
import ToolTipBox from "../../../../ToolTipBox";
import styles from "./Add.module.scss";
const cx = className.bind(styles);

const Add = () => {
  const [form, setForm] = useState({
    title: "",
    poster: "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif",
    time: "",
    type: "Movie",
    quantity: "HD",
    description: "",
    tags: "",
    productions: "",
    genre: "",
    countries: "",
    thumnail: "",
    rating: "",
    imdb: "",
    release: "",
    director: "",
    cast: "",
    year: "2022",
    trailerURL: "",
  });
  console.log({ ...form });
  return (
    <div className={cx("wrapper")}>
      <Form className={cx("form-wrapper")}>
        <Container>
          <Row>
            <Col lg={6}>
              <Form.Group className={cx("mb-2")}>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  className={cx("form-control")}
                  type="text"
                  placeholder="Enter title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
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
                      onChange={(e) =>
                        setForm({ ...form, tags: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className={cx("mb-2")}>
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  className={cx("form-control")}
                  placeholder="Enter poster URL"
                  as="input"
                  value={form.poster}
                  onChange={(e) => setForm({ ...form, poster: e.target.value })}
                />
              </Form.Group>
              <Form.Group className={cx("mb-2")}>
                <Form.Label>Thumnail URL</Form.Label>
                <Form.Control
                  className={cx("form-control")}
                  placeholder="Enter thumnail URL"
                  as="input"
                  value={form.thumnail}
                  onChange={(e) =>
                    setForm({ ...form, thumnail: e.target.value })
                  }
                />
              </Form.Group>
              <Row>
                <Col lg={3}>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Rating</Form.Label>
                    <Form.Select
                      className={cx("form-control")}
                      value={form.rating}
                      onChange={(e) =>
                        setForm({ ...form, rating: e.target.value })
                      }
                    >
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
                    <Form.Label>Imdb</Form.Label>
                    <Form.Control
                      as="input"
                      className={cx("form-control")}
                      placeholder={"Enter imdb"}
                      value={form.imdb}
                      onChange={(e) =>
                        setForm({ ...form, imdb: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      as="input"
                      className={cx("form-control")}
                      placeholder={"Enter time"}
                      value={form.time}
                      onChange={(e) =>
                        setForm({ ...form, time: e.target.value })
                      }
                    />
                  </Form.Group>
                </Col>
                <Col lg={3}>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Release</Form.Label>
                    <Form.Control
                      as="input"
                      className={cx("form-control")}
                      placeholder={"Enter release"}
                      value={form.release}
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
                      onChange={(e) =>
                        setForm({ ...form, director: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Casts</Form.Label>
                    <Form.Control
                      className={cx("form-control")}
                      placeholder="Enter casts name"
                      as="input"
                      value={form.cast}
                      onChange={(e) =>
                        setForm({ ...form, cast: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Countries</Form.Label>
                    <Form.Control
                      className={cx("form-control")}
                      placeholder="Enter countries"
                      as="input"
                      value={form.countries}
                      onChange={(e) =>
                        setForm({ ...form, countries: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Genre</Form.Label>
                    <Form.Control
                      className={cx("form-control")}
                      placeholder="Enter genre"
                      as="input"
                      value={form.genre}
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
                        <Form.Label>Quanity</Form.Label>
                        <Form.Select
                          className={cx("form-control")}
                          value={form.quantity}
                          onChange={(e) =>
                            setForm({ ...form, quantity: e.target.value })
                          }
                        >
                          <option value="HD">HD</option>
                          <option value="HDRip">HDRip</option>
                          <option value="TS">TS</option>
                          <option value="SD">SD</option>
                          <option value="CAM">CAM</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className={cx("mb-2")}>
                        <Form.Label>Type</Form.Label>
                        <Form.Select
                          className={cx("form-control")}
                          value={form.type}
                          onChange={(e) =>
                            setForm({ ...form, type: e.target.value })
                          }
                        >
                          <option value="Movie">Movie</option>
                          <option value="TV-Serie">TV-Serie</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className={cx("mb-2")}>
                        <Form.Label>Year</Form.Label>
                        <Form.Select
                          className={cx("form-control")}
                          value={form.year}
                          onChange={(e) =>
                            setForm({ ...form, year: e.target.value })
                          }
                        >
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
                        <Form.Label>Trailer URL</Form.Label>
                        <Form.Control
                          className={cx("form-control")}
                          placeholder="Enter trailer URL"
                          as="input"
                          value={form.trailerURL}
                          onChange={(e) =>
                            setForm({ ...form, trailerURL: e.target.value })
                          }
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className={cx("mb-2")}>
                    <Form.Label>Productions</Form.Label>
                    <Form.Control
                      className={cx("form-control")}
                      placeholder="Enter productions name"
                      as="input"
                      value={form.productions}
                      onChange={(e) =>
                        setForm({ ...form, productions: e.target.value })
                      }
                    />
                  </Form.Group>
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
                    <div className={cx("movie-quantity")}>{form.quantity}</div>
                  </div>
                </TippyWrapper>
              </div>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default Add;
