import React from 'react';
import logo from './logo.svg';
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import MagTable from './components/MagTable/MagTable';
import { Mag } from './assets/Mag';
import './App.css';
import Body from './components/Body/Body';

const base_mag = new Mag("base");
const evo1 = new Mag("evo1");

function App() {
  return (
    <div className={classes.App}>
      <Header></Header>
      <Body></Body>
        <MagTable magtype={base_mag} />
        <MagTable magtype={evo1} />
      
    </div>
  );
}

export default App;
