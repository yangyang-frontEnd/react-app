import HTTP from "./http";

function getGood(id) {
  return function (dispatch, getState) {
    return HTTP.post("/lecturer/getgood", {
      article_id: id,
    }).then((res) => {
      console.log("点赞数据", res);
      if(res.data.code == 0){
        dispatch({
            type: "GOOD",
            goodid: res.data.gooid
        });
    } else {
        dispatch({
            type: "CANCEL_GOOD"
        });
    }
    });
  };
}

export  {getGood};
