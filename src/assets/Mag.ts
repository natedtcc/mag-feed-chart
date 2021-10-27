// Mag.ts - Mag class definitions / logic - N. Nasteff 10/25/2021

import { MagLevels } from "./MagLevels";
import { FeedingChart, feedingCharts } from "./FeedingChart";

export class Mag extends MagLevels {

  // Assign all mag levels / progress to base
  private _magName: string = "";
  private _syncLevel: number = 0;
  private _iqLevel: number = 0;
  private _defLevel: number = 5;  // All mags start with 5 defense
  private _powLevel: number = 0;
  private _dexLevel: number = 0;
  private _mindLevel: number = 0;

  // Stat progressions
  private _defProgress: number = 0;
  private _powProgress: number = 0;
  private _dexProgress: number = 0;
  private _mindProgress: number = 0;
  
  // Assign a base mag feed chart to the mag by default
  private _feedChart: FeedingChart;

  // Constructor for base mag / evolutions 1-3
  constructor(magName: string){

    // Call MagLevel constructor to assign the mag's base evolution level
    super(magName);

    // Default base values
    this._feedChart = new FeedingChart();

    // Let's figure which feeding chart to assign to this mag
    for (let i=0; i<feedingCharts.length; i++){
      if (feedingCharts[i].names.includes(magName)){
        this._feedChart = feedingCharts[i];
        this._magName = magName;
        break;
      }
    }
  }

  // Feed a mag an item to increase it's levels

  public magFeed(food: string): void {

    if (food === "monomate") {
      this._powProgress += this._feedChart.monomate.pow;
      this._mindProgress += this._feedChart.monomate.mind;
      this._dexProgress += this._feedChart.monomate.dex;
      this._defProgress += this._feedChart.monomate.def;
    }
    else if (food === "dimate") {
      this._powProgress += this._feedChart.dimate.pow;
      this._mindProgress += this._feedChart.dimate.mind;
      this._dexProgress += this._feedChart.dimate.dex;
      this._defProgress += this._feedChart.dimate.def;
      this._iqLevel += this._feedChart.dimate.iq;
      this._syncLevel += this._feedChart.dimate.sync;
    }
    else if (food === "trimate") {
      this._powProgress += this._feedChart.trimate.pow;
      this._mindProgress += this._feedChart.trimate.mind;
      this._dexProgress += this._feedChart.trimate.dex;
      this._defProgress += this._feedChart.trimate.def;
      this._iqLevel += this._feedChart.trimate.iq;
      this._syncLevel += this._feedChart.trimate.sync;
    }
    else if (food === "monofluid") {
      this._powProgress += this._feedChart.monofluid.pow;
      this._mindProgress += this._feedChart.monofluid.mind;
      this._dexProgress += this._feedChart.monofluid.dex;
      this._defProgress += this._feedChart.monofluid.def;
      this._iqLevel += this._feedChart.monofluid.iq;
      this._syncLevel += this._feedChart.monofluid.sync;
    }
    else if (food === "difluid") {
      this._powProgress += this._feedChart.difluid.pow;
      this._mindProgress += this._feedChart.difluid.mind;
      this._dexProgress += this._feedChart.difluid.dex;
      this._defProgress += this._feedChart.difluid.def;
      this._iqLevel += this._feedChart.difluid.iq;
      this._syncLevel += this._feedChart.difluid.sync;
    }
    else if (food === "trifluid") {
      this._powProgress += this._feedChart.trifluid.pow;
      this._mindProgress += this._feedChart.trifluid.mind;
      this._dexProgress += this._feedChart.trifluid.dex;
      this._defProgress += this._feedChart.trifluid.def;
      this._iqLevel += this._feedChart.trifluid.iq;
      this._syncLevel += this._feedChart.trifluid.sync;
    }
    else if (food === "antidote") {
      this._powProgress += this._feedChart.antidote.pow;
      this._mindProgress += this._feedChart.antidote.mind;
      this._dexProgress += this._feedChart.antidote.dex;
      this._defProgress += this._feedChart.antidote.def;
      this._iqLevel += this._feedChart.antidote.iq;
      this._syncLevel += this._feedChart.antidote.sync;
    }
    else if (food === "antiparalys") {
      this._powProgress += this._feedChart.antiparalysis.pow;
      this._mindProgress += this._feedChart.antiparalysis.mind;
      this._dexProgress += this._feedChart.antiparalysis.dex;
      this._defProgress += this._feedChart.antiparalysis.def;
      this._iqLevel += this._feedChart.antiparalysis.iq;
      this._syncLevel += this._feedChart.antiparalysis.sync;
    }
    else if (food === "sol") {
      this._powProgress += this._feedChart.sol.pow;
      this._mindProgress += this._feedChart.sol.mind;
      this._dexProgress += this._feedChart.sol.dex;
      this._defProgress += this._feedChart.sol.def;
      this._iqLevel += this._feedChart.sol.iq;
      this._syncLevel += this._feedChart.sol.sync;
    }
    else if (food === "moon") {
      this._powProgress += this._feedChart.moon.pow;
      this._mindProgress += this._feedChart.moon.mind;
      this._dexProgress += this._feedChart.moon.dex;
      this._defProgress += this._feedChart.moon.def;
      this._iqLevel += this._feedChart.moon.iq;
      this._syncLevel += this._feedChart.moon.sync;
    }
    else if (food === "star") {
      this._powProgress += this._feedChart.star.pow;
      this._mindProgress += this._feedChart.star.mind;
      this._dexProgress += this._feedChart.star.dex;
      this._defProgress += this._feedChart.star.def;
      this._iqLevel += this._feedChart.star.iq;
      this._syncLevel += this._feedChart.star.sync;
    }

    // Ensure levels / progressions are within min/max range
    this.zeroOrMaxProgress();

    // Calculate the mag's new level after feed
    this.levelMag();
    
  }
  
  /* A mag's stat progress level is from 1-100. Once the mag's stat progress 
  ** hits 100, it's base level increases by 1. This function facilitates
  ** this leveling mechanisim and is called after each mag feed to 
  ** level the mag accordingly.
  */
  
  private levelMag(): void {

    // If a mag is at 200, no more leveling is possible
    if (this.magLevel === 200){
      return;
    }

    if (this._powProgress > 99) {
      this._powLevel++;
      this._magLevel++;
      this._powProgress %= 100;
    }
    if (this._mindProgress > 99) {
      this._mindLevel++;
      this._magLevel++;
      this._mindProgress %= 100;
    }
    if (this._dexProgress > 99) {
      this._dexLevel++;
      this._magLevel++;
      this._dexProgress %= 100;
    }
    if (this._defProgress > 99) {
      this._defLevel++;
      this._magLevel++;
      this._defProgress %= 100;
    }
    
  }

  // No mag's stat progression should ever be below 0! If an item
  // fed to the mag causes that, this func reverts the progress to 0.
  // Also, a mag's synchro and iq should never be above 120 or 200, 
  // respectively.

  private zeroOrMaxProgress(): void {
    if (this._iqLevel < 0){
      this._iqLevel = 0;
    }

    if (this._syncLevel < 0){
      this._syncLevel = 0;
    }

    if (this._iqLevel > 200){
      this._iqLevel = 200;
    }
    
    if (this._syncLevel > 120){
      this._syncLevel = 120;
    }

    if (this._powProgress < 0){
      this._powProgress = 0;
    }

    if (this._defProgress < 0){
      this._defProgress = 0;
    }

    if (this._dexProgress < 0){
      this._dexProgress = 0;
    }

    if (this._mindProgress < 0){
      this._mindProgress = 0;
    }
  }

  // Accessor definitions

  public get magName(): string {
    return this._magName;
  }
  public set magName(value: string) {
    this._magName = value;
  }

  public get feedChart(): FeedingChart {
    return this._feedChart;
  }
  public set feedChart(value: FeedingChart) {
    this._feedChart = value;
  }

  public get mindProgress(): number {
    return this._mindProgress;
  }
  public set mindProgress(value: number) {
    this._mindProgress = value;
  }

  public get dexProgress(): number {
    return this._dexProgress;
  }
  public set dexProgress(value: number) {
    this._dexProgress = value;
  }
  public get powProgress(): number {
    return this._powProgress;
  }
  public set powProgress(value: number) {
    this._powProgress = value;
  }
  public get defProgress(): number {
    return this._defProgress;
  }
  public set defProgress(value: number) {
    this._defProgress = value;
  }

  public get mindLevel(): number {
    return this._mindLevel;
  }
  public set mindLevel(value: number) {
    this._mindLevel = value;
  }
  public get dexLevel(): number {
    return this._dexLevel;
  }
  public set dexLevel(value: number) {
    this._dexLevel = value;
  }
  public get powLevel(): number {
    return this._powLevel;
  }
  public set powLevel(value: number) {
    this._powLevel = value;
  }
  public get defLevel(): number {
    return this._defLevel;
  }
  public set defLevel(value: number) {
    this._defLevel = value;
  }
  public get iqLevel(): number {
    return this._iqLevel;
  }
  public set iqLevel(value: number) {
    this._iqLevel = value;
  }
  public get syncLevel(): number {
    return this._syncLevel;
  }
  public set syncLevel(value: number) {
    this._syncLevel = value;
  }
  public get magLevel(): number {
    return this._magLevel;
  }
  public set magLevel(value: number) {
    this._magLevel = value;
  }

  public logStats(){
    console.log(
      "Stats: \nPow: " +
        this.powProgress +
        "\nMind: " +
        this.mindProgress +
        "\nDef: " +
        this.defProgress +
        "\nDex: " +
        this.dexProgress +
        "\nPow Level: " +
        this.powLevel +
        "\nMind Level: " +
        this.mindLevel +
        "\nDef Level: " +
        this.defLevel +
        "\nDex Level: " +
        this.dexLevel +
        "\nOverall: " +
        this.magLevel
    );
  }

}


