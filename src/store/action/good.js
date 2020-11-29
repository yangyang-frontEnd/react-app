import HTTP from "./http";

function getGood(id) {
  return function (dispatch, getState) {
    return HTTP.post("/lecturer/getgood", {
      article_id: id,
    }).then((res) => {
      console.log("是否点赞数据", res);
      if (res.data.code == 0) {
        dispatch({
          type: "GOOD",
          goodid: res.data.gooid,
        });
      } else {
        dispatch({
          type: "CANCEL_GOOD",
        });
      }
    });
  };
}

function setGood(id) {
  return function (dispatch) {
    return HTTP.post("/lecturer/good", {
      article_id: id,
    }).then((res) => {
      console.log("点赞数据", res);
      if (res.data.code == 0) {
        // 获取 goodid
        dispatch(getGood(id));
        return true;
      }
    });
  };
}

function cancelGood({ article_id, goodid }) {
  // console.log(arguments);

  return function (dispatch, getState) {
    return HTTP.post("/lecturer/cancelgood?", {
      article_id,
      goodid,
    }).then((res) => {
      if (res.data.code === 0) {
        console.log("取消点赞数据", res);
        dispatch({
          type: "CANCEL_GOOD",
        });
        return true;
      }
    });
  };
}

export { getGood, setGood, cancelGood };
