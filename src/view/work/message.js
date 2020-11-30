import React from "react";
export default function Message(props) {
  let { show,setShow } = props;
  return (
    <div
      className="message_wrap"
      style={{
        transform: `translateY(${show ? 0 : "100%"})`,
      }}
    >
      <textarea />
      <footer className="miiapv_footer">发布评论</footer>
    </div>
  );
}
