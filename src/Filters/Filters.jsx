import classes from "./Filters.module.css";
import clsx from "clsx";

export default function Filters({
  setFilter, filter
}) {
  const filters = ['all', 'active', 'completed'];


  return (
    <div className={classes.container}>
      {filters.map(f => (
        <button 
          key={f}
          onClick={() => setFilter(f)}
          className={clsx(classes.filter_button, {
            [classes.all_selected]: filter === f,
          })}
        >
          {capitalizeFirstLetter(f)}
        </button>
      ))}
    </div>
  );
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}