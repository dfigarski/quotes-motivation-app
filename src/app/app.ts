import { Component } from '@angular/core';
import { QuoteListComponent } from './components/quote-list/quote-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuoteListComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  quotes = [
    {
      id: 1,
      content: 'Success is the sum of small efforts.',
      author: 'Robert Collier',
      expanded: false,
    },
    {
      id: 2,
      content: 'Do not wait. The time will never be just right.',
      author: 'Napoleon Hill',
      expanded: false,
    },
    {
      id: 3,
      content: 'Believe you can and you are halfway there.',
      author: 'Roosevelt',
      expanded: false,
    },
  ];

  toggleQuote(id: number) {
    this.quotes = this.quotes.map((q) =>
      q.id === id ? { ...q, expanded: !q.expanded } : q
    );
  }
}