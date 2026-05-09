getAll(): Observable<Quote[]>        // pobieranie listy
getById(id: number): Observable<Quote>  // pobieranie szczegółów
create(dto: QuoteCreateDto)          // dodawanie rekordu
update(id: number, dto: QuoteUpdateDto) // edycja rekordu
delete(id: number)                   // usuwanie rekordu