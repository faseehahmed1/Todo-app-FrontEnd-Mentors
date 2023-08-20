import classes from "./ToDoList.module.css";
import ToDoItem from "../ToDoItem/ToDoItem";
export default function ToDoList({
  toDoItems,
  setToDoItems,
  filter
}) {
  function handleClearCompleted() {
    const notCompleted = toDoItems.filter(toDoItem=>toDoItem.completed === false)
    setToDoItems([...notCompleted]);
  }

  let reminingItems = toDoItems.filter(toDoItem=>toDoItem.completed===false).length

  return (
    <div className={classes.container}>
      {toDoItems.map((toDoItem) => {
        if (filter === 'all') {
          return (
            <ToDoItem
              key={toDoItem.id}
              toDoItem={toDoItem}
              setToDoItems={setToDoItems}
              toDoItems={toDoItems}
            />
          );
        } else if (filter === 'completed') {
          return (
            toDoItem.completed && (
              <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                setToDoItems={setToDoItems}
                toDoItems={toDoItems}
              />
            )
          );
        } else {
          return (
            !toDoItem.completed && (
              <ToDoItem
                key={toDoItem.id}
                toDoItem={toDoItem}
                setToDoItems={setToDoItems}
                toDoItems={toDoItems}
              />
            )
          );
        }
      })}
      {!!toDoItems.length && (
        <div className={classes.todoList_footer}>
          <p>{reminingItems} items Left</p>
          <button className={classes.clear_btn} onClick={handleClearCompleted}>Clear Completed</button>
        </div>
      )}
    </div>
  );
}
