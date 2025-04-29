import { Component, effect, input, signal, ViewChild } from '@angular/core';

import { Popover, PopoverModule } from 'primeng/popover';
import { ButtonModule } from 'primeng/button';

const PRIMENG_MODULES = [PopoverModule, ButtonModule];

@Component({
  selector: 'app-categories-popover',
  imports: [...PRIMENG_MODULES],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesPopoverComponent {
  @ViewChild('op') op!: Popover;

  selectedMember: any = null;

  members = [
    { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
    { name: 'Bernardo Dominic', image: 'bernardodominic.png', email: 'bernardo@email.com', role: 'Editor' },
    { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
  ];

  toggle(event: Event) {
    this.op.toggle(event);
  }

  selectMember(member: any) {
    this.selectedMember = member;
    this.op.hide();
  }
}
