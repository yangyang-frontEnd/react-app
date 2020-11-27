import React from "react";
import { connect } from "react-redux";
// import login from "../../store/action/login";
import Tab from "../../common/component/tab";
import "../../common/css/index.css";
import Course from "./course";
import Vip from "./vip"
import Miaov from "./miaov"

let imgData = [
  require("../../common/images/banner1.jpg").default,
  require("../../common/images/banner2.jpg").default,
  require("../../common/images/banner3.jpg").default,
  require("../../common/images/banner4.jpg").default,
];

function Index(props) {
  // console.log(props);
  return (
    <div>
      {/*       {[...".".repeat(20)].map((item,index) => {
        return <div key={index}>我是首页</div>;
      })}
      <button
        onClick={() => {
          props.dispatch(login());
        }}
      >
        登录
      </button> */}
      <Tab
        data={imgData}
        render={(data) => {
          return <img src={data}></img>;
        }}
      ></Tab>
      {/* better-scroll会默认阻止事件 如 a标签 href 
        preventDefaultException
      */}
      <section className="index_content">
        <Course></Course>
        <Vip></Vip>
        <Miaov></Miaov>
      </section>
    </div>
  );
}

export default connect((res) => {
  return res;
})(Index);
