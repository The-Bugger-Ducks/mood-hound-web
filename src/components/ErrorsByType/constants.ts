export const defaultConfiguration: any = {
  series: [],

  options: {
    chart: {
      height: 350,
      type: "pie",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false,
        },
      },
    },

    labels: [],

    grid: {
      borderColor: "#e7e7e7",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },

    markers: {
      size: 0,
    },

    legend: {
      position: "left",
      offsetY: 0,
      height: 230,
    },
  },
};
