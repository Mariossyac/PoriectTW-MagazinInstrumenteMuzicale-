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
