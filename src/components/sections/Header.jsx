import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  MdOutlineKeyboardReturn,
  MdOutlineMailOutline,
  MdOutlineSpaceDashboard,
} from "react-icons/md";
import {
  CgFileDocument,
  CgShoppingBag,
  CgShoppingCart,
  CgSmartphone,
} from "react-icons/cg";
import { GoKebabVertical } from "react-icons/go";
import { RiGlobalLine } from "react-icons/ri";
import { TbArrowsDiagonalMinimize2, TbSquareRoundedPlus } from "react-icons/tb";
import { BiBell, BiCopy, BiCube } from "react-icons/bi";
import { AiOutlineCodepen, AiOutlineMenu } from "react-icons/ai";
import {
  FiHardDrive,
  FiLogOut,
  FiRefreshCw,
  FiSave,
  FiSettings,
  FiSpeaker,
  FiTag,
} from "react-icons/fi";
import { IoMdQrScanner, IoMdShuffle } from "react-icons/io";
import { TiDocumentDelete } from "react-icons/ti";
import Logo from "../../assets/img/logo.png";
import AvatarImg from "../../assets/img/avatar.jpg";
import InputSearch from "../shared/InputSearch";

const Header = () => {
  const location = useLocation();
  const menu = useRef();
  const overlay = useRef();
  const buttonMenuRef = useRef();
  const menuProfile = useRef();

  const closeMenu = () => {
    menu.current.classList.remove("menu--open");
    overlay.current.classList.remove("overlay--open");
    buttonMenuRef.current.classList.remove("menu__icon--close");
  };

  const handleClickToogleMenu = () => {
    menu.current.classList.toggle("menu--open");
    buttonMenuRef.current.classList.toggle("menu__icon--close");
    overlay.current.classList.toggle("overlay--open");
  };

  const handleClickToogleMenuProfile = () => {
    menuProfile.current.classList.toggle("menu--open");
  };

  useEffect(() => {
    const handleWindowResize = () => {
      if (innerWidth > 768) closeMenu();
    };
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  });

  return (
    !location.pathname.includes("auth") && (
      <header className="header">
        <nav className="nav">
          <div className="container nav-container">
            <button
              onClick={handleClickToogleMenuProfile}
              className="button button--menu-icon"
            >
              <GoKebabVertical size={30} color="#FF9F43" />
            </button>
            <ul ref={menuProfile} className="menu menu--profile">
              <li>
                <button className="button button--profile">
                  <h4 className="menu-profile__title">John Smilga</h4>
                  <h5 className="menu-profile__subtitle">Super Admin</h5>
                  <img
                    className="menu-profile__avatar"
                    width={50}
                    src={AvatarImg}
                    alt="Avatar"
                  />
                </button>
              </li>
              <li>
                <Link
                  className="menu__item__link menu__item__link--profile"
                  to="#"
                  style={{
                    "--text": '"Settings"',
                  }}
                >
                  <FiSettings size={20} color="#676666" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="menu__item__link menu__item__link--profile"
                  style={{
                    "--text": '"Notifications"',
                  }}
                >
                  <BiBell size={20} color="#676666" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="menu__item__link menu__item__link--profile"
                  style={{
                    "--text": '"Emails"',
                  }}
                >
                  <MdOutlineMailOutline size={20} color="#676666" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="menu__item__link menu__item__link--profile"
                  style={{
                    "--text": '"Scanner"',
                  }}
                >
                  <IoMdQrScanner size={20} color="#676666" />
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="menu__item__link menu__item__link--profile"
                  style={{
                    "--text": '"Languages"',
                  }}
                >
                  <RiGlobalLine size={20} color="#676666" />
                </Link>
              </li>
            </ul>
            <InputSearch />
            <img className="nav__img" width={40} src={Logo} alt="logo" />
            <div
              ref={overlay}
              onClick={closeMenu}
              className="overlay overlay--hamburger"
            ></div>
            <button
              ref={buttonMenuRef}
              onClick={handleClickToogleMenu}
              className="button button--menu-icon menu__icon"
            >
              <div className="menu__icon__bar" />
              <div className="menu__icon__bar" />
              <div className="menu__icon__bar" />
            </button>
            <ul ref={menu} className="menu menu--hamburger">
              <li className="menu__item menu__item--hamburger">
                <h3 className="menu__item__title menu__item__title--hamburger-section">
                  Main
                </h3>
                <ul className="menu menu--hamburger-section">
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../dashboard"
                    >
                      Dashboard
                      <MdOutlineSpaceDashboard size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../aplication"
                    >
                      Application
                      <CgSmartphone size={20} />
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item--hamburger">
                <h3 className="menu__item__title menu__item__title--hamburger-section">
                  Products
                </h3>
                <ul className="menu menu--hamburger-section">
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../products"
                    >
                      Products
                      <BiCube size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../create-product"
                    >
                      Create Product
                      <TbSquareRoundedPlus size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../category"
                    >
                      Category
                      <AiOutlineCodepen size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../brands"
                    >
                      Brands
                      <FiTag size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../sub-category"
                    >
                      Sub Category
                      <FiSpeaker size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../print-barcode"
                    >
                      Print Barcode
                      <AiOutlineMenu size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../import-products"
                    >
                      Import Products
                      <TbArrowsDiagonalMinimize2 size={20} />
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item--hamburger">
                <h3 className="menu__item__title menu__item__title--hamburger-section">
                  Sales
                </h3>
                <ul className="menu menu--hamburger-section">
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../sales"
                    >
                      Sales
                      <CgShoppingCart size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../invoces"
                    >
                      Invoces
                      <CgFileDocument size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../copy"
                    >
                      Copy
                      <BiCopy size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../quoatation"
                    >
                      Quotation
                      <FiSave size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../pos"
                    >
                      POS
                      <FiHardDrive size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../transferm"
                    >
                      Transfer
                      <IoMdShuffle size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../return"
                    >
                      Return
                      <MdOutlineKeyboardReturn size={20} />
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item--hamburger">
                <h3 className="menu__item__title menu__item__title--hamburger-section">
                  Purchases
                </h3>
                <ul className="menu menu--hamburger-section">
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../purchases"
                    >
                      Purchases
                      <CgShoppingBag size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../import-purchases"
                    >
                      Import Purchases
                      <TbArrowsDiagonalMinimize2 size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../purchase-order"
                    >
                      Purchase Order
                      <TiDocumentDelete size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../purchase-return"
                    >
                      Purchase Return
                      <FiRefreshCw size={20} />
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className="menu__item menu__item--hamburger">
                <h3 className="menu__item__title menu__item__title--hamburger-section">
                  Settings
                </h3>
                <ul className="menu menu--hamburger-section">
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../settings"
                    >
                      Settings
                      <FiSettings size={20} />
                    </NavLink>
                  </li>
                  <li className="menu__item menu__item--hamburger-section">
                    <NavLink
                      className={({ isActive }) =>
                        "menu__item__link menu__item__link--hamburger-section".concat(
                          isActive ? " menu__item__link--active" : ""
                        )
                      }
                      relative
                      to="../logout"
                    >
                      Logout
                      <FiLogOut size={20} />
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  );
};

export default Header;
