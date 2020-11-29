import React, { useEffect, useState } from "react";
import Frame from "../../common/component/frame";
import "../../common/css/teacher.css";
import { connect } from "react-redux";
import getLecturers from "../../store/action/lecturers";
import LecturerTab from "./lecturerTab";
import Join from "./join";
import Footer from "./footer";
import LectureBox from "./lectureBox";

function Lecturer(props) {
  const [show, setShow] = useState(false);
  const [alertData, setAlertData] = useState(null);

  // console.log(props);
  let { data } = props.lecturers;
  let { dispatch } = props;

  function showAlert(data) {
    setAlertData(data);
    setShow(true);
  }

  function hideAlert() {
    setShow(false)
  }

  useEffect(() => {
    dispatch(getLecturers());
  }, []);
  return (
    <div>
      <Frame pullUp={true}>
        <div className="main" style={{ backgroundColor: "#fff" }}>
          <div className="teacher_banner">
            <h2>
              <span>妙味团队</span>
            </h2>
            <LecturerTab data={data} showAlert={showAlert}></LecturerTab>
          </div>
          <Join></Join>
          <Footer></Footer>
        </div>
      </Frame>
      {show ? (
        <LectureBox alertData={alertData} hideAlert={hideAlert}></LectureBox>
      ) : (
        ""
      )}
    </div>
  );
}

export default connect((res) => {
  return res;
})(Lecturer);
