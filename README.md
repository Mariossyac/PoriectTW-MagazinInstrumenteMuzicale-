## Etapa 2: Logica datelor
JavaScript simplu, fără manipulare DOM. Fișierul `script.js` conține array-ul și funcțiile care îl citesc și îl modifică. Rezultatele sunt afișate în consola browserului (F12).

## Status
- [x] Etapa 1: Mockup static
- [x] Etapa 2: Logica datelor în JavaScript
- [ ] Etapa 3: Proiect Vite și React

## Listă de verificare Etapa 2

| ID | Cerință | Unde | Cum se verifică |
|---|---|---|---|
| S2-R1 | Fișierul JS este legat de HTML, afișează mesaje la încărcarea paginii | index.html | deschide pagina, F12 |
| S2-R2 | 3+ elemente de test cu id, nume, stare și categorie | script.js (liniile 1-5) | citește codul |
| S2-R3 | listare, numărare, căutare, adăugare, comutare stare, ștergere | script.js (liniile 9-53) | output-ul din consolă |
| S2-R4 | adăugarea respinge un nume gol și o categorie invalidă | script.js (liniile 72-73) | ultimele 2 rânduri din consolă |
| S2-R5 | array-ul original rămâne neschimbat după adăugare | script.js (linia 64) | rând în consolă |
| S2-R6 | Secțiunea Etapa 2 în README + jurnal AI adăugat | README.md, ai-log/etapa-02.md | citește fișierele |
| S2-R7 | Commit-ul pentru "Etapa 2" a fost publicat | Istoricul Git | istoricul de commit-uri |


## Etapa 3: Inițializarea proiectului (Vite și React)

Aplicația se află acum în folderul `frontend/`, construită cu Vite și React[cite: 1, 9]. Datele din Etapa 2 au fost mutate în componenta principală (`App.jsx`), iar stilurile din Etapa 1 au fost integrate în `App.css`[cite: 1, 6, 7]. Lista de instrumente muzicale este afișată temporar ca text brut (JSON), urmând ca în Etapa 4 să fie transformată în componente cu carduri de produs[cite: 1, 7, 11].

## Cum se rulează aplicația
1. Navighează în folderul dedicat interfeței:
   ```bash
   cd frontend
   npm install
   npm run dev
   