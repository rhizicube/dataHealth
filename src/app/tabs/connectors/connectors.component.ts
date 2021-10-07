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
  require : any; 
  constructor() {}
  
  // logo = require('src/assets/images/logo.svg').default;
  logos = new URL('src/assets/images/logo.svg', import.meta.url)
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
    { title: 'AWS', value: 2005, description: 'Available' },
    
    
   
  ];
}
