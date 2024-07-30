import {
  FontAwesomeIcon,
  faAngleRight,
  faGlobe,
  sideBarItemRepo,
} from "../../configs/config.jsx";

/**
 * Side bar sub main section component,
 * which uses to load a single section in the side bar component.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 28 July 2024
 * @component
 * @param {object} props Use to get the account details repo.
 * @returns The sub section component with the provided attributes
 * @example
 * // Example usage:
 * const <SideBarSubMainSection accountDetails={accountDetailsRepo} />
 * Remember to actually work this component there need to be a repo, other built in sub components to load details
 * otherwise it may or may not get served as expected.
 * return the sideBarSubSection with the following added properties.
 */
function SideBarSubMainSection(props) {
  /**
   * This will generate the Side bar item values and other important values.
   */
  const generatedSideBarValues = sideBarItemRepo.map((item, index) => (
    <SideBarItems
      key={index}
      getPassingJSON={props.getPassingJSON}
      itemValues={item}
    />
  ));
  return (
    <div style={props.styleSettings} className="main-section">
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

/**
 * Side bar items component,
 * which is developed to taken care of the details loaded in the main sub section.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 28 July 2024
 * @component
 * @param {object} props to get the repo details.
 * @returns The sub section component with the provided attributes
 * @example
 * // Example usage:
 * const <SideBarItems key={index} itemValues={item} />
 * Remember to actually work this component there need to be a repo, other built in sub components to load details
 * otherwise it may or may not get served as expected.
 * return the side bar items with the following added properties.
 */
function SideBarItems(props) {
  /**
   * Owner: Demesh Fernando
   * Created Date: 28 July 2024
   * @param {string} labelName Name of clicking container
   * @returns Multiple Items available drop down items and their values
   */
  const passLabelNameAndStateJSON = (labelName) => {
    let itemList;
    for (let i = 0; i < props.itemValues.listItems.length; i++) {
      if (props.itemValues.listItems[i].length !== 1) {
        if (props.itemValues.listItems[i][0] === labelName) {
          itemList = props.itemValues.listItems[i];
        }
      }
    }

    props.getPassingJSON({
      isVisible: true,
      itemSet: itemList,
    });
  };
  return (
    <>
      <h2 className="header">{props.itemValues.listHeader}</h2>
      <div className="item-list">
        {props.itemValues.listItems.map((itemDetailContainer, itemIndex) => {
          return (
            <ListOfItems
              key={itemIndex}
              getPassingJSON={passLabelNameAndStateJSON}
              length={itemDetailContainer.length}
              name={
                itemDetailContainer.length === 1
                  ? itemDetailContainer[0].itemName
                  : itemDetailContainer[0]
              }
              referral={
                itemDetailContainer.length === 1
                  ? itemDetailContainer[0].referral
                  : null
              }
            />
          );
        })}
      </div>
      <hr />
    </>
  );
}

/**
 * List of items component,
 * which is use to decide whether the load single item button or multi item button.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 28 July 2024
 * @component
 * @param {object} props to get required params like name and the length of the section.
 * @returns The List of items component with the provided attributes
 * @example
 * // Example usage:
 * const <ListOfItems
            key={A unique index}
            length={Length of the item loading repo}
            name={
              Main name
            }
          />
 * Remember to actually work this component there need to be a repo, other built in sub components to load details
 * otherwise it may or may not get served as expected.
 * return the List of items with the following added properties.
 */
function ListOfItems(props) {
  /**
   * Owner: Demesh Fernando
   * Created Date: 28 July 2024
   * @returns The name of the label will returned here.
   */
  const passLabelName = () => {
    props.getPassingJSON(props.name);
  };

  return (
    <div
      onClick={
        props.length === 1
          ? () => (window.location.href = props.referral)
          : passLabelName
      }
      className="item-container"
    >
      {props.length === 1 ? (
        <SingleItemBuildUp name={props.name} />
      ) : (
        <MultipleItemBuildUp name={props.name} />
      )}
    </div>
  );
}

/**
 * Single item build up component,
 * which is use to get only single event with onClick property.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 28 July 2024
 * @component
 * @param {object} props to pass the name of the property and the click event actions.
 * @returns A clickable div
 * @example
 * // Example usage:
 * const <SingleItemBuildUp name={props.name} />;
 * Remember to actually work this component there need to be a name and the onclick event working function mapping
 * otherwise it may or may not get served as expected.
 */
function SingleItemBuildUp(props) {
  return <p className="items">{props.name}</p>;
}

/**
 * Multiple item build up component,
 * which is used to use when there are multiple referral links to consider.
 * Owner: Demesh Fernando
 * Created Date: 27 July 2024
 * Last updated Date: 28 July 2024
 * @component
 * @param {object} props to pass the name of the property and the Clicking event referrals.
 * @returns A clickable div
 * @example
 * // Example usage:
 * const <MultipleItemBuildUp name={props.name} />
 *
 * Remember to actually work this component there need to be a name and the onclick event working function mapping
 * otherwise it may or may not get served as expected.
 */
function MultipleItemBuildUp(props) {
  return (
    <>
      <p className="items">{props.name}</p>
      <FontAwesomeIcon icon={faAngleRight} className="angle-right" />
    </>
  );
}

export { SideBarSubMainSection, SingleItemBuildUp };
