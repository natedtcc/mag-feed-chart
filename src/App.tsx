// App.tsx - main app - N. Nasteff 10/25/2021

import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import MagTable from './components/MagTable/MagTable';
import { FeedingChart } from './assets/FeedingChart';
import Body from './components/Body/Body';
import FeedButtonGroup from './components/FeedButtonGroup/FeedButtonGroup';
import Auxi from './hoc/Auxi';

// Create an array of feeding charts
const mags: FeedingChart[] = [
  new FeedingChart(), new FeedingChart('table1'), 
  new FeedingChart('table2'), new FeedingChart('table3'),
  new FeedingChart('table4'), new FeedingChart('table5'),
  new FeedingChart('table6'), new FeedingChart('table7'), 
]


function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      <Body></Body>
        <MagTable {...mags[0]} />
        <MagTable {...mags[1]} />
        <MagTable {...mags[2]} />
        <MagTable {...mags[3]} />
        <MagTable {...mags[4]} />
        <MagTable {...mags[5]} />
        <MagTable {...mags[6]} />
        <MagTable {...mags[7]} />
      <br/><br/><br/>
      <br/><br/><br/>
      <FeedButtonGroup/>
      <br/><br/><br/>
    </div>
  );
}

export default App;
