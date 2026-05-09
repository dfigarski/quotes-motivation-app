export interface Quote {
  id: number;
  content: string;
  author: string;
  expanded?: boolean;
}

export type QuoteCreateDto = Omit<Quote, 'id' | 'expanded'>;
export type QuoteUpdateDto = Partial<QuoteCreateDto>;