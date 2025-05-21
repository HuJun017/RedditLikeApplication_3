import { Component } from '@angular/core';
import { Article } from './article/article.model';
import { ArticleComponent } from './article/article.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleComponent, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newtitle = '';
  newlink = '';

  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular', 'https://angular.io', 3),
      new Article('Fullstack', 'https://fullstack.io', 2),
      new Article('Angular Homepage', 'https://angular.io', 1),
    ];
  }

  addArticle(title: string, link: string): void {
    if (title && link) {
      this.articles.push(new Article(title, link));
      this.newtitle = '';
      this.newlink = '';
    }
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}