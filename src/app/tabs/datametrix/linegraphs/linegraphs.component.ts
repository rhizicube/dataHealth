import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
// import * as Highcharts from 'highcharts';
import * as Highcharts from 'highcharts/highstock';
import * as HighchartsMore from 'highcharts/highcharts-more';
import * as HighchartsExporting from 'highcharts/modules/exporting';

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
  selector: 'app-linegraphs',
  templateUrl: './linegraphs.component.html',
  styleUrls: ['./linegraphs.component.css']
})
export class LinegraphsComponent implements OnInit {

  selected: any = { startDate: moment, endDate: moment };
  seriesData = [2, 4, 3, 8, 7, 12];
  tempData = [2, 5, 8, 4, 6, 5];

  onInputChng(){
    this.seriesData = this.tempData;
    console.log("hi");
  }
  kebab = '../../assets/images/kebab.svg';
  
  constructor() {}

  public options: any = {
    chart: {},
    title: {
      text: null,
    },
    button: {
      enabled: true,
    },
    xAxis: {
      title: {
        text: 'Date',
      },
      categories: ['Jan20', 'Feb20', 'Mar20', 'Apr20', 'May20', 'Jun20'],
    },
    yAxis: {
      title: {
        text: 'Data',
      },
    },
    series: [
      {
        data: this.seriesData,
        type: 'line',
      },
    ],
  };

  sminDate: any;

  ngOnInit(): void {
    Highcharts.chart('containerSc', this.options);
    const current = new Date();
    this.sminDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate(),
    };
  }
}
