import classes from './ToDoItem.module.css';
import Checkbox from "react-custom-checkbox";
import checkIcon from "../assets/icon-check.svg"
import crossIcon from "../assets/icon-cross.svg"
import clsx from 'clsx';

export default function ToDoItem({toDoItem, toDoItems, setToDoItems}){
  const {completed, id, toDo} = toDoItem;


  function handleCheck(checked){
    const copyArray = [...toDoItems]
    const index = toDoItems.findIndex(item=>item.id === id)
    const objToUpdate = copyArray[index]
    objToUpdate.completed = checked;
    setToDoItems(copyArray)
  }

  function handleDelete(id){
    const index = toDoItems.findIndex(item=>item.id === id)
    setToDoItems([...toDoItems.slice(0, index), ...toDoItems.slice(index+1)])
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
              {<img src={checkIcon} style={{ width: 14 }} alt="" />}
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
        <img src={crossIcon} alt="" />
      </button>
      </div>
      </div>
    )
}