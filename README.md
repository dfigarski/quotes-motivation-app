# Motivational Quotes App

Aplikacja do przeglądania motywacyjnych cytatów.

## Uruchomienie

1. Zainstaluj zależności:
```bash
npm install
```

2. Uruchom API (terminal 1):
```bash
npx json-server db.json
```

3. Uruchom aplikację (terminal 2):
```bash
ng serve
```

4. Otwórz w przeglądarce: `http://localhost:4200`

## API

Aplikacja pobiera dane z lokalnego json-server działającego na `http://localhost:3000`.

Dostępne operacje na cytatach:
- pobranie listy
- pobranie szczegółów
- dodanie
- edycja
- usunięcie

## Technologie

- Angular 21
- TypeScript
- SCSS
- json-server