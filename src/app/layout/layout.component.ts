import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

const COMPONENTS = [NavbarComponent, SidebarComponent];

@Component({
  selector: 'app-layout',
  imports: [...COMPONENTS, RouterOutlet],
  template: `
    <div class="h-screen">
      <app-navbar></app-navbar>
      <app-sidebar></app-sidebar>
      <div class="bg-gray-100 h-full"><router-outlet /></div>
    </div>
  `,
})
export class LayoutComponent {}
