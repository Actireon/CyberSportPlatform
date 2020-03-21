import React, { Component } from 'react';
import Header from './components/Header/Header';
import Matches from './components/Matches/Matches';
import Battles from './components/Battles/Battles';

import './App.css';


class App extends Component {
  state = {
    isToggled: true,
  }

  showMatches = () => {
    this.setState({
      isToggled: true
    })
  }

  showBattles = () => {
    this.setState({
      isToggled: false
    })
  }

  render() {
    const { isToggled } = this.state;

    return (
      <>
        <Header show={isToggled} showBattles={this.showBattles} showMatches={this.showMatches}/>
        <main className="main">
          {isToggled ? <Matches /> : <Battles />}
        </main>
      </>
    );
  }
}

export default App;
