import React from "react";
import classes from "./MagInfo.module.css";
import MagTable from "../MagTable/MagTable";
import { Mag } from "../../assets/Mag";

const MagInfo = (mag: Mag) => {
  return (
    <div className={classes.MagInfo}>
      {/* Pass mag object props and names string to the table component*/}
      <MagTable magtype = {mag} />
    </div>
  );
};

export default MagInfo;
