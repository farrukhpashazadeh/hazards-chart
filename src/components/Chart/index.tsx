import { Stage, Layer } from "react-konva";
import Top from "../Top";
import Rows from "../Rows";
import ChartData from "../ChartData";
import { Provider } from "react-redux";
import store from "../../store";

const Chart = () => {
  return (
    <>
      <Top text="Overall hazards per hour per day" />
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Provider store={store}>
          <Layer>
            <Rows />
            <ChartData />
          </Layer>
        </Provider>
      </Stage>
    </>
  );
};

export default Chart;
