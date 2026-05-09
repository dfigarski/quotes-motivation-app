import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Header } from './components/header/header';
import { QuoteList } from './components/quote-list/quote-list';
import { EmptyState } from './components/empty-state/empty-state';
import { ErrorMessage } from './components/error-message/error-message';
import { QuoteService } from './services/quote.service';
import { Quote } from './models/quote.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Header, QuoteList, EmptyState, ErrorMessage],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private quoteService = inject(QuoteService);

  quotes: Quote[] = [];
  isLoading = false;
  hasError = false;

  get isEmpty(): boolean {
    return !this.isLoading && !this.hasError && this.quotes.length === 0;
  }

  ngOnInit(): void {
    this.loadQuotes();
  }

  loadQuotes(): void {
    this.isLoading = true;
    this.hasError = false;

    this.quoteService.getAll().subscribe({
      next: (data) => {
        this.quotes = data.map((q) => ({ ...q, expanded: false }));
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      },
    });
  }

  toggleQuote(id: number): void {
    this.quotes = this.quotes.map((quote) =>
      quote.id === id ? { ...quote, expanded: !quote.expanded } : quote
    );
  }
}