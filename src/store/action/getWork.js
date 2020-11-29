import HTTP from "./http";

export default function getWork(data = {}) {
  return function (dispatch, getState) {
    dispatch({
      type: "WORK_LOAD",
    });
    return HTTP.post("/lecturer/info", {
      ...data,
    }).then((res) => {
      console.log("作品数据", res);
      dispatch({
        type: "WORK_LOADOVER",
        data: res.data,
      });
    });
  };
}
