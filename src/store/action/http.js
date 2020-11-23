import axios from "axios";
import qs from "qs";

/* 
// 请求方法的别名 axios.post(url[, data[, config]])
// 在使用别名方法时， url、method、`data` 这些属性都不必在配置中指定。
*/
/* 
  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  data: {
    firstName: 'Fred'
  },
*/

// axios.create 可以使用自定义配置一个axios
const http = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  baseURL: "/miaov",

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: true,

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: (data) => {
    // qs.stringify()    转换成查询字符串
    // 将对象序列化，多个对象之间用&拼接（拼接是由底层处理，无需手动操作）
    // console.log(data);
    /*     {
      password: "miaov12";
      username: "miaov00";
      verify: "QTTM7";
    } */
    console.log(qs.stringify(data));
    // verify=KZWTN&username=miaov00&password=miaov12

    // 对 data 进行转换处理
    return qs.stringify(data);
  },
});

export default http;
