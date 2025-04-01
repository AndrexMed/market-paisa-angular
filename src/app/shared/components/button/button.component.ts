import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonConfig } from './button.model';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  template: `
    <p-button
      [label]="buttonConfig().label"
      (onClick)="buttonConfig().onClick($event)"
      [icon]="buttonConfig().icon"
      [severity]="buttonConfig().severity"
      [link]="buttonConfig().link"
    ></p-button>
  `,
  styles: `
    ::ng-deep .p-button-link {
      color: black !important;
    }
  `,
})
export class ButtonComponent {
  buttonConfig = input.required<ButtonConfig>();
}
