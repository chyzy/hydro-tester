# Hydro-Tester – strona WWW

Statyczna strona firmowa (HTML/CSS/JS) w katalogu `www/`. Hostowana na GitHub Pages.

## Wdrożenie na GitHub Pages

Każdy push do gałęzi `main` uruchamia workflow `.github/workflows/deploy-pages.yml`,
który publikuje zawartość katalogu `www/`.

### Jednorazowa konfiguracja w repozytorium GitHub

1. Otwórz **Settings → Pages**.
2. W sekcji **Build and deployment → Source** wybierz **GitHub Actions**.
3. (Domena własna) W polu **Custom domain** wpisz `hydrotester.pl` i zapisz.
   Po weryfikacji DNS zaznacz **Enforce HTTPS**.

### DNS dla domeny hydrotester.pl

U operatora domeny ustaw:

| Typ   | Nazwa | Wartość                 |
|-------|-------|-------------------------|
| A     | @     | 185.199.108.153         |
| A     | @     | 185.199.109.153         |
| A     | @     | 185.199.110.153         |
| A     | @     | 185.199.111.153         |
| CNAME | www   | chyzy.github.io         |

Plik `www/CNAME` zawiera nazwę domeny i jest publikowany razem ze stroną.

### Bez domeny własnej

Strona jest wtedy dostępna pod `https://chyzy.github.io/hydro-tester/`.
Linki w serwisie są relatywne, więc działają zarówno w katalogu głównym domeny,
jak i pod ścieżką `/hydro-tester/`. Usuń wtedy plik `www/CNAME`.

## Uwagi

- GitHub Pages serwuje `strona.html` również pod adresem `/strona`, więc adresy
  z `sitemap.xml` (bez rozszerzenia) działają bez dodatkowej konfiguracji.
- Plik `www/.htaccess` jest ignorowany przez GitHub Pages; pozostaje na potrzeby
  hostingu Apache.
- `www/.nojekyll` wyłącza przetwarzanie Jekyll.
