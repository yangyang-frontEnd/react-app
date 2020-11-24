import React, { useState, useEffect, useRef } from "react";
import Menu from "./menu";
import Header from "./header";
import "../css/reset.css";
import "../css/common.css";
import BScroll from "better-scroll";
import { useInnerHeight } from "../hook/index";

function Frame(props) {
  // console.log(props);
  const [showMenu, setShowMenu] = useState(false);
  let pageScroll = null;

  const wrap = useRef();

  let innerH = useInnerHeight();

  function changeShow() {
    setShowMenu(!showMenu);
  }

  function menuHide() {
    setShowMenu(false);
  }

  useEffect(() => {
    pageScroll = new BScroll(wrap.current);
  }, []);

  return (
    <div>
      <Header changeShow={changeShow}></Header>
      <Menu></Menu>
      <div
        id="main"
        style={{
          transform: `translateX(${showMenu ? 4.5 : 0}rem)`,
          height: innerH,
        }}
        onTouchStart={() => {
          menuHide();
        }}
      >
        <div className="pageWrap" ref={wrap}>{props.children}</div>
      </div>
    </div>
  );
}

export default Frame;
