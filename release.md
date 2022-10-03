# Mall för inlämning laboration 1, 1dv610

## Checklista
  - [ ] Jag har skrivit all kod och reflektioner själv. Jag har inte använt mig av andras kod för att lösa uppgiften.
  - [ ] Mina testresultat är skrivna utifrån utförd testning ( och inte teoretiskt: "det bör fungera" :) )
  - [ ] Koden är objektorienterad
  - [ ] Jag har skrivit en modul som riktar sig till programmerare

## Egenskattning och mål
  - [ ] Jag är inte klar eftersom jag vet att jag saknar något. (Då skall du inte lämna in! Lämna då istället in på restlaboration.)
  - [ ] Jag eftersträvar med denna inlämning godkänt betyg (E-D)
    - [ ] De flesta testfall fungerar
    - [ ] Koden är förberedd på Återanvändning
    - [ ] All kod samt historik finns i git 
    - [ ] Kodkvaliterskraven är ifyllda
    - [ ] Reflektion är skriven utifrån bokens kapitel 
  - [ ] Jag eftersträvar med denna inlämning högre betyg (C-B) och anser mig uppfylla alla extra krav för detta. 
    - [ ] Samtliga testfall är skrivna    
    - [ ] Testfall är automatiserade
    - [ ] Det finns en tydlig beskrivning i hur modulen skall användas (i git)
    - [ ] Kodkvalitetskraven är varierade 
  - [ ] Jag eftersträvar med denna inlämning högsta betyg (A) 

Förtydligande: Examinator kommer sätta betyg oberoende på vad ni anser. 

## Återanvändning
Beskriv hur du anpassat din kod och instruktioner för att någon annan programmerare skall kunna använda din modul. Om du skrivit instruktioner för din användare, länka till dessa. Om inte, beskriv här hur någon skall göra för att använda din modul.

## Beskrivning av min kod
Beskriv din kod på en hög abstraktionsnivå. En kort beskrivning av dina viktigaste klasser och metoder. Skapa gärna ett klassdiagram som bild. Använd det ni lärt er så här långt i 1dv607. Kommunicera så att jag kan förstå.

## Kravspecifikation
### Funktionella krav

| Krav | Beskrivning | Prioritet |
|------|-------------|-----------|
| 1 | Biblioteket ska kunna generera alla emojis som finns beskrivna med unicode | 1 |
| 2 | Biblioteket ska kunna generera emojis baserat på kategori | 1 |
| 3 | Biblioteket ska kunna generera emojis med motsvarande taggar | 1 |
| 4 | Biblioteket ska kunna generera emojis med motsvarande taggar baserat på kategori | 1 |
| 5 | Biblioteket ska kunna generera alla emojis vars tagg startar med givna tecken | 1 |
| 6 | Biblioteket ska kunna konvertera emoticons i text till emojis | 1 |
| 7 | Biblioteket ska kunna översätta en tagg till en emoji | 1 |
| 8 | Biblioteket ska kunna översätta taggar i text till emojis | 2 |
| 9 | Biblioteket ska kunna filtrera bort emojis som inte stöds av användarens operativsystem | 2 |

### Icke-funktionella krav

| Krav | Beskrivning | Prioritet |
|------|-------------|-----------|
| 1 | Biblioteket ska fungera i webbläsaren | 1 |
| 2 | Biblioteket ska inte ha några externa beroenden | 1 |

## Hur jag testat
Beskriv hur du kommit fram till om din kod fungerar.

### Testfall
Lista de enskilda testfallen. **Fetmarkera** sådant som du själv fyllt i. En rad per testfall. Om ni använder vertyg för testning kan ni ha en bild här med testrapporten. Tänk på att kommunicera till mig. Vad fungerar?, vad fungerar inte? Hur är det testat? Vilka delar testas inte?

| Vad testas      | input | output | utfall PASS/FAIL |
| --------- | --------- | ------ | ------- |
|           |           |        |         |
TC1.1 - Lyckad generering av alla emojis.

Input
- Öppna testapplikationen.

Output
- Alla emojis visas i den öppna emojikomponenten.

TC2.1 - Lyckad generering av emojis från en tillåten kategori.

Input
- Klicka i checkboxen ”Flags”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

Output
- Endast emojis av kategorin ”Flags” visas.

TC2.2 Lyckad generering av emojis från flera tillåtna kategorier.

Input
- Klicka i checkboxarna ”Flags” och ”Travel & Places”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

Output
- Endast emojis av kategorin ”Flags” och ”Travel & Places” visas.

TC2.3 Misslyckad generering av emojis från en otillåten kategori.
Input
- Klicka i checkboxen ”Invalid option”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

Output
- Emojikomponenten har inte uppdaterats.
- Ett felmeddelande är utskrivet i konsolen.

TC3.1 - Lyckad generering av alla emojis.
Input
- Klicka i checkboxen ”Alla”.
- Klicka på OK.
- Se på tabellen till höger.

Output
- Alla emojis och taggar visas.

TC4.1 - Lyckad av generering av emojis och taggar från en tillåten kategori.

Input
- Klicka i checkboxen ”Flags”.
- Klicka på OK.
- Se på tabellen till höger.

Output
- Endast emojis och taggar av kategorin ”Flags” visas.

TC4.2 Lyckad generering av emojis från flera tillåtna kategorier.

Input
- Klicka i checkboxarna ”Flags” och ”Travel & Places”.
- Klicka på OK.
- Se på tabellen till höger.

Output
- Endast emojis av kategorin ”Flags” och ”Travel & Places” visas.

TC4.3 Lyckad generering av emojis och taggar från en otillåten kategori.
Input
- Klicka i checkboxen ”Invalid option”.
- Klicka på OK.
- Se på tabellen till höger.

Output
- Tabellen har inte uppdaterats.
- Ett felmeddelande är utskrivet i konsolen.

TC5.1 - Lyckad generering av emojis som matchar en text.
Input
- Fyll i textfältet där det står ”Type here…” med ”sad”.
- Klicka på OK.
- Öppna emojikomponenten om den inte redan är öppen.
- Bläddra igenom emojikomponenten.

Output
- Följande emojis visas i emojikomponenten: 😓 😿 😞 😢 

TC5.2 Genering av emojis som matchar text med en tom sträng.
Input
- Radera allt i textfältet.
- Klicka på OK.
- Öppna emojikomponenten.

Output
- Emojikomponenten öppnas inte på grund av att den är tom.

TC6.1 Konverting av text med en emoji.
Input
- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :D”.
- Klicka på symbolen för att skicka eller tryck på Enter.

Output
- ”Hej 😃” visas i rutan ovanför textfältet.

TC6.2 Konvertering av text med flera emojis.
Input
- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :D :) :$ Hur mår du? <3 :d :p :P :O”.
- Klicka på symbolen för att skicka eller tryck på Enter.

Output
- ”Hej 😃 😊 😳 Hur mår du? ❤️ 😃 😛 😛 😮” visas i rutan ovanför textfältet.

TC6.3 Konvertering av text utan giltig emoji.
Input
- Fyll i textfältet där det står ”Write a message with emoticons here…” med ”Hej :G”.
- Klicka på symbolen för att skicka eller tryck på Enter.

Output
- ”Hej :G” visas i rutan ovanför textfältet.

TC7.1 Lyckad generering av en emoji med en existerande tagg.
Input
- Fyll i textfältet där det står ”Write a tag here…” med ”piano”.
- Klicka på OK.

Output
- ”🎹” visas bredvid textfältet.

TC7.2 Misslyckad generering av en emoji med en icke-existerande tagg.
Input
- Fyll i textfältet där det står ”Write a tag here…” med ”fika”.
- Klicka på OK.

Output
- Ingen emoji visas.
- Ett felmeddelande visas i konsolen.

## Kodkvalitetskrav

**Fetmarkera** de "regler" som används ur CC. Ni kan frångå tabellformat om ni vill. Skapa direktlänkar till er kod där det är lämpligt. Skriv så att jag kan förstå.

### Namngivning

| Namn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |

### Funktioner

| Metodnamn och förklaring  | Reflektion                                   |
| -------------------  | ---------------------------------------------|
|                      |                                              |

## Laborationsreflektion
Reflektera över uppgiften utifrån ett kodkvalitetsperspektiv. Använd begrepp ifrån boken. 
