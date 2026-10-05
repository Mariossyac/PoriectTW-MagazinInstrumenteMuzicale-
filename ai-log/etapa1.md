Prompt dat pe ChatGPT:

    # PoriectTW-MagazinInstrumenteMuzicale-
    
    <Two-line description: what the app manages and for whom.>
    ## Data model
    
        | Field | Type | Notes |
        | ----------- | ------------ | ------------------------------------ |
        | <name> | text | required, max 100 chars |
        | <exista_stoc> | boolean | toggled from the list, default false |
        | <tip_instrument> | fixed values | Nou, SH |
        | categorie | relation | clape, corzi, suflat |
        | user | relation | the owner of the item (from week 11) |
    
    
        Sample data used across all stages:
            1. <ChitaraBass>, active, <tag>
            2. <Pian>, done, <tag>
            3. <ChitaraAcustica>, active, <tag>
    
    
    ## How to run
    Open `index.html` in a browser. No build step, no server.
    
    ## Status
    [x] Stage 1: static mockup
    
    ** Asta este README-ul fa mi cod html prima data si dupa css **


# Jurnal utilizare AI - Etapa 2

**Instrumente folosite:** Google Gemini

**Cum a fost folosit AI-ul:**
- Pentru a înțelege mai bine cum trebuie structurate datele și cum se folosesc metodele `map`, `filter` și `reduce`.
- Pentru a adapta cerințele din ghidul de proiect (TaskFlow/PDF) la tema mea, „Magazin Instrumente Muzicale”.
- Pentru a obține explicații clare despre cum funcționează fiecare bucată de cod, în special partea de imutabilitate (cum să nu modific array-ul original).
- Pentru curățarea codului final de comentarii și pentru o ultimă verificare a rezultatelor obținute în consolă.

**Prompturi principale:**
1. "Am de făcut etapa 2 la un proiect web despre un magazin de instrumente muzicale. Aici sunt cerințele din PDF, mă poți ajuta să adaptez codul pentru tema mea?"
2. "Poți să îmi dai varianta finală a codului, dar fără comentarii, ca să o pun în fișier?"
3. "Poți să-mi explici mai simplu ce face fiecare funcție de aici, ca să înțeleg exact logica din spate?"
4. "Am rulat codul și am pus o poză cu ce îmi dă în consolă. E totul ok conform cerințelor din PDF?"