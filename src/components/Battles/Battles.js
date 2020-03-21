import React from 'react';
import Card from './Card/Card';

import play from '../../images/matches/play.png';


const Battles = () => (
  <>
    <Card 
      play={play}
      star="card-battles__star-red"
      match="MATCH #1"
      info="Map: Erangel"
    />
    <Card 
      star="card-battles__star-silver"
      data="March 8"
      match="MATCH #2"
      info="Starts in: 5h 39min • Map: Erangel"
    />
    <Card 
      star="card-battles__star-silver"
      data="March 8"
      match="MATCH #3"
      info="Starts in: 5h 39min • Map: Erangel"
    />
    <Card 
      star="card-battles__star-silver"
      data="March 8"
      match="MATCH #4"
      info="Starts in: 5h 39min • Map: Erangel"
    />
     <Card 
      star="card-battles__star-gray"
      data="March 8"
      match="MATCH #5"
      info="Natus Vincere (A) - 233pts"
    />
     <Card 
      star="card-battles__star-gray"
      data="March 8"
      match="MATCH #6"
      info="Natus Vincere (A) - 233pts"
    />
     <Card 
      star="card-battles__star-gray"
      data="March 8"
      match="MATCH #7"
      info="Natus Vincere (A) - 233pts"
    />
     <Card 
      star="card-battles__star-gray"
      data="March 8"
      match="MATCH #8"
      info="Natus Vincere (A) - 233pts"
    />
  </>
);

export default Battles;