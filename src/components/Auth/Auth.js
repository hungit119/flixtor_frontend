import axios from "axios";
import className from "classnames/bind";
import React, { useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { ACCESS_TOKEN_NAME, apiUrl } from "../../constants";
import { setUserInfo } from "../../redux/actions/authAction";
import ResponseApiHandle from "../../utils/ResponseApiHandle";
import ButtonCus from "../ButtonCus";
import styles from "./Auth.module.scss";
const cx = className.bind(styles);

const Auth = ({ type = "register", handleSetAuthType }) => {
  // State component
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [forgotPassForm, setForgotPassForm] = useState({
    username: "",
  });
  const [registerForm, setRegisterForm] = useState({
    username: "",
    password: "",
    email: "",
    rePassword: "",
  });
  const dispatch = useDispatch();

  // Validate form input
  const validateFormInputByClassName = (className) => {
    var result = true;
    const inputFormCreate = document.getElementsByClassName(className);
    const array_inputFormCreate = Object.values(inputFormCreate);
    array_inputFormCreate.forEach((input) => {
      if (input.value === "") {
        input.classList.add(cx("error-input"));
        result = false;
      }
    });
    return result;
  };

  // Handle Change Input
  const handleInputRegisterChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    document
      .querySelector(`[name="${e.target.name}"]`)
      .classList.remove(cx("error-input"));
  };
  const handleInputLoginChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    document
      .querySelector(`[name="${e.target.name}"]`)
      .classList.remove(cx("error-input"));
  };
  const handleInputForgotPassChange = (e) => {
    setForgotPassForm({ ...forgotPassForm, [e.target.name]: e.target.value });
    document
      .querySelector(`[name="${e.target.name}"]`)
      .classList.remove(cx("error-input"));
  };

  // Handle Click Buttons
  const handleRegisterClick = async () => {
    if (validateFormInputByClassName("register") === false) {
      toast.warning("Please fill in the required fields !!", {
        theme: "colored",
      });
      return;
    }
    if (registerForm.password !== registerForm.rePassword) {
      document
        .querySelector("[name=rePassword]")
        .classList.add(cx("error-input"));
      toast.error("Re-password must same password  !!", {
        theme: "colored",
      });
      return;
    }
    const formValue = { ...registerForm };
    try {
      setIsLoading(true);
      // Handle Api
      const response = await axios.post(`${apiUrl}/auth/register`, {
        ...formValue,
      });
      ResponseApiHandle(
        response,
        (resData) => {
          setIsLoading(false);
          dispatch(setUserInfo(resData.reply));
          const { accessToken } = resData.reply;
          localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
          setRegisterSuccess(true);
          setTimeout(() => {
            setIsLoading(false);
            window.location.reload();
          }, 1000);
        },
        (errorData) => {
          toast.error(errorData.message, {
            theme: "colored",
          });
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error.message);
      toast.error("Incorrect username or password", {
        theme: "colored",
      });
      setIsLoading(false);
    }
  };
  const handleLoginClick = async () => {
    if (validateFormInputByClassName("login") === false) {
      toast.warning("Please fill in the required fields !!", {
        theme: "colored",
      });
      return;
    }
    const formValue = { ...loginForm };
    try {
      setIsLoading(true);
      const response = await axios.post(`${apiUrl}/auth/login`, {
        ...formValue,
      });
      ResponseApiHandle(
        response,
        (resData) => {
          dispatch(setUserInfo(resData.reply.username));
          const { accessToken } = resData.reply;
          localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);
          setLoginSuccess(true);
          setTimeout(() => {
            setIsLoading(false);
            window.location.reload();
          }, 1000);
        },
        (errorData) => {
          toast.error(errorData.message, {
            theme: "colored",
          });
          setIsLoading(false);
        }
      );
    } catch (error) {
      console.log(error.message);
      toast.error("Incorrect username or password", {
        theme: "colored",
      });
      setIsLoading(false);
    }
  };
  const handleForgotClick = () => {
    if (validateFormInputByClassName("forgotPass") === false) {
      toast.warning("Please fill in the required fields !!", {
        theme: "colored",
      });
      return;
    }
    const formValue = { ...forgotPassForm };
    console.log({ formValue });
  };
  return (
    <>
      <ToastContainer />
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          {type === "login"
            ? "Sign In"
            : type === "forgot-password"
            ? "Forgot Password"
            : "Create Account"}
        </div>
        {type === "register" ? (
          registerSuccess ? (
            <div className={cx("notice-auth")}>Register successfully</div>
          ) : (
            <div className={cx("description")}>
              Create an account to enjoy more features
            </div>
          )
        ) : (
          <>
            {loginSuccess ? (
              <div className={cx("notice-auth")}>Logged in successfully</div>
            ) : (
              <></>
            )}
          </>
        )}
        <div className={cx("input-group")}>
          <div className={cx("label")}>
            {type === "register" ? "Username" : "Your account"}
          </div>
          <div className={cx("input-wrapper")}>
            <input
              className={cx(
                "input",
                type === "register"
                  ? "register"
                  : type === "login"
                  ? "login"
                  : "forgotPass"
              )}
              type="text"
              placeholder={"Your username"}
              name="username"
              onChange={
                type === "register"
                  ? handleInputRegisterChange
                  : type === "forgot-password"
                  ? handleInputForgotPassChange
                  : handleInputLoginChange
              }
              value={
                type === "register"
                  ? registerForm.username
                  : type === "login"
                  ? loginForm.username
                  : forgotPassForm.username
              }
            />
          </div>
        </div>
        {type === "register" ? (
          <div className={cx("input-group")}>
            <div className={cx("label")}>Email address</div>
            <div className={cx("input-wrapper")}>
              <input
                className={cx("input", "register")}
                type="text"
                placeholder="Your email"
                name="email"
                onChange={handleInputRegisterChange}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {type === "forgot-password" ? (
          <></>
        ) : (
          <div className={cx("input-group")}>
            <div className={cx("label")}>Password</div>
            <div className={cx("input-wrapper")}>
              <input
                className={cx(
                  "input",
                  type === "register" ? "register" : "login"
                )}
                type="password"
                placeholder="Your password"
                name="password"
                onChange={
                  type === "register"
                    ? handleInputRegisterChange
                    : handleInputLoginChange
                }
                value={
                  type === "register"
                    ? registerForm.password
                    : loginForm.password
                }
              />
            </div>
          </div>
        )}
        {type === "register" ? (
          <div className={cx("input-group")}>
            <div className={cx("label")}>Password confirmation</div>
            <div className={cx("input-wrapper")}>
              <input
                className={cx("input", "register")}
                type="password"
                placeholder="Repeat your password"
                name="rePassword"
                onChange={handleInputRegisterChange}
              />
            </div>
          </div>
        ) : (
          <></>
        )}
        {type === "register" ? (
          <></>
        ) : type === "login" ? (
          <>
            <div
              className={cx("forgot")}
              onClick={() => {
                handleSetAuthType("forgot-password");
                setLoginForm({ username: "", password: "" });
              }}
            >
              Forgot your password?
            </div>
          </>
        ) : (
          <></>
        )}
        {isLoading ? (
          <div className={cx("text-center")}>
            <Spinner animation="border" variant="primary" />
          </div>
        ) : (
          <></>
        )}
        <div>
          {type === "register" ? (
            <ButtonCus
              classname={"btn-flat-auth"}
              style={{ width: "100%", marginTop: "30px" }}
              onClick={handleRegisterClick}
            >
              Register
            </ButtonCus>
          ) : type === "login" ? (
            <ButtonCus
              classname={"btn-flat-auth"}
              style={{ width: "100%", marginTop: "30px" }}
              onClick={handleLoginClick}
            >
              Login
            </ButtonCus>
          ) : (
            <ButtonCus
              classname={"btn-flat-auth"}
              style={{ width: "100%", marginTop: "30px" }}
              onClick={handleForgotClick}
            >
              Forgot
            </ButtonCus>
          )}
        </div>

        <div className={cx("footer")}>
          {type === "register" ? (
            <>
              <span>Have an account ?</span>{" "}
              <span
                className={cx("btn-register-link")}
                onClick={() => {
                  handleSetAuthType("login");
                  setRegisterForm({ username: "", password: "" });
                }}
              >
                Login
              </span>
            </>
          ) : type === "login" ? (
            <>
              <span>Don't have an account ?</span>{" "}
              <span
                className={cx("btn-register-link")}
                onClick={() => {
                  handleSetAuthType("register");
                  setLoginForm({ username: "", password: "" });
                }}
              >
                Register
              </span>
            </>
          ) : (
            <span
              className={cx("btn-register-link")}
              onClick={() => {
                handleSetAuthType("login");
                setForgotPassForm({ username: "" });
              }}
            >
              Back to Sign In
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Auth;
