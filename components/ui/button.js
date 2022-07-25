import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={styles.btn}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button onClick={props.onClick} className={styles.button}>
      {props.children}
    </button>
  );
}

export default Button;
