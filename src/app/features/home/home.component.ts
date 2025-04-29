import { Component } from '@angular/core';
import { CategoriesPopoverComponent } from '../../layout/navbar/popover/categories/categories.component';

@Component({
  selector: 'app-home',
  imports: [CategoriesPopoverComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
