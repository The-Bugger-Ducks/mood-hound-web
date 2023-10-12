import CommentSentimentEnum from "../../utils/enums/commentSentiment.enum";

export const defaultConfiguration: any = {
  series: [
    {
      name: "Positivo",
      data: [],
    },
    {
      name: "Negativo",
      data: [],
    },
    {
      name: "Neutro",
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

    colors: ["#38A169", "#E53E3E", "#3182CE"],

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
        text: "Período",
      },
    },

    yaxis: {
      title: {
        text: "Total de avaliações",
      },
    },

    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      offsetY: -25,
      offsetX: -5,
    },
  },
};
