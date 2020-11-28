import HTTP from "./http";

export default function getLecturers(data = {}) {
  return function (dispatch) {
    return HTTP.post("/lecturer/lists?page=1&rows=100", {
      order: "desc",
      sort: "sort",
      category_id: 2,
      ...data,
    }).then(res=>{
        console.log('讲师数据',res);

        dispatch({
            type:"LOAD_LECTURERS",
            data:res.data
        })
    });
  };
}
