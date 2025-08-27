import { FaInstagram, FaTiktok, FaFacebook, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
return (
    <div className="footer-container">
        <img src="/resources/downimage.png" alt="footer" />

        
        <div className="blackbox"></div>
        <img src="/resources/downimage.png" alt="top" />

        <div className="textdown">
        <p>Siga-nos</p>
        <div className="social-links">
            <span>
            <a href="#"><FaInstagram size={20} /> @lanchearte</a>
            </span>
            <span>
            <a href="#"><FaTiktok size={20} /> @lanchearte</a>
            </span>
            <span>
            <a href="#"><FaFacebook size={20} /> /lanchearte </a>
            </span>
            <span>
            <a href="#"><FaXTwitter size={20} /> /lanchearte</a>
            </span>
        </div>
        </div>
    </div>
);
}
