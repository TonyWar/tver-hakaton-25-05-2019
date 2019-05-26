import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/types/categories.model';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'app/categories';

  private cats?: Category[];

  constructor(
    private http: HttpClient,
  ) { }

  getCategories() {
    if (this.cats) {
      return of(this.cats);
    }
    return this.http.get<Category[]>(this.url)
      .pipe(
        tap(cats => { this.cats = cats; })
      );
  }
}
