import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quote-card.html',
  styleUrl: './quote-card.scss',
})
export class QuoteCard {
  @Input() quote: any;
  @Output() toggle = new EventEmitter<number>();

  onClick() {
    this.toggle.emit(this.quote.id);
  }
}