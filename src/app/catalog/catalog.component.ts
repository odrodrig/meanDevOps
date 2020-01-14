import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../../assets/inventory';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  // products: Product[];

  products = PRODUCTS;

  selectedProduct: Product;
  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  addToCart(product: Product) {
    const msg = product.name + ' was added to the cart.';
    console.log(msg);
    return msg;
  }

  // getProducts(): void {
  //   this.productService.getProducts()
  //       .subscribe(this.products => this.products = this.products);
  // }

  constructor(private productService: ProductService) { }

  ngOnInit() {
    // this.getProducts();
  }

}
