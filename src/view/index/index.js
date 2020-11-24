import React from "react";
import { connect } from "react-redux";
import  login  from "../../store/action/login";

function Index(props) {
  // console.log(props);
  return (
    <div>
      <div>我是首页</div>
      <button onClick={()=>{
        props.dispatch(login())
      }}>登录</button>
    </div>
  );
}

export default connect((res) => {
  return res;
})(Index);
