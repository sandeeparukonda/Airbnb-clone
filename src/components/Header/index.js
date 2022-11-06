import "./index.css";

import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineLeft } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  console.log("df");
  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dftcpr6nl/image/upload/v1667716263/clipart1149625_qktuhc.png"
            alt="website logo"
          />
        </div>

        <div className="nav-bar-large-container">
          <img
            className="website-logo"
            src="https://res.cloudinary.com/dftcpr6nl/image/upload/v1667659467/logo-large_glua2f.png"
            alt="website logo"
          />
          <div className="nav-menu">
            <p className="nav-menu-item">Become a host</p>

            <BiGlobe className="nav-menu-item" />

            <button className="nav-menu-button">
              <AiOutlineMenu className="nav-menu-item" />
              <FaUserCircle className="nav-menu-item" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
