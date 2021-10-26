import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
 line:boolean = true;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  tabs: { title: string; tab_type: string }[] = [
    { title: 'Data',  tab_type: 'Available' },
    { title: 'Connectors', tab_type: 'Available' },
    
  ];

}
