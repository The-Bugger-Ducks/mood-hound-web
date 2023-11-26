export const defaultConfiguration: any = {
  series: [
    {
      name: "Erros diários",
      data: [],
    },
  ],

  options: {
    chart: {
      height: 350,
      type: "bar",
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

    colors: ["#E53E3E"],

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
        text: "Total de erros",
      },
    },
  },
};
