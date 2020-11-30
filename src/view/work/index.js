import React, { useEffect, useMemo } from "react";
import Frame from "../../common/component/frame";
import "../../common/css/miiaov.css";
import { connect } from "react-redux";
import getWork from "../../store/action/getWork";
import Skeleton from "../../common/component/skeleton";
import Main from "./main";
import getMessageList from "../../store/action/getMessageList";

// useMemo 组件更新，组件挂载之前
function Work(props) {
  // console.log(props);
  // match params: {id: "2"}
  let { dispatch, loading, data } = props;
  let id = props.match.params.id;

  function getMessageData() {
    return dispatch(getMessageList(id));
  }

  // console.log(loading);
  useMemo(() => {}, []);

  useEffect(() => {
    dispatch(
      getWork({
        article_id: id,
      })
    );
    getMessageData();
    return () => {
      // reset 重置上一次数据
      dispatch({
        type: "WORK_LOAD",
      });

      dispatch({
        type: "MESSAGE_RESET",
      });
    };
  }, []);
  return (
    <div>
      <Frame pullUp={true} getData={getMessageData}>
        {loading ? <Skeleton></Skeleton> : <Main data={data}></Main>}
      </Frame>
      <footer className="miiapv_footer">回复本帖</footer>
    </div>
  );
}

export default connect((state) => {
  return { ...state.work };
})(Work);
