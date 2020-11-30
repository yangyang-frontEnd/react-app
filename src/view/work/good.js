import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getGood, setGood, cancelGood } from "../../store/action/good";
import { withRouter } from "react-router-dom";

function Good(props) {
  let { goodNum, good, user, dispatch, id, goodId } = props;
  // console.log(props);
  let { history } = props;
  // 类似于派生属性
  let [goodCount, setGoodCount] = useState(goodNum);
  useEffect(() => {
    dispatch(getGood(id));
  }, [user]);

  let point = {};

  return (
    <p className="miiaov_zan">
      <span>有{goodCount}人学的很赞</span>
      <span
        className={`iconfont icon-tuijian1 ${good ? "good" : ""}`}
        onTouchStart={(e) => {
          let touch = e.changedTouches[0];
          point.x = touch.pageX;
          point.y = touch.pageY;
        }}
        onTouchEnd={(e) => {
          let touch = e.changedTouches[0];
          let nowPoint = {
            x: touch.pageX,
            y: touch.pageY,
          };
          if (
            Math.abs(nowPoint.x - point.x) < 5 &&
            Math.abs(nowPoint.y - point.y) < 5
          ) {
            if (user) {
              if (good) {
                dispatch(cancelGood({ article_id: id, goodid: goodId })).then(
                  (res) => {
                    if (res) {
                      setGoodCount(--goodCount);
                    }
                  }
                );
              } else {
                dispatch(setGood(id)).then((res) => {
                  if (res) {
                    setGoodCount(++goodCount);
                  }
                });
              }
            } else {
              history.push("/login");
            }
          }
        }}
      >
        赞
      </span>
    </p>
  );
}
export default withRouter(
  connect((state) => {
    // console.log(state);
    return {
      ...state.good,
      user: state.login,
    };
  })(Good)
);
