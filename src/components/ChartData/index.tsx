import { useState, useEffect } from "react";
import { Text, Rect } from "react-konva";
import { useAppDispatch, useAppSelector } from "../../hooks/redux-hooks";
import { fetchData } from "../../store/data-actions";
import RectShape from "../Shapes/Rect";
import months from "../../data/months";

const ChartData = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const [hasTooltip, setHasTooltip] = useState(false);
  const [elementIndex, setElementIndex] = useState(0);
  const [fieldData, setFieldData] = useState(0);
  const [fieldName, setFieldName] = useState("");
  const [fieldLevel, setFieldLevel] = useState("");

  const chartData: any[] = useAppSelector((state) => state.date.value);
  const count: any = useAppSelector((state) => state.date.count);

  const windowInnerHeight = window.innerHeight;
  const startLinePosition = 100;
  const yAxisPosition = windowInnerHeight - startLinePosition;
  const timesScale = 100;
  const startTextPosition = 140;
  const dateCountOnScreen = 10;

  const handleMouseOver = (
    index: number,
    field: number,
    name: string,
    fieldLevelData: any
  ) => {
    setElementIndex(index);
    setHasTooltip(true);
    setFieldData(field);
    setFieldName(name);
    setFieldLevel(fieldLevelData);
  };
  const handleMouseLeave = () => {
    setHasTooltip(false);
    setFieldName("");
  };

  return (
    <>
      {chartData
        .slice(count, dateCountOnScreen + count)
        .map(
          ({ timeStart, intensity, lifting, pbStatic, twisting }: any, i) => {
            const month = months[new Date(timeStart).getMonth()];
            const day = new Date(timeStart).getDate().toString();
            intensity *= timesScale;
            lifting *= timesScale;
            pbStatic *= timesScale;
            twisting *= timesScale;

            const liftingYAxis = yAxisPosition - lifting;
            const twistingYAxis = liftingYAxis - twisting;
            const pbStaticYAxis = twistingYAxis - pbStatic;
            const intensityYAxis = pbStaticYAxis - intensity;

            const overall: any = Object.values(chartData[elementIndex])
              .slice(1, 5)
              .reduce((prev: any, current) => prev + current, 0);

            return (
              <>
                <Text
                  x={i * startTextPosition + timesScale - 20}
                  y={windowInnerHeight - 80}
                  text={`${month} ${day}`}
                  fontSize={18}
                  fill="#8b8b8b"
                />
                <RectShape
                  field="lifting"
                  currentField={fieldName}
                  yAxis={liftingYAxis}
                  height={lifting}
                  bgColor="#a35abd"
                  index={i}
                  onHover={() =>
                    handleMouseOver(i, liftingYAxis, "lifting", lifting)
                  }
                  onLeave={() => handleMouseLeave()}
                />
                <RectShape
                  field="twisting"
                  currentField={fieldName}
                  yAxis={twistingYAxis}
                  height={twisting}
                  bgColor="#46aefb"
                  index={i}
                  onHover={() =>
                    handleMouseOver(i, twistingYAxis, "twisting", twisting)
                  }
                  onLeave={() => handleMouseLeave()}
                />
                <RectShape
                  field="pbStatic"
                  currentField={fieldName}
                  yAxis={pbStaticYAxis}
                  height={pbStatic}
                  bgColor="#f84956"
                  index={i}
                  onHover={() =>
                    handleMouseOver(i, pbStaticYAxis, "pbStatic", pbStatic)
                  }
                  onLeave={() => handleMouseLeave()}
                />
                <RectShape
                  field="intensity"
                  currentField={fieldName}
                  yAxis={intensityYAxis}
                  height={intensity}
                  bgColor="#ffd786"
                  index={i}
                  onHover={() =>
                    handleMouseOver(i, intensityYAxis, "intensity", intensity)
                  }
                  onLeave={() => handleMouseLeave()}
                />
                <Rect
                  x={i * 140 + 100}
                  y={windowInnerHeight - startLinePosition}
                  width={2}
                  height={15}
                  fill="#8b8b8b"
                  opacity={0.6}
                  cornerRadius={5}
                  onMouseLeave={() => handleMouseLeave()}
                />
                {hasTooltip && (
                  <>
                    <Rect
                      x={
                        elementIndex === 9
                          ? elementIndex * startTextPosition - 85
                          : elementIndex * startTextPosition + 125
                      }
                      y={fieldData + 10}
                      width={220}
                      height={50}
                      fill="black"
                      opacity={0.6}
                      cornerRadius={5}
                      onMouseLeave={() => handleMouseLeave()}
                    />
                    <Text
                      x={
                        elementIndex === 9
                          ? elementIndex * startTextPosition - 75
                          : elementIndex * startTextPosition + 140
                      }
                      y={fieldData + 20}
                      text={`${
                        fieldName === "intensity"
                          ? "Intense bending"
                          : fieldName === "lifting"
                          ? "Poor bending"
                          : fieldName === "pbStatic"
                          ? "Awkward static posture"
                          : "Back twisting"
                      }: ${+fieldLevel / 100}\nOverall: ${overall.toFixed(1)}`}
                      fill="white"
                      fontSize={15}
                    />
                  </>
                )}
              </>
            );
          }
        )}
    </>
  );
};

export default ChartData;
