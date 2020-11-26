import React from "react";
import { connect } from "react-redux";
// import login from "../../store/action/login";
import Tab from "../../common/component/tab"
import "../../common/css/index.css"

let imgData = [
  require("../../common/images/banner1.jpg").default,
  require("../../common/images/banner2.jpg").default,
  require("../../common/images/banner3.jpg").default,
  require("../../common/images/banner4.jpg").default,
]

function Index(props) {
  // console.log(props);
  return (
    <div>
{/*       {[...".".repeat(20)].map((item,index) => {
        return <div key={index}>我是首页</div>;
      })}
      <button
        onClick={() => {
          props.dispatch(login());
        }}
      >
        登录
      </button> */}
      <Tab
      data={imgData}
      render={(data)=>{
        return <img src={data}></img>
      }}
      ></Tab>
      <div className="index_content">
        <ul className="content_list">
          <li className="pop_li">
            <button className="popular">Popular</button>
            <h3 className="list_title">
              VIP自学阵营
              <span>A联盟-HTML&CSS</span>
            </h3>
            <p className="price">FREE</p>
            <div className="txt">
                <p>以免费公开课的形式，解决你在学习中遇到的问题。</p>
                <button className="signUp">报名</button>
            </div>
          </li>
          <li className="month_li">
            <h3 className="list_title">WEB前端开发<br />
            零基础课程</h3>
            <p className="price">￥4800</p>
            <div className="txt">
                <time>2个月</time>
                <p>
                    PC端静态页面，移动商静
                    态页面制作...
                </p>
                <button className="signUp">报名</button>
            </div>
          </li>
          <li className="month_li">
            <h3 className="list_title">WEB前端开发<br />
                零基础课程</h3>
            <p className="price">￥9200</p>
            <div className="txt">
                <time>4个月</time>
                <p>
                    作用域、闭包、原型链、核
                    心算法...
                </p>
                <button className="signUp">报名</button>
            </div>
          </li>
          <li className="pop_li">
            <button className="popular">Popular</button>
            <h3 className="list_title">
              VIP自学阵营
              <span>B联盟-JavaScript</span>
            </h3>
            <p className="price">FREE</p>
            <div className="txt">
              <p>以免费公开课的形式，解决你在学习中遇到的问题。</p>
              <button className="signUp">报名</button>
            </div>
          </li>
        </ul>
        <div className="register_vip">
          <h3>注册成为 妙味VIP会员</h3>
          <div className="register_txt">
              <p>即刻观看妙味历年来超值的实体课程内容。</p>
              <p>感受正统的前端开发课程体系、体验超值的海量实战案例，凝聚妙味全体讲师知识精华，尽在妙味VIP！</p>
          </div>
          <strong>仅需￥199元</strong>
          <button>立即报名</button>
        </div>
        <div className="characteristic">
          <h3>妙味特色</h3>
          <ul className="characteristic_list">
              <li className="clearfix">成为VIP会员后，即刻观看“妙味VIP视频库”中任何视频</li>
              <li className="clearfix">妙味官方会不定期安排公开课，VIP会员可以零距离与讲师接触、探讨各种技术问题</li>
              <li className="clearfix">“作品展示、工作推荐、举办个人技术活动、招聘”等…</li>
          </ul>
        </div>
        <div className="works">
          <h3>学员作品</h3>
          <ul className="works_list clearfix">
            <li>
              <a href="#">
                <img src={require('../../common/images/work1.jpg').default} />
                <span className="wrork_txt">
                    <strong>时空唱片机</strong>
                    <span>
                        <em>25</em>
                        <em>986</em>
                    </span>
                </span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src={require('../../common/images/work2.jpg').default} />
                <span className="wrork_txt">
                    <strong>时空唱片机</strong>
                    <span>
                        <em>25</em>
                        <em>986</em>
                    </span>
                </span>
              </a>
            </li>
          </ul>
          <a className="more" href="#">查看更多</a>
        </div>
      </div>
    </div>
  );
}

export default connect((res) => {
  return res;
})(Index);
