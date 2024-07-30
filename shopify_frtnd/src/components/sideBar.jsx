import { useState } from "react";

import {
  faX,
  USER_ICON,
  faAngleLeft,
  FontAwesomeIcon,
} from "../configs/config.jsx";

import {
  SideBarSubMainSection,
  SingleItemBuildUp,
} from "./sub/side-bar-sub-main.jsx";

import accountDetailsRepo from "../repo/accountDetailsRepo.jsx";

/**
 * Side bar component which uses to pop out the side bar when clicked the hamburger icon in nav bar.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 27 July 2024
 * @component
 * @returns The sidebar component with the provided attributes
 * @example
 * // Example usage:
 * const <SideBar />
 * Remember to actually work this component there need to be a repo, other built in sub components to load details
 * otherwise it may or may not get served as expected.
 * return the card with the following added properties.
 */
export default function SideBar() {
  /**
   * This state change mainly focuses on toggling
   * between the main side bar view and the drop
   * down item referring side bar view.
   */
  const [visibility, setVisibility] = useState({
    isVisible: false,
    itemSet: [],
  });

  let screenHeight = window.innerHeight - 50;
  const customStyle = {
    height: screenHeight,
  };

  /**
   * This will use to get the child container detail
   * and to tell to the component whether to change or not to change.
   * @param {JSON} dataJSON This is new JSON file which replace the default visibility useState
   */
  const changeJSON = (dataJSON) => {
    setVisibility(dataJSON);
  };

  /**
   * This will only change the visibility of the side bar main view.
   */
  const changeVisibility = () => {
    setVisibility({
      isVisible: !visibility,
      itemSet: [...visibility.itemSet],
    });
  };

  /**
   * Use to get the elements of the parent sub element.
   */
  const itemArray = visibility.itemSet.map((item, index) => {
    if (index === 0) {
      return null;
    }
    return (
      <div
        onClick={() => {
          return (window.location.href = item.referral);
        }}
        className="item-container"
        key={index}
      >
        <SingleItemBuildUp name={item.itemName} />
      </div>
    );
  });

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

      {/*
        this back holder will act as the state holder for the both sub main header and its parent.
        Inside this both the sub main section and the child sub main section is embedded
      */}
      <div className="back-holder-sub-section">
        {/* Starting point of the main side sub section */}
        {!visibility.isVisible && (
          <SideBarSubMainSection
            accountDetails={accountDetailsRepo}
            styleSettings={customStyle}
            getPassingJSON={changeJSON}
          />
        )}

        {/* Starting point of the child sub main section */}
        {visibility.isVisible && (
          <div className="sub-drop-down-items" style={customStyle}>
            <div onClick={changeVisibility} className="header-with-back-icon">
              <FontAwesomeIcon icon={faAngleLeft} className="angle-left-icon" />
              <h2 className="header-sub-drop-down">{visibility.itemSet[0]}</h2>
            </div>
            <hr />
            <div className="item-list">{itemArray}</div>
          </div>
        )}
      </div>
    </div>
  );
}
