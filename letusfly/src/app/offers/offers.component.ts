import { Component, OnInit } from '@angular/core';
import { destinations } from '../destinations';
import { CartService } from '../cart.service';



@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  destinations = destinations;

  constructor(private cs:CartService) { }
  addToCart(items:any) {
    alert("Your Trip to " + items.country + " was booked!");
    this.cs.addToCart(items);
  }
  
  ngOnInit(): void {  

  }

}
