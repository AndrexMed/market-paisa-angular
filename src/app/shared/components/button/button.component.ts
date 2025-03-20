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
    ></p-button>
  `,
})
export class ButtonComponent {
  buttonConfig = input.required<ButtonConfig>();
}
