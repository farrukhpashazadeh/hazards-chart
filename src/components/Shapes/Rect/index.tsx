import { Rect } from "react-konva";

interface RectProps {
  key?: number;
  field: string;
  currentField: string;
  xAxis?: number;
  yAxis: number;
  width?: number;
  height: number;
  bgColor: string;
  index: number;
  onHover: () => void;
  onLeave: () => void;
}

const RectShape = ({
  field,
  currentField,
  yAxis,
  height,
  bgColor,
  index,
  onHover,
  onLeave,
}: RectProps) => {
  return (
    <Rect
      key={Math.random() * 100}
      opacity={currentField === field || !currentField ? 1 : 0.4}
      x={index * 140 + 100}
      y={yAxis}
      width={60}
      height={height}
      fill={bgColor}
      onMouseOver={onHover}
      onMouseLeave={onLeave}
    />
  );
};

export default RectShape;
