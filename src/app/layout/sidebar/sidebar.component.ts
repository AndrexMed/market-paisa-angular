import { Component, inject, signal } from '@angular/core';
import { SidebarService } from './sidebar.service';

import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { Drawer } from 'primeng/drawer';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ButtonConfig } from '../../shared/components/button/button.model';

const PRIMENG_MODULES = [DrawerModule, ButtonModule, AvatarModule, Drawer];

const COMPONENTS = [ButtonComponent];

@Component({
  selector: 'app-sidebar',
  imports: [...PRIMENG_MODULES, ...COMPONENTS],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  private readonly sidebarSvc = inject(SidebarService);

  visible = this.sidebarSvc.visible;

  buttonCloseConfig = signal<ButtonConfig>({
    type: 'button',
    icon: 'pi pi-times',
    severity: 'secondary',
  });

  closeCallback(e: Event): void {
    this.visible.set(false);
  }
}
