import styled, { keyframes } from "styled-components";
import { shade } from "polished";

export const Container = styled.div``;

export const TopNav = styled.div`
  background: #505050;
  height: 30px;
  display: flex;
  @media screen and (max-width: 985px) {
    display: none;
  }

  > ul {
    max-width: 1080px;
    width: 100%;
    padding: 0px 20px;
    justify-content: flex-end;

    margin: 0 auto;
    display: flex;
    list-style-type: none;

    li {
      align-items: center;
      display: flex;
      margin-left: 40px;
      a {
        color: #fff;
        font-weight: 600;
        font-size: 12px;
        letter-spacing: 0.06em;
        text-decoration: none;
        align-items: center;
        display: flex;

        &:hover {
          color: #f7a21e;
          transition: color 0.6s ease-in-out;
        }

        svg {
          margin-left: 10px;
          color: #f7a21e;
          font-size: 13px;
        }
      }
    }
  }
`;

export const MainNav = styled.div`
  background: #fff;
  box-shadow: 4px 2px 6px 0px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 985px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 985px) {
    display: flex;
    place-content: center;
    z-index: 2;
    position: relative;
  }
`;

export const MainNavContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;

  @media screen and (max-width: 985px) {
    display: flex;
    flex-direction: row;

    img {
      height: 50px;
      transition: height 0.4s ease-in-out;
    }
    .mobile-trigger {
      display: visible;
      border: none;
      background: none;
      svg {
        color: #505050;
        width: 30px;
        height: 100%;
      }
    }
  }

  @media screen and (min-width: 985px) {
    margin: 10px auto;
    max-width: 1080px;
    align-items: center;

    img {
      transition: height 0.4s ease-in-out;
      height: 90px;
    }

    .mobile-trigger {
      display: none;
    }
  }
`;

export const NavBar = styled.div`
  display: flex;

  a {
    @media screen and (min-width: 985px) {
      text-decoration: none;
      font-weight: 600;
      font-size: 15px;
      display: inline-block;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
      padding: 5px 10px;
      margin: 0px 1px;
      transition: color 0.45s;
      border-radius: 2px;
    }

    @media screen and (max-width: 985px) {
      text-decoration: none;
      color: #f7a21e;
    }
  }
  > ul {
    list-style-type: none;
    display: flex;

    @media screen and (max-width: 985px) {
      display: none;
    }

    li {
      @media screen and (max-width: 985px) {
        display: flex;
        width: 100%;
        align-items: center;
        height: 60px;
        padding: 5px 15px;
        border-bottom: 1px solid #f0f3f7;
        :first-of-type {
          border-top: 1px solid #f0f3f7;
        }
      }
      &:hover {
        .submenu {
          display: block;
        }
      }
      a {
        color: #505050;
        position: relative;
        @media screen and (max-width: 985px) {
          color: #f7a21e;
        }

        &:hover {
          color: #1d52a1;
          transition: color 0.3s ease-in-out;

          &:after {
            width: 100%;
          }
        }

        &:active {
          color: black;
        }

        &:after {
          content: "";
          height: 2px;
          background-color: #f7a21e;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          transition: 0.4s;
        }
      }

      .submenu {
        display: none;
        list-style-type: none;
        //margin-left: -20px;
        position: absolute;
        background-color: #fff;
        box-shadow: 0px 3px 6px #00000029;

        li {
          a {
            font-size: 13px;
            font-weight: 400px;
            text-transform: capitalize;
            width: 100%;
            border-bottom: 1px solid #f0f3f7;
            padding: 8px 13px;

            &:hover {
              color: #1d52a1;
              background-color: #f8f8f8;
              border-bottom: 1px solid #eee;
              transition: color 0.3s ease-in-out;
              transition: background-color 0.2s ease-in-out;
            }

            .active {
              background-color: #f8f8f8;
              border-bottom: 1px solid #eee;
            }
          }
        }
      }
      > .active {
        color: #1d52a1;
      }
    }
  }

  .donateButton {
    display: flex;
    @media screen and (max-width: 1118px) {
      display: none;
    }
    color: #fff;
    background-color: #1d52a1;

    &:hover {
      background-color: ${shade(0.2, "#1d52a1")};
      transition: background-color 0.2s ease-in-out, color 0.6s ease-in-out;
    }
  }
`;

export const MobileNav = styled.div`
  .nav-menu {
    @media screen and (min-width: 985px) {
      display: none;
    }

    box-shadow: 4px 2px 6px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    list-style: none;
    flex-wrap: wrap;

    a {
      display: flex;
      width: 100%;
      align-items: center;
      flex-wrap: wrap;
      border-bottom: 1px solid #f0f3f7;
      text-decoration: none;
      color: #f7a21e;

      .menu-title {
        padding: 20px 15px;
      }

      :first-of-type {
        border-top: 1px solid #f0f3f7;
      }

      &:hover {
        color: ${shade(0.2, "#f7a21e")};
        background-color: #f8f8f8;
        border-top: 1px solid #eee;
        border-bottom: 1px solid #eee;
        transition: color 0.3s ease-in-out;
        transition: background-color 0.2s ease-in-out;
      }

      .submenu {
        background-color: #f2f3f3;
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        list-style: none;
        a {
          :last-of-type {
            border-top: 0px;
          }
          .sub-menu-title {
            padding: 20px 25px;
          }
        }
      }
    }
    .active {
      color: #1d52a1;
      background-color: #f8f8f8;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
    }
  }
`;
