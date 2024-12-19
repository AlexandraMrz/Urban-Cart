import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  getCategories() {
    return [
      { id: 1, name: 'Accessories', imageUrl: '/assets/images/categories/acc2.svg' },
      { id: 2, name: 'Footwear', imageUrl: '/assets/images/categories/foot.svg' },
      { id: 3, name: 'Hoodies', imageUrl: '/assets/images/categories/hood.svg' },
      { id: 4, name: 'Jackets', imageUrl: '/assets/images/categories/jack.svg' },
      { id: 5, name: 'Pants', imageUrl: '/assets/images/categories/pants.svg' },
      { id: 6, name: 'Sweatshirts', imageUrl: '/assets/images/categories/sweat.svg' },
      { id: 7, name: 'T-Shirts', imageUrl: '/assets/images/categories/shirt.svg' },
    ];
  }
}
