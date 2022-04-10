import HOME from "./constants";
import chartData from "../../chart.json";

export const requestHome = () => async (dispatch) => {
  try {
    dispatch({
      type: HOME.LOAD_SUCCESS,
      homeData: chartData.lineChart,
    });
  } catch (e) {
    dispatch({
      type: HOME.LOAD_FAILURE,
      homeData: [],
    });
  }
};
