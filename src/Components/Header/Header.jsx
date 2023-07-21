import "./Header.scss"
import backIcon from "../../assets/Icons/back-black.svg";

function Header(){
    return (
        <header className="header">
            <div className="header__username">
            <img src={backIcon} alt='back icon' className='header__backIcon' />
                <div className="header__pholder"></div>
                <h3 className="username__text">Cynthia B.</h3>
            </div>
            <div className="header__actions">
                <div className="header__pholder"></div>
                <div className="header__pholder"></div>
                <div className="header__pholder"></div>
            </div>
        </header>
    )
}

export default Header;