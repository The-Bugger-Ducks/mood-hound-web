export const defaultConfiguration: any = {
  series: [
    {
      name: "Variação diária de tempo de processamento",
      data: [],
    },
  ],

  options: {
    chart: {
      height: 350,
      type: "line",
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

    colors: ["#319795"],

    dataLabels: {
      enabled: false,
    },

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

    xaxis: {
      title: {
        text: "Data",
      },
    },

    yaxis: {
      title: {
        text: "Tempo de processamento",
      },
    },
  },
};
