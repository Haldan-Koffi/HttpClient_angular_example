import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  articles: any[] = [];
  errorMessage: string | null = null;
  private apiUrl = 'https://fakestoreapi.com/products'; // URL de l'API

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles(): void {
    this.http.get<any[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des articles :', error);
        this.errorMessage = 'Impossible de charger les articles.';
      },
    });
  }
}
