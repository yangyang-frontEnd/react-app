import React from "react";
import Tab from "../../common/component/tab";

export default function LecturerTab(props) {
  let { data, showAlert } = props;
  function normalize(data) {
    let newData = [];
    let count = 3;
    let groupCount = Math.ceil(data.length / count);
    for (let i = 0; i < Array(groupCount).length; i++) {
      newData.push(data.slice(i * count, (i + 1) * count));
    }
    return newData;
  }

  return data.length < 1 ? (
    ""
  ) : (
    <Tab
      data={normalize(data)}
      render={(data) => {
        return (
          <ul className="lecturer_list">
            {data.map((item) => {
              let point = {};
              return (
                <li
                  key={item.id}
                  onTouchStart={(e) => {
                    // console.log(e);
                    let touch = e.changedTouches[0]
                    point.x=touch.pageX
                    point.y=touch.pageY

                  }}
                  onTouchEnd={(e) => {
                    // console.log(point);
                    let touch = e.changedTouches[0]
                    let nowPoint = {
                        x:touch.pageX,
                        y:touch.pageY
                    }
                    if (Math.abs(nowPoint.x - point.x)<5 && Math.abs(nowPoint.y - point.y)<5) {
                      // console.log("点击");
                      showAlert(item)
                    }
                  }}
                >
                  <img src={item.icon} />
                  <p>{item.title}</p>
                </li>
              );
            })}
          </ul>
        );
      }}
    ></Tab>
  );
}
