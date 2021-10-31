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
  constructor(private cs:CartService) { }

  ngOnInit(): void {
    this.items = this.cs.getItems();
  }

}
