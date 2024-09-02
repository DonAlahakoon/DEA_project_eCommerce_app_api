import {
  FontAwesomeIcon,
  faAngleRight,
  faGlobe,
} from "../../configs/config.jsx";

import sideBarItemRepo from "../../repo/sideBarItemRepo.jsx";

function SideBarSubMainSection(props) {
  const generatedSideBarValues = sideBarItemRepo.map((item, index) => (
    <SideBarItems key={index} itemValues={item} />
  ));
  let screenHeight = window.innerHeight - 50;
  const customStyle = {
    height: screenHeight,
  };
  return (
    <div style={customStyle} className="main-section">
      {generatedSideBarValues}
      <h2 className="header">Help & Settings</h2>
      <div className="item-list">
        <div className="item-container">
          <p className="items">Your Account</p>
        </div>
        <div className="account-details-item-container">
          <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
          <p className="items">{props.accountDetails.language}</p>
        </div>
        <div className="account-details-item-container">
          <img
            src={props.accountDetails.countryImage}
            alt={props.accountDetails.country}
            className="country-flag"
          />
          <p className="items">{props.accountDetails.country}</p>
        </div>
      </div>
    </div>
  );
}

function SideBarItems(props) {
  return (
    <>
      <h2 className="header">{props.itemValues.listHeader}</h2>
      <div className="item-list">
        {props.itemValues.listItems.map((itemDetailContainer, itemIndex) => (
          <ListOfItems
            key={itemIndex}
            length={itemDetailContainer.length}
            name={
              itemDetailContainer.length === 1
                ? itemDetailContainer[0].itemName
                : itemDetailContainer[0]
            }
          />
        ))}
      </div>
      <hr />
    </>
  );
}

function ListOfItems(props) {
  return (
    <div className="item-container">
      {props.length === 1 ? (
        <SingleItemBuildUp name={props.name} />
      ) : (
        <MultipleItemBuildUp name={props.name} />
      )}
    </div>
  );
}

function SingleItemBuildUp(props) {
  return <p className="items">{props.name}</p>;
}

function MultipleItemBuildUp(props) {
  return (
    <>
      <p className="items">{props.name}</p>
      <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
    </>
  );
}

export { SideBarSubMainSection, SingleItemBuildUp };
