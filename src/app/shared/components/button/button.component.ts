import { Component, input, output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ButtonConfig } from './button.model';

@Component({
  selector: 'app-button',
  imports: [ButtonModule],
  template: `
    <p-button
      [label]="buttonConfig().label"
      (onClick)="onClick($event)"
      [icon]="buttonConfig().icon"
      [severity]="buttonConfig().severity"
    ></p-button>
  `,
})
export class ButtonComponent {
  buttonConfig = input.required<ButtonConfig>();

  onClickEvent = output<Event>();

  onClick(event: Event): void {
    console.log(event);
    this.onClickEvent.emit(event);
  }
}
