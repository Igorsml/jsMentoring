import css from "./Counter.module.css";
import counter from "../store/counter.js";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
  return (
    <>
      <h2>Counter:</h2>
      <div className={css.counter}>
        {counter.total}
        <div className={css.counterButtons}>
          <button className={css.btn} onClick={() => counter.decrement()}>
            -
          </button>
          <button className={css.btn} onClick={() => counter.increment()}>
            +
          </button>
        </div>
      </div>
    </>
  );
});
