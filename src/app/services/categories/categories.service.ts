import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from 'src/app/types/categories.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'app/categories';

  constructor(
    private http: HttpClient,
  ) { }

  getCategories() {
    return this.http.get<Category[]>(this.url);
  }
}
