import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category-service.service';
import { CartService } from '../cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];
  selectedCategory: string = '';

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // fetch all products
    this.products = this.productService.getProducts();

    this.route.queryParams.subscribe(params => {
      this.selectedCategory = params['category']; // get the category
      this.filterProducts(); // filter based on the category
    });
  }

  filterProducts(): void {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product =>
        product.category.toLowerCase() === this.selectedCategory.toLowerCase()
      );
    } else {
      this.filteredProducts = this.products; // no category? display all
    }
  }

  addToCart(product: any): void {
    this.cartService.addToCart(product);
  }

  viewDetails(products: any): void {
    console.log('Viewing details for:', products);

  }
}



