import classes from "./Filters.module.css";
import clsx from "clsx";

export default function Filters({
  setFilter, filter
}) {
  const allClass = clsx([classes.filter_button], {
    [classes.all_selected]: filter === 'all',
  });

  const activeClass = clsx([classes.filter_button], {
    [classes.all_selected]: filter === 'active',
  });

  const completeClass = clsx([classes.filter_button], {
    [classes.all_selected]: filter === 'completed',
  });

  return (
    <div className={classes.container}>
      <button onClick={()=>setFilter('all')} className={allClass}>
        All
      </button>
      <button
        onClick={()=>setFilter('active')}
        className={activeClass}
      >
        Active
      </button>
      <button
        onClick={()=>setFilter('completed')}
        className={completeClass}
      >
        Complete
      </button>
    </div>
  );
}
