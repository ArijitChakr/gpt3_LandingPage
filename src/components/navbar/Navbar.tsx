import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/GPT-3.svg";
import { useState } from "react";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt3">What is GPT?</a>
      </p>
      <p>
        <a href="#possibility">Open AI</a>
      </p>
      <p>
        <a href="#features">Case Studies</a>
      </p>
      <p>
        <a href="#blog">blog</a>
      </p>
    </>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {menu ? (
          <RiCloseLine color="#fff" size={27} onClick={() => setMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={27} onClick={() => setMenu(true)} />
        )}
        {menu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menu />
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>sign in</p>
                <button type="button">Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
