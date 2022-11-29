import React from "react";
import classNames from "classnames/bind";
import styles from "./Comment.module.scss";
const cx = classNames.bind(styles);
const Comment = ({ comment }) => {
  return (
    <div className={cx("wrapper")}>
      {/* <img
        className={cx("user-avatar")}
        src="https://scontent.fhan2-1.fna.fbcdn.net/v/t39.30808-1/308651066_488533106466044_3904101261237066481_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0BKPtV4y4iIAX_i-Opl&_nc_ht=scontent.fhan2-1.fna&oh=00_AfAJj4qawqTR1C71muDSU8PHGDEtA-_u2zKBEJAM1DJhsw&oe=637E44C0"
        alt="avatar-user"
      /> */}
      <div className={cx("default-avatar")}>{comment.username.charAt(0)}</div>
      <div className={cx("comment")}>
        <div className={cx("header-comment")}>
          <span className={cx("user-name")}>{comment.username}</span>&bull;
          <span className={cx("user-uptodate")}>{comment.up_to_date}</span>
        </div>
        <div className={cx("body-comment")}>{comment.body}</div>
      </div>
    </div>
  );
};

export default Comment;
