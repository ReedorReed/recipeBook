# Beyond opgave: Opskrift Bloggen

### Beskrivelse

I Beyond modulet skal I arbejde selvstændigt med de emner I har lært i Interact I, og kombinere dette med jeres
kundskaber inden for HTML og CSS. I denne opgave skal du oprette en opskriftsblog, hvor brugere kan læse og
dele opskrifter. Formålet med denne opgave er at give dig mulighed for at arbejde med
HTML-formularelementer, JavaScript, lokal lagring og webtilgængelighed, samtidig med at du udvikler en
praktisk webapplikation.

**Fagligt niveau**

- HTML
- CSS
- JavaScript

**Kravspecifikation**

Krav 1: Oprettelse af HTML-struktur

- Opret en HTML-fil med en passende grundlæggende struktur.
- Lav en overskrift og en beskrivelse for din opskriftsblog.
- Opret en sektion i din HTML-struktur, hvor opskrifterne vil blive placeret.

Krav 2: CSS-styling

- Opret en ekstern CSS-fil og link den til din HTML-side.
- Style overskriften, beskrivelsen og opskriftssektionen for at give din opskriftsblog en visuel struktur.
- Design kortene, der skal repræsentere hver opskrift, med passende formatering og layout.

Krav 3: Oprettelse af opskrifter

- Brug HTML-formularelementer til at oprette en formular, hvor brugeren kan indtaste oplysninger om en
  opskrift, såsom titel, ingredienser og fremgangsmåde.
- Implementer JavaScript til at håndtere indsendelsen af opskrifter fra formularen.

Krav 4: Lokal lagring

- Implementer lokal lagring (LocalStorage) til at gemme opskrifter for at bevare data mellem besøg på
  webstedet.
- Vis de indsendte opskrifter som kort i opskriftssektionen.

Krav 5: Redigering og sletning af opskrifter

- Giv brugeren mulighed for at redigere eller slette en eksisterende opskrift ved hjælp af knapper på hvert
  opskriftskort.
- Implementer en redigeringsfunktion, der tillader brugeren at ændre oplysninger om en opskrift.
- Implementer en sletningsfunktion, der giver brugeren mulighed for at fjerne en opskrift fra bloggen.

Krav 6: Webtilgængelighed

- Kontrollér at din HTML er semantisk korrekt hvor muligt.
- Find et element som der findes en ARIA rolle for der enten ikke er et semantisk tag for, eller hvis dette
  ikke er muligt, så et et element hvor du har brugt et semantisk tag, og skift det ud med en div. Brug ARIA
  til at lave dette element og tilhørende underelementer tilgængelig.

Bonuskrav (valgfri):

- Tilføj kategorier eller tags til opskrifterne og implementer filtrering efter kategorier.
- Tilføj en søgefunktion til din opskriftsblog, hvor brugeren kan søge efter opskrifter baseret på titel,
  ingredienser eller nøgleord. Vis de relevante opskrifter, der matcher søgningen.
- Implementer en kommentarfunktion, hvor brugere kan tilføje kommentarer til opskrifterne. Tilføj
  mulighed for at tilknytte kommentarer til opskrifter som gemmes ved hjælp af localStorage.

**Ressourcer**
_Aria_
https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA
https://web.dev/learn/accessibility/aria-html/
https://developer.chrome.com/blog/full-accessibility-tree/

_localStorage_
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://javascript.info/localstorage

_JSON brug_
https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/
https://www.atatus.com/blog/read-write-a-json-file-with-node-js/

## Pseudo code

Opskrift appen skal have form elementer som javascript bruger til at oprette opskriften.

Det første form element skal lave en title til opskriften.
Den næste er ingredienser, med en knap "tilføj ingrediens" der skal oprettes som en ul>li med checkboxes via javascript til opskrift siden.
Sidste skal være et tekstfelt der skal være fremgangsmåden som oprettes som en nummeret liste ol>li

til sidst skal der være en submit knap der gemmer opskriften.
