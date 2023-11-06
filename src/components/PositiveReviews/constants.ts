export const defaultConfiguration: any = {
  series: [],

  options: {
    chart: {
      sparkline: {
        enabled: false
      },
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
      }
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        track: {
          background: "#e7e7e7",
          strokeWidth: '100%',
          margin: 40, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: 2,
            left: 0,
            color: '#999',
            opacity: 1,
            blur: 2
          }
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            color: '#718096',
            fontSize: '16px',
          },
          value: {
            offsetY: -70,
            color: '#2D3748',
            fontSize: '36px',
            fontWeight: 'bold',
            show: true,
          }
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: [0.9, 0.3, 0.9],
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: "#E53E3E",
            opacity: 1
          },
          {
            offset: 25,
            color: "#FFA500",
            opacity: 1
          },
          {
            offset: 50,
            color: "#CECC31",
            opacity: 1
          },
          {
            offset: 100,
            color: "#10ba5e",
            opacity: 1
          }
        ]
      },
    },
    stroke: {
      lineCap: 'round'
    },
    labels: ['Positivas'],
  },
};
