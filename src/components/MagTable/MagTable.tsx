import React from "react";
import classes from "./MagTable.module.css";
import Aux from "../../hoc/Auxi";
import { FeedingChart } from "../../assets/FeedingChart";


const MagTable = (mag: FeedingChart): JSX.Element  => {

    // Create a string based off of the mag object's name array
    let mag_names = "";
    for (let i=0; i < mag.names.length; i++) {
      if (mag.names.length === 1 && i === 0){
        mag_names += mag.names[i];
      }

      // Add an & to the last mag name
      else if (i === mag.names.length - 1 && i !== 0) {
        mag_names = mag_names + " & " + mag.names[i];
      }

      // Just have a space after the 2nd to last mag name (no comma)
      else if (i === mag.names.length - 2) {
        mag_names = mag_names + " " + mag.names[i];
      }
      
      // Add a comma after each mag name
      else {
        mag_names = mag_names + mag.names[i] + ", ";
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
                ITEM
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
              <td>{mag.monomate.sync < 0 ? mag.monomate.sync : '+' + mag.monomate.sync}</td>
              <td>{mag.monomate.iq < 0 ? mag.monomate.iq : '+' + mag.monomate.iq}</td>
              <td>{mag.monomate.def < 0 ? mag.monomate.def : '+' + mag.monomate.def}</td>
              <td>{mag.monomate.pow < 0 ? mag.monomate.pow : '+' + mag.monomate.pow}</td>
              <td>{mag.monomate.dex < 0 ? mag.monomate.dex : '+' + mag.monomate.dex}</td>
              <td>{mag.monomate.mind < 0 ? mag.monomate.mind : '+' + mag.monomate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Dimate</td>
              <td>{mag.dimate.sync < 0 ? mag.dimate.sync : '+' + mag.dimate.sync}</td>
              <td>{mag.dimate.iq < 0 ? mag.dimate.iq : '+' + mag.dimate.iq}</td>
              <td>{mag.dimate.def < 0 ? mag.dimate.def : '+' + mag.dimate.def}</td>
              <td>{mag.dimate.pow < 0 ? mag.dimate.pow : '+' + mag.dimate.pow}</td>
              <td>{mag.dimate.dex < 0 ? mag.dimate.dex : '+' + mag.dimate.dex}</td>
              <td>{mag.dimate.mind < 0 ? mag.dimate.mind : '+' + mag.dimate.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trimate</td>
              <td>{mag.trimate.sync < 0 ? mag.trimate.sync : '+' + mag.trimate.sync}</td>
              <td>{mag.trimate.iq < 0 ? mag.trimate.iq : '+' + mag.trimate.iq}</td>
              <td>{mag.trimate.def < 0 ? mag.trimate.def : '+' + mag.trimate.def}</td>
              <td>{mag.trimate.pow < 0 ? mag.trimate.pow : '+' + mag.trimate.pow}</td>
              <td>{mag.trimate.dex < 0 ? mag.trimate.dex : '+' + mag.trimate.dex}</td>
              <td>{mag.trimate.mind < 0 ? mag.trimate.mind : '+' + mag.trimate.mind}</td>
            </tr>

            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Monofluid</td>
              <td>{mag.monofluid.sync < 0 ? mag.monofluid.sync : '+' + mag.monofluid.sync}</td>
              <td>{mag.monofluid.iq < 0 ? mag.monofluid.iq : '+' + mag.monofluid.iq}</td>
              <td>{mag.monofluid.def < 0 ? mag.monofluid.def : '+' + mag.monofluid.def}</td>
              <td>{mag.monofluid.pow < 0 ? mag.monofluid.pow : '+' + mag.monofluid.pow}</td>
              <td>{mag.monofluid.dex < 0 ? mag.monofluid.dex : '+' + mag.monofluid.dex}</td>
              <td>{mag.monofluid.mind < 0 ? mag.monofluid.mind : '+' + mag.monofluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Difluid</td>
              <td>{mag.difluid.sync < 0 ? mag.difluid.sync : '+' + mag.difluid.sync}</td>
              <td>{mag.difluid.iq < 0 ? mag.difluid.iq : '+' + mag.difluid.iq}</td>
              <td>{mag.difluid.def < 0 ? mag.difluid.def : '+' + mag.difluid.def}</td>
              <td>{mag.difluid.pow < 0 ? mag.difluid.pow : '+' + mag.difluid.pow}</td>
              <td>{mag.difluid.dex < 0 ? mag.difluid.dex : '+' + mag.difluid.dex}</td>
              <td>{mag.difluid.mind < 0 ? mag.difluid.mind : '+' + mag.difluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Trifluid</td>
              <td>{mag.trifluid.sync < 0 ? mag.trifluid.sync : '+' + mag.trifluid.sync}</td>
              <td>{mag.trifluid.iq < 0 ? mag.trifluid.iq : '+' + mag.trifluid.iq}</td>
              <td>{mag.trifluid.def < 0 ? mag.trifluid.def : '+' + mag.trifluid.def}</td>
              <td>{mag.trifluid.pow < 0 ? mag.trifluid.pow : '+' + mag.trifluid.pow}</td>
              <td>{mag.trifluid.dex < 0 ? mag.trifluid.dex : '+' + mag.trifluid.dex}</td>
              <td>{mag.trifluid.mind < 0 ? mag.trifluid.mind : '+' + mag.trifluid.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>Antidote</td>
              <td>{mag.antidote.sync < 0 ? mag.antidote.sync : '+' + mag.antidote.sync}</td>
              <td>{mag.antidote.iq < 0 ? mag.antidote.iq : '+' + mag.antidote.iq}</td>
              <td>{mag.antidote.def < 0 ? mag.antidote.def : '+' + mag.antidote.def}</td>
              <td>{mag.antidote.pow < 0 ? mag.antidote.pow : '+' + mag.antidote.pow}</td>
              <td>{mag.antidote.dex < 0 ? mag.antidote.dex : '+' + mag.antidote.dex}</td>
              <td>{mag.antidote.mind < 0 ? mag.antidote.mind : '+' + mag.antidote.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Antiparalysis
              </td>
              <td>{mag.antiparalysis.sync < 0 ? mag.antiparalysis.sync : '+' + mag.antiparalysis.sync}</td>
              <td>{mag.antiparalysis.iq < 0 ? mag.antiparalysis.iq : '+' + mag.antiparalysis.iq}</td>
              <td>{mag.antiparalysis.def < 0 ? mag.antiparalysis.def : '+' + mag.antiparalysis.def}</td>
              <td>{mag.antiparalysis.pow < 0 ? mag.antiparalysis.pow : '+' + mag.antiparalysis.pow}</td>
              <td>{mag.antiparalysis.dex < 0 ? mag.antiparalysis.dex : '+' + mag.antiparalysis.dex}</td>
              <td>{mag.antiparalysis.mind < 0 ? mag.antiparalysis.mind : '+' + mag.antiparalysis.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Sol Atomizer
              </td>
              <td>{mag.sol.sync < 0 ? mag.sol.sync : '+' + mag.sol.sync}</td>
              <td>{mag.sol.iq < 0 ? mag.sol.iq : '+' + mag.sol.iq}</td>
              <td>{mag.sol.def < 0 ? mag.sol.def : '+' + mag.sol.def}</td>
              <td>{mag.sol.pow < 0 ? mag.sol.pow : '+' + mag.sol.pow}</td>
              <td>{mag.sol.dex < 0 ? mag.sol.dex : '+' + mag.sol.dex}</td>
              <td>{mag.sol.mind < 0 ? mag.sol.mind : '+' + mag.sol.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Moon Atomizer
              </td>
              <td>{mag.moon.sync < 0 ? mag.moon.sync : '+' + mag.moon.sync}</td>
              <td>{mag.moon.iq < 0 ? mag.moon.iq : '+' + mag.moon.iq}</td>
              <td>{mag.moon.def < 0 ? mag.moon.def : '+' + mag.moon.def}</td>
              <td>{mag.moon.pow < 0 ? mag.moon.pow : '+' + mag.moon.pow}</td>
              <td>{mag.moon.dex < 0 ? mag.moon.dex : '+' + mag.moon.dex}</td>
              <td>{mag.moon.mind < 0 ? mag.moon.mind : '+' + mag.moon.mind}</td>
            </tr>
            <tr>
              <td style={{ color: "white", textAlign: "left" }}>
                Star Atomizer
              </td>
              <td>{mag.star.sync < 0 ? mag.star.sync : '+' + mag.star.sync}</td>
              <td>{mag.star.iq < 0 ? mag.star.iq : '+' + mag.star.iq}</td>
              <td>{mag.star.def < 0 ? mag.star.def : '+' + mag.star.def}</td>
              <td>{mag.star.pow < 0 ? mag.star.pow : '+' + mag.star.pow}</td>
              <td>{mag.star.dex < 0 ? mag.star.dex : '+' + mag.star.dex}</td>
              <td>{mag.star.mind < 0 ? mag.star.mind : '+' + mag.star.mind}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Aux>
  );
};

export default MagTable;
