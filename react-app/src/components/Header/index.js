import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  MainNav,
  MainNavContainer,
  MobileNav,
  NavBar,
} from "./styles";

//import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [mainMenu, setMainMenu] = useState([]);
  const [displayMobile, setDisplayMobile] = useState(false);

  useEffect(() => {
    setMainMenu([
      { url: "/", title: "Home" },
      { url: "/login", title: "Login" },
      { url: "/sign-up", title: "Sign-Up" },
    ]);
  }, []);

  const renderMainMenu = useCallback(() => {
    return mainMenu.map((item, index) => (
      <li key={item.title}>
        <NavLink exact={index === 0} activeClassName="active" to={item.url}>
          <span className="menu-title">{item.title}</span>
        </NavLink>
      </li>
    ));
  }, [mainMenu]);

  return (
    <Container>
      <MainNav>
        <MainNavContainer>
          <NavBar>
            <ul>{renderMainMenu()}</ul>

            <button
              className="mobile-trigger"
              onClick={() => setDisplayMobile((display) => !display)}
            >
              *
            </button>
          </NavBar>
        </MainNavContainer>
        {displayMobile && (
          <MobileNav>
            <ul className="nav-menu">{renderMainMenu()}</ul>
          </MobileNav>
        )}
      </MainNav>
    </Container>
  );
};

export default Header;
