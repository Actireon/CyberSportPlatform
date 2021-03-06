import React from 'react';
import Card from './Card/Card';

import newbee from '../../images/matches/Newbee.png';
import taster from '../../images/matches/TAster.png';
import ba from '../../images/matches/BA.png';
import forze from '../../images/matches/forze.png';
import boom from '../../images/matches/boom.png';
import alliance from '../../images/matches/Alliance.png';
import noping from '../../images/matches/noping.png';
import play from '../../images/matches/play.png';

const Matches = () => (
  <>
    <Card 
      star="card-matches__star-red"
      play={play}
      team1={newbee}
      team2={taster}
      player1="Albert Warren"
      player2="Gloria Henry"
      info="Bo 3"
    />
    <Card 
      star="card-matches__star-silver"
      data="29 октября"
      team1={ba}
      team2={forze}
      player1="Regina Watson"
      player2="Kathryn Jones"
      info="Starts in: 5 hours 39 min • Bо 3"
    />
    <Card 
      star="card-matches__star-silver"
      data="29 октября"
      team1={taster}
      team2={boom}
      player1="Ricardo Hawkins"
      player2="Bruce Simmmons"
      info="Starts in: 5 hours 39 min • Bо 3"
    />
    <Card 
      star="card-matches__star-silver"
      data="29 октября"
      team1={alliance}
      team2={noping}
      player1="Jenny Bell"
      player2="Arlene Robertson"
      info="Starts in: 5 hours 39 min • Bо 3"
    />
     <Card 
      star="card-matches__star-gray"
      data="29 октября"
      team1={newbee}
      team2={ba}
      player1="Courtney Alexander"
      player2="Judith Nguyen"
      score1="0"
      score2="3"
      info="1:0 • 1:0 • 1:0"
    />
     <Card 
      star="card-matches__star-gray"
      data="29 октября"
      team1={newbee}
      team2={forze}
      player1="Priscilla Fisher"
      player2="Arlene Black"
      score1="3"
      score2="0"
      info="1:0 • 1:0 • 1:0"
    />
     <Card 
      star="card-matches__star-gray"
      data="29 октября"
      team1={boom}
      team2={noping}
      player1="Cody Howard"
      player2="Brandon Mccoy"
      score1="0"
      score2="3"
      info="1:0 • 1:0 • 1:0"
    />
     <Card 
      star="card-matches__star-gray"
      data="29 октября"
      team1={newbee}
      team2={alliance}
      player1="Jorge Fox"
      player2="Zack Miles"
      score1="0"
      score2="3"
      info="1:0 • 1:0 • 1:0"
    />
  </>
);

export default Matches;