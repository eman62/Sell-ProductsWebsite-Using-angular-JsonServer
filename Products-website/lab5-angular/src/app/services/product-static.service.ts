import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { productList } from './productList';

@Injectable({
  providedIn: 'root',
})
export class ProductStaticService {
  products: IProduct[] = [];
  constructor() {
    this.products = productList;
  }

  getAllProduct(): IProduct[] {
    return this.products;
  }

  getProductId(id: any) {
    return this.products.find((product) => product.id == id);
  }

  deleteProduct(id: any) {
    this.products = this.products.filter((product) => product.id != id);
    return this.products;
  }
  // add -- edit
   addProduct(product: IProduct): void {
    this.products.push(product);
  }

  editProduct(id: any, updatedProduct: IProduct): void {
    const index = this.products.findIndex((product) => product.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updatedProduct };
    }
  }
}
