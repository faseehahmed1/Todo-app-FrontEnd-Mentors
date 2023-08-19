import classes from "./App.module.css";
import Header from "./Header/Header.jsx";
import Input from "./Input/Input";
import toDoItems from "./DATA.JSX";
import ToDoList from "./ToDo/ToDoList";
import Filters from "./Filters/Filters";

export default function App() {
  console.log(toDoItems);
  return (
    <div className={classes.container}>
      <Header/>
      <Input/>
      <ToDoList toDoItems={toDoItems}/>
      <Filters/>
    </div>
  );
}
