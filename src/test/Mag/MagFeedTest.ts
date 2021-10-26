import { Mag } from "../../assets/Mag";
import { expect } from "chai";

const mag = new Mag('Mag');
const mag2 = new Mag('Sumba');

describe("testing feeding a mag..", () => {
  it('check a base mag\'s power level after feeding a monomate', () => {
    mag.magFeed('monomate');
    expect(mag.powProgress).to.equal(40);
  })

  it('feed the same mag two more monomates, and it\'s overall level should increase', () => {
    mag.magFeed('monomate');
    mag.magFeed('monomate');
    expect(mag.magLevel).to.equal(6);
  })

  it('feed an evo 2 mag an item that will lower its pow progress, and level up defense', () => {
    mag2.powProgress = 50;
    mag2.defProgress = 95;
    mag2.magFeed('trifluid');
    expect(mag2.powProgress).to.equal(35);
    expect(mag2.defLevel).to.equal(6);
    expect(mag2.magLevel).to.equal(36);
  })
})