import React from "react";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
const Footer = () => {
  const links = [
    { title: "Movies", href: "movies" },
    { title: "TV-Shows", href: "tv-shows" },
    { title: "Most Watched", href: "most-watched" },
    { title: "Top IMDb", href: "top-imdb" },
    { title: "Action", href: "genre/action" },
    { title: "Horror", href: "genre/horror" },
    { title: "Sci-fi", href: "genre/sci-fi" },
    { title: "Thriller", href: "genre/thriller" },
    { title: "Zoro", href: "https://zoro.vc", type: "a" },
    { title: "Contact", href: "contact" },
    { title: "Request", href: "request" },
    { title: "Sitemap", href: "sitemap" },
  ];
  return (
    <>
      <div className={cx("wrapper")}>
        <Container fluid className={cx("container-footer")}>
          <Row>
            <Col>
              <div className={cx("title")}>Links</div>
              <Row>
                {links.map((link, index) => (
                  <Col className={cx("link-item")} lg={4} md={4} key={index}>
                    {link.type === "a" ? (
                      <a href={link.href}>{link.title}</a>
                    ) : (
                      <Link to={`/${link.href}`}>{link.title}</Link>
                    )}
                  </Col>
                ))}
              </Row>
            </Col>
            <Col>
              <div className={cx("title")}>About Us</div>
              <div className={cx("link-item")}>
                <span className={cx("link-heade")}>
                  <Link to={"/"} style={{ color: "#17a2b8" }}>
                    FlixTor
                  </Link>
                </span>{" "}
                is a free movies streaming website with a big database, lots of
                great features and beautifuly layout. With{" "}
                <span className={cx("bold")}>FlixTor</span>, you can easily find
                and <span className={cx("bold")}>watch movies</span>, tv shows
                for free in high qualty without registration.{" "}
                <span className={cx("bold")}>FlixTor movies online</span>, watch
                FlixTor free, free movies FlixTor, FlixTor online
              </div>
              <p className={cx("notice")}>
                This site does not store any files on our server, we only linked
                to the media which is hosted on 3rd party services.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={cx("footer-foot")}>
        <Row className={cx("row-footer")}>
          <Col>Sitemap</Col>
          <Col>
            <Link to={"/contact"}>Contact</Link>
          </Col>
          <Col>About Us</Col>
          <Col>DMCA</Col>
        </Row>
      </div>
    </>
  );
};

export default Footer;
