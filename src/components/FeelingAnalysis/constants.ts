export const defaultConfiguration: any = {
  series: [
    {
      name: "Negativo",
      data: [53],
    },

    {
      name: "Neutro",
      data: [12],
    },

    {
      name: "Positivo",
      data: [44],
    },
  ],

  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      stackType: "100%",

      toolbar: {
        show: false,
      },
    },

    colors: ["#E53E3E", "#718096", "#38A169"],

    plotOptions: {
      bar: {
        horizontal: true,
      },
    },

    stroke: {
      width: 0,
      colors: ["#fff"],
    },

    grid: {
      show: false,

      xaxis: {
        lines: {
          show: false,
        },
      },

      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      categories: ["Sentimentos"],

      labels: {
        show: false,
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    yaxis: {
      labels: {
        show: false,
      },

      axisBorder: {
        show: false,
      },

      axisTicks: {
        show: false,
      },
    },

    fill: {
      opacity: 1,
    },

    legend: {
      show: false,
    },
  },
};
