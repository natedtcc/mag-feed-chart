import React from "react";
import styles from "./FeedButton.module.css";

// Interface for button props
// Function for click action, label for item name (food)
interface Props {
  onClick: () => void;
  label: string;
}

const FeedButton: React.FC<Props> = ({ onClick, label }) => { 
  return (
    <button className={styles.FeedButton}
      onClick={onClick}
    >
    <label>{label}</label>
    </button>
  );
}

export default FeedButton;
