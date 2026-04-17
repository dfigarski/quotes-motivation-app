import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteCardComponent } from '../quote-card/quote-card';

@Component({
  selector: 'app-quote-list',
  standalone: true,
  imports: [CommonModule, QuoteCardComponent],
  templateUrl: './quote-list.html',
  styleUrl: './quote-list.scss',
})
export class QuoteListComponent {
  @Input() quotes: any[] = [];
  @Output() toggle = new EventEmitter<number>();

  onToggle(id: number) {
    this.toggle.emit(id);
  }
}
