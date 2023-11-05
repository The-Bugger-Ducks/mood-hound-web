export default interface ChartProps {
  options: ApexCharts.ApexOptions;
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  height: number;
  type:
    | "area"
    | "line"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined;
}
