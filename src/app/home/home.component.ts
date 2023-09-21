import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchTopCategories();
  }

  fetchTopCategories(): void {
    this.apiService.getTopCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Wystąpił błąd podczas pobierania kategorii');
      }
    );
  }
}
