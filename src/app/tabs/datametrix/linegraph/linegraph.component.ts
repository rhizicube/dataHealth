import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare var require: any;
const More = require('highcharts/highcharts-more');
More(Highcharts);

// const Exporting = require('highcharts/modules/exporting');
// Exporting(Highcharts);

const ExportData = require('highcharts/modules/export-data');
ExportData(Highcharts);

const Accessibility = require('highcharts/modules/accessibility');
Accessibility(Highcharts);

@Component({
  selector: 'app-linegraph',
  templateUrl: './linegraph.component.html',
  styleUrls: ['./linegraph.component.css']
})
export class LinegraphComponent implements OnInit {

  constructor() { }

  public options: any = {
    chart: {
     
       
    },
    title: {
      text: "Data",
      
    },
    button:{
     enabled: true
    },
    xAxis: {
      title: {
        text: 'Tokyo'
      },
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {
      title: {
        text: "Temprature"
      }
    },
    series: [{
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 24.4, 19.3, 16.0, 18.4, 17.9],
      type: 'line'
    },
    
  ]
  }
  // const select = Highcharts.createElement(
  //   'select', {
  //     onchange: function(e: { target: { value: any; }; }) {
  //       console.log(e.target.value);
  //     }
  //   }, {
  //     position: 'absolute',
  //     top: this.options.plotTop + 'px',
  //     left: this.options.plotLeft + 'px'
  //   }, document.getElementById('container'));
  
  // ['option1', 'option2', 'option3'].forEach(function(elem) {
  //   Highcharts.createElement(
  //     'option', {
  //       value: elem,
  //       innerHTML: elem
  //     }, {}, select);
  // });
  
  ngOnInit(): void {
    Highcharts.chart('container', this.options);
  }

}
