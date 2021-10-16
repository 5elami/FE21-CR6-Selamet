import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { destinations } from '../destinations';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  destination = destinations;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( params =>{
      let x : any = params.get(`x`);
      this.destination = destinations;

    } )
    };
  }


