import { useState } from "react";
import {
  notificationsIcon,
  searchIcon,
  userIcon,
  shoppingCartIcon,
} from "../images";
import ShoppingCart from "./ShoppingCart";
import "./Toolbar.scss";

const Toolbar = () => {
  const [cartMouseOver, setCartMouseOver] = useState(false);
  const handleCartMouseOver = () => {
    setCartMouseOver(!cartMouseOver);
  };
  const confirm = () => {
    console.log("confirmed");
    setCartMouseOver(false);
  };
  const cancel = () => {
    console.log("cancelled");
    window.alert("Too late! Your card was charged and all sales are final.");
  };
  return (
    <div className="topnav">
      <button
        aria-labelledby="notifications-label"
        onClick={() => alert("You've been notified!")}
      >
        <img src={notificationsIcon} alt="bell-icon" />
      </button>
      <div role="tooltip" id="notifications-label">
        Notifications
      </div>
      <a
        href="https://duckduckgo.com/?q=search&kp=-1&kl=us-en"
        aria-labelledby="search-label"
      >
        <img src={searchIcon} alt="magnifying-glass-icon" />
      </a>
      <div role="tooltip" id="search-label">
        Search
      </div>
      <button aria-describedby="user-desc">
        <img src={userIcon} alt="user-icon" />
        <span className="visually-hidden">
          This is a very long description blah blah blah
        </span>
      </button>
      <div role="tooltip" id="user-desc">
        User
      </div>
      <button
        aria-describedby="cart-desc"
        onMouseOver={() => handleCartMouseOver()}
      >
        <img src={shoppingCartIcon} alt="user-icon" />
        <span className="visually-hidden">
          This is a very long description blah blah blah
        </span>
      </button>
      <div role="tooltip" id="cart-desc">
        Shopping Cart
      </div>
      {cartMouseOver && <ShoppingCart confirm={confirm} cancel={cancel} />}
    </div>
  );
};
export default Toolbar;
