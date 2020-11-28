import React, { useEffect } from "react";
import Frame from "../../common/component/frame";
import "../../common/css/teacher.css";
import { connect } from "react-redux";
import getLecturers from "../../store/action/lecturers";
import LecturerTab from "./lecturerTab";
import Join from "./join";
import Footer from "./footer";

function Lecturer(props) {
  // console.log(props);
  let { data } = props.lecturers;
  let { dispatch } = props;

  useEffect(() => {
    dispatch(getLecturers());
  }, []);
  return (
    <Frame pullUp={false}>
      <div className="main">
        <div className="teacher_banner">
          <h2>
            <span>妙味团队</span>
          </h2>
          <LecturerTab data={data}></LecturerTab>
        </div>
        <Join></Join>
        <Footer></Footer>
      </div>
    </Frame>
  );
}

export default connect((res) => {
  return res;
})(Lecturer);
