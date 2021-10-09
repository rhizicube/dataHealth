import { Component, OnInit } from '@angular/core';
// import { logo } from 'src/assets/images/logo.svg';
declare var require: any;
// import { Tab } from '../tab.model';
@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css'],
})
export class ConnectorsComponent implements OnInit {
  require: any;
  constructor() {}

  // logo = require('src/assets/images/logo.svg').default;
  logos = new URL('src/assets/images/logo.svg', import.meta.url);
  ngOnInit(): void {}

  codition: boolean = false;
  source: {
    title: string;
    value: number;
    description: string;
    logo: string;
  }[] = [
    {
      title: 'Appsflyer',
      value: 200,
      description: 'Available',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2005,
      description: 'Available',
      logo: '../../assets/images/aws.svg',
    },
    {
      title: 'branch',
      value: 3000,
      description: 'Available',
      logo: '../../assets/images/custom.svg',
    },
    {
      title: 'Shoppify',
      value: 200,
      description: 'Available',
      logo: '../../assets/images/shopify.svg',
    },
    {
      title: 'Custom',
      value: 2005,
      description: 'Available',
      logo: '../../assets/images/custom2.svg',
    },
    {
      title: 'branch',
      value: 3000,
      description: 'Available',
      logo: '../../assets/images/custom.svg',
    },
    {
      title: 'Shoppify',
      value: 200,
      description: 'Available',
      logo: '../../assets/images/shopify.svg',
    },
    {
      title: 'Custom',
      value: 2005,
      description: 'Available',
      logo: '../../assets/images/custom2.svg',
    },
    {
      title: 'branch',
      value: 3000,
      description: 'Available',
      logo: '../../assets/images/custom.svg',
    },
  ];

  destination: {
    title: string;
    value: number;
    description: string;
    logo: string;
  }[] = [
    {
      title: 'Appsflyer',
      value: 200,
      description: 'Available',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2005,
      description: 'Available',
      logo: '../../assets/images/aws.svg',
    },
    {
      title: 'branch',
      value: 3000,
      description: 'Available',
      logo: '../../assets/images/custom.svg',
    },
    {
      title: 'Shoppify',
      value: 200,
      description: 'Available',
      logo: '../../assets/images/shopify.svg',
    },
    {
      title: 'Custom',
      value: 2005,
      description: 'Available',
      logo: '../../assets/images/custom2.svg',
    },
    {
      title: 'branch',
      value: 3000,
      description: 'Available',
      logo: '../../assets/images/custom.svg',
    },
  ];
}
