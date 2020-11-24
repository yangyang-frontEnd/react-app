import HTTP from "./http"

export default function logout(data){
    return function(dispatch){
       return HTTP.post("/user/logout").then(res=>{
            // console.log('登出信息',res);
            dispatch({
                type:"LOGOUT"
            })
        })
    }
}