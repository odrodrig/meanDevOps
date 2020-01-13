import { Component, OnInit } from '@angular/core';
import { PRODUCTS } from "../../assets/inventory";
import { Product } from '../models/product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  products = PRODUCTS;

  selectedProduct: Product;
  onSelect(product: Product): void {
  this.selectedProduct = product;
}

  constructor() { }

  ngOnInit() {
  }

}
