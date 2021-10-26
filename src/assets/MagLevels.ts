
export class MagLevels {

  // Define all mag names grouped by which evolution they belong to

  private _baseMag: string[] = ["Mag"];
  private _firstEvo: string[] = ["Varuna", "Kalki", "Vritra"];
  private _secondEvo: string[] = [
    "Rudra", "Marutah", "Vayu", "Surya", "Mitra", "Tapas", "Sumba", "Ashvinau", "Namuci"];

  private _thirdEvo: string[] = [
    "Andhaka", "Apsaras", "Bana", "Bhirava", "Durga", "Garuda", "Ila", "Kabanda",
    "Kama", "Kumara", "Madhu", "Marica", "Naga", "Nandin", "Naraka", "Ravana", "Ribhava",
    "Sila", "Soma", "Ushasu", "Varaha", "Yaksa"];

  private _fourthEvo: string[] = [
    "Bhima", "Deva", "Diwan", "Nidra", "Pushan", "Rati", "Rukmin", "Sato", "Savitri"];

  protected _magLevel: number;

  // Assign a mag level that correlates to the name / evolution level of a mag
  // Base: level 5  Evo1: Level 10  Evo2: level 35  Evo3: level 50  Evo4: level 100
  constructor(magName: string) {

    if (this._baseMag.includes(magName)) {
      this._magLevel = 5;
    }

    else if (this._firstEvo.includes(magName)) {
      this._magLevel = 10;
    }

    else if (this._secondEvo.includes(magName)){
      this._magLevel = 35;
    }

    else if (this._thirdEvo.includes(magName)) {
      this._magLevel = 50;
    }

    else {
      this._magLevel = 100;
    }
  }

  public get magLevel(): number {
    return this._magLevel;
  }
  public set magLevel(value: number) {
    this._magLevel = value;
  }

  public get baseMag(): string[] {
    return this._baseMag;
  }
  public set baseMag(value: string[]) {
    this._baseMag = value;
  }

  public get firstEvo(): string[] {
    return this._firstEvo;
  }
  public set firstEvo(value: string[]) {
    this._firstEvo = value;
  }

  public get secondEvo(): string[] {
    return this._secondEvo;
  }
  public set secondEvo(value: string[]) {
    this._secondEvo = value;
  }

  public get thirdEvo(): string[] {
    return this._thirdEvo;
  }
  public set thirdEvo(value: string[]) {
    this._thirdEvo = value;
  }

  public get fourthEvo(): string[] {
    return this._fourthEvo;
  }
  public set fourthEvo(value: string[]) {
    this._fourthEvo = value;
  }

}