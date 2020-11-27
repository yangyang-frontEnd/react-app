import React from "react";
import '../../common/css/miiaov.css'

function Work(props) {
  console.log(props);
  return (
    <div>
      <div className="main">
        <div className="miiaov_box">
          <article className="miiaov_article">
            <h3>
              <span>妙味JS班学员</span>
              <span>李敏【淡雅版CSS3+JS相册】作品</span>
            </h3>
            <div className="miiaov_txt">
              <p>现在的女生学习前端越来越多，技术也是巾帼不让须眉，技术宅男们，你们要继续提高水平啦，不然你和女生们的技术一样，然后都跑去面试的话哈哈，在招聘选择上你懂的！</p>
              <div className="miiaov_img">
                <img src={require('../../common/images/work1.jpg').default}></img>
              </div>
              <p>现在用CSS3完成各种小动画，来取代原有的GIF图，的确是方便许多~</p>
              <p>
              点击进入以后，就是一个向前翻动的动画方式，虽然弹性动画并不那么柔和不过学就用的感觉，应该是所有初学者的想法吧！
              </p>
              <div className="miiaov_img">
                <img src={require('../../common/images/work2.jpg').default}></img>
              </div>
              <p>虽然这个作品没有完成，但是从目前的状态来看，仍然不失为一件可被用于商用的作品，期待她完成以后的样子。</p>
              <p>在线地址：<a href="https://miaov.com/index.php/news/newsDetail/nid/215">https://miaov.com/index.php/news/newsDetail/nid/215</a> </p>
            </div>
          </article>
          <article>
            <p className="miiaov_zan">
              <span>有10人学的很赞</span>
              <span>赞</span>
            </p>
            <div className="output">
              <input type="text" placeholder="发表评论......"/>
            </div>
            <ul className="comment_list">
                   <li>
                       <div className="user_comment clearfix">
                           <img src="images/comment_photo.png" alt=""/>
                           <span>xuezhige</span>
                       </div>
                       <div className="comment_txt">
                        作品很棒，希望自己也能做出这么好的作品
                       </div>
                       <div className="comment_footer">
                           <time>17分钟前</time>
                           <button>编辑</button>
                       </div>
                   </li>
                <li>
                    <div className="user_comment clearfix">
                        <img src="images/comment_photo.png" alt=""/>
                        <span>雯雯</span>
                    </div>
                    <div className="comment_txt">
                        作品很棒，希望自己也能做出这么好的作品
                    </div>
                    <div className="comment_footer">
                        <time>17分钟前</time>
                        <button>编辑</button>
                    </div>
                    <ul className="comment_list recomment">
                        <li>
                            <div className="user_comment clearfix">
                                <img src="images/comment_photo.png" alt=""/>
                                <span>wowo</span>
                            </div>
                            <div className="recomment_txt">
                                回复 <span>雯雯</span>:
                                <span>一起加油</span>
                            </div>
                            <div className="comment_footer">
                                <time>17分钟前</time>
                                <button>编辑</button>
                            </div>
                        </li>
                    </ul>
                </li>
               </ul>
          </article>
        </div>
      </div>
      <footer className="miiapv_footer">
        回复本帖
      </footer>
    </div>
  )
}

export default Work;
