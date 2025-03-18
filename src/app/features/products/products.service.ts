import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiURL = environment.apiBaseUrl;
  private readonly _http = inject(HttpClient);

  products = signal<Product[]>([]);
  selectedProduct = signal<Product | null>(null);

  isLoading = signal<boolean>(false);

  constructor() {
    this._getProducts();
  }

  _getProducts() {
    this._http
      .get<Product[]>(`${this.apiURL}/products`)
      .pipe(
        tap((products) => {
          this.products.set(products);
          this.isLoading.set(false);

          this.setRandomProduct();
        })
      )
      .subscribe();
  }

  setRandomProduct() {
    const randomIndex = this._getRandomInt(0, this.products().length - 1);
    this.selectedProduct.set(this.products()[randomIndex]);
  }

  private _getRandomInt(min = 0, max = 50) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
