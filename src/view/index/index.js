import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
// import login from "../../store/action/login";
import Tab from "../../common/component/tab";
import "../../common/css/index.css";
import Course from "./course";
import Vip from "./vip";
import Miaov from "./miaov";
import Works from "./works";
import getWorks from "../../store/action/getWorks";
import Frame from "../../common/component/frame";

let imgData = [
  require("../../common/images/banner1.jpg").default,
  require("../../common/images/banner2.jpg").default,
  require("../../common/images/banner3.jpg").default,
  require("../../common/images/banner4.jpg").default,
];

function Index(props) {
  // console.log(props);
  const [page, setPage] = useState(1);
  let { dispatch } = props;
  function getWorksData(page) {
   let p =  dispatch(getWorks());
    setPage(++page)
    return p
  }
  // console.log(props); //加载3次
  useEffect(() => {
    // getWorksData(page);
  }, []);
  return (
    <Frame 
    pullUp={true}
    getWorksData={getWorksData}
    >
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
          <Works {...props}></Works>
        </section>
      </div>
      </Frame>
  );
}

export default connect((res) => {
  return res;
})(Index);
