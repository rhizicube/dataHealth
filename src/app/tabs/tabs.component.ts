import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tabs: { title: string; tab_type: string }[] = [
    { title: 'Data',  tab_type: 'Available' },
    { title: 'Connectors', tab_type: 'Available' },
    
  ];

}
