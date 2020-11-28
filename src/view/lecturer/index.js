import React, { useEffect } from "react";
import Frame from "../../common/component/frame";
import "../../common/css/teacher.css";
import Tab from "../../common/component/tab";
import { connect } from "react-redux";
import getLecturers from "../../store/action/lecturers";

function Lecturer(props) {
  // console.log(props);
  let { data } = props.lecturers;
  let { dispatch } = props;

  function normalize(data) {
    let newData = [];
    let count = 3;
    let groupCount = Math.ceil(data.length / count);
    for (let i = 0; i < Array(groupCount).length; i++) {
      newData.push(data.slice(i * count, (i + 1) * count));
    }
    return newData;
  }

  useEffect(() => {
    dispatch(getLecturers());
  }, []);
  return (
    <Frame pullUp={true}>
      <div className="teacher_banner">
        <h2>
          <span>妙味团队</span>
        </h2>
        {data.length < 1 ? (
          ""
        ) : (
          <Tab
            data={normalize(data)}
            render={(data) => {
              return (
                <ul className="lecturer_list">
                  {data.map((item) => {
                    return (
                      <li key={item.id}>
                        <img src={item.icon} />
                        <p>{item.title}</p>
                      </li>
                    );
                  })}
                </ul>
              );
            }}
          ></Tab>
        )}
      </div>
    </Frame>
  );
}

export default connect((res) => {
  return res;
})(Lecturer);
