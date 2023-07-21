import "./Header.scss"

function Header(){
    return (
        <header className="header">
            <div className="header__username">
                <div className="header__pholder"></div>
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