import { Component } from '@angular/core';
import { ProductService } from './services/product.services';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from "./components/product-list/product-list";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [ProductListComponent]
})
export class AppComponent {

  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.products = this.productService.getProductsByCategory(id);
  }
}