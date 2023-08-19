import classes from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
export default function ToDoList({ toDoItems }) {
  console.log(toDoItems);
  return (
    <div className={classes.container}>
      {toDoItems.map((toDoItem) => {
        return <ToDoItem key={toDoItem.id} todo={toDoItem.todo} />;
      })}
      <div className={classes.todoList_footer}>
        <p>X items Left</p>
        <button>Clear Completed</button>
      </div>
    </div>
  );
}
