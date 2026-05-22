# Codex Task: Izrada stranice pojedinačne priče

## Cilj

Izraditi novu podstranicu za prikaz pojedinačne priče s layoutom po uzoru na zadnji mockup.

Stranica se otvara kada korisnik klikne na jednu priču na stranici **Moja priča**.

Dizajn mora ostati vjeran postojećem Caspera stilu:

- soft pastel pink/lila pozadina
- bijeli rounded card containeri
- elegantni serif naslovi
- Caspera ljubičasta za naslove
- ružičasti akcenti
- veliki border-radius
- nježne sjene
- puno whitespacea
- premium NGO/editorial osjećaj

---

## Struktura stranice

Stranica treba biti vertikalna, centralno poravnata, bez sidebara.

Redoslijed elemenata:

1. Header / navbar — koristi postojeći Caspera navbar
2. Breadcrumb
3. Glavni article container
4. Velika naslovna slika
5. Naslov priče
6. Meta podaci: ime autorice, datum
7. Sadržaj priče
8. Istaknuti quote blok
9. Share sekcija
10. Kartica autorice
11. Footer — koristi postojeći Caspera footer

---

## 1. Glavni layout

Glavni sadržaj mora biti unutar centralnog containera.

```css
.story-detail {
  max-width: 1040px;
  margin: 0 auto;
  padding: 48px 24px 80px;
}
```

Glavni article wrapper:

```css
.story-article {
  background: rgba(255, 255, 255, 0.92);
  border-radius: 28px;
  overflow: hidden;
  box-shadow:
    0 22px 60px rgba(103, 74, 96, 0.12),
    0 8px 24px rgba(103, 74, 96, 0.06);
}
```

---

## 2. Breadcrumb

Iznad article containera dodati breadcrumb:

```text
Početna > Moja priča > Kad sam sebe ponovno stavila na prvo mjesto
```

Stil:

- mali font
- siva/lila boja
- diskretno
- bez jakog kontrasta

---

## 3. Naslovna slika

Na vrhu article carda ide velika horizontalna slika.

```css
.story-hero-image {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
}
```

Na desktopu slika neka bude puna širina article containera.

Na mobile:

```css
.story-hero-image {
  height: 280px;
}
```

---

## 4. Sadržajni dio articlea

Ispod slike ide bijeli prostor s paddingom.

```css
.story-content {
  padding: 64px 72px 56px;
}
```

Na mobile:

```css
.story-content {
  padding: 40px 24px;
}
```

---

## 5. Naslov priče

Naslov treba biti velik, elegantan i u Caspera ljubičastoj boji.

Primjer:

```text
Kad sam sebe ponovno stavila na prvo mjesto
```

```css
.story-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(3rem, 6vw, 5.8rem);
  line-height: 0.95;
  letter-spacing: -0.035em;
  color: #815a79;
  max-width: 760px;
  margin-bottom: 28px;
}
```

---

## 6. Meta podaci

Ispod naslova dodati red:

```text
[avatar] Ivana K. | 12. travnja 2024.
```

Stil:

- mali okrugli avatar
- ime autorice
- ikonica kalendara ako već postoji u projektu
- datum

```css
.story-meta {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #6f6870;
  font-size: 0.95rem;
  margin-bottom: 44px;
}
```

---

## 7. Tekst priče

Tekst treba biti čitljiv, miran i prozračan.

```css
.story-body {
  max-width: 760px;
}

.story-body p {
  font-size: 1.08rem;
  line-height: 1.85;
  color: #66616a;
  margin-bottom: 1.5em;
}
```

Ne širiti tekst preko cijele širine containera.
Čitljivost je važnija od popunjavanja prostora.

---

## 8. Quote blok

Dodati istaknuti quote blok unutar sadržaja.

Primjer:

```text
Ako sam to uspjela ja, možeš i ti.
Ti si važna. Ti si dovoljna. Ti zaslužuješ.
```

Stil:

- ružičasta vertikalna linija lijevo
- italic tekst
- Caspera pink boja

```css
.story-quote {
  margin: 48px 0;
  padding-left: 28px;
  border-left: 4px solid #e7aac8;
  color: #d889a8;
  font-style: italic;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.6;
}
```

---

## 9. Share sekcija

Ispod teksta dodati:

```text
Podijeli priču
```

Uz male kružne ikonice:

- Facebook
- Instagram ili link
- email

```css
.story-share {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 48px;
}
```

Ikonice:

- bijela pozadina
- mala sjena
- ružičasti/lila hover

---

## 10. Kartica autorice

Ispod sadržaja, unutar istog article containera, dodati autor card.

Sadržaj:

```text
O autorici

Ivana K.
Članica udruge Caspera

Ivana svoju priču dijeli kako bi podržala druge žene koje prolaze kroz sličan put.
```

Layout:

- horizontalna kartica
- avatar lijevo
- tekst desno
- ružičasto/lila blaga pozadina

```css
.author-card {
  margin-top: 64px;
  padding: 36px 40px;
  border-radius: 24px;
  background: linear-gradient(135deg, #fff7fb 0%, #f8eef4 100%);
  display: flex;
  gap: 32px;
  align-items: center;
}
```

Avatar:

```css
.author-card img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
}
```

Na mobile kartica ide vertikalno.

---

## 11. Footer

Koristiti postojeći Caspera footer bez većih izmjena.

Footer mora ostati vizualno usklađen sa stranicom:

- isti logo
- kontakt
- napomena
- partneri
- social icons
- pravni linkovi

---

## 12. Responsiveness

Desktop:

- article max-width oko 1040px
- velika slika
- prostran content padding

Tablet:

- smanjiti padding
- naslov clamp već pokriva veličinu

Mobile:

- slika 260–300px height
- naslov manji
- author card stacked
- meta podaci mogu wrapati

---

## 13. Važno

Nemoj dodavati sidebar.

Nemoj mijenjati postojeću stranicu “Moja priča” osim ako treba dodati link prema novoj detail stranici.

Ne uvoditi potpuno novi vizualni stil.

Ova stranica mora izgledati kao prirodan nastavak postojeće Caspera stranice “Moja priča”.

---

## Expected Result

Finalna stranica treba izgledati kao elegantna, vertikalna article stranica:

- velika naslovna slika na vrhu
- veliki serif naslov ispod slike
- autorica i datum ispod naslova
- prozračan tekst priče
- emocionalni quote blok
- share opcije
- autor bio kartica
- postojeći footer

Ukupni osjećaj:
premium, nježno, čitljivo, editorial, Caspera.

```

```
