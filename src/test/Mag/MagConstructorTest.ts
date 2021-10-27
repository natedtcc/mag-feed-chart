import { Mag } from "../../assets/Mag";
import { expect } from "chai";

const mag = new Mag("Mag");
const mag2 = new Mag("Kalki");
const mag3 = new Mag("Vayu");
const mag4 = new Mag("Kama");

// Testing mag levels

describe('Mag level test', () => {
  
  it('check the level of a base mag', () => {
    expect(mag.magLevel).to.equal(5);

  });

  it('check the level of a 1st evolution mag', () => {
    expect(mag2.magLevel).to.equal(10);

  });

  it('check the level of an 2nd evolution mag', () => {
    expect(mag3.magLevel).to.equal(35);

  });

  it('check the level of an 3rd evolution mag', () => {
    expect(mag4.magLevel).to.equal(50);

  });

})

// Testing mag names

describe('Mag name test', () => {

  it('check if base mag name is correct', () => {
    expect(mag.magName).to.equal("Mag");

  });

  it('check the name of a 1st evolution mag', () => {
    expect(mag2.magName).to.equal("Kalki");

  });

})