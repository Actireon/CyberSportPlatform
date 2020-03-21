import React from 'react';

import './Button.scss';

const Button = ({ showMatches, showBattles, show }) => {
  return (
    <div className="button">
      {show === true 
        ? <button type="button" className="button__active" onClick={showMatches}>matches</button>
        : <button type="button" className="button__not-active" onClick={showMatches}>matches</button>}
      {show === true 
        ? <button type="button" className="button__not-active" onClick={showBattles}>battles</button>
        : <button type="button" className="button__active" onClick={showBattles}>battles</button>}
    </div>
  );
};

export default Button;