import GeoChartProps from "./props";

import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Chart } from "react-google-charts";
import { geoChartOption } from "./constants";

const GeoChart: FC<GeoChartProps> = ({ data }) => {
  return (
    <Box p="0.5rem" bg="#FFF" borderRadius="1rem" border="1px solid #E2E8F0">
      <Chart
        chartType="GeoChart"
        width="100%"
        height="400px"
        data={data}
        options={geoChartOption}
      />
    </Box>
  );
};

export default GeoChart;
