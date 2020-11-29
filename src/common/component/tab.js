import React, { useEffect, useRef, useState } from "react";
import BScroll from "better-scroll";
// import Slide from '@better-scroll/slide'
// BScroll.use(Slide)
export default function Tab(props) {
  // console.log(props);
  let { data, render } = props;

  let bannerWrap = useRef(null);

  let bScroll = null;

  let [now, setNow] = useState(0);

  useEffect(() => {
    bScroll = new BScroll(bannerWrap.current, {
      scrollX: true,
      scrollY: false,
      eventPassthrough: "vertical",
      disableTouch: true,
      slide: {
        threshold: 100,
        interval: 1000,
      },
      momentum: false,
      bounce: false,
      stopPropagation: true,
    });

    bScroll.on("slideWillChange", (page) => {
      // console.log(page);
      setNow(page.pageX);
    });
  }, []);
  return (
    <div className="banner">
      <div className="banner_img" ref={bannerWrap}>
        <ul className="banner_list clearfix">
          {data.map((item, index) => {
            return <li key={index}>{render(item)}</li>;
          })}
        </ul>
        {data.length <= 1 ? (
          ""
        ) : (
          <ul className="banner_nav">
            {data.map((item, index) => {
              return (
                <li key={index} className={index === now ? "active" : ""}></li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
