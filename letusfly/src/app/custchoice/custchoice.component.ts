import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { destinations } from '../destinations';

@Component({
  selector: 'custchoice',
  templateUrl: './custchoice.component.html',
  styleUrls: ['./custchoice.component.css']
})
export class CustchoiceComponent implements OnInit {
 destinations = destinations;
 items: any;
 /*counter: number= 0;*/
  constructor(private cs:CartService) { }
/*plus() {
  this.counter++;
}*/
  ngOnInit(): void {
    this.items = this.cs.getItems();
    //this.items = this.cs.clearCart();
  }

}
