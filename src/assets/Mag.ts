// Mag.ts - Mag class definitions / logic - N. Nasteff 10/25/2021

import { FeedingChart } from "./FeedingChart";

export class Mag  {

  // Assign all mag levels / progress to base
  private _magName: string = "";

  private _magLevel: number = 5;  // Base mag level
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
  protected feedChart: FeedingChart = new FeedingChart();

  // Array of feeding charts for discerning mag names
  protected feedCharts: FeedingChart[] = [
    new FeedingChart(), new FeedingChart('evo1'),
    new FeedingChart('evo2'), new FeedingChart('evo3')
  ]

  // Constructor for base mag / evolutions 1-3
  constructor(magName: string){

    // Let's figure out which mag evolution group magName belongs to,
    // and assign it a feeding chart + a base level relative to it's
    // evolution group.

    for (let i=0; i<this.feedCharts.length; i++){
      if (this.feedCharts[i].names.includes(magName)){
        this.feedChart = this.feedCharts[i];
        this._magLevel = this.feedChart.level;
        this._magName = magName;
        break;
      }
    }

  }

  // Feed a mag an item to increase it's levels

  magFeed(food: string) {

    if (food === "monomate") {
      this._powProgress += this.feedChart.monomate.pow;
      this._mindProgress += this.feedChart.monomate.mind;
      this._dexProgress += this.feedChart.monomate.dex;
      this._defProgress += this.feedChart.monomate.def;
      
      if (this._iqLevel < 200){
        this._iqLevel += this.feedChart.monomate.iq;
      }
      
      if (this._syncLevel < 120){
        this._syncLevel += this.feedChart.monomate.sync;
      }
    }
    else if (food === "dimate") {
      this._powProgress += this.feedChart.dimate.pow;
      this._mindProgress += this.feedChart.dimate.mind;
      this._dexProgress += this.feedChart.dimate.dex;
      this._defProgress += this.feedChart.dimate.def;
      this._iqLevel += this.feedChart.dimate.iq;
      this._syncLevel += this.feedChart.dimate.sync;
    }
    else if (food === "trimate") {
      this._powProgress += this.feedChart.trimate.pow;
      this._mindProgress += this.feedChart.trimate.mind;
      this._dexProgress += this.feedChart.trimate.dex;
      this._defProgress += this.feedChart.trimate.def;
      this._iqLevel += this.feedChart.trimate.iq;
      this._syncLevel += this.feedChart.trimate.sync;
    }
    else if (food === "monofluid") {
      this._powProgress += this.feedChart.monofluid.pow;
      this._mindProgress += this.feedChart.monofluid.mind;
      this._dexProgress += this.feedChart.monofluid.dex;
      this._defProgress += this.feedChart.monofluid.def;
      this._iqLevel += this.feedChart.monofluid.iq;
      this._syncLevel += this.feedChart.monofluid.sync;
    }
    else if (food === "difluid") {
      this._powProgress += this.feedChart.difluid.pow;
      this._mindProgress += this.feedChart.difluid.mind;
      this._dexProgress += this.feedChart.difluid.dex;
      this._defProgress += this.feedChart.difluid.def;
      this._iqLevel += this.feedChart.difluid.iq;
      this._syncLevel += this.feedChart.difluid.sync;
    }
    else if (food === "trifluid") {
      this._powProgress += this.feedChart.trifluid.pow;
      this._mindProgress += this.feedChart.trifluid.mind;
      this._dexProgress += this.feedChart.trifluid.dex;
      this._defProgress += this.feedChart.trifluid.def;
      this._iqLevel += this.feedChart.trifluid.iq;
      this._syncLevel += this.feedChart.trifluid.sync;
    }
    else if (food === "antidote") {
      this._powProgress += this.feedChart.antidote.pow;
      this._mindProgress += this.feedChart.antidote.mind;
      this._dexProgress += this.feedChart.antidote.dex;
      this._defProgress += this.feedChart.antidote.def;
      this._iqLevel += this.feedChart.antidote.iq;
      this._syncLevel += this.feedChart.antidote.sync;
    }
    else if (food === "antiparalys") {
      this._powProgress += this.feedChart.antiparalysis.pow;
      this._mindProgress += this.feedChart.antiparalysis.mind;
      this._dexProgress += this.feedChart.antiparalysis.dex;
      this._defProgress += this.feedChart.antiparalysis.def;
      this._iqLevel += this.feedChart.antiparalysis.iq;
      this._syncLevel += this.feedChart.antiparalysis.sync;
    }
    else if (food === "sol") {
      this._powProgress += this.feedChart.sol.pow;
      this._mindProgress += this.feedChart.sol.mind;
      this._dexProgress += this.feedChart.sol.dex;
      this._defProgress += this.feedChart.sol.def;
      this._iqLevel += this.feedChart.sol.iq;
      this._syncLevel += this.feedChart.sol.sync;
    }
    else if (food === "moon") {
      this._powProgress += this.feedChart.moon.pow;
      this._mindProgress += this.feedChart.moon.mind;
      this._dexProgress += this.feedChart.moon.dex;
      this._defProgress += this.feedChart.moon.def;
      this._iqLevel += this.feedChart.moon.iq;
      this._syncLevel += this.feedChart.moon.sync;
    }
    else if (food === "star") {
      this._powProgress += this.feedChart.star.pow;
      this._mindProgress += this.feedChart.star.mind;
      this._dexProgress += this.feedChart.star.dex;
      this._defProgress += this.feedChart.star.def;
      this._iqLevel += this.feedChart.star.iq;
      this._syncLevel += this.feedChart.star.sync;
    }

    // Calculate the mag's new level after feed
    this.levelMag();
    
  }
  
  /* A mag's stat progress level is from 1-100. Once the mag's stat progress 
  ** hits 100, it's base level increases by 1. This function facilitates
  ** this leveling mechanisim and is called after each mag feed to 
  ** level the mag accordingly.
  */
  
  levelMag() {

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



  // Accessor definitions

  public get magName(): string {
    return this._magName;
  }
  public set magName(value: string) {
    this._magName = value;
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

}


