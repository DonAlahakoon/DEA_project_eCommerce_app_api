/**
 * config.jsx file,
 * which uses to do the basic initializations in the react project.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 27 July 2024
 * @returns Every single import will returned
 */

//fontawesome initialization
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { faStar as STAR_FILLED } from "@fortawesome/free-solid-svg-icons";
import { faStar as STAR_EMPTY } from "@fortawesome/free-regular-svg-icons";

//import images
import CART_ICON from "../assets/icons/cart-icon.png";
import SEARCH_ICON from "../assets/icons/search-icon.png";
import HAMBURGER_ICON from "../assets/icons/bars-solid.svg";
import USER_ICON from "../assets/icons/user-solid.svg";

import _1 from "../assets/react.svg";

//components importing
import CreateAccount from "../components/accountCreation.jsx";

//sub category
import Body from "../components/sub/body.jsx";
import Header from "../components/sub/header.jsx";
import Img from "../components/sub/img.jsx";
import Card from "../components/sub/card.jsx";
import { NavBar, AccountCreationNavBar } from "../components/sub/navbar.jsx";
import SideBar from "../components/sub/sideBar.jsx";
import {
  SideBarSubMainSection,
  SingleItemBuildUp,
} from "../components/sub/sideBarSubMain.jsx";
import Stars from "../components/sub/star.jsx";

//Repo importing
import accountDetailsRepo from "../repo/accountDetailsRepo.jsx";
import cardRepo from "../repo/cardRepo.jsx";
import sideBarItemRepo from "../repo/sideBarItemRepo";

export {
  //icon export
  FontAwesomeIcon,
  faAngleRight,
  CART_ICON,
  SEARCH_ICON,
  HAMBURGER_ICON,
  faX,
  faGlobe,
  faAngleLeft,
  USER_ICON,
  faCaretRight,
  //image export
  _1,
  STAR_FILLED,
  STAR_EMPTY,
  //components export
  CreateAccount,
  //sub category Components
  Card,
  NavBar,
  AccountCreationNavBar,
  SideBar,
  Body,
  Header,
  Img,
  SideBarSubMainSection,
  SingleItemBuildUp,
  Stars,
  //repo exporting
  accountDetailsRepo,
  cardRepo,
  sideBarItemRepo,
};
