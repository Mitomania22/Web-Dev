import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from "../product-card/product-card";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  imports: [ProductItemComponent]
})
export class ProductListComponent {

  @Input() products: Product[] = [];

  deleteProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}