import { Component, computed, inject } from '@angular/core';
import { ProductsService } from './products.service';
import { CardModule } from 'primeng/card';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';

const PRIMENG_MODULES = [CardModule];
const COMPONENTS = [CarouselComponent];

@Component({
  selector: 'app-products',
  imports: [...COMPONENTS, ...PRIMENG_MODULES],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  private readonly _productsSvc = inject(ProductsService);

  isLoading = computed(() => this._productsSvc.isLoading());
  products = this._productsSvc.products;
  selectedProduct = this._productsSvc.selectedProduct;
}
