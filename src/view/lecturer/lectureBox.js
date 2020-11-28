import React from "react";

export default function LectureBox(props) {
  let { alertData,setShow } = props;
  console.log(alertData);
  return (
    <aside className="elastic">
      <div className="elastic_box">
        <span className="close" onTouchEnd={()=>{
            setShow(false)
        }}>关闭</span>
        <div className="elastic_img">
          <img
            // src={require("../../common/images/teacher_photo.png").default}
            src={alertData.icon}
            alt=""
          />
        </div>
        <div className="elastic_txt">
          <h3>{alertData.title}-妙味课堂 全职讲师</h3>
          <div className="elastic_content">
            {/*                     <p>
                        WEB强势品牌 HTML5梦工厂 联合 IT实体培训机构 妙味课堂 强强联手、为广大学员打造了崭新的IT培训新品牌：WEB学院，近期在上海开设第一个分点，为大家带来全新授课模式与最快乐的学习体验！
                    </p>
                    <p>
                        课程总共设置5个月学习周期，共20多次快乐学员欢乐聚会、IT界著名大牛分享经验，力图让大家扎实学到实用IT技能、找到一份满意工作的同时，快乐享受IT技术、重新认识IT技术的有趣和惊喜！
                    </p>
                    <span className="scroll"></span> */}
            <div
              dangerouslySetInnerHTML={{
                __html: alertData.content,
              }}
            ></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
