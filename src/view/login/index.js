import React, { useState } from "react";
import "../../common/css/login.css";
import Login from "./login";
import Register from "./register";
import Frame from "../../common/component/frame";

function Index(props) {
  let [deg, setDeg] = useState(0);
  return (
    <Frame pullUp={true}>
      <div id="login_boxWrap">
        <h2 className="login_register">
          <span>登录&注册</span>
        </h2>
        <div className="login_register_box">
          <div
            className="box"
            style={{
              transform: `rotateY(${deg}deg)`,
            }}
          >
            <Login setDeg={setDeg}></Login>
            <Register setDeg={setDeg}></Register>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export default Index;
