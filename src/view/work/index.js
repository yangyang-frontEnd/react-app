import React, { useEffect, useMemo, useState } from "react";
import Frame from "../../common/component/frame";
import "../../common/css/miiaov.css";
import { connect } from "react-redux";
import getWork from "../../store/action/getWork";
import Skeleton from "../../common/component/skeleton";
import Main from "./main";
import getMessageList from "../../store/action/getMessageList";
import Message from "./message";

// useMemo 组件更新，组件挂载之前
function Work(props) {
  // console.log(props);
  // match params: {id: "2"}
  // 视图组件 由路由 渲染的
  let { dispatch, loading, data, user, history } = props;
  let id = props.match.params.id;

  let [showMessage, setShow] = useState(false);

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
      <footer
        className="miiapv_footer"
        onClick={() => {
          if (user) {
            setShow(true);
          } else {
            history.push("/login");
          }
        }}
      >
        回复本帖
      </footer>
      <Message show={showMessage} setShow={setShow} id={id}></Message>
    </div>
  );
}

export default connect((state) => {
  return { ...state.work, user: state.login };
})(Work);
