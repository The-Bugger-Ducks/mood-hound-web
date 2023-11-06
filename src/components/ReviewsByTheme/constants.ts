export const defaultConfiguration: any = {
  series: [
    {
      name: "Sentimento positivo",
      data: [],
    },
    {
      name: "Sentimento negativo",
      data: [],
    },
  ],

  options: {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
    },

    colors: ["#38A169", "#E53E3E"],

    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],

    xaxis: {
      title: {
        text: "Tema",
      },
      categories: [],
    },

    yaxis: {
      title: {
        text: "Total de avaliações",
      },
    },

    fill: {
      opacity: 1,
    },
  },
};
