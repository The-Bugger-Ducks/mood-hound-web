export const defaultConfiguration: any = {
  series: [50, 100, 234, 200, 56],

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

    labels: [
      "0 à 20 anos",
      "20 à 35 anos",
      "35 à 45 anos",
      "45 à 60 anos",
      "+60 anos",
    ],

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
