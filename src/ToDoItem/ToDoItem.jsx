import classes from './ToDoItem.module.css';
import Checkbox from "react-custom-checkbox";
import checkIcon from "../assets/icon-check.svg"
import crossIcon from "../assets/icon-cross.svg"
import clsx from 'clsx';

export default function ToDoItem({toDoItem, toDoItems, setToDoItems}){
  const {completed, id, toDo} = toDoItem;


  function handleCheck(checked){
    setToDoItems(toDoItems.map(item => 
      item.id === id ? { ...item, completed: checked } : item
    ));
  }

  function handleDelete(id){
    setToDoItems(toDoItems.filter(item => item.id !== id));
  }
  
  const todoClass = clsx([classes.todoItem], {
    [classes.todoItem_completed]: completed,
  });

    return(
        <div className={classes.container}>
        <div className={classes.container_inner}>
        <div className={classes.checkbox_container}>
        <Checkbox
          icon={
            <div className={classes.checkbox_icon}>
              <img src={checkIcon} style={{ width: 14 }} alt="Checkbox icon" />
            </div>
          }
          borderRadius={20}
          size={26}
          className={classes.checkbox}
          borderWidth="0"
          checked={completed ?? false}
          onChange={(checked) => handleCheck(checked)}
        />
        </div>
        <p className={todoClass}>{toDo}</p>
        <button onClick={()=>handleDelete(id)} className={classes.del_button}>
        <img src={crossIcon} alt="del icon" />
      </button>
      </div>
      </div>
    )
}