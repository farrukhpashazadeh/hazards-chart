import { Text, Line } from "react-konva";

interface RowProps {
  xAxisText?: number;
  yAxisText: number;
  text: string;
  fontSize?: number;
  fill?: string;
  xAxisLine?: number;
  yAxisLine: number;
  points?: number[];
  stroke?: string;
  dash?: number[];
}

const Row = ({
  xAxisText = 55,
  yAxisText,
  text,
  fontSize = 18,
  fill = "#8b8b8b",
  xAxisLine = 50,
  yAxisLine,
  points = [0, 0, window.innerWidth - 100, 0],
  stroke = "#acb0b3",
  dash = [5],
}: RowProps) => {
  return (
    <>
      <Text
        x={xAxisText}
        y={window.innerHeight - yAxisText}
        text={text}
        fontSize={fontSize}
        fill={fill}
      />
      <Line
        x={xAxisLine}
        y={window.innerHeight - yAxisLine}
        points={points}
        stroke={stroke}
        dash={dash}
      />
    </>
  );
};

export default Row;
