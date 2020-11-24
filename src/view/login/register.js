import React, { useState } from "react";
import register from "../../store/action/register";
import { connect } from "react-redux";

function Register(props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [vcode, setVcode] = useState("");
  const [vcodeShow, setVcodeShow] = useState(false);
  const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());

  let { setDeg } = props;

  function toRegister() {
    props
      .dispatch(
        register({
          verify: vcode,
          username: user,
          password,
          repassword: password2,
        })
      )
      .then((data) => {
        alert(data.msg);
        setTimeout(() => {
          if (data.code == 0) {
            setDeg(0);
          }
          setVcodeSrc("/miaov/user/verify?" + Date.now());
        }, 100);
      });
  }

  return (
    <div className="register_box">
      <h3>注册账号</h3>
      <div className="register_form">
        <p>
          <input
            type="text"
            placeholder="用户名"
            value={user}
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="设置密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder="确定密码"
            value={password2}
            onChange={(e) => {
              setPassword2(e.target.value);
            }}
          />
        </p>
        <p className="clearfix">
          <input
            type="text"
            placeholder="验证码"
            value={vcode}
            onChange={(e) => {
              setVcode(e.target.value);
            }}
            onFocus={() => {
              setVcodeShow(true);
            }}
            className="verifyCode"
          ></input>
          {vcodeShow ? (
            <img
              className="verify"
              src={vcodeSrc}
              onClick={() => {
                setVcodeSrc("/miaov/user/verify?" + Date.now());
              }}
              alt=""
            ></img>
          ) : (
            ""
          )}
        </p>
        <p></p>
        <button
          className="form_btn"
          onClick={() => {
            toRegister();
          }}
        >
          马上注册
        </button>
        <p className="form_tip">
          已有帐号？
          <a
            onTouchStart={() => {
              setDeg(0);
            }}
          >
            立即登录
          </a>
        </p>
      </div>
    </div>
  );
}

export default connect((res) => {
  return res;
})(Register);
