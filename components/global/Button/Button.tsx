import React from "react";
import styles from "../../../styles/components/global/Button.module.scss";

type _rank = "default" | "primary";

interface _props {
  label: string;
  rank?: _rank;
}

const Button = ({ label, rank = "default" }: _props) => {
  return (
    <button className={`${styles.button} ${styles[rank]}`}>{label}</button>
  );
};

export default Button;
