import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ChangePassword.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import ButtonCus from "../../ButtonCus";
import axios from "axios";
import { apiUrl } from "../../../constants";
import Message from "../../Message";
const cx = classNames.bind(styles);
const ChangePassword = () => {
  const [form, setForm] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errorChangePassword, setErrorChangePassword] = useState({
    variant: "",
    text: "",
    show: false,
  });
  const navigate = useNavigate();
  const params = useParams();
  const handleChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClickConfirm = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/changePassword/${params.token}`,
        {
          ...form,
        }
      );
      if (response.data.success) {
        setErrorChangePassword({
          ...errorChangePassword,
          variant: response.data.success === true ? "success" : "error",
          text: response.data.message,
          show: true,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setErrorChangePassword({
          ...errorChangePassword,
          variant: response.data.success === true ? "success" : "error",
          text: response.data.message,
          show: true,
        });
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Container>
      <Row className={cx("wrapper")}>
        <Col lg={3}>
          <div>
            <div>New password:</div>
            <input
              type={"password"}
              name="newPassword"
              value={form.newPassword}
              onChange={handleChangeInput}
            />
          </div>
          <div className={cx("group-form")}>
            <div>Re password:</div>
            <input
              type={"password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChangeInput}
            />
          </div>
          <Message
            variant={errorChangePassword.variant}
            text={errorChangePassword.text}
            show={errorChangePassword.show}
          />
          <br />
          <ButtonCus onClick={handleClickConfirm}>Confirm</ButtonCus>
        </Col>
      </Row>
    </Container>
  );
};

export default ChangePassword;
