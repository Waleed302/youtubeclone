import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const Playvideo = () => {
  return (
    <div className=' play-video'>
      <video src={video1} autoPlay controls muted></video>
      <h3>Best youtube channel to learn web development</h3>
      <div className="play-video-info">
      <p> 1523 view &bull; 2 days ago</p>
        <div>
         
          <span><img src={like} alt="" />234</span>
          <span><img src={dislike} alt="" />2</span>
          <span><img src={share} alt="" />Share</span>
          <span><img src={save} alt="" />Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img src={jack} alt="" />
        <div>
          <p>GreekStack</p>
          <span> 1 M Subscribers</span>

        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>Channels that makes learning easy</p>
        <p>Subscribe GreekStack to watch more ttorials on web development</p>
        <hr />

        <h4>130 comment</h4>
        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>jack nicholsan <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit ame ratione labore at libero neque sequi!
              Iusto unde harum fugiat sint aut ipsum!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>jack nicholsan <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit ame ratione labore at libero neque sequi!
              Iusto unde harum fugiat sint aut ipsum!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>jack nicholsan <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit ame ratione labore at libero neque sequi!
              Iusto unde harum fugiat sint aut ipsum!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>

        <div className="comment">
          <img src={user_profile} alt="" />
          <div>
            <h3>jack nicholsan <span>1 day ago</span></h3>
            <p>Lorem ipsum dolor sit ame ratione labore at libero neque sequi!
              Iusto unde harum fugiat sint aut ipsum!</p>
            <div className="comment-action">
              <img src={like} alt="" />
              <span>244</span>
              <img src={dislike} alt="" />
            </div>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Playvideo