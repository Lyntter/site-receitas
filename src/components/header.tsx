import { FaChevronDown, FaSearch } from "react-icons/fa";

export default function Header() {
return (
    <div className="header-container">
        <div className="menutop">
            <a href="#">Home</a>
        <div className="dropdown">
            <span>
                Receitas <FaChevronDown size={16} />
            </span>

            <div className="dropdown-content">
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
                <p>Hello World!</p>
            </div>
        </div>
    </div>

    <div className="blackbox"></div>
    <img src="/resources/topimage.png" alt="top" />

    <div className="box-search">
        <FaSearch size={35}/>
    </div>

    <div className="box-login">
        <button>Login</button>
    </div>

    <div className="box-lanchearte">
        <h1>Lanche Arte</h1>
    </div>
    </div>
);
}
