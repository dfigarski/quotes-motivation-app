import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuoteCard } from '../quote-card/quote-card';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, QuoteCard],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
})
export class QuoteList {
  @Input() quotes: any[] = [];
  @Output() toggle = new EventEmitter<number>();

  onToggle(id: number) {
    this.toggle.emit(id);
  }
}