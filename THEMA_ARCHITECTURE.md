# Thema Pages — SEO & Schema Architecture

This document provides the exact SEO titles, meta descriptions, H1/H2 structures, and schema patterns for all thema pages.

## PHASE 3 PRIORITY PAGES (6 pages to update immediately)

### 1. /thema/mensenrechten/

**File:** `src/pages/thema/mensenrechten.astro`

**SEO Title:** LHBTIQ+ mensenrechten in Nederland en Europa | Juridische uitleg

**Meta Description:** Uitleg van LHBTIQ+ mensenrechten in Nederland en Europa. Overzicht van wetgeving, verdragen en rechtsbescherming zonder juridisch advies.

**H1:** LHBTIQ+ mensenrechten in Nederland en Europa

**H2 Structure:**

- Wat zijn mensenrechten in juridisch perspectief?
- Bescherming van LHBTIQ+ personen onder internationaal recht
- Europees Verdrag voor de Rechten van de Mens (EVRM)
- Toepassing van mensenrechten in Nederland
- Grenzen en handhaving van mensenrechten
- Waar vind je officiële bronnen en uitspraken?

**Hreflang Fix:** Remove x-default

**Schema Type:** WebPage + AboutPage

---

### 2. /thema/gay-rechten/

**File:** `src/pages/thema/gay-rechten.astro`

**SEO Title:** Homorechten en LHBTIQ+ rechten in Nederland | Wettelijk kader

**Meta Description:** Overzicht van homorechten en LHBTIQ+ rechten in Nederland. Uitleg van wetgeving, gelijke behandeling en rechtsbescherming.

**H1:** Homorechten en LHBTIQ+ rechten in Nederland

**H2 Structure:**

- Wat verstaan we juridisch onder homorechten?
- Gelijke behandeling volgens de Nederlandse wet
- Seksuele oriëntatie als beschermde grond
- Rechten en plichten in het dagelijks leven
- Rol van rechters en toezichthouders
- Doorverwijzing naar relevante thema's

**Hreflang Fix:** Remove x-default

**Schema Type:** WebPage + AboutPage

---

### 3. /thema/voorlichting-scholen/ (Onderwijs)

**File:** `src/pages/thema/voorlichting-scholen.astro`

**SEO Title:** LHBTIQ+ rechten in het onderwijs | Juridische bescherming

**Meta Description:** Uitleg van LHBTIQ+ rechten in het onderwijs. Wetgeving, plichten van scholen en bescherming tegen discriminatie.

**H1:** LHBTIQ+ rechten in het onderwijs

**H2 Structure:**

- Juridische verantwoordelijkheid van onderwijsinstellingen
- Discriminatie en pesten in het onderwijs
- Veiligheid en gelijke behandeling van leerlingen
- Rol van inspecties en meldpunten
- Rechten van minderjarigen en ouders
- Relevante wet- en regelgeving

**Hreflang Fix:** Remove x-default

**Schema Type:** WebPage + AboutPage

---

### 4. /thema/homoseksuele-vluchtelingen/ (Vluchtelingen)

**File:** `src/pages/thema/homoseksuele-vluchtelingen.astro`

**SEO Title:** Rechten van homoseksuele vluchtelingen | Asiel en wetgeving

**Meta Description:** Informatieve uitleg over de rechten van homoseksuele en LHBTIQ+ vluchtelingen in Nederland en Europa, inclusief EVRM en asielprocedures.

**H1:** Rechten van homoseksuele en LHBTIQ+ vluchtelingen

**H2 Structure:**

- Wanneer speelt seksuele oriëntatie een rol in asiel?
- Internationale bescherming en mensenrechten
- Nederlandse asielprocedures in hoofdlijnen
- Bewijslast en kwetsbare groepen
- Jurisprudentie en Europese normen
- Doorverwijzing naar gespecialiseerde instanties

**Hreflang Fix:** Remove x-default

**Schema Type:** WebPage + AboutPage

---

### 5. /thema/holocaust-homoseksuele-slachtoffers/

**File:** `src/pages/thema/holocaust-homoseksuele-slachtoffers.astro`

**SEO Title:** Homoseksuele slachtoffers van de Holocaust | Historisch-juridisch perspectief

**Meta Description:** Achtergrond en juridische erkenning van homoseksuele slachtoffers van de Holocaust, inclusief naoorlogse rechtspositie.

**H1:** Homoseksuele slachtoffers van de Holocaust

**H2 Structure:**

- Vervolging op grond van seksuele oriëntatie
- Juridische context van de nazitijd
- Paragraaf 175 en strafrechtelijke gevolgen
- Erkenning en herstel na de oorlog
- Betekenis voor hedendaagse mensenrechten
- Bronnen en historisch onderzoek

**Hreflang Fix:** Remove x-default  

**Schema Type:** WebPage + AboutPage

---

### 6. /thema/politieke-verantwoordelijkheid/

**File:** `src/pages/thema/politieke-verantwoordelijkheid.astro`

**SEO Title:** Politieke verantwoordelijkheid voor LHBTIQ+ rechten | Uitleg

**Meta Description:** Neutrale uitleg over politieke en institutionele verantwoordelijkheid voor LHBTIQ+ rechten binnen de rechtsstaat.

**H1:** Politieke verantwoordelijkheid voor LHBTIQ+ rechten

**H2 Structure:**

- Rol van wetgever en overheid
- Internationale verplichtingen van Nederland
- Toezicht en verantwoording
- Grenzen tussen beleid en rechtspraak
- Publieke instituties en rechtsbescherming

**Hreflang Fix:** Remove x-default

**Schema Type:** WebPage + AboutPage

---

## SCHEMA PATTERN (all thema pages)

### BreadcrumbList (every thema page)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://gayjustice.org/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Thema's",
      "item": "https://gayjustice.org/thema/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[THEMA NAAM]",
      "item": "https://gayjustice.org/thema/[slug]/"
    }
  ]
}
```

### WebPage + AboutPage

```json
{
  "@context": "https://schema.org",
  "@type": ["WebPage", "AboutPage"],
  "name": "[H1 TEXT]",
  "description": "[Meta Description]",
  "url": "https://gayjustice.org/thema/[slug]/",
  "inLanguage": "nl-NL",
  "isPartOf": {
    "@type": "WebSite",
    "name": "GayJustice.org",
    "url": "https://gayjustice.org"
  },
  "about": {
    "@type": "Thing",
    "name": "[TOPICAL ENTITY NAME]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stichting Vrijheid & Gelijkheid",
    "alternateName": "STVG",
    "url": "https://gayjustice.org/transparantie"
  }
}
```

---

## INTERNAL LINK ANCHORS (per thema)

Use these anchor texts consistently site-wide to reinforce topical signals.

### Mensenrechten

**Incoming anchors**

- mensenrechten van LHBTIQ+ personen
- LHBTIQ+ mensenrechten in Nederland
- internationale mensenrechten en LHBTIQ+ bescherming

**Outgoing anchors**

- homorechten en gelijke behandeling → /thema/gay-rechten
- EVRM en non-discriminatie → /thema/politieke-verantwoordelijkheid
- juridische kaders voor LHBTIQ+ rechten → /transparantie

### Gay-Rechten

**Incoming anchors**

- homorechten in Nederland
- LHBTIQ+ rechten volgens de wet
- juridische bescherming van homoseksuele personen

**Outgoing anchors**

- discriminatie op het werk → /thema/voorlichting-scholen
- LHBTIQ+ rechten in het onderwijs → /thema/voorlichting-scholen
- transgender rechten in de zorg → [create /thema/gezondheidszorg/]

---

## TODO — Phase 3

- [ ] Update /thema/mensenrechten.astro
- [ ] Update /thema/gay-rechten.astro
- [ ] Update /thema/voorlichting-scholen.astro
- [ ] Update /thema/homoseksuele-vluchtelingen.astro
- [ ] Update /thema/holocaust-homoseksuele-slachtoffers.astro
- [ ] Update /thema/politieke-verantwoordelijkheid.astro
- [ ] Remove x-default hreflang from all thema pages
- [ ] Add BreadcrumbList + WebPage/AboutPage schema to all

## TODO — Phase 4

- [ ] Create missing thema: /thema/discriminatie-werk/
- [ ] Create missing thema: /thema/gezondheidszorg/
- [ ] Create 12-article blog template

## TODO — Phase 5

- [ ] Update Footer: add link to /ai-policy
- [ ] Update editorial guidelines doc
- [ ] Create controlled vocabulary document
