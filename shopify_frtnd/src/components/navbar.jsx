import { CART_ICON, SEARCH_ICON, HAMBURGER_ICON } from "../configs/config.jsx";

/**
 * Nav bar component which uses to get the top navigation bar of the page.
 * Owner: Demesh Fernando
 * Last updated Date: 24 July 2024
 * @component
 * @param {object} props
 * @returns The NavBar with the provided attributes
 * @example
 * // Example usage:
 * const <NavBar />;
 * return the NavBar with the following added properties.
 */
export default function NavBar(props) {
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
