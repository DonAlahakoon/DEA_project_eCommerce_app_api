import { CART_ICON, SEARCH_ICON } from "../configs/config.jsx";

export default function NavBar(props) {
  return (
    <div className="navbar-container">
      <div class="shopify-header-left-section">
        <a href="../../index.html" className="header-link">
          <h1>Shopify</h1>
        </a>
      </div>

      <div className="shopify-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src={SEARCH_ICON} />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src={CART_ICON} />
          <div className="cart-quantity">3</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>
    </div>
  );
}
