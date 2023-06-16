import './App.css';
import Navigator from './components/Navigator';
import LeagueList from './components/LeagueList';
import { useState } from 'react';
import style from './style/FlexNav.module.css'

function App() {
  const data = require('./data.json')
  const[selectedLeague, setSelectedLeague] = useState(null);
  function load(id) {
    const dataLeague = data.leagues.find(league => league.id === id)
    if (!dataLeague) {
      return
    }
    setSelectedLeague(dataLeague)
  }
  return (
    <div className="App">
        <h1 className='Heading'>
          Footballstandings
        </h1>
        <div className={style.flexnav}>
          <Navigator onClick={() => load("PL")} name='Premier League'></Navigator>
          <Navigator onClick={() => load("BL")} name='Bundesliga'></Navigator>
          <Navigator onClick={() => load("PD")} name='LaLiga Santander'></Navigator>
          <Navigator onClick={() => load("SA")} name='Serie A'></Navigator>
        </div>
        <LeagueList selectedLeague={selectedLeague}> </LeagueList>
    </div>
  );
}

export default App;
