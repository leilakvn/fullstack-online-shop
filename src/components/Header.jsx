import React from "react";
import { Container, Row } from "reactstrap";
import logo from "../assets/images/eco-logo.png";
import userIcon from "../assets/images/user-icon.png";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
const Header = () => {
  const nav_link = [
    { path: "home", display: "Home" },
    { path: "cart", display: "Cart" },
    { path: "shop", display: "Shop" },
  ];
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="wrap_navbar">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Our Company</h1>
                {/* <p>since 1998</p> */}
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                {nav_link.map((item, index) => (
                  <li className="menu__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "navActive" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icon">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon">
                <i className="ri-shopping-bag-line"></i>
                <span className="badge">1</span>
              </span>
              <span>
                <motion.img whileTap={{scale:1.2}} src={userIcon} alt="user" />
              </span>
            </div>
            <div className="mobile_menu">
              <span>
                <i className="ri-menu-line"></i>
              </span>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
