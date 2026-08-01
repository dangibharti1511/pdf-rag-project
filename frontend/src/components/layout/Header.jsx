import "./Header.css";

function Header() {

    return (

        <header className="header">

            <div className="header-left">

                <h3>Workspace</h3>

            </div>

            <div className="header-right">

                <button className="theme-btn">

                    🌙

                </button>

                <div className="user-avatar">

                    B

                </div>

            </div>

        </header>

    );

}

export default Header;