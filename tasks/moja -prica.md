# Codex Task: Promjena podstranice “Moja priča”

## Referenca

Koristi vizualni mockup spremljen kao:

`moja_prica_mockup.png`

Cilj je implementirati podstranicu **Moja priča** prema tom mockupu i prema postojećem Caspera vizualnom jeziku.

Nemoj kopirati detalje poput dekorativnih elemenata sa mockup slike, ona je tu samo kao vodic kako bi sve strukturno trebalo izgledati. Stilski se vodi prema ostatku web stranice.

---

## Cilj stranice

Stranica “Moja priča” prikazuje osobne priče članica udruge Caspera.

Na vrhu stranice mora biti pregled autorica u obliku horizontalnog slidera. Klikom na autoricu filtriraju se priče samo te autorice.

Ispod autorica prikazuje se lista priča poredana po datumu.

---

## Struktura stranice

### 1. Hero section

Sadržaj:

- breadcrumb:
  - Početna
  - Priče
  - Moja priča

- naslov:
  - `Moja priča`

- opis:
  - `Mjesto gdje dijelimo osobna iskustva, izazove, pobjede i korake koji nas vode prema oporavku i novom životu.`

- dekorativni ribbon element u pozadini desno, u postojećem Caspera stilu

---

## 2. Author slider

Ispod hero sekcije dodati naslov:

`Odaberite autoricu`

Napraviti horizontalni slider autorica.

Slider treba sadržavati:

- navigacijsku strelicu lijevo
- prvi item: `Sve priče`
- zatim autorice s okruglim thumbnailom i imenom
- navigacijsku strelicu desno
- helper tekst ispod:
  - `Povucite za više autorica`

### Važno

Ne koristiti gumb:

- `Još autorica`

Umjesto toga koristiti horizontalno listanje / slider.

### Active state

Aktivna autorica treba imati:

- pink border
- soft glow
- naglašeno ime
- elegantan Caspera hover/focus stil

Prvi item `Sve priče` je default aktivan.

---

## 3. Minimalni filteri

Ne dodavati dodatne kategorije priča.

Maknuti gumbe tipa:

- Najčitanije
- Kategorije
- Iskustva
- Put oporavka

Stranica treba imati samo:

1. filtriranje po autorici kroz author slider
2. sortiranje po datumu

---

## 4. Sort dropdown

Iznad liste priča, desno, dodati mali elegantni dropdown:

Label:

`Prikaži:`

Vrijednosti:

- `Najnovije`
- `Najstarije`

Default:

`Najnovije`

Ne koristiti dva velika gumba. Dropdown mora biti suptilan i ne smije vizualno konkurirati author slideru.

---

## 5. Story list

Ispod author slidera prikazati broj rezultata:

Primjer:

`12 priča pronađeno`

Priče prikazati kao horizontalne kartice:

- lijevo velika slika
- desno sadržaj
- mali avatar autorice
- ime autorice
- naslov priče
- kratak excerpt
- datum objave
- link `Čitaj više →`

### Važno

Ne prikazivati element:

- vrijeme čitanja

Dakle, ukloniti sve tipa:

- `4 min čitanja`
- `5 min čitanja`

Na kartici ostaje samo datum.

---

## 6. Vizualni stil kartica

Kartice trebaju slijediti postojeći Caspera stil:

- bijela / vrlo blago roza površina
- veliki border-radius
- mekana sjena
- puno whitespacea
- elegantni serif naslov
- pastel pink akcijski link
- suptilan hover

Hover efekt:

- bez velikog lifta
- bez tilta
- može biti:
  - blagi glow
  - malo jača sjena
  - suptilna promjena pozadine
  - pomak strelice u linku

---

## 7. Pagination

Na dnu liste priča dodati pagination u istom stilu kao mockup:

- prethodna strelica
- aktivni broj stranice
- ostali brojevi
- sljedeća strelica

Aktivni page treba imati pink pozadinu.

---

## 8. Footer

Koristiti postojeći Caspera footer stil iz projekta.

Ne redizajnirati footer u ovom tasku, samo ga pravilno prikazati na ovoj stranici.

---

## 9. Responsive ponašanje

### Desktop

- hero lijevo, ribbon dekoracija desno
- author slider u jednom horizontalnom redu
- story kartice horizontalne: image lijevo, content desno

### Tablet

- author slider ostaje horizontalno scrollable
- story kartice mogu ostati horizontalne ako ima dovoljno mjesta

### Mobile

- author slider mora biti swipeable
- story kartice prelaze u vertikalni layout:
  - image gore
  - content ispod

---

## 10. CMS / data logic

Stranica treba biti pripremljena za CMS podatke.

Svaka priča treba podržavati:

- title
- slug
- excerpt
- cover image
- author
- author image
- publish date
- body/content

Svaka autorica treba podržavati:

- name
- slug
- profile image
- optional short bio

Filtriranje:

- ako je odabrano `Sve priče`, prikazati sve priče
- ako je odabrana autorica, prikazati samo priče te autorice

Sortiranje:

- `Najnovije` = newest first
- `Najstarije` = oldest first

---

## Finalni rezultat

Stranica treba izgledati kao profesionalna, nježna i moderna Caspera editorial/blog podstranica.

Glavni dojam:

- elegantno
- ženstveno
- emotivno
- pregledno
- minimalno dugmadi
- jasno filtriranje po autoricama
- jednostavno sortiranje po datumu

Ne dodavati nepotrebne filtere i ne komplicirati UI.
