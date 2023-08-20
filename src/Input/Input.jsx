import classes from "./Input.module.css";
import { useState } from "react";
import Checkbox from "react-custom-checkbox";
import checkIcon from "../assets/icon-check.svg";
import { v4 } from "uuid";

export default function Input({ setToDoItems, toDoItems }) {
  const [userInput, setUserInput] = useState("");

  function handleAddToDo(e) {
    if (e.key === "Enter") {
      if (e.target.value === "") return;
      let toDo = e.target.value;
      toDo = toDo[0].toUpperCase() + toDo.slice(1).toLowerCase();
      const toDoObj = {
        id: v4(),
        toDo,
        completed: false,
      };
      setToDoItems([...toDoItems, toDoObj]);
      setUserInput("");
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.checkbox_container}>
        <Checkbox
          icon={
            <div className={classes.checkbox_icon}>
              {<img src={checkIcon} style={{ width: 16 }} alt="" />}
            </div>
          }
          borderRadius={20}
          size={26}
          className={classes.checkbox}
          borderWidth="0"
        />
      </div>
      <input
        value={userInput}
        className={classes.input}
        type="text"
        placeholder="Create a new todo..."
        onChange={(e) => setUserInput(e.target.value)}
        onKeyDown={(e) => handleAddToDo(e)}
      />
    </div>
  );
}
