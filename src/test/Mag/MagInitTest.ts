import { Mag } from "../../assets/Mag";
import { expect } from "chai";

const mag = new Mag("Mag");
const mag2 = new Mag("Kalki");
const mag3 = new Mag("Vayu");
const mag4 = new Mag("Kama");

describe('Mag constructor test', () => {
  it('check if base mag name works', () => {
    expect(mag.magName).to.equal("Mag");

  });

  it('check a different name of evolution group 1', () => {
    expect(mag2.magName).to.equal("Kalki");

  });

  it('check the level of a base mag', () => {
    expect(mag.magLevel).to.equal(5);

  });

  it('check the level of an 1st evolution mag', () => {
    expect(mag2.magLevel).to.equal(10);

  });

  it('check the level of an 2nd evolution mag', () => {
    expect(mag3.magLevel).to.equal(35);

  });

  it('check the level of an 3rd evolution mag', () => {
    expect(mag4.magLevel).to.equal(50);

  });


})