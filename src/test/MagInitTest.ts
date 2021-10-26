import { Mag } from "../assets/Mag";
import { expect } from "chai";

const mag = new Mag("Mag");
const mag2 = new Mag("Kalki");

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

  it('check the level of an evolution group 1 mag', () => {
    expect(mag2.magLevel).to.equal(10);

  });

})