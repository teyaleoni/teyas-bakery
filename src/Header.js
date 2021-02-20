import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <FontAwesomeIcon icon={faArrowLeft} />
      <h1>Customize Cake</h1>
    </div>
  );
}
export default Header;
