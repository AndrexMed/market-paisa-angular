import { NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Tag } from 'primeng/tag';
import { Product } from '../../../features/products/product.model';
import { ButtonConfig } from '../button/button.model';
import { ButtonComponent } from '../button/button.component';

const PRIMENG_MODULES = [CarouselModule, Tag];
const COMPONENTS = [ButtonComponent];

@Component({
  selector: 'app-carousel',
  imports: [...PRIMENG_MODULES, ...COMPONENTS, NgStyle],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent {
  products = input.required<Product[]>();

  responsiveOptions: any[] | undefined;

  btnLikeConfig: ButtonConfig = {
    label: '',
    icon: 'pi pi-heart',
    severity: 'secondary',
    onClick: () => {},
  };

  btnAddToCartConfig: ButtonConfig = {
    label: '',
    icon: 'pi pi-shopping-cart',
    severity: 'secondary',
    onClick: () => {},
  };

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
