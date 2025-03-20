import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiURL = environment.apiBaseUrlPlatzi;
  private readonly _http = inject(HttpClient);

  categories = signal<any[]>([]);

  constructor() {
    this._getCategories();
  }

  _getCategories() {
    this._http
      .get(`${this.apiURL}/categories`)
      .pipe(
        tap((categories: any) => {
          this.categories.set(categories);
        })
      )
      .subscribe();
  }
}
