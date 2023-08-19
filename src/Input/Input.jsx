import classes from "./Input.module.css";
import { useState } from "react";
import Checkbox from "react-custom-checkbox";
import checkIcon from "../assets/icon-check.svg"
export default function Input() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.checkbox_container}>
        <Checkbox
          icon={
            <div className={classes.checkbox_icon}>
              {<img src={checkIcon} style={{ width: 14 }} alt="" />}
            </div>
          }
          borderRadius={20}
          size={25}
          className={classes.checkbox}
          borderWidth="0"
        />
      </div>
      <input className={classes.input} type="text" name="" placeholder="Create a new todo..." />
    </div>
  );
}
