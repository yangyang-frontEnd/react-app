import HTTP from "./http"

export default function login(data) {
    // 使用thunk中间件之后，dispatch就可以接收一个函数
    // dispatch(function(dispatch,getState){
    // 异步执行状态修改 Promise
    // })
    return function (dispatch) {
     return   HTTP.post("/user/login",data).then(res=>{
            console.log('登录信息',res);
            if (res.data.code == 0) {
                dispatch({
                    type:"LOGIN",
                    user:data.username
                })
            }
            return res.data
        })
    }
}