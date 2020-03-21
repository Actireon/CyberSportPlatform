import React from 'react';
import { ReactComponent as Logo } from '../../images/header/header-logo.svg';
import Button from './Button/Button';

import './Header.scss';

const Header = ({ showMatches, showBattles, show }) => {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo width={'350'} height={'400'}/>
      </div>
      <h1 className="header__title">Make me up!</h1>
      <Button show={show} showMatches={showMatches} showBattles={showBattles} />
    </div>
  );
};

export default Header;