import Row from "../Row";
import rowCoordinates from "../../data/rowCoordinates";

const Rows = () => {
  return (
    <>
      {rowCoordinates.map(({ yAxisText, text, yAxisLine, dash }) => (
        <Row
          key={Math.random() * 100}
          yAxisText={yAxisText}
          text={text}
          yAxisLine={yAxisLine}
          dash={dash}
        />
      ))}
    </>
  );
};

export default Rows;
