// App.tsx - main app - N. Nasteff 10/25/2021

import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import MagTable from './components/MagTable/MagTable';
import { FeedingChart } from './assets/FeedingChart';
import Body from './components/Body/Body';

// Create an array of feeding charts
const mags: FeedingChart[] = [
  new FeedingChart(), new FeedingChart('table1'), 
  new FeedingChart('table2'), new FeedingChart('table3') 
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
      
    </div>
  );
}

export default App;
