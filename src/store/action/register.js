import HTTP from "./http";

export default function Register(data) {
  return function (dispatch) {
    return HTTP.post("/user/register", data).then((res) => {
        console.log('注册信息',res);
      if (res.data.code === 0) {
      }
      return res.data;
    });
  };
}
