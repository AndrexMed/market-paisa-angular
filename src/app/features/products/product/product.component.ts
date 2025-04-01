import { Component, input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Product } from '../product.model';
import { ButtonConfig } from '../../../shared/components/button/button.model';
import { ScrollPanelModule } from 'primeng/scrollpanel';

const PRIMENG_MODULES = [CardModule, ScrollPanelModule];
const COMPONENTS = [ButtonComponent];

@Component({
  selector: 'app-product',
  imports: [...PRIMENG_MODULES, ...COMPONENTS],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product = input.required<Product>();

  btnAddToCart: ButtonConfig = {
    label: 'Add to cart',
    icon: 'pi pi-shopping-cart',
    severity: 'secondary',
    onClick: () => {},
  };

  btnBuyNow: ButtonConfig = {
    label: 'Buy now',
    icon: 'pi pi-shopping-cart',
    severity: 'primary',
    onClick: () => {},
  };
}
