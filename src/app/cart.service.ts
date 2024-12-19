import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = []; // array for cart items

  constructor() {}

  // add
  addToCart(product: any): void {
    this.cartItems.push(product);
  }

  // get all of them
  getCartItems(): any[] {
    return this.cartItems;
  }

  // remove
  removeFromCart(index: number): void {
    this.cartItems.splice(index, 1);
  }

  // clear cart
  clearCart(): void {
    this.cartItems = [];
  }

  // total price
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
