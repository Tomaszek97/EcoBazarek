import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api-eko-bazarek.azurewebsites.net/api/subscribe';
  private topCategoriesApiUrl =
    'https://api-eko-bazarek.azurewebsites.net/api/products/categories/top';

  constructor(private http: HttpClient) {}

  subscribe(email: string): Observable<any> {
    const body = {
      email: email,
    };
    return this.http.post(this.apiUrl, body);
  }

  getTopCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.topCategoriesApiUrl);
  }
}
