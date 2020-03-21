import React from 'react';

import './Button.scss';

const Button = ({ onClick }) => {
  return (
    <div className="button">
      <button type="button" className="button__active" onClick={onClick}>matches</button>
      <button type="button" className="button__not-active" onClick={onClick}>battles</button>
    </div>
  );
};

export default Button;