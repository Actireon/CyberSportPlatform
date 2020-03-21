import React from 'react';
import { ReactComponent as Pubg } from '../../../images/battles/pubg.svg';
import { ReactComponent as Cup } from '../../../images/battles/cup.svg';

import './Card.scss';

const Card = (props) => {
  const { 
    play,
    star,
    data,
    match,
    info,
  } = props;

  return (
    <div className="card-battles">
      <div className="card-battles__header">
        <p className="card-battles__caption">Group Stage</p>
        <div className={star}>
          {star === "card-battles__star-red" 
            ? <a href="https://www.twitch.tv/pgl_pubg/" target="_blank" rel="noopener noreferrer"> 
                <img className="card-battles__play" src={play} alt="play" /> 
              </a> 
            : <h5 className="card-battles__play card-battles__time">19:00</h5>}
          {data 
            ? <p className="card-battles__data">{data}</p> 
            : <p className="card-battles__live">WATCH LIVE!</p>}
        </div>
      </div>
      <div className="card-battles__pubg">
        <Pubg />
      </div>
      <div className="card-battles__groups">
        <div>
          <h5 className="card-battles__group">Group A</h5>
          <h5 className="card-battles__group">Group B</h5>
        </div>
        <div>
          <div className="card-battles__match">{match}</div>
        </div>
      </div>
      <div className="card-battles__footer">
        {star === "card-battles__star-gray"
          ? <>
              <Cup /> 
              <p className="card-battles__info card-battles__info--margin">{info}</p>
            </>
          : <p className="card-battles__info">{info}</p>}
      </div>
    </div>
  );
};

export default Card;