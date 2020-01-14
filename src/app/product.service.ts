import { Injectable } from '@angular/core';
import { Product } from "../../src/app/models/product";
import { PRODUCTS } from "../assets/inventory";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  getProducts(): Observable<Product[]> {
    return of(PRODUCTS);
  }

  constructor() { }
}
