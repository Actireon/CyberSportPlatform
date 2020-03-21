import React, { Component } from 'react';
import Header from './components/Header/Header';
import Matches from './components/Matches/Matches'

import './App.css';


class App extends Component {
  state = {
    isClicked: true,
  }

  // clickHandler = () => {
  //   this.setState(prevState => ({
  //     isClicked: !prevState.isClicked
  //  }));
  // }

  render() {
    return (
      <>
        <Header />
        <Matches />
      </>
      // isClicked ? <Matches /> : <Battles />
    );
  }
}

export default App;
