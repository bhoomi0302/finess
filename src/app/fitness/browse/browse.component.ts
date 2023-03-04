import { Component, OnInit } from "@angular/core";
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexFill,
  ApexLegend,
  ApexPlotOptions,
  ApexResponsive,
  ApexStroke,
  ApexTooltip,
  ApexXAxis,
  ApexYAxis,
} from "ng-apexcharts";
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
};

@Component({
  selector: "app-browse",
  templateUrl: "./browse.component.html",
  styleUrls: ["./browse.component.scss"],
})
export class BrowseComponent implements OnInit {
  constructor() {}

  public walkingChartOptions: Partial<ChartOptions>;
  public cyclingChartOptions: Partial<ChartOptions>;
  public yogaChartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    this.chart1();
    this.chart2();
    this.chart3();
  }

  private chart1() {
    this.walkingChartOptions = {
      series: [
        {
          name: "Walking",
          data: [31, 40, 28, 51, 42, 20, 30],
        },
        // {
        //   name: "Running",
        //   data: [11, 32, 45, 32, 34, 52, 41],
        // },
        // {
        //   name: "Yoga",
        //   data: [23, 36, 35, 40, 30, 20, 32],
        // },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#407fe4"],
      // , "#908e8e", "#004d66"
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        title: {
          text: "(Day)",
        },
      },
      yaxis: {
        title: {
          text: "(in min)",
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart2() {
    this.cyclingChartOptions = {
      series: [
        // {
        //   name: "Walking",
        //   data: [31, 40, 28, 51, 42, 85, 77],
        // },
        {
          name: "Cycling",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
        // {
        //   name: "Yoga",
        //   data: [23, 36, 35, 40, 30, 20, 32],
        // },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#908e8e"],
      // , "#908e8e", "#004d66"
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        title: {
          text: "(Day)",
        },
      },
      yaxis: {
        title: {
          text: "(in min)",
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
  private chart3() {
    this.yogaChartOptions = {
      series: [
        // {
        //   name: "Walking",
        //   data: [31, 40, 28, 51, 42, 85, 77],
        // },
        // {
        //   name: "Running",
        //   data: [11, 32, 45, 32, 34, 52, 41],
        // },
        {
          name: "Yoga",
          data: [23, 36, 35, 40, 30, 20, 32],
        },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#004d66"],
      // , "#908e8e", "#004d66"
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        title: {
          text: "(Day)",
        },
      },
      yaxis: {
        title: {
          text: "(in min)",
        },
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
}
