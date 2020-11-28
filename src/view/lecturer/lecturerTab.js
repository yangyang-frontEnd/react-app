import React from "react";
import Tab from "../../common/component/tab";

export default function LecturerTab(props) {
  let { data } = props;
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
  );
}
