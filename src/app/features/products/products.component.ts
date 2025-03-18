import { Component, computed, inject } from '@angular/core';
import { ProductsService } from './products.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [JsonPipe],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  private readonly _productsSvc = inject(ProductsService);

  isLoading = computed(() => this._productsSvc.isLoading());
  products = this._productsSvc.products;
  selectedProduct = this._productsSvc.selectedProduct;
}
