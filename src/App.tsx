// App.tsx - main app - N. Nasteff 10/25/2021

import React from 'react';
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import MagTable from './components/MagTable/MagTable';
import { FeedingChart } from './assets/FeedingChart';
import './App.css';
import Body from './components/Body/Body';

// Create an array of feeding charts
const mags: FeedingChart[] = [
  new FeedingChart(), new FeedingChart('evo1'), 
  new FeedingChart('evo2'), new FeedingChart('evo3') 
]


function App() {
  return (
    <div className={classes.App}>
      <Header></Header>
      <Body></Body>
        <MagTable {...mags[0]} />
        <MagTable {...mags[1]} />
        <MagTable {...mags[2]} />
        <MagTable {...mags[3]} />
      
    </div>
  );
}

export default App;
