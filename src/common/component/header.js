import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useBack } from "../hook/index";
import { connect } from "react-redux";
import isLogin from "../../store/action/isLogin";
import logout from "../../store/action/logout";

function getUser(path, user, props, isBtnShow, setBtnShow) {
  if (path === "/login") {
    return "";
  }
  if (user) {
    return (
      <span className="header-btn-right">
        <span
          className="header-user"
          onClick={() => {
            setBtnShow(!isBtnShow);
          }}
        >
          {user}
        </span>
        <span
          className="header-logout-btn"
          style={{
            display: isBtnShow ? "block" : "none",
          }}
          onClick={() => {
            props.dispatch(logout());
          }}
        >
          退出
        </span>
      </span>
    );
  }
  return <Link className="user" to="/login" />;
}

function Header(props) {
  // console.log(props);
  let path = props.location.pathname;

  let back = useBack();

  let { user, changeShow } = props;

  let [isBtnShow, setBtnShow] = useState(false);

  useEffect(() => {
    props.dispatch(isLogin());
  }, []);

  return (
    <header id="header">
      <nav className="menu">
        {/* 返回按钮 */}
        {/* 菜单按钮 */}
        {path === "/login" ? (
          <a
            className="header-btn-left iconfont icon-back"
            onClick={() => {
              back(props.history);
            }}
          ></a>
        ) : (
          <a
            className="header-btn-left iconfont icon-hycaidan"
            onClick={() => {
              changeShow();
            }}
          ></a>
        )}
      </nav>
      <h1 className="logo">miaov.com</h1>
      {getUser(path, user, props, isBtnShow, setBtnShow)}
    </header>
  );
}

export default connect((state) => {
  // console.log(state);
  return { user: state.login };
})(withRouter(Header));
