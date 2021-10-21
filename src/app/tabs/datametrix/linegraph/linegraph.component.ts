import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import * as Highcharts from 'highcharts';
import * as Highcharts from "highcharts/highstock";
import * as HighchartsMore from "highcharts/highcharts-more";
import * as HighchartsExporting from "highcharts/modules/exporting";

// HighchartsMore(Highcharts);
// HighchartsExporting(Highcharts);
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

// const Exporting = require('highcharts/modules/exporting');
// Exporting(Highcharts);

// const ExportData = require('highcharts/modules/export-data');
// ExportData(Highcharts);

// const Accessibility = require('highcharts/modules/accessibility');
// Accessibility(Highcharts);

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {
selected: any = {startDate: moment, endDate: moment};

  constructor() { }

  public options: any = {
    chart: {
     
       
    },
    title: {
      text: null,
      
    },
    button:{
     enabled: true
    },
    xAxis: {
      title: {
        text: 'Date'
      },
      categories: ["Jan20", "Feb20", "Mar20", "Apr20", "May20", "Jun20",
        ]
    },
    yAxis: {
      title: {
        text: "Data"
      }
    },
    series: [{
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, ],
      type: 'line'
    },
    
  ]
  }
  sminDate:any;
    
  ngOnInit(): void {
    
    Highcharts.chart('container', this.options);
    const current = new Date();
this.sminDate = {
year: current.getFullYear(),
month: current.getMonth() + 1,
day: current.getDate()
};
  }
  // chart : any;
  // updateFromInput = false;
  // Highcharts = Highcharts;
  // chartConstructor = "line";
  // chartCallback: any;
  // chartOptions: any = {
  //   series: [
  //     {
  //       data: [
  //         [1539264600000, 214.45],
  //         [1539351000000, 222.11],
  //         [1539610200000, 217.36],
  //         [1539696600000, 222.15],
  //         [1539783000000, 221.19],
  //         [1539869400000, 216.02],
  //         [1539955800000, 219.31],
  //         [1540215000000, 220.65],
  //         [1540301400000, 222.73],
  //         [1540387800000, 215.09],
  //         [1540474200000, 219.8],
  //         [1540560600000, 216.3],
  //         [1540819800000, 212.24],
  //         [1540906200000, 213.3],
  //         [1540992600000, 218.86],
  //         [1541079000000, 222.22],
  //         [1541165400000, 207.48],
  //         [1541428200000, 201.59],
  //         [1541514600000, 203.77],
  //         [1541601000000, 209.95],
  //         [1541687400000, 208.49],
  //         [1541773800000, 204.47],
  //         [1542033000000, 194.17],
  //         [1542119400000, 192.23],
  //         [1542205800000, 186.8]
  //       ]
  //     }
  //   ],
  //   exporting: {
  //     enabled: true
  //   },
  //   yAxis: {
  //     allowDecimals: false,
  //     align : screenLeft,
  //     title: {
  //       text: "Data"
  //     }
  //   },
  //   xAxis :{
  //     title : {
  //       text: "Date"
  //     }
  //   }
  // };

  // constructor() {
  //   const self = this;

  //   this.chartCallback = function (chart: any): void {
  //     self.chart = chart;
  //   };
  // }

  // ngOnInit() {}

  // setExtremes() {
  //   const self = this,
  //     chart = self.chart;

  //   chart.showLoading();
  //   setTimeout(() => {
  //     chart.hideLoading();

  //     chart.xAxis[0].setExtremes(1539955800000, 1541165400000);
  //     self.updateFromInput = true;
  //   }, 1000);
  // }
}
