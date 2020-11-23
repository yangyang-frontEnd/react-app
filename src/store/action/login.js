import http from "./http"

import HTTP from "./http"

export default function login(data) {
    return function (dispatch) {
        HTTP.post("/user/login").then(res=>{
            console.log('登录信息',res);
        })
    }
}