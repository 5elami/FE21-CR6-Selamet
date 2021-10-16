import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  destination = destinations;
  
  constructor() { }

  ngOnInit(): void {
  }

}
