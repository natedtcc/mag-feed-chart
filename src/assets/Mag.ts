// Mag.ts - Mag class definitions / logic - N. Nasteff 10/25/2021

import { FeedingChart } from "./FeedingChart";

export class Mag  {

  // Assign all mag levels / progress to base
  private _magLevel: number = 5;  // Base mag level
  private _syncLevel: number = 0;
  private _iqLevel: number = 0;
  private _defLevel: number = 5;  // All mags start with 5 defense
  private _powLevel: number = 0;
  private _dexLevel: number = 0;
  private _mindLevel: number = 0;
  private _syncProgress: number = 0;
  private _iqProgress: number = 0;
  private _defProgress: number = 0;
  private _powProgress: number = 0;
  private _dexProgress: number = 0;
  private _mindProgress: number = 0;
  
  // Assign a base mag feed chart to the mag by default
  feedChart: FeedingChart = new FeedingChart();

  // Constructor for base mag / evolutions 1-3
  constructor(magType?: 'evo1'|'evo2'|'evo3'|'evo4'){
    
    // Assign mag level / feeding chart based on constructor args

    if (magType === 'evo1'){
      this._magLevel = 10;
      this.feedChart = new FeedingChart('evo1');
    }

    else if (magType === 'evo2'){
      this._magLevel = 35;
      this.feedChart = new FeedingChart('evo2');
    }

    else if (magType === 'evo3'){
      this._magLevel = 50;
      this.feedChart = new FeedingChart('evo3');
    }

    else if (magType === 'evo4'){
      this._magLevel = 100;
      this.feedChart = new FeedingChart('evo3');
    }

  }



  // Accessor definitions


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
  public get iqProgress(): number {
    return this._iqProgress;
  }
  public set iqProgress(value: number) {
    this._iqProgress = value;
  }
  public get syncProgress(): number {
    return this._syncProgress;
  }
  public set syncProgress(value: number) {
    this._syncProgress = value;
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


