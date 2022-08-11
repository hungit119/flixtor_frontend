import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./Auth.module.scss";
import { Button } from "react-bootstrap";
import ButtonCus from "../ButtonCus";
const cx = className.bind(styles);

const Auth = ({ type = "register", handleSetAuthType }) => {
  const [inputFalse, setInputFalse] = useState(false);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        {type === "login"
          ? "Sign In"
          : type === "forgot-password"
          ? "Forgot Password"
          : "Create Account"}
      </div>
      {type === "register" ? (
        <div className={cx("description")}>
          Create an account to enjoy more features
        </div>
      ) : (
        <></>
      )}
      <div className={cx("input-group")}>
        <div className={cx("label")}>
          {type === "register" ? "Username" : "Your account"}
        </div>
        <div className={cx("input-wrapper")}>
          <input
            className={cx("input")}
            type="text"
            placeholder={
              type === "register" ? "Your username" : "Your username or email"
            }
            name="username"
          />
        </div>
      </div>
      {type === "register" ? (
        <div className={cx("input-group")}>
          <div className={cx("label")}>Email address</div>
          <div className={cx("input-wrapper")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Your email"
              name="email"
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
              className={cx("input")}
              type="text"
              placeholder="Your password"
              name="password"
            />
          </div>
        </div>
      )}
      {type === "register" ? (
        <div className={cx("input-group")}>
          <div className={cx("label")}>Password confirmation</div>
          <div className={cx("input-wrapper")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Repeat your password"
              name="re-password"
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
            }}
          >
            Forgot your password?
          </div>
          <div className={cx("remember")}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        </>
      ) : (
        <></>
      )}
      <div>
        {/* <style type="text/css">
          {`
              .btn-flat {
                background-color: #17a2b8;
                color: white;
              }

              .btn-xxl {
                padding: 11px 23px;
                font-size: 1.575rem;
              }
              .btn-flat:hover, .btn-flat:focus, .btn-flat:active, .btn-flat.active, .open>.dropdown-toggle.btn-flat {
                color: #fff;
                background-color: #138496;
              }
            `}
        </style>
        <Button variant="flat" size="xxl" className={cx("btn-flat")}>
          {type === "register"
            ? "Register"
            : type === "login"
            ? "Login"
            : "Forgot"}
        </Button> */}
        <ButtonCus
          classname={"btn-flat-auth"}
          style={{ width: "100%", marginTop: "30px" }}
        >
          {type === "register"
            ? "Register"
            : type === "login"
            ? "Login"
            : "Forgot"}
        </ButtonCus>
      </div>
      <div className={cx("footer")}>
        {type === "register" ? (
          <>
            <span>Have an account ?</span>{" "}
            <span
              className={cx("btn-register-link")}
              onClick={() => {
                handleSetAuthType("login");
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
            }}
          >
            Back to Sign In
          </span>
        )}
      </div>
    </div>
  );
};

export default Auth;
