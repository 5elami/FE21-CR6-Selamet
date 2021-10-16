import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  destination = destinations;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

    let id : any = params.get('pro');
  
    this.destination = destinations[id];
  
    });
  }

}
