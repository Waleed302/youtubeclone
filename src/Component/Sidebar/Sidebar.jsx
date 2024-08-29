import React from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import jack from '../../assets/jack.png'
import news from '../../assets/news.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import cameron from '../../assets/cameron.png'
import megan from '../../assets/megan.png'

const Sidebar = ({sidebar, category, setCategory}) => {
    return (
        <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={home} alt="" /> <p> Home</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={game_icon} alt="" /> <p>Gamings</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={automobiles} alt="" /> <p> Auto Mobile</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={entertainment} alt="" /> <p> Entertainment</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={tech} alt="" /> <p> Tech</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={music} alt="" /> <p> Music</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={blogs} alt="" /> <p> Blogs</p>
                </div>
            </div>
            <div className="shotcut-links">
                <div className="side-links"onClick={()=>setCategory(0)}>
                    <img src={news} alt="" /> <p> News</p>
                </div>
                <hr />
            </div>
            <div className="subscribed-list">
                <h3>Subscribed</h3>
                <div className="side-links">
                    <img src={jack} alt="" /> <p>PewDiePie</p>
                </div>
                <div className="side-links">
                    <img src={simon} alt="" /> <p>MrBeast</p>
                </div>
                <div className="side-links">
                    <img src={tom} alt="" /> <p>Justin Bieber</p>
                </div>
                <div className="side-links">
                    <img src={megan} alt="" /> <p>5-Minute Craft</p>
                </div>
                <div className="side-links">
                    <img src={cameron} alt="" /> <p>Nas Daily</p>
                </div>
            </div>

        </div>
    )
}

export default Sidebar