import React from "react";
import '../../common/css/teacher.css'

function Lecturer(props) {
  return <div id="main">
    <div className="teacher_banner">
      <h2><span>妙味团队</span></h2>
      <div className="teacher_photo_box">
        <ul className="teacher_photo_list clearfix">
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
          <li>
            <figure className="teacher_message">
              <div>
                <img src={require('../../common/images/teacher_photo.png').default} />
              </div>
              <figcaption>莫涛</figcaption>
            </figure>
          </li>
        </ul>
        <ul className="teacher_list_dot">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    </div>
    <div className="teacher_index">
        <h2>加入我们</h2>
        <ul className="teacher_list clearfix">
          <li className="active">
          <div className="message_li">
              <h3>web讲师</h3>
              <p>人数：人数不限，多多益善</p>
              <p>薪资：面议</p>        
          </div>
          </li>
          <li>
                    <div className="message_li">
                        <h3>课程顾问</h3>
                        <p>人数：3人</p>
                        <p>薪资：底薪+提成</p>
                    </div>
                </li>
                <li>
                    <div className="message_li">
                        <h3>客服</h3>
                        <p>人数：3人</p>
                        <p>薪资：面议</p>
                    </div>
                </li>
                <li>
                    <div className="message_li">
                        <h3>行政前台助理</h3>
                        <p>人数：3人</p>
                        <p>
                        薪资：底薪+提成</p>
                    </div>
                </li>
        </ul>
        <div className="welcome clearfix">
          <div className="welcome_photo">
          <img src={require('../../common/images/xiaole.png').default} />
          </div>
          <p>欢迎大家来到妙味课堂，在这里，公司文化轻松包容，且呈多元化发展倾向，职位晋级标准清晰量化，虽有上下级职称、却无论资排辈陋习……
            <span>本招聘信息长期有效</span>
          </p>
        </div>
    </div>
  </div>;
}

export default Lecturer;
