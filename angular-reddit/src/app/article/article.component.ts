import { Component } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone:true,
  imports: [Article],
  templateUrl: './app.component.html',  // Template associato
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];  // Array di articoli

  constructor() {
    // Inizializza una lista di articoli
    this.articles = [
      new Article('Angular 17', 'https://angular.io', 5),
      new Article('Fullstack.io', 'https://fullstack.io', 3),
      new Article('RxJS Docs', 'https://rxjs.dev', 2),
    ];
  }

  // Metodo chiamato alla submit del form
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    const newArticle = new Article(title.value, link.value); // Crea nuovo articolo
    this.articles.push(newArticle);                          // Lo aggiunge all’elenco

    // Pulisce i campi input
    title.value = '';
    link.value = '';
    return false;  // Blocca la ricarica della pagina
  }
}
