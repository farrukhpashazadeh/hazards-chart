import axios from "axios";

const DateService = {
  async getChartData() {
    const response = await axios.get("chart.json");
    return response.data;
  },
};

export default DateService;
