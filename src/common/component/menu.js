import React from "react";
import { NavLink } from "react-router-dom";
import { nav } from "../../router/route_link";

function Menu(props) {
  return (
    <nav id="menu">
      {/*       <NavLink className="iconfont icon-home" to="/">
        首页
      </NavLink>
      <NavLink className="iconfont icon-kecheng" to="/course">
        课程安排
      </NavLink>
      <NavLink className="iconfont icon-peixunjiangshi" to="/lecturer">
        讲师团队
      </NavLink> */}
      {nav.map((item, index) => {
        return (
          <NavLink
            onTouchEnd={() => {
              props.menuHide();
            }}
            className={item.className}
            key={index}
            to={item.to}
            exact={true}
          >
            {item.name}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Menu;
