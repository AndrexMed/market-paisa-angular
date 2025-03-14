import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  visible = signal<boolean>(false);
  constructor() {}
}
