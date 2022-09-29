import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "./UserProfile.module.scss";
import { Link } from "react-router-dom";
import SessionsHome from "../../SessionsHome/SessionsHome";
import MenuProfile from "./MenuProfile";

const cx = classNames.bind(styles);
const UserProfile = () => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <Link to={"/"}>
          <span className={cx("header-title")}>Home</span>
        </Link>{" "}
        / <span className={cx("header-title")}>User</span>/{" "}
        <span className={cx("header-title")}>hungmotadev</span>
      </div>
      <div className={cx("content")}>
        <div className={cx("edit-input")}>
          <div className={cx("header-content")}>
            <div className={cx("header-content-title")}>Edit Profile</div>
          </div>
          <div className={cx("form-edit-profile")}>
            <Container>
              <Form>
                <Form.Group className={cx("form-group-cus")}>
                  <Form.Label className={cx("text-input", "label")}>
                    Username
                  </Form.Label>
                  <Form.Control
                    className={cx("text-input", "input")}
                    value={"hungmotadev"}
                  />
                </Form.Group>
                <Form.Group className={cx("form-group-cus")}>
                  <Form.Label className={cx("text-input", "label")}>
                    Email
                  </Form.Label>
                  <Form.Control
                    className={cx("text-input", "input")}
                    value={"Email"}
                  />
                </Form.Group>
                <Form.Group className={cx("form-group-cus")}>
                  <Form.Label className={cx("text-input", "label")}>
                    Password
                  </Form.Label>
                  <Form.Control
                    className={cx("text-input", "input", "password")}
                    type="password"
                    value={"12345678"}
                  />
                </Form.Group>
                <Form.Group className={cx("form-group-cus")}>
                  <Form.Label className={cx("text-input", "label")}>
                    Password Confirmation
                  </Form.Label>
                  <Form.Control
                    className={cx("text-input", "input")}
                    type="password"
                    value={""}
                    placeholder={"Repeat new password"}
                  />
                  <div className={cx("note")}>
                    Ignore password fields if you don't want to change.
                  </div>
                </Form.Group>
                <button className={cx("btn-save-change")}>Save Changes</button>
              </Form>
            </Container>
          </div>
        </div>
        <div className={cx("menu-profile")}>
          <MenuProfile />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
