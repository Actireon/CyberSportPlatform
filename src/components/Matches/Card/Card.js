import React from 'react';
import { ReactComponent as Sponsor } from '../../../images/matches/ggbet.svg';

import './Card.scss';

const Card = (props) => {
  const {
    play,
    star,
    data,
    team1,
    team2,
    player1,
    player2,
    info,
    score1,
    score2
  } = props;

  return (
    <div className="card-matches">
      <div className="card-matches__header">
        <p className="card-matches__caption">Asia Minor: Play-Off</p>
        <div className={star}>
          {star === "card-matches__star-red" 
            ? <a href="https://www.twitch.tv/weplayesport_en" target="_blank" rel="noopener noreferrer"> 
                <img className="card-matches__play" src={play} alt="play" /> 
              </a> 
            : star === "card-matches__star-silver"
              ? <h5 className="card-matches__play card-matches__time">19:00</h5>
              : <h5 className="card-matches__play card-matches__time card-matches__time--g">19:00</h5>}
          {data 
            ? <p className="card-matches__data">{data}</p> 
            : <p className="card-matches__live">WATCH LIVE!</p>}
        </div>
      </div>
      <div className="card-matches__teams">
        <img src={team1} alt="team" />
        <img className="card-matches__team2" src={team2} alt="team" />
      </div>
      <div className="card-matches__players">
        {star === "card-matches__star-gray"
          ? <div>
              {score1 > 0
                ? <h5 className="card-matches__player">{player1}</h5>
                : <h5 className="card-matches__player card-matches__player--g">{player1}</h5>}
              {score2 > 0
                ? <h5 className="card-matches__player">{player2}</h5>
                : <h5 className="card-matches__player card-matches__player--g">{player2}</h5>}
            </div>
          : <div>
              <h5 className="card-matches__player">{player1}</h5>
              <h5 className="card-matches__player">{player2}</h5>
            </div>}
        {star === "card-matches__star-gray" 
          ? <div>
              {score1 > 0
                ? <h5 className="card-matches__score-win">{score1}</h5>
                : <h5 className="card-matches__score-lose card-matches__score-lose--g">{score1}</h5>}
              {score2 > 0
                ? <h5 className="card-matches__score-win">{score2}</h5>
                : <h5 className="card-matches__score-lose card-matches__score-lose--g">{score2}</h5>}
            </div>
          : <div>
              <div className="card-matches__rate">3.22</div>
              <div className="card-matches__rate">53.22</div>
            </div>}
      </div>
      <div className="card-matches__footer">
        <p className="card-matches__info">{info}</p>
        <Sponsor />
      </div>
    </div>
  );
};

export default Card;