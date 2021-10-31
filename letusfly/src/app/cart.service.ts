import { Injectable } from "@angular/core";


@Injectable({
    providedIn:"root"
})

export class CartService {
    items:any = [];
    constructor() { }

    addToCart(choice: any) {
        this.items.push(choice);
    }

    getItems() {
        return this.items;
    }

    

    clearCart() {
        this.items = [];
        return this.items;
    }
}