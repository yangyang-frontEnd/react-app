import React from "react";
import Index from "../view/index";
import Course from "../view/course/index";
import Lecturer from "../view/lecturer";
import Work from "../view/work";
import Login from "../view/login";

const routeList = [
  {
    name: "首页",
    path: "/",
    exact: true,
    render: (props) => {
      return <Index {...props}></Index>;
    },
  },
  {
    name: "课程安排",
    path: "/course",
    exact: true,
    render: (props) => {
      return <Course {...props}></Course>;
    },
  },
  {
    name: "讲师团队",
    path: "/lecturer",
    exact: true,
    render: (props) => {
      return <Lecturer {...props}></Lecturer>;
    },
  },
  {
    name: "作品详情",
    path: "/work",
    exact: true,
    render: (props) => {
      return <Work {...props}></Work>;
    },
  },
  {
    name: "登录",
    path: "/login",
    exact: true,
    render: (props) => {
      return <Login {...props}></Login>;
    },
  },
];

const nav = [
  {
    name: "首页",
    to: "/",
    exact: true,
    className: "iconfont icon-home",
  },
  {
    name: "课程安排",
    to: "/course",
    exact: true,
    className: "iconfont icon-kecheng",
  },
  {
    name: "讲师团队",
    to: "/lecturer",
    exact: true,
    className: "iconfont icon-peixunjiangshi",
  },
];

export  {routeList,nav};
