import classes from "./App.module.css";
import Header from "./Header/Header.jsx";
import Input from "./Input/Input";
import ToDoList from "./ToDo/ToDoList";
import Filters from "./Filters/Filters";
import { useState } from "react";

export default function App() {
  const [toDoItems, setToDoItems] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className={classes.container}>
      <Header />
      <Input setToDoItems={setToDoItems} toDoItems={toDoItems} />
      <ToDoList
        toDoItems={toDoItems}
        setToDoItems={setToDoItems}
        filter={filter}
      />
      <Filters
        setFilter={setFilter}
        filter={filter}
      />
    </div>
  );
}
