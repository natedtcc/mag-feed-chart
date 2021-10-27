import { Mag } from "../../assets/Mag";
import { expect } from "chai";

const mags: Mag[] = [
  new Mag("Mag"), new Mag("Kalki"), new Mag("Vayu"),
  new Mag("Naga"), new Mag("Savitri")
];

// Testing mag base levels

describe('Mag level test', () => {
  
  it('check the level of a base mag', () => {
    expect(mags[0].magLevel).to.equal(5);

  });

  it('check the level of a 1st evolution mag', () => {
    expect(mags[1].magLevel).to.equal(10);

  });

  it('check the level of an 2nd evolution mag', () => {
    expect(mags[2].magLevel).to.equal(35);

  });

  it('check the level of an 3rd evolution mag', () => {
    expect(mags[3].magLevel).to.equal(50);

  });

  it('check the level of an 3rd evolution mag', () => {
    expect(mags[4].magLevel).to.equal(100);

  });

})

// Testing mag names

describe('Mag name test', () => {

  it('check if base mag name is correct', () => {
    expect(mags[0].magName).to.equal("Mag");

  });

  it('check the name of a 1st evolution mag', () => {
    expect(mags[1].magName).to.equal("Kalki");

  });

  it('check the name of a 2nd evolution mag', () => {
    expect(mags[2].magName).to.equal("Vayu");

  });

  it('check the name of a 3rd evolution mag', () => {
    expect(mags[3].magName).to.equal("Naga");

  });

  it('check the name of a 1st evolution mag', () => {
    expect(mags[4].magName).to.equal("Savitri");

  });
})
  
describe('Mag level test', () => {
  
  it('check the level of a base mag', () => {
    expect(mags[0].magLevel).to.equal(5);

  });

  it('check the level of a 1st evolution mag', () => {
    expect(mags[1].magLevel).to.equal(10);

  });

  it('check the level of an 2nd evolution mag', () => {
    expect(mags[2].magLevel).to.equal(35);

  });

  it('check the level of an 3rd evolution mag', () => {
    expect(mags[3].magLevel).to.equal(50);

  });

  it('check the level of an 4th evolution mag', () => {
    expect(mags[4].magLevel).to.equal(100);

  });
});

// Testing mag names

describe('Mag feed table number test', () => {

  it('confirm feed table number for base mag', () => {
    expect(mags[0].feedChart.tableNum).to.equal(0);

  });

  it('confirm feed table number for 1st evolution mag', () => {
    expect(mags[1].feedChart.tableNum).to.equal(1);

  });

  it('confirm feed table number for 2nd evolution mag', () => {
    expect(mags[2].feedChart.tableNum).to.equal(4);

  });

  it('confirm feed table number for 3rd evolution mag', () => {
    expect(mags[3].feedChart.tableNum).to.equal(6);

  });

  it('confirm feed table number for 4th evolution mag', () => {
    expect(mags[4].feedChart.tableNum).to.equal(7);

  });
}); 
