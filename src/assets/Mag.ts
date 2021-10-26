import { MagInterface } from "./MagInterface";

export class Mag implements MagInterface {
  level: number;
  names: string[];
  monomate: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  dimate: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  trimate: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  monofluid: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  difluid: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  trifluid: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  antidote: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  antiparalysis: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  sol: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  moon: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };
  star: { sync: number; iq: number; def: number; pow: number; dex: number; mind: number; };

  constructor(magType: 'base'|'evo1'|'evo2'|'evo3'){

    if (magType === 'base'){
      this.level = 5;
      this.names = ["Mag"];
      this.monomate = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 40,
        dex: 5,
        mind: 0,
      };
      this.dimate = {
        sync: 3,
        iq: 3,
        def: 10,
        pow: 45,
        dex: 5,
        mind: 0,
      };
      this.trimate= {
        sync: 4,
        iq: 4,
        def: 15,
        pow: 50,
        dex: 10,
        mind: 0,
      };
      this.monofluid = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 0,
        dex: 5,
        mind: 40,
      };
      this.difluid = {
        sync: 3,
        iq: 3,
        def: 10,
        pow: 0,
        dex: 5,
        mind: 45,
      };
      this.trifluid = {
        sync: 4,
        iq: 4,
        def: 15,
        pow: 0,
        dex: 10,
        mind: 50,
      };
      this.antidote = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 10,
        dex: 40,
        mind: 0,
      };
      
      this.antiparalysis = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 0,
        dex: 44,
        mind: 10,
      };
      this.sol = {
        sync: 4,
        iq: 1,
        def: 15,
        pow: 30,
        dex: 15,
        mind: 25,
      };
      this.moon = {
        sync: 4,
        iq: 1,
        def: 15,
        pow: 25,
        dex: 15,
        mind: 30,
      };
      this.star = {
        sync: 6,
        iq: 5,
        def: 25,
        pow: 25,
        dex: 25,
        mind: 25,
      };
    }

    else if (magType === 'evo1'){
      this.names = ["Varuna", "Kalki", "Vritra"];
      this.level = 10;
      this.monomate = {
        sync: 0,
        iq: 0,
        def: 5,
        pow: 10,
        dex: 0,
        mind: -1,
      };

      this.dimate = {
        sync: 3,
        iq: 3,
        def: 10,
        pow: 45,
        dex: 5,
        mind: 0,
      };
      this.trimate = {
        sync: 4,
        iq: 4,
        def: 15,
        pow: 50,
        dex: 10,
        mind: 0,
      };

      this.monofluid = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 0,
        dex: 5,
        mind: 40,
      };

      this.difluid = {
        sync: 3,
        iq: 3,
        def: 10,
        pow: 0,
        dex: 5,
        mind: 45,
      };

      this.trifluid = {
        sync: 4,
        iq: 4,
        def: 15,
        pow: 0,
        dex: 10,
        mind: 50,
      };

      this.antidote = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 10,
        dex: 40,
        mind: 0,
      };

      this.antiparalysis = {
        sync: 3,
        iq: 3,
        def: 5,
        pow: 0,
        dex: 44,
        mind: 10,
      };

      this.sol = {
        sync: 4,
        iq: 1,
        def: 15,
        pow: 30,
        dex: 15,
        mind: 25,
      };

      this.moon = {
        sync: 4,
        iq: 1,
        def: 15,
        pow: 25,
        dex: 15,
        mind: 30,
      };

      this.star = {
        sync: 6,
        iq: 5,
        def: 25,
        pow: 25,
        dex: 25,
        mind: 25,
      };
    }

    else if (magType === 'evo2'){


    }

    else if (magType === 'evo3'){


    }

  }


}
