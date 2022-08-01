import DateButtons from "../DateButtons";
import classes from "./index.module.css";

interface TopProps {
  text: string;
}

const Top = ({ text }: TopProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.textHolder}>
        <p>{text}</p>
      </div>
      <DateButtons />
    </div>
  );
};

export default Top;
