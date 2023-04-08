import Chart from "react-apexcharts";

const DahshboardPurchaseAndSales = ({ sales, purchase }) => {
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Auguest",
  ];

  const options = {
    colors: ["#28C76F", "#EA5455"],
    chart: {
      id: "salesAndPurchases",
      stacked: true,

      zoom: {
        enabled: true,
      },
    },
    responsive: [
      {
        breakpoint: 280,
        options: {
          legend: {
            position: "bottom",
            offsetY: 0,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          legend: {
            show: false,
          },
          plotOptions: {
            bar: {
              borderRadius: 3,
            },
          },
        },
      },
      {
        breakpoint: 1537,
        options: {
          legend: {
            show: true,
          },
          plotOptions: {
            bar: {
              borderRadius: 7,
            },
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "20%",
        borderRadius: 3,
        borderRadiusWhenStacked: "all",
      },
    },
    xaxis: {
      categories: labels,
    },
    legend: {
      inverseOrder: true,
      position: "top",
      fontFamily: '"Nunito Sans", sans-serif',
      offsetY: -38,
      offsetX: -550,
      markers: {
        width: 11,
        height: 11,
        radius: Number.MAX_VALUE,
      },
    },
    fill: {
      opacity: 1,
    },
  };
  return (
    <section className="purchase-sales">
      <div className="purchase-sales-container">
        <h2 className="purchase-sales__title">Purchase & Sales</h2>
        <div className="purchase-sales__char">
          <Chart
            type="bar"
            series={[
              {
                name: "Sales",
                data: sales,
              },
              {
                name: "Purchase",
                data: purchase,
              },
            ]}
            options={options}
            height="100%"
          />
        </div>
      </div>
    </section>
  );
};

export default DahshboardPurchaseAndSales;
