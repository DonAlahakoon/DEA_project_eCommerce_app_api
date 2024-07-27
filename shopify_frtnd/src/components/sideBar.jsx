import { faX, USER_ICON, FontAwesomeIcon } from "../configs/config.jsx";

import SideBarSubMainSection from "./sub/side-bar-sub-main.jsx";

import accountDetailsRepo from "../repo/accountDetailsRepo.jsx";

export default function SideBar() {
  return (
    <div className="shopify-side-main-bar">
      <div className="main-account-details">
        <div className="account-name-and-logo">
          <img
            src={
              accountDetailsRepo.accountImg == ""
                ? USER_ICON
                : accountDetailsRepo.accountImg
            }
            alt="User Logo"
            className="user-logo"
          />
          <h1 className="sidebar-account-name">
            {`Hello, ${accountDetailsRepo.firstName}`}
          </h1>
        </div>
        <FontAwesomeIcon icon={faX} />
      </div>
      <SideBarSubMainSection accountDetails={accountDetailsRepo} />
    </div>
  );
}
