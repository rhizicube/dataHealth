import { Component, OnInit } from '@angular/core';
// import { Tab } from '../tab.model';
@Component({
  selector: 'app-connectors',
  templateUrl: './connectors.component.html',
  styleUrls: ['./connectors.component.css'],
})
export class ConnectorsComponent implements OnInit {
  constructor() {}
  
  // logo = require('src/assets/images/logo.svg').default;
  ngOnInit(): void {}
  source: { title: string; value: number; description: string }[] = [
    { title: 'Appjs', value: 200, description: 'Available' },
    { title: 'AWS', value: 2005, description: 'Available' },
    { title: 'branch', value: 3000, description: 'Available' },
    { title: 'Appjs', value: 200, description: 'Available' },
    { title: 'AWS', value: 2005, description: 'Available' },
    { title: 'branch', value: 3000, description: 'Available' },
  ];

  destination: { title: string; value: number; description: string }[] = [
    { title: 'Appjs', value: 200, description: 'Available' },
    { title: 'AWS', value: 2005, description: 'Available' },
    { title: 'branch', value: 3000, description: 'Available' },
    { title: 'Appjs', value: 200, description: 'Available' },
    { title: 'AWS', value: 2005, description: 'Available' },
    { title: 'branch', value: 3000, description: 'Available' },
  ];
}
