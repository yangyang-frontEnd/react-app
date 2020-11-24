import React, { useState } from "react";
import { connect } from "react-redux";
import login from "../../store/action/login";
import { withRouter } from "react-router-dom"; // 路由信息
import {useBack} from "../../common/hook/index"

function Login(props) {
  // console.log(props);
  const back = useBack()

  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [vcode, setVcode] = useState("");
  const [vcodeShow, setVcodeShow] = useState(false);
  const [vcodeSrc, setVcodeSrc] = useState("/miaov/user/verify?" + Date.now());

  // 搜集表单数据 Post data
  function toLogin() {
    props
      .dispatch(
        // 使用thunk中间件之后，dispatch就可以接收一个函数
        // dispatch(function(dispatch,getState){
        // 异步执行状态修改 Promise
        // })
        login({
          verify: vcode,
          username: user,
          password,
        })
      )
      .then((data) => {
        alert(data.msg);
        setTimeout(() => {
          if (data.code != 0) {
            setVcodeSrc("/miaov/user/verify?" + Date.now());
          } else {
            back(props.history)
          }
        }, 100);
      });
  }

  return (
    <div className="login_box">
      <figure className="user_img">
        <img src={require("../../common/images/user_img.png").default} alt="" />
        <figcaption>如有账号，请直接登录</figcaption>
      </figure>
      <div className="login_form">
        <p>
          <input
            type="text"
            name="username"
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
            name="userpassword"
            placeholder="请输入密码"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
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
            ></img>
          ) : (
            ""
          )}
        </p>
        <button
          className="form_btn"
          onClick={() => {
            toLogin();
          }}
        >
          登录
        </button>
        <p className="form_tip">
          没有帐号？<a href="#">立即注册</a>
        </p>
      </div>
    </div>
  );
}
export default connect((res) => {
  // console.log(res);
  return res;
})(withRouter(Login));
