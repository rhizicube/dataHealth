import { Component, OnInit } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css'],
})
export class ConnectorsComponent implements OnInit {
  require: any;
  constructor() {}

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
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2.5,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/aws.svg',
    },
    {
      title: 'branch',
      value: 30,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/custom.svg',
    },
    {
      title: 'Shoppify',
      value: 20,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/shopify.svg',
    },
    {
      title: 'Custom',
      value: 21,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/custom2.svg',
    },
    {
      title: 'Appsflyer',
      value: 3.2,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/flyer.svg',
    },
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
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/logo.svg',
    },
    {
      title: 'AWS',
      value: 2.5,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/aws.svg',
    },
    {
      title: 'Appsflyer',
      value: 30,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/flyer.svg',
    },
    {
      title: 'Shoppify',
      value: 20,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/shopify.svg',
    },
    {
      title: 'Custom',
      value: 2.5,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/custom2.svg',
    },
    {
      title: 'branch',
      value: 30,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/custom.svg',
    },
    {
      title: 'Custom',
      value: 2.5,
      description: 'Available',
      userLogo: '../../assets/images/icon.svg',
      logo: '../../assets/images/custom2.svg',
    },
    // {
    //   title: 'Appsflyer',
    //   value: 20,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/logo.svg',
    // },
    // {
    //   title: 'AWS',
    //   value: 2.5,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/aws.svg',
    // },
    // {
    //   title: 'Appsflyer',
    //   value: 30,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/flyer.svg',
    // },
    // {
    //   title: 'Shoppify',
    //   value: 20,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/shopify.svg',
    // },
    // {
    //   title: 'Custom',
    //   value: 2.5,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom2.svg',
    // },
    // {
    //   title: 'branch',
    //   value: 30,
    //   description: 'Available',
    //   userLogo: '../../assets/images/icon.svg',
    //   logo: '../../assets/images/custom.svg',
    // },
  ];
}
