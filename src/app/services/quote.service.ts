import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote, QuoteCreateDto, QuoteUpdateDto } from '../models/quote.model';
import { QUOTES_ENDPOINT } from '../shared/constants';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private http = inject(HttpClient);

  getAll(): Observable<Quote[]> {
    return this.http.get<Quote[]>(QUOTES_ENDPOINT);
  }

  getById(id: number): Observable<Quote> {
    return this.http.get<Quote>(`${QUOTES_ENDPOINT}/${id}`);
  }

  create(dto: QuoteCreateDto): Observable<Quote> {
    return this.http.post<Quote>(QUOTES_ENDPOINT, dto);
  }

  update(id: number, dto: QuoteUpdateDto): Observable<Quote> {
    return this.http.put<Quote>(`${QUOTES_ENDPOINT}/${id}`, dto);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${QUOTES_ENDPOINT}/${id}`);
  }
}