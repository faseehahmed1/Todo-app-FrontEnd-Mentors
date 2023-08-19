import classes from './ToDoItem.module.css';
import Checkbox from "react-custom-checkbox";
import checkIcon from "../assets/icon-check.svg"
import crossIcon from "../assets/icon-cross.svg"

export default function ToDoItem({todo}){
    return(
        <div className={classes.container}>
        <div className={classes.container_inner}>
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
        <p className={classes.todoItem}>{todo}</p>
        <button className={classes.del_button}>
        <img src={crossIcon} alt="" />
      </button>
      </div>
      </div>
    )
}