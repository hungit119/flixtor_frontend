import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import classNames from "classnames/bind";
import React, { useEffect, useState } from "react";
import { Container, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { apiUrl } from "../../../../constants";
import { setUpdateInforUser } from "../../../../redux/actions/userAction";
import { userInfoSelector } from "../../../../redux/selectors";
import ResponseApiHandle from "../../../../utils/ResponseApiHandle";
import Message from "../../../Message";
import styles from "./UserInfo.module.scss";
const cx = classNames.bind(styles);
const UserInfo = () => {
  const dispatch = useDispatch();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const userInfo = useSelector(userInfoSelector);
  const getUser = async () => {
    try {
      const response = await axios.get(`${apiUrl}/auth`);
      ResponseApiHandle(response, (resData) => {
        setForm({ ...resData.userInfo, confirmPassword: "" });
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChangeFormControl = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleClickSaveChange = async (e) => {
    e.preventDefault();
    if (form.confirmPassword === "") {
      setShowErrorMessage(true);
    } else {
      setShowErrorMessage(false);
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${apiUrl}/auth/checkConfirmPassword`,
          {
            data: { ...form },
          }
        );
        ResponseApiHandle(response, (resData) => {
          if (resData.verify) {
            // set new user infor on redux
            dispatch(
              setUpdateInforUser({
                username: resData.newData.username,
                email: resData.newData.email,
              })
            );
            setIsLoading(false);
            setShowSuccessMessage(true);
            setTimeout(() => {
              setShowSuccessMessage(false);
            }, [1000]);
          } else {
            console.log(resData.message);
          }
        });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  useEffect(() => {
    getUser();
  }, [userInfo]);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("edit-input")}>
        <div className={cx("header-content")}>
          <div className={cx("header-content-title")}>Edit Profile</div>{" "}
          {userInfo.verify && userInfo.id !== "" ? (
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{ color: "#17a2b8" }}
            />
          ) : (
            <span style={{ color: "red" }}>(Not activate your email)</span>
          )}
        </div>
        <div className={cx("form-edit-profile")}>
          <Container>
            <Message
              variant={"error"}
              show={showErrorMessage}
              text={
                "The password confirmation field is required when password is present."
              }
            />
            <Message
              variant={"success"}
              show={showSuccessMessage}
              text={"Change information successfully"}
            />
            <Form>
              <Form.Group className={cx("form-group-cus")}>
                <Form.Label className={cx("text-input", "label")}>
                  Username
                </Form.Label>
                <Form.Control
                  className={cx("text-input", "input")}
                  value={form.username}
                  name="username"
                  onChange={handleChangeFormControl}
                />
              </Form.Group>
              <Form.Group className={cx("form-group-cus")}>
                <Form.Label className={cx("text-input", "label")}>
                  Email
                </Form.Label>
                <Form.Control
                  className={cx("text-input", "input")}
                  value={form.email}
                  name="email"
                  onChange={handleChangeFormControl}
                />
              </Form.Group>
              <Form.Group className={cx("form-group-cus")}>
                <Form.Label className={cx("text-input", "label")}>
                  Password Confirmation
                </Form.Label>
                <Form.Control
                  className={cx("text-input", "input")}
                  type="password"
                  value={form.confirmPassword}
                  name="confirmPassword"
                  placeholder="Confirm your password..."
                  onChange={handleChangeFormControl}
                />
                <div className={cx("note")}>
                  Ignore password fields if you don't want to change.
                </div>
              </Form.Group>
              <button
                className={cx("btn-save-change")}
                onClick={handleClickSaveChange}
              >
                Save Changes
              </button>
            </Form>
            {isLoading ? (
              <div className={cx("spinner-wrapper")}>
                <Spinner animation="border" variant="primary" />
              </div>
            ) : (
              <></>
            )}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
