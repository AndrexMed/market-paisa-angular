import { Component, inject, output, signal, ViewChild } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/components/button/button.model';
import { CategoriesService } from '../../shared/services/categories.service';
import { CategoriesPopoverComponent } from './popover/categories/categories.component';

@Component({
  selector: 'app-navbar',
  imports: [ButtonComponent, CategoriesPopoverComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {

  @ViewChild('popover') popover!: CategoriesPopoverComponent;

  sidebarSvc = inject(SidebarService);
  categoriesSvc = inject(CategoriesService);

  categories = this.categoriesSvc.categories();

  router = inject(Router);

  visible = this.sidebarSvc.visible;

  buttonHome: ButtonConfig = {
    label: 'Home',
    icon: 'pi pi-home',
    severity: 'primary',
    onClick: () => this.navigateTo('/home'),
    link: true,
  };

  buttonCategories: ButtonConfig = {
    label: 'Categories',
    icon: 'pi pi-list',
    severity: 'secondary',
    onClick: () => this.navigateTo('/categories'),
    link: true,
  };

  buttonProducts: ButtonConfig = {
    label: 'Products',
    icon: 'pi pi-shopping-cart',
    severity: 'secondary',
    onClick: () => this.navigateTo('/products'),
    link: true,
  };

  toggleSidebar() {
    this.visible.set(!this.visible());
  }

  private navigateTo(route: string) {
    this.router.navigate([route]);
  }

  showPopover(event: Event) {
    this.popover.op.toggle(event);
  }
}
