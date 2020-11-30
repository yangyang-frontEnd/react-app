import HTTP from "./http";

/* 
    article_id:文章id
	content:评论内容
*/
export default function putMessage(data = {}) {
  return function (dispatch) {
    return HTTP.post("/lecturer/addcomment", {
      ...data,
    }).then((res) => {
      console.log("评论数据", res);
      if (res.data.code !== 0) {
        alert(res.data.message);
      }
      return true
    });
  };
}
