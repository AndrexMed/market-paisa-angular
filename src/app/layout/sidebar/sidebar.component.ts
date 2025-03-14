import { Component, inject, ViewChild } from '@angular/core';
import { SidebarService } from './sidebar.service';

import { DrawerModule } from 'primeng/drawer';

const PRIMENG_MODULES = [DrawerModule];
@Component({
  selector: 'app-sidebar',
  imports: [...PRIMENG_MODULES],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private readonly sidebarSvc = inject(SidebarService);

  visible = this.sidebarSvc.visible;
}
