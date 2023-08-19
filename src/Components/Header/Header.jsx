import "./Header.scss"
import backIcon from "../../assets/Icons/back-black.svg";
import phoneIcon from "../../assets/Icons/phone-icon.svg";
import videoIcon from "../../assets/Icons/video-icon.svg";
import dotIcon from "../../assets/Icons/3-dot.svg";


function Header(){
    return (
        <header className="header">
            <div className="header__username">
            <img src={backIcon} alt='back icon' className='header__backIcon' />
                <div className="header__pholder"></div>
                <h3 className="username__text">Cynthia B.</h3>
            </div>
            <div className="header__actions">
                <img src={videoIcon} alt="video icon" className="header__actions-icon"/>
                <img src={phoneIcon} alt="phone icon" className="header__actions-icon"/>
                <img src={dotIcon} alt="dot icon" className="header__actions-icon--dot"/>
            </div>
        </header>
    )
}

export default Header;