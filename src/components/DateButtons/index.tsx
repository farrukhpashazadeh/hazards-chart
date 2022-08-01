import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { decrementCount, incrementCount } from "../../store/dateSlice";
import classes from "./index.module.css";

const DateButtons = () => {
  const dispatch = useAppDispatch();

  const chartData: any[] = useAppSelector((state) => state.date.value);
  const count: any = useAppSelector((state: any) => state.date.count);

  return (
    <div className={classes.btnHolder}>
      <button
        disabled={!count && true}
        className={count ? classes.allowed : classes.notAllowed}
        onClick={() => dispatch(decrementCount())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={count ? "#258bf2" : "#bdc1c9"}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
          />
        </svg>
      </button>
      <button
        disabled={count === chartData.length - 1 && true}
        className={
          count !== chartData.length - 1 ? classes.allowed : classes.notAllowed
        }
        onClick={() => dispatch(incrementCount())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill={count !== chartData.length - 1 ? "#258bf2" : "#bdc1c9"}
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DateButtons;
