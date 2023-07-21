import "./Header.scss"
import Back from "../../assets/Icons/back.svg"
import Video from "../../assets/Icons/video-icon.svg"
import Phone from "../../assets/Icons/phone-icon.svg"
import Dots from "../../assets/Icons/3-dot.svg"

function Header(){
    return (
        <header className="header">
            <div className="header__username">
                <img src={Back} alt="back button" className="header__icon" />
                <h3 className="username__text">Cynthia B.</h3>
            </div>
            <div className="header__actions">
               <img src={Video} alt="video call button" className="header__icon" />
               <img src={Phone} alt="back button" className="header__icon" />
               <img src={Dots} alt="back button" className="header__icon" />
            </div>
        </header>
    )
}

export default Header;