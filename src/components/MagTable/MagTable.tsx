import React from "react";
import classes from "./MagTable.module.css";
import Aux from "../../hoc/Auxi";
import { Mag } from "../../assets/Mag";

const MagTable = ({ magtype }): JSX.Element => {
    // Create a string based off of the mag object's name array
    let mag_names = "";
    for (let i=0; i < magtype.names.length; i++) {
      if (magtype.names.length === 1 && i === 0){
        mag_names += magtype.names[i];
      }
      else if (i === magtype.names.length - 1 && i !== 0) {
        mag_names = mag_names + " & " + magtype.names[i];
      }
      else {
        mag_names = mag_names + magtype.names[i] + ", ";
      }
    }
  return (
    <Aux>
      <div className={classes.MagTable}>
        <p>{mag_names}</p>
        <table>
          <thead>
            <tr>
              <th>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ITEM&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
              </th>
              <th>
                <label>SYNC</label>
              </th>
              <th>&nbsp;&nbsp;IQ&nbsp;&nbsp;</th>
              <th>&nbsp;DEF&nbsp;</th>
              <th>&nbsp;POW&nbsp;</th>
              <th>&nbsp;DEX&nbsp;</th>
              <th>MIND</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Monomate</td>
              <td>{magtype.monomate.sync}</td>
              <td>{magtype.monomate.iq}</td>
              <td>{magtype.monomate.def}</td>
              <td>{magtype.monomate.pow}</td>
              <td>{magtype.monomate.dex}</td>
              <td>{magtype.monomate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Dimate</td>
              <td>{magtype.dimate.sync}</td>
              <td>{magtype.dimate.iq}</td>
              <td>{magtype.dimate.def}</td>
              <td>{magtype.dimate.pow}</td>
              <td>{magtype.dimate.dex}</td>
              <td>{magtype.dimate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trimate</td>
              <td>{magtype.trimate.sync}</td>
              <td>{magtype.trimate.iq}</td>
              <td>{magtype.trimate.def}</td>
              <td>{magtype.trimate.pow}</td>
              <td>{magtype.trimate.dex}</td>
              <td>{magtype.trimate.mind}</td>
            </tr>

            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Monofluid</td>
              <td>{magtype.monofluid.sync}</td>
              <td>{magtype.monofluid.iq}</td>
              <td>{magtype.monofluid.def}</td>
              <td>{magtype.monofluid.pow}</td>
              <td>{magtype.monofluid.dex}</td>
              <td>{magtype.monofluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Difluid</td>
              <td>{magtype.difluid.sync}</td>
              <td>{magtype.difluid.iq}</td>
              <td>{magtype.difluid.def}</td>
              <td>{magtype.difluid.pow}</td>
              <td>{magtype.difluid.dex}</td>
              <td>{magtype.difluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trifluid</td>
              <td>{magtype.trifluid.sync}</td>
              <td>{magtype.trifluid.iq}</td>
              <td>{magtype.trifluid.def}</td>
              <td>{magtype.trifluid.pow}</td>
              <td>{magtype.trifluid.dex}</td>
              <td>{magtype.trifluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Antidote</td>
              <td>{magtype.antidote.sync}</td>
              <td>{magtype.antidote.iq}</td>
              <td>{magtype.antidote.def}</td>
              <td>{magtype.antidote.pow}</td>
              <td>{magtype.antidote.dex}</td>
              <td>{magtype.antidote.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Antiparalysis
              </td>
              <td>{magtype.antiparalysis.sync}</td>
              <td>{magtype.antiparalysis.iq}</td>
              <td>{magtype.antiparalysis.def}</td>
              <td>{magtype.antiparalysis.pow}</td>
              <td>{magtype.antiparalysis.dex}</td>
              <td>{magtype.antiparalysis.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Sol Atomizer
              </td>
              <td>{magtype.sol.sync}</td>
              <td>{magtype.sol.iq}</td>
              <td>{magtype.sol.def}</td>
              <td>{magtype.sol.pow}</td>
              <td>{magtype.sol.dex}</td>
              <td>{magtype.sol.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Moon Atomizer
              </td>
              <td>{magtype.moon.sync}</td>
              <td>{magtype.moon.iq}</td>
              <td>{magtype.moon.def}</td>
              <td>{magtype.moon.pow}</td>
              <td>{magtype.moon.dex}</td>
              <td>{magtype.moon.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Star Atomizer
              </td>
              <td>{magtype.star.sync}</td>
              <td>{magtype.star.iq}</td>
              <td>{magtype.star.def}</td>
              <td>{magtype.star.pow}</td>
              <td>{magtype.star.dex}</td>
              <td>{magtype.star.mind}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Aux>
  );
};

export default MagTable;
