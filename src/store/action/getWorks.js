import HTTP from "./http";

export default function getWorks(data={}) {
  return function (dispatch,getState) {
    //   正在更新
    dispatch({
        type:"LOAD"
    })
    let {page} = getState().works;
    console.log('下拉页数',page);
    return HTTP.post(`/lecturer/lists?page=${page}&rows=20`,{
        order:"desc",
        sort:"sort",
        category_id:1,
        recommend:1,
        ...data,
    }).then((res) => {
        console.log('下拉加载数据',res);
        if (!res.data.length) {
          dispatch({
            type:"LOADEND",
          })
          return false
        }
        dispatch({
            type:"LOADOVER",
            data:res.data
        })
        return true
    });
  };
}
