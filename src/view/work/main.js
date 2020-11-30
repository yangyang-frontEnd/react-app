import React from "react";
import Tab from "../../common/component/tab";
import Acticle from "./article";
import Good from "./good";
import MessageList from "./messageList"

export default function Main(props) {
  let { data } = props;

  return (
    <div className="workDetails">
      <Tab
        data={data.image_path ? data.image_path.map((item) => item.path) : []}
        render={(src) => {
          return <img src={src}></img>;
        }}
      ></Tab>
      <div className="miiaov_box">
        <Acticle data={data}></Acticle>
        <article className="miiaov_comment">
          <Good goodNum={data.good} id={data.id}></Good>
          <div className="output">
            <input type="text" placeholder="发表评论......" />
            <MessageList></MessageList>
          </div>
        </article>
      </div>
    </div>
  );
}
