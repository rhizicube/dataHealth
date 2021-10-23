import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datametrix',
  templateUrl: './datametrix.component.html',
  styleUrls: ['./datametrix.component.css'],
})
export class DatametrixComponent implements OnInit {
  constructor() {}
  thumb = '.../../assets/images/png/thumb-up.png';
  ngOnInit(): void {}
  dataCard: {
    title: string;
    subTitle1: string;
    value1: number;
    subTitle2: string;
    value2: number;
    icon: string;
  }[] = [
    {
      title: 'Data points processed',
      subTitle1: 'Ingested',
      value1: 200,
      subTitle2: 'Exported',
      value2: 500,
      
      icon: '.../../assets/images/png/bg-card-count.png',
    },
    {
      title: 'Total connections',
      subTitle1: 'Source',
      value1: 21,
      subTitle2: 'Destination',
      value2: 12,
      icon: '.../../assets/images/png/bg-card-count.png',
    },
  ];
}
