import classes from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
export default function ToDoList({ toDoItems, setToDoItems, filter }) {
  function handleClearCompleted() {
    const notCompleted = toDoItems.filter(
      (toDoItem) => toDoItem.completed === false
    );
    setToDoItems([...notCompleted]);
  }

  let remainingItems = toDoItems.filter(
    (toDoItem) => !toDoItem.completed
  ).length;

  const filteredItems = toDoItems.filter((item) => {
    if (filter === "all") return true;
    if (filter === "completed") return item.completed;
    return !item.completed;
  });

  return (
    <div className={classes.container}>
      {filteredItems.length > 0 && filteredItems.map((toDoItem) => {
        return (
          <ToDoItem
            key={toDoItem.id}
            toDoItem={toDoItem}
            setToDoItems={setToDoItems}
            toDoItems={toDoItems}
          />
        );
      })}
      {toDoItems.length > 0 && (
        <div className={classes.todoList_footer}>
          <p>{remainingItems} items Left</p>
          <button className={classes.clear_btn} onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </div>
      )}
    </div>
  );
}
