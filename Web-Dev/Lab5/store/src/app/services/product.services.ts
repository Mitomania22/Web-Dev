import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Tablets' }
  ];

  products: Product[] = [
    { id: 1, name: 'iPhone 15', description: 'Latest Apple smartphone.', price: 450000, rating: 4.9, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/apple-iphone-15/', likes: 0, categoryId: 1 },
    { id: 2, name: 'Samsung S23', description: 'Flagship Samsung phone.', price: 420000, rating: 4.8, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/samsung-galaxy-s23/', likes: 0, categoryId: 1 },
    { id: 3, name: 'Xiaomi 13', description: 'Powerful Xiaomi device.', price: 320000, rating: 4.7, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/xiaomi-13/', likes: 0, categoryId: 1 },
    { id: 4, name: 'Huawei P60', description: 'Huawei flagship model.', price: 350000, rating: 4.6, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/huawei-p60/', likes: 0, categoryId: 1 },
    { id: 5, name: 'iPhone 14', description: 'Apple smartphone 2023.', price: 400000, rating: 4.8, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/apple-iphone-14/', likes: 0, categoryId: 1 },

    { id: 6, name: 'MacBook Air M2', description: 'Apple lightweight laptop.', price: 650000, rating: 4.9, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/apple-macbook-air-m2/', likes: 0, categoryId: 2 },
    { id: 7, name: 'HP Pavilion 15', description: 'Reliable HP laptop.', price: 350000, rating: 4.5, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/hp-pavilion-15/', likes: 0, categoryId: 2 },
    { id: 8, name: 'Lenovo IdeaPad 3', description: 'Affordable Lenovo.', price: 300000, rating: 4.6, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/lenovo-ideapad-3/', likes: 0, categoryId: 2 },
    { id: 9, name: 'Asus VivoBook', description: 'Modern Asus laptop.', price: 320000, rating: 4.4, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/asus-vivobook/', likes: 0, categoryId: 2 },
    { id: 10, name: 'Dell Inspiron 15', description: 'Powerful Dell device.', price: 370000, rating: 4.5, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/dell-inspiron-15/', likes: 0, categoryId: 2 },

    { id: 11, name: 'AirPods Pro 2', description: 'Apple wireless earbuds.', price: 120000, rating: 4.9, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2/', likes: 0, categoryId: 3 },
    { id: 12, name: 'Sony WH-1000XM5', description: 'Noise cancelling headphones.', price: 180000, rating: 4.8, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/sony-wh-1000xm5/', likes: 0, categoryId: 3 },
    { id: 13, name: 'JBL Tune 510BT', description: 'Bluetooth headphones.', price: 35000, rating: 4.6, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/jbl-tune-510bt/', likes: 0, categoryId: 3 },
    { id: 14, name: 'Xiaomi Buds 4', description: 'Xiaomi wireless buds.', price: 45000, rating: 4.5, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/xiaomi-buds-4/', likes: 0, categoryId: 3 },
    { id: 15, name: 'Samsung Buds 2', description: 'Samsung earbuds.', price: 60000, rating: 4.7, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/samsung-galaxy-buds-2/', likes: 0, categoryId: 3 },

    { id: 16, name: 'iPad 10', description: 'Apple tablet.', price: 280000, rating: 4.8, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/apple-ipad-10/', likes: 0, categoryId: 4 },
    { id: 17, name: 'Samsung Tab S9', description: 'Samsung tablet.', price: 300000, rating: 4.7, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s9/', likes: 0, categoryId: 4 },
    { id: 18, name: 'Huawei MatePad 11', description: 'Huawei tablet.', price: 200000, rating: 4.6, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/huawei-matepad-11/', likes: 0, categoryId: 4 },
    { id: 19, name: 'Xiaomi Pad 6', description: 'Xiaomi tablet.', price: 190000, rating: 4.5, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/xiaomi-pad-6/', likes: 0, categoryId: 4 },
    { id: 20, name: 'Lenovo Tab P11', description: 'Lenovo tablet.', price: 170000, rating: 4.4, image: 'https://via.placeholder.com/200', link: 'https://kaspi.kz/shop/p/lenovo-tab-p11/', likes: 0, categoryId: 4 }
  ];

  getCategories() { return this.categories; }
  getProductsByCategory(id: number) {
    return this.products.filter(p => p.categoryId === id);
  }
}