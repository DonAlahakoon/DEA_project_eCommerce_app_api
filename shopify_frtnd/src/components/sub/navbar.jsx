import {
  CART_ICON,
  SEARCH_ICON,
  HAMBURGER_ICON,
  FontAwesomeIcon,
  faCaretRight,
} from "../../configs/config.jsx";

/**
 * Nav bar component which uses to get the top navigation bar of the page.
 * Owner: Demesh Fernando
 * Created Date: 24 July 2024
 * Last updated Date: 01 August 2024
 * @component
 * @param {object} props
 * @returns The NavBar with the provided attributes
 * @example
 * // Example usage:
 * const <NavBar />;
 * return the NavBar with the following added properties.
 */
function NavBar(props) {
  return (
    <div className="navbar-container">
      <div className="shopify-header-left-section">
        <img className="hamburger-icon" src={HAMBURGER_ICON} />
        <a href="../../index.html" className="header-link">
          <h1>Shopify</h1>
        </a>
      </div>

      <div className="shopify-header-middle-section">
        <input
          className="search-bar"
          type="text"
          placeholder="Shopify Search"
        />

        <button className="search-button">
          <img className="search-icon" src={SEARCH_ICON} />
        </button>
      </div>

      <div className="shopify-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src={CART_ICON} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>

        <a href="#" className="account-name">
          <span className="hello-text">Hello</span>
          <span className="account-holder-name">Demesh</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Account Creation Nav bar component which uses to get specifically for the account creation nav bar.
 * Owner: Demesh Fernando
 * Created Date: 24 July 2024
 * Last updated Date: 01 August 2024
 * @component
 * @returns The NavBar with the provided attributes
 * @example
 * // Example usage:
 * const <AccountCreationNavBar />;
 * return the NavBar with the following added properties.
 */
function AccountCreationNavBar() {
  return (
    <div className="shopify-account-creation-header">
      <div className="logo-header">
        <h1>Shopify</h1>
      </div>

      <div className="main-body-account-creation">
        <div className="center-card">
          <h1 className="create-account-header">Create Account</h1>
          <div className="name input-section">
            <label htmlFor="name">Your Name</label>
            <input
              className="account-creation-navbar-input"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="email-address input-section">
            <label htmlFor="emailId">Email Address</label>
            <input
              className="account-creation-navbar-input"
              type="email"
              name="name"
              id="emailId"
            />
          </div>
          <div className="password input-section">
            <label htmlFor="password">Password</label>
            <input
              className="account-creation-navbar-input"
              type="password"
              name="name"
              id="password"
            />
          </div>
          <div className="re-enter-password input-section">
            <label htmlFor="reEnterPassword">Re-enter password</label>
            <input
              className="account-creation-navbar-input"
              type="password"
              name="name"
              id="reEnterPassword"
            />
          </div>
          <button className="continue">Continue</button>
          <p>
            Already have an account?
            <a href="#">
              Sign in
              <FontAwesomeIcon icon={faCaretRight} />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export { NavBar, AccountCreationNavBar };
