import classes from "./Filters.module.css";

export default function Filters() {
  return (
    <div className={classes.container}>
      <button>All</button>
      <button>Active</button>
      <button>Complete</button>
    </div>
  );
}
