// FeedingChart.ts - Mag feeding chart class def - N. Nasteff 10/25/2021


export class FeedingChart {

  // All possible names for this mag in it's current evolution level
  
  names: string[];

  // Define the stat amount gained / lost depending on the item being fed
  // IE: Feeding a mag a monomate will raise sync by 2, lower iq by 2 etc etc

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

  // With no argument, this will instantiate a base mag feed chart.
  // Otherwise, assign a chart based on evolution level

  constructor(evolutionType?: 'evo1'|'evo2'|'evo3'){
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

    if (evolutionType === 'evo1'){
      this.names = ["Varuna", "Kalki", "Vritra"];
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

    else if (evolutionType === 'evo2'){
      this.names = ["Ashvinau", "Sumba", "Namuci", "Marutah", "Rudra"];
      this.monomate =  {
        sync: 0,
        iq: -1,
        def: 1,
        pow: 9,
        dex: 0,
        mind: -5,
      };
      this.dimate= {
        sync: 3,
        iq: 0,
        def: 1,
        pow: 13,
        dex: 0,
        mind: -10,
      };
      this.trimate= {
        sync: 4,
        iq: 1,
        def: 8,
        pow: 16,
        dex: 2,
        mind: -15,
      };
      this.monofluid= {
        sync: 0,
        iq: -1,
        def: 0,
        pow: -5,
        dex: 0,
        mind: 9,
      };
      this.difluid= {
        sync: 3,
        iq: 0,
        def: 4,
        pow: -10,
        dex: 0,
        mind: 13,
      };
      this.trifluid= {
        sync: 3,
        iq: 2,
        def: 6,
        pow: -15,
        dex: 5,
        mind: 17,
      };
      this.antidote= {
        sync: -1,
        iq: 1,
        def: -5,
        pow: 4,
        dex: 12,
        mind: -5,
      };
      this.antiparalysis= {
        sync: 0,
        iq: 0,
        def: -5,
        pow: -6,
        dex: 11,
        mind: 4,
      };
      this.sol= {
        sync: 4,
        iq: -2,
        def: 0,
        pow: 11,
        dex: 3,
        mind: -5,
      };
      this.moon= {
        sync: -1,
        iq: 1,
        def: 4,
        pow: -5,
        dex: 0,
        mind: 11,
      };
      this.star= {
        sync: 4,
        iq: 2,
        def: 7,
        pow: 8,
        dex: 6,
        mind: 9,
      };

    }

    else if (evolutionType === 'evo3'){
      this.names = ["Asparas", "Vayu", "Varaha", "Ushasu", "Kama", "Kaitabha", "Kumara", "Bhirava"];
      this.monomate= {
        sync: 2,
        iq: -1,
        def: -5,
        pow: 9,
        dex: -5,
        mind: 0,
      };
      this.dimate= {
        sync: 2,
        iq: 0,
        def: 0,
        pow: 11,
        dex: 0,
        mind: -10,
      };
      this.trimate= {
        sync: 0,
        iq: 1,
        def: 4,
        pow: 14,
        dex: 0,
        mind: -15,
      };
      this.monofluid= {
        sync: 2,
        iq: -1,
        def: -5,
        pow: 0,
        dex: -6,
        mind: 10,
      };
      this.difluid= {
        sync: 2,
        iq: 0,
        def: 0,
        pow: -10,
        dex: 0,
        mind: 11,
      };
      this.trifluid= {
        sync: 0,
        iq: 1,
        def: 4,
        pow: -15,
        dex: 0,
        mind: 15,
      };
      this.antidote= {
        sync: 2,
        iq: -1,
        def: -5,
        pow: -5,
        dex: 16,
        mind: -5,
      };
      this.antiparalysis= {
        sync: -2,
        iq: 3,
        def: 7,
        pow: -3,
        dex: 0,
        mind: -3,
      };
      this.sol= {
        sync: 4,
        iq: -2,
        def: 5,
        pow: 21,
        dex: -5,
        mind: -20,
      };
      this.moon= {
        sync: 3,
        iq: 0,
        def: -5,
        pow: -20,
        dex: 5,
        mind: 21,
      };
      this.star = {
        sync: 3,
        iq: 2,
        def: 4,
        pow: 6,
        dex: 8,
        mind: 5,
      };
    }

  }
}