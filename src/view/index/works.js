import React from "react";
import {Link} from "react-router-dom"

function Workers(props) {
  let { data,loading,loadEnd } = props.works;
  // console.log(data);
  return (
    <div className="works">
    <h3>学员作品</h3>
    {
      data?    <ul className="works_list clearfix">
    {
      data.map((item)=>{
        return (
          <li key={item.id}>
          <Link to={`/work/${item.id}`}>
            <img
              alt=""
              src={item.icon}
              className="work_a"
            />
            <span className="wrork_txt clearfix work_a">
              <strong className="work_a">{item.title}</strong>
              <span className="work_a">
                <em className="work_a">{item.message}</em>
                <em className="work_a">{item.good}</em>
              </span>
            </span>
          </Link>
        </li>
        )
      })
    }
    </ul>:""
    }

  <a className="more">{loadEnd?"没有新的数据了":(loading?"正在加载中":"上滑加载更多")}</a>
      {/* 正在加载中 */}
      {/* 没有新的数据了 */}
    </div>
/*     <div className="works">
      <h3>学员作品</h3>
      <ul className="works_list clearfix">
        <li>
          <a href="#">
            <img
              alt=""
              src={require("../../common/images/work1.jpg").default}
            />
            <span className="wrork_txt clearfix">
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
            <img
              alt=""
              src={require("../../common/images/work2.jpg").default}
            />
            <span className="wrork_txt clearfix">
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
            <img
              alt=""
              src={require("../../common/images/work3.jpg").default}
            />
            <span className="wrork_txt clearfix">
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
            <img
              alt=""
              src={require("../../common/images/work4.jpg").default}
            />
            <span className="wrork_txt clearfix">
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
            <img
              alt=""
              src={require("../../common/images/work5.jpg").default}
            />
            <span className="wrork_txt clearfix">
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
            <img
              alt=""
              src={require("../../common/images/work6.jpg").default}
            />
            <span className="wrork_txt clearfix">
              <strong>时空唱片机</strong>
              <span>
                <em>25</em>
                <em>986</em>
              </span>
            </span>
          </a>
        </li>
      
      </ul>
      <a className="more">上滑加载更多......</a>
      // {/* 正在加载中 */ //}
      // {/* 没有新的数据了 */}
    // </div> */
  );
}

export default Workers;
