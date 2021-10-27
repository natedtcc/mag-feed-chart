import React from "react";
import styles from "./FeedButtonGroup.module.css"
import { Mag } from "../../assets/Mag";
import FeedButton from "../FeedButton/FeedButton";

const mag: Mag = new Mag('Mag');

const FeedButtonGroup: React.FC = () => {
  return (
    <div className={styles.FeedButtonGroup}>
      <p>TEST BUTTONS</p>
      <br/>
      <FeedButton
        onClick={() => {mag.magFeed('monomate'); mag.logStats()}}
        label = "Monomate"
        />
      <FeedButton
        onClick={() => {mag.magFeed('dimate'); mag.logStats()}}
        label = "Dimate"
        />
      <FeedButton
        onClick={() => {mag.magFeed('trimate'); mag.logStats()}}
        label = "Trimate"
        />
        <br></br>
      <FeedButton
        onClick={() => {mag.magFeed('monofluid'); mag.logStats()}}
        label = "Monomate"
        />
      <FeedButton
        onClick={() => {mag.magFeed('difluid'); mag.logStats()}}
        label = "Dimate"
        />
      <FeedButton
        onClick={() => {mag.magFeed('trifluid'); mag.logStats()}}
        label = "Trifluid"
        />
        <br></br>
      <FeedButton
        onClick={() => {mag.magFeed('antiparalysis'); mag.logStats()}}
        label = "Antiparalysis"
        />
      <FeedButton
        onClick={() => {mag.magFeed('antidote'); mag.logStats()}}
        label = "Antidote"
        />
      <FeedButton
        onClick={() => {mag.magFeed('sol'); mag.logStats()}}
        label = "Sol Atomizer"
        />
        <br/>
      <FeedButton
        onClick={() => {mag.magFeed('moon'); mag.logStats()}}
        label = "Moon Atomizer"
        />
      <FeedButton
        onClick={() => {mag.magFeed('star'); mag.logStats()}}
        label = "Star Atomizer"
        />
    </div>
  );
};

export default FeedButtonGroup;