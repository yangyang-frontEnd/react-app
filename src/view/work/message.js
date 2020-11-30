import React, { useState } from "react";
import { connect } from "react-redux";
import putMessage from "../../store/action/putMessage";

function Message(props) {
  let { show, setShow, dispatch, id, login } = props;

  let [info, setInfo] = useState("");
  let [put, setPut] = useState(false);

  return (
    <div
      className="message_wrap"
      style={{
        transform: `translateY(${show ? 0 : "100%"})`,
      }}
    >
      <textarea
        value={info}
        onChange={({ target }) => {
          setInfo(target.value);
        }}
      />
      {put ? (
        <footer className="miiapv_footer put">评论提交中...</footer>
      ) : (
        <footer
          className="miiapv_footer"
          onClick={() => {
            if (!info.trim()) {
              alert("输入内容不能为空");
              return;
            }
            dispatch(
              putMessage({
                article_id: id,
                content: info,
              })
            ).then((res) => {
              if (res) {
                // console.log('请求完成');
                dispatch({
                  type: "MESSAGE_ADD",
                  messageList: {
                    content: info,
                    create_time: Date.now(),
                    username: login,
                  },
                });

                setPut(false);
                setInfo("");
              }
            });
            setPut(true);
          }}
        >
          发布评论
        </footer>
      )}
    </div>
  );
}
export default connect((state) => {
  return state;
})(Message);
