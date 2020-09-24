import React, { useCallback, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  MainNav,
  MainNavContainer,
  MobileNav,
  NavBar,
} from './styles';

import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [displayMobile, setDisplayMobile] = useState(false);

  const renderMenuItems = useCallback(() => {
    return (
      <ul>
        <li>
          <NavLink activeClassName="active" to="/login">
            <span className="menu-title">Login</span>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/sign-up">
            <span className="menu-title">Sign-Up</span>
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/">
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>
      </ul>
    );
  }, []);

  return (
    <Container>
      <MainNav>
        <MainNavContainer>
          <NavBar>
            {renderMenuItems()}

            <button
              className="mobile-trigger"
              onClick={() => setDisplayMobile(display => !display)}
            >
              <GiHamburgerMenu />
            </button>
          </NavBar>
        </MainNavContainer>
        {displayMobile && <MobileNav>{renderMenuItems()}</MobileNav>}
      </MainNav>
    </Container>
  );
};

export default Header;
