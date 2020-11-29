import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGood } from "../../store/action/good";

function Good(props) {
  let { goodNum, good, user, dispatch, id } = props;
  //   console.log(props);
  useEffect(() => {
    dispatch(getGood(id));
  }, [user]);
  return (
    <p className="miiaov_zan">
      <span>有{goodNum}人学的很赞</span>
      <span className={`iconfont icon-tuijian1 ${good ? "good" : ""}`}>赞</span>
    </p>
  );
}
export default connect((state) => {
  return {
    good: state.good,
    user: state.login,
  };
})(Good);
