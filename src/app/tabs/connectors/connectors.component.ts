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

  
  source: {
    title: string;
    value: number;
    description: string;
    userLogo: string;
    logo: string;
  }[] = [
    {
      title: 'Appsflyer',
      value: 20,
      description: 'Available',
      userLogo:'../../assets/images/icon.svg',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2.5,
      description: 'Available',
      userLogo:'../../assets/images/icon.svg',
      logo: '../../assets/images/aws.svg',
    },
    {
      title: 'branch',
      value: 30,
      description: 'Available',
      userLogo:'../../assets/images/icon.svg',
      logo: '../../assets/images/custom.svg',
    },
    // {
    //   title: 'Shoppify',
    //   value: 20,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/shopify.svg',
    // },
    // {
    //   title: 'Custom',
    //   value: 21,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom2.svg',
    // },
    // {
    //   title: 'branch',
    //   value: 3.2,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom.svg',
    // },
    // {
    //   title: 'Shoppify',
    //   value: 2.1,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/shopify.svg',
    // },
    // {
    //   title: 'Custom',
    //   value: 2.5,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom2.svg',
    // },
    // {
    //   title: 'branch',
    //   value: 30,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom.svg',
    // },
  ];

  destination: {
    title: string;
    value: number;
    description: string;
    userLogo: string;
    logo: string;
  }[] = [
    {
      title: 'Appsflyer',
      value: 20,
      description: 'Available',
      userLogo:'../../assets/images/icon.svg',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2.5,
      description: 'Available',
      userLogo:'../../assets/images/icon.svg',
      logo: '../../assets/images/aws.svg',
    },
    // {
    //   title: 'branch',
    //   value: 30,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom.svg',
    // },
    // {
    //   title: 'Shoppify',
    //   value: 20,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/shopify.svg',
    // },
    // {
    //   title: 'Custom',
    //   value: 2.5,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom2.svg',
    // },
    // {
    //   title: 'branch',
    //   value: 30,
    //   description: 'Available',
    //   userLogo:'../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom.svg',
    // },
  ];
}
