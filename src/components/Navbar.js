const Navbar = () => {
    return (
        <div className="navbar">
            <p id="logo">字</p>
            <input type="search" placeholder="Search characters, places, series, etc" maxLength="55"></input>
            <button className="search-btn"><i class="fas fa-search"></i></button>
            <button>
                <p className="buttonIcon">あ</p>
                <p>kana</p>
            </button>
            <button>
                <p className="buttonIcon">口</p>
                <p id="secondButtonDesc">radical</p>
            </button>
            <button>
                <p className="buttonIcon">✩</p>
                <p>favs</p>
            </button>
        </div>
    );
}
 
export default Navbar;
