# Jurnal AI - Etapa 4: Componente construite din date

## 1. Scopul utilizării AI
Am utilizat asistentul AI pentru a structura corect ierarhia de componente React (`InstrumentCard` și `InstrumentList`) conform cerințelor din ghidul de laborator, adaptând elementele la tema magazinului de instrumente muzicale **ARMONICO**. De asemenea, am folosit AI-ul pentru a corecta stilurile CSS ale cardurilor și randarea condiționată bazată pe starea stocului.

## 2. Prompt-uri principale folosite
- *"Ghid pas cu pas pentru Etapa 4 (componente construite din date) adaptat la proiectul meu cu magazinul de instrumente muzicale ARMONICO."*
- *"Cum transform elementele randate din JSON în carduri curate folosind componentele InstrumentList și InstrumentCard?"*

## 3. Ce am preluat și cum am adaptat
- **Arhitectura componentelor:** Am creat folderul `src/components/` și am separat codul în `InstrumentCard.jsx` și `InstrumentList.jsx`.
- **Transmiterea datelor:** Am înlocuit afișarea brută de tip JSON (`JSON.stringify`) din `App.jsx` cu componenta `InstrumentList`, transmițând datele prin `props`.
- **Stilizare și stări vizuale:** Am implementat clasele CSS pentru carduri, badge-uri colorate pe categorii și modificarea dinamică a aspectului vizual pentru produsele cu sticul epuizat (`inStoc: false`).

## 4. Verificare și testare manuală
- Am verificat consola browserului (F12) pentru a mă asigura că nu există avertismente legate de lipsa sau incorectitudinea atributului `key={instrument.id}`.
- Am testat comportamentul listei goale (`[]`) și randarea corectă a mesajului alternativ.