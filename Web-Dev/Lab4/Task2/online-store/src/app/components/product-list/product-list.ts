import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      description: 'Latest Apple smartphone with A17 chip and titanium body.',
      price: 649990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/h5e/84059345661982.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf0/h5e/84059345661982.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h35/h79/84059345891358.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h0c/h76/84059345956894.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-113138596/'
    },

    {
      id: 2,
      name: 'Samsung Galaxy S23',
      description: 'Powerful Android flagship with Snapdragon processor.',
      price: 459990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/hde/82226033864734.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hff/hde/82226033864734.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h47/82226034094110.jpg',
        'https://resources.cdn-kaspi.kz/img/m/p/h8a/h28/82226034159646.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23-256gb-109046287/'
    }
  ];
}