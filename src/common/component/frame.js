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

  let { pullUp, getWorksData } = props;

  useEffect(() => {
    /* better-scroll会默认阻止事件 如 a标签 href 
       不想阻止默认   preventDefaultException
        */
    pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO|A)$/,
      },
      pullUpLoad: pullUp
        ? {
            threshold: 200,
          }
        : false,
    });
    pageScroll.on("pullingUp", () => {
      console.log("上拉加载更多");
      getWorksData().then((res) => {
        if (res) {
          pageScroll.finishPullUp();
          pageScroll.refresh();
        } else {
          pageScroll.closePullUp()
        }
      });
    });
  }, []);

  return (
    <div>
      <Header changeShow={changeShow}></Header>
      <Menu menuHide={menuHide}></Menu>
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
        <div className="pageWrap" ref={wrap}>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Frame;
