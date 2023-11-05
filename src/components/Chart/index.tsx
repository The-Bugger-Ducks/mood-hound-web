import ReactApexChart from "react-apexcharts";
import ChartProps from "./props";

import { FC } from "react";
import { Box } from "@chakra-ui/react";

const Chart: FC<ChartProps> = ({ options, series, type, height }) => {
  return (
    <Box p="0.5rem" bg="#FFF" borderRadius="1rem" border="1px solid #E2E8F0">
      <ReactApexChart
        options={options}
        series={series}
        type={type}
        height={height}
      />
    </Box>
  );
};

export default Chart;
