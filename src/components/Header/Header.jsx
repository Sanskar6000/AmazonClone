// Header Component
import React from 'react';
import './Header.css';

import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../Stateprovider.jsx';

function Header() {
  // const [{cart}, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        {' '}
        <img
          className="headerLogo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon-logo"
        />
      </Link>

      <div className="headerSearch">
        <input className="headerSearchInput" type="text" />
        <SearchIcon className="headerSearchIcon" />
      </div>

      <div className="headerNavbar">
        <Link to="/login">
          <div className="navbarOption">
            <span className="optionLineone">Hello</span>
            <span className="optionLinetwo">Sign in</span>
          </div>
        </Link>

        <div className="navbarOption">
          <span className="optionLineone">Returns</span>
          <span className="optionLinetwo">& Orders</span>
        </div>

        <Link to="/checkout">
          <div className="navbarOptionCart">
            <AddShoppingCartIcon />
            <span className="optionLinetwo cartCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
