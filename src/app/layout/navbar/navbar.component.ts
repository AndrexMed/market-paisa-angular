import { Component, inject } from '@angular/core';
import { SidebarService } from '../sidebar/sidebar.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  sidebarSvc = inject(SidebarService);
  visible = this.sidebarSvc.visible;

  toggleSidebar() {
    this.visible.set(!this.visible());
  }
}
