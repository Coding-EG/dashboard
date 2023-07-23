function changeTab(event, tabName) {
  event.preventDefault();
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }
  });
  document
    .querySelector(`[onclick="changeTab(event,'${tabName}')"]`)
    .classList.add("active");
}

const xValues = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65];
const yValues = [55, 49, 44, 24, 15];
const barColors = ["red", "green", "blue", "orange", "brown"];

new Chart("bar-data", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        label: "Employer: K73,500",
        data: yValues,
        backgroundColor: "#0800a3",
        stack: "Stack 0",
      },
      {
        label: "Employee: K52,500",
        data: yValues,
        backgroundColor: "#4935ff",
        stack: "Stack 0",
      },
      {
        label: "Total Interest: K244,313",
        data: yValues,
        backgroundColor: "#85afff",
        stack: "Stack 0",
      },
    ],
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: "Contributions Overtime",
      },
    },
    responsive: true,
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        ticks: {
          callback: function (value) {
            return `$${value}`;
          },
        },
      },
    },
  },
});
