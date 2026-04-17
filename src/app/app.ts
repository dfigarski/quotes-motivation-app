import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { QuoteList } from './components/quote-list/quote-list';
import { EmptyState } from './components/empty-state/empty-state';
import { ErrorMessage } from './components/error-message/error-message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, QuoteList, EmptyState, ErrorMessage],
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

  hasError = false;

  toggleQuote(id: number) {
    this.quotes = this.quotes.map((quote) =>
      quote.id === id ? { ...quote, expanded: !quote.expanded } : quote
    );
  }
}