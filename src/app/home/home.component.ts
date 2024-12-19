import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
addToCart(_t43: any) {
throw new Error('Method not implemented.');
}
  featuredProducts: any[] = [];
  categories: { name: string; imageUrl: string }[] = [];


  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  constructor(private productService: ProductService, private categoryService: CategoryService) {}

  ngOnInit(): void {
    // Get the first 6 featured products from the ProductService
    this.featuredProducts = this.productService.getProducts().slice(0, 6);
    this.categories = this.categoryService.getCategories();
    console.log(this.categories);
  }



  //scroll left
  scrollLeft(){
    this.scrollContainer.nativeElement.scrollBy({left: -250, behavior: 'smooth'});
  }

  scrollRight(){
    this.scrollContainer.nativeElement.scrollBy({left: -250, behavior: 'smooth'});
  }

  ngAfterViewInit() {
    const container = this.scrollContainer.nativeElement;
    container.style.overflowX = 'auto';
    container.style.scrollbarWidth = 'none'; // For Firefox
    container.style.msOverflowStyle = 'none'; // For IE
    container.style.setProperty('--webkit-scrollbar', 'none'); // For Chrome/Safari
}
}
