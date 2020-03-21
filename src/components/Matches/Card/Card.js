import React from 'react';
import { ReactComponent as Sponsor } from '../../../images/matches/ggbet.svg';

import './Card.scss';

const Card = (props) => {
  const { 
    caption,
    play,
    star,
    data,
    team1,
    team2,
    player1,
    player2,
    rate1,
    rate2,
    info,
    score1,
    score2
  } = props;

  return (
    <div className="card">
      <div className="card__header">
        <p className="card__caption">{caption}</p>
        <div className={star}>
          {star === "card__star-red" 
            ? <a href="https://game-tournaments.com/dota-2/history/newbee-vs-aster" target="_blank" rel="noopener noreferrer"> 
                <img className="card__play" src={play} alt="play" /> 
              </a> 
            : star === "card__star-silver"
              ? <h5 className="card__play card__time">19:00</h5>
              : <h5 className="card__play card__time card__time--g">19:00</h5>}
          {data 
            ? <p className="card__data">{data}</p> 
            : <p className="card__live">WATCH LIVE!</p>}
        </div>
      </div>
      <div className="card__teams">
        <img src={team1} alt="team" />
        <img className="card__team2" src={team2} alt="team" />
      </div>
      <div className="card__players">
        {star === "card__star-gray"
          ? <div>
              {score1 > 0
                ? <h5 className="card__player">{player1}</h5>
                : <h5 className="card__player card__player--g">{player1}</h5>}
              {score2 > 0
                ? <h5 className="card__player">{player2}</h5>
                : <h5 className="card__player card__player--g">{player2}</h5>}
            </div>
          : <div>
              <h5 className="card__player">{player1}</h5>
              <h5 className="card__player">{player2}</h5>
            </div>}
        {star === "card__star-gray" 
          ? <div>
              {score1 > 0
                ? <h5 className="card__score-win">{score1}</h5>
                : <h5 className="card__score-lose card__score-lose--g">{score1}</h5>}
              {score2 > 0
                ? <h5 className="card__score-win">{score2}</h5>
                : <h5 className="card__score-lose card__score-lose--g">{score2}</h5>}
            </div>
          : <div>
              <div className="card__rate">{rate1}</div>
              <div className="card__rate">{rate2}</div>
            </div>}
      </div>
      <div className="card__footer">
        <p className="card__info">{info}</p>
        <Sponsor />
      </div>
    </div>
  );
};

export default Card;