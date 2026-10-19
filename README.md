## Status
- [x] Etapa 1: Mockup static
- [x] Etapa 2: Logica datelor în JavaScript
- [x] Etapa 3: Proiect Vite și React
- [x] Etapa 4: Componente

## Etapa 2: Logica datelor
JavaScript simplu, fără manipulare DOM. Fișierul `script.js` conține array-ul și funcțiile care îl citesc și îl modifică. Rezultatele sunt afișate în consola browserului (F12).

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

## Etapa 4: Componente
Lista de instrumente este randată dinamic din date prin intermediul a două componente React modulare:
- `InstrumentList`: Primește întregul array prin `props`, verifică dacă lista este goală (randare condiționată cu mesaj explicit) și parcurge elementele folosind `.map()` și atributul unicitate `key={instrument.id}`.
- `InstrumentCard`: Primește un singur obiect prin `props` și afișează detaliile cardului, badge-ul de categorie și starea disponibilității (în stoc / stoc epuizat, modificând aspectul vizual conform stării).


### Tabel de verificare - Etapa 4

| ID | Cerință | Unde (permalink) | Cum se verifică |
| :--- | :--- | :--- | :--- |
| **S4-R1** | 2+ componente în `src/components/` | [frontend/src/components/](LINK_GITHUB_CATRE_FOLDERUL_COMPONENTS) | deschide folderul |
| **S4-R2** | cardul primește date prin props | [InstrumentCard.jsx](LINK_GITHUB_CATRE_INSTRUMENTCARD) | citește codul |
| **S4-R3** | `map` + `key={id}`, fără avertismente în consolă | [InstrumentList.jsx](LINK_GITHUB_CATRE_MAP_IN_INSTRUMENTLIST) | F12, Consolă |
| **S4-R4** | mesaj pentru lista golită | [InstrumentList.jsx](LINK_GITHUB_CATRE_IF_EMPTY_IN_INSTRUMENTLIST) | setează array-ul la `[]` |
| **S4-R5** | starea modifică aspectul cardului | [InstrumentCard.jsx](LINK_GITHUB_CATRE_CLASSNAME_IN_INSTRUMENTCARD) | comută flag-ul `inStoc` |
| **S4-R6** | secțiunea Stage 4 în README + Jurnal AI | [README.md](README.md), [ai-log/etapa-04.md](ai-log/etapa-04.md) | citește |
| **S4-R7** | commit-ul "Stage 4" urcat pe GitHub | [Commit Stage 4](LINK_CATRE_COMMITUL_ANTERIOR) | istoric commit-uri |

## Cum se rulează aplicația
1. Navighează în folderul dedicat interfeței:
   ```bash
   cd frontend
   npm install
   npm run dev
   