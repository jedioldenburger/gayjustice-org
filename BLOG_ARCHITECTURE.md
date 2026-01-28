# Blog Architecture — 12-Article Starter Pack

This document outlines the SEO, schema, and topical strategy for the 12-article blog launch. Two articles per thema, aligned with controlled vocabulary and E-E-A-T standards.

---

## BLOG STRUCTURE

**URL Pattern:** `/blog/[YYYY-MM-DD]-[slug]/`  
**Article Type Schema:** Article + isPartOf (thema page)  
**Canonical:** `https://gayjustice.org/blog/[date]-[slug]/`  
**Hreflang:** Include nl/en alternates (no x-default)

---

## 12-ARTICLE OUTLINE

### Thema 1: Mensenrechten (2 articles)

#### Article 1.1: Fundamentals

**URL:** `/blog/2026-02-05-mensenrechten-grondslag/`

**SEO Title:** "Mensenrechten als juridisch fundament | Waarom rechten van LHBTIQ+ personen beschermd zijn"

**Meta Description:** "Verken de juridische grondslag van LHBTIQ+ mensenrechten. Van Grondwet tot EVRM: hoe wetten bescherming bieden."

**H1:** "Mensenrechten als juridische grondslag"

**H2 Structure:**
- Wat zijn mensenrechten? (definitie + recht op privacy, gelijkheid)
- Nederlandse wettelijke basis (Grondwet, AWGB)
- EVRM en Europese bescherming
- Internationale verdragen (VN, ICCPR)
- Hoe wetten bescherming afdwingen

**Internal Links (Outgoing Anchors):**
- → mensenrechten van LHBTIQ+ personen
- → EVRM artikel 8 en 14 non-discriminatie
- → juridische grondslag [/thema/mensenrechten/](/thema/mensenrechten/)

**Article Type Schema:**
```json
{
  "@type": "Article",
  "headline": "[H1]",
  "description": "[Meta Description]",
  "datePublished": "2026-02-05",
  "author": { "@type": "Organization", "name": "GayJustice.org" },
  "isPartOf": {
    "@type": "WebPage",
    "name": "LHBTIQ+ mensenrechten",
    "url": "https://gayjustice.org/thema/mensenrechten/"
  }
}
```

**Target Keywords (LSI):**
- mensenrechten LHBTIQ+ personen
- juridische grondslag seksuele oriëntatie
- EVRM artikel 8 bescherming
- Nederlandse grondwet gelijkheid

---

#### Article 1.2: Enforcement

**URL:** `/blog/2026-02-12-mensenrechten-afdwinging/`

**SEO Title:** "Mensenrechten afdwingen: hoe rechtbanken LHBTIQ+ bescherming handhaven"

**Meta Description:** "Hoe werken rechtbanken, EHRM, CGE? Ontdek hoe mensenrechten in de praktijk beschermd worden."

**H1:** "Hoe mensenrechten juridisch worden afgedwongen"

**H2 Structure:**
- Rol van nationale rechtbanken (kanton, ondernemingskamer)
- Commissie Gelijke Behandeling (CGE) vorderingen
- Europees Hof voor de Rechten van de Mens (EHRM)
- Jurisprudentie voorbeelden
- Schadevergoeding en herstel

**Internal Links:**
- → EHRM jurisprudentie LHBTIQ+
- → CGE klachtenprocedure
- → rechtsbescherming [/thema/mensenrechten/](/thema/mensenrechten/)

**Keywords:**
- EHRM jurisprudentie
- CGE klacht indienen
- rechtsbescherming LHBTIQ+
- schadevergoeding discriminatie

---

### Thema 2: Homorechten / Gay-Rechten (2 articles)

#### Article 2.1: Fundamentals

**URL:** `/blog/2026-02-19-homorechten-nederland/`

**SEO Title:** "Homorechten in Nederland: van wettelijke bescherming tot praktische gelijkheid"

**Meta Description:** "Welke wetten beschermen homoseksuele personen? Overzicht van AWGB, huwelijk, en juridische gelijkstelling."

**H1:** "Homorechten in Nederland: het juridische kader"

**H2 Structure:**
- Wettelijke basis (Grondwet, AWGB, Burgerlijk Wetboek)
- Gelijke behandeling in werk, onderwijs, huisvesting
- Genderneutraal huwelijk en ouderschap
- Transgender geslachtsherkenning
- Praktische toepassing

**Internal Links:**
- → gelijke behandeling werk [/thema/discriminatie-werk/](/thema/discriminatie-werk/)
- → onderwijs bescherming [/thema/voorlichting-scholen/](/thema/voorlichting-scholen/)
- → homorechten [/thema/gay-rechten/](/thema/gay-rechten/)

**Keywords:**
- homorechten wetgeving
- gelijke behandeling LHBTIQ+
- seksuele oriëntatie beschermde grond
- genderneutraal huwelijk

---

#### Article 2.2: Practical guidance

**URL:** `/blog/2026-02-26-homorechten-praktijk/`

**SEO Title:** "Wanneer is het discriminatie? Praktische gids voor herkennen van juridische schending"

**Meta Description:** "Herken discriminatie in het dagelijks leven. Gids voor werk, onderwijs, huisvesting met voorbeelden uit rechtspraak."

**H1:** "Discriminatie herkennen en bestrijden: praktische gids"

**H2 Structure:**
- Wat telt als discriminatie? (voorbeelden per domein)
- Bewijs en documentatie
- Escalatiepad: melden → klacht → rechtszaak
- Organisaties die helpen (COC, juridische loket, advocaten)
- Succesvolle rechtszaken

**Internal Links:**
- → discriminatie op het werk
- → onderwijs pesterijen
- → klacht indienen procedures

**Keywords:**
- discriminatie herkennen
- juridische klacht indienen
- rechtsbescherming LHBTIQ+
- escalatiepad rechtszaak

---

### Thema 3: Onderwijs (2 articles)

#### Article 3.1: Legal framework

**URL:** `/blog/2026-03-05-onderwijs-rechten/`

**SEO Title:** "LHBTIQ+ rechten in het onderwijs: juridische bescherming tegen pesterijen en discriminatie"

**Meta Description:** "Wat zegt de wet over veiligheid en inclusiviteit in scholen? Rechten van leerlingen en verplichtingen van scholen."

**H1:** "Juridische rechten van LHBTIQ+ leerlingen"

**H2 Structure:**
- Anti-pesterijen / anti-bullying wetgeving
- Schoolverantwoordelijkheid (zorgplicht)
- Onderwijsinspectie rol en toezicht
- Geslachtsnamewijziging op school
- Inclusief curriculum

**Internal Links:**
- → AWGB discriminatieverbod
- → Onderwijsinspectie klacht indienen
- → pesterijen veiligheid [/thema/voorlichting-scholen/](/thema/voorlichting-scholen/)

**Keywords:**
- LHBTIQ+ veiligheid school
- anti-pesterijenbeleid
- onderwijsinspectie klacht
- inclusief onderwijs

---

#### Article 3.2: Practical guidance for students

**URL:** `/blog/2026-03-12-onderwijs-actie/`

**SEO Title:** "Je rechten als LHBTIQ+ leerling: hoe je jezelf beschermt tegen pesterijen en discriminatie"

**Meta Description:** "Wat doe je als je gepest wordt of gediscrimineerd? Stap-voor-stap gids met hulpnummers en contacten."

**H1:** "Praktische stappen tegen pesterijen: wat je kunt doen"

**H2 Structure:**
- Herken pesterijen / discriminatie
- Documenteren (datum, place, getuigen)
- Meld het (school, vertrouwensperson, ouders)
- Klacht indienen (school, inspectie)
- Juridische ondersteuning
- Succesverhalen

**Internal Links:**
- → vertrouwensinstanties COC / juridisch loket
- → onderwijsinspectie klacht

**Keywords:**
- pesterijen tegen LHBTIQ+ leerlingen
- juridische hulp school
- vertrouwensperson school
- klacht indienen onderwijs

---

### Thema 4: Discriminatie werk (2 articles)

#### Article 4.1: Legal landscape

**URL:** `/blog/2026-03-19-werk-discriminatie-wet/`

**SEO Title:** "AWGB en werknemersrechten: juridische bescherming tegen discriminatie op het werk"

**Meta Description:** "Wat zegt de AWGB? Welke bescherming heb je bij aanstelling, loon, bevordering, ontslag?"

**H1:** "AWGB: de juridische bescherming tegen werkdiscriminatie"

**H2 Structure:**
- AWGB uitgelegd (werkingssfeer, verboden gronden)
- Gelijke behandeling in alle aspecten werk
- Werkgeversplichten
- Bewijsrecht (omkering bewijslast)
- Schadevergoeding

**Internal Links:**
- → discriminatieverbodengronden
- → werknemersrechten AWGB
- → schadevergoeding [/thema/discriminatie-werk/](/thema/discriminatie-werk/)

**Keywords:**
- AWGB werkdiscriminatie
- gelijke behandeling werk
- seksuele oriëntatie beschermde grond
- werknemersrechten

---

#### Article 4.2: Practical action plan

**URL:** `/blog/2026-03-26-werk-actie/`

**SEO Title:** "Gediscrimineerd op het werk? Stap-voor-stap gids voor klacht en rechtsbijstand"

**Meta Description:** "Documenten, melden, klacht indienen, juridische hulp. Gids met contactgegevens en succesvolle aanpakken."

**H1:** "Actieplan bij werkdiscriminatie: wat je kunt doen"

**H2 Structure:**
- Herken discriminatie
- Documenteer (datum, getuigen, bewijzen)
- Meld bij werkgever / HR
- Zoek juridische hulp (advocaat, vakbond, CGE)
- Dien klacht in bij CGE
- Rechtszaak (kantonrechter, ondernemingskamer)
- Schadevergoeding claim

**Internal Links:**
- → CGE klachtenprocedure
- → juridisch loket
- → werknemersrechten

**Keywords:**
- werkdiscriminatie klacht
- juridische hulp werk
- schadevergoeding
- CGE klachtenprocedure

---

### Thema 5: Vluchtelingen asiel (2 articles)

#### Article 5.1: Legal basis

**URL:** `/blog/2026-04-02-vluchtelingen-asiel-wet/`

**SEO Title:** "LHBTIQ+ en asiel: juridische bescherming voor vervolgde personen"

**Meta Description:** "Hoe beschermen VN Vluchtelingenverdrag en EVRM LHBTIQ+ vluchtelingen? Welke landen zijn onveilig?"

**H1:** "Asielwetgeving voor LHBTIQ+ personen"

**H2 Structure:**
- VN Vluchtelingenverdrag en LHBTIQ+ bescherming
- EVRM artikel 3 (geen foltering) en 8 (privéleven)
- EU asielprocedures
- Nederland IND procedure
- Landenanalyse (onveilige landen)

**Internal Links:**
- → mensenrechten EVRM
- → VN verdragen
- → asiel [/thema/homoseksuele-vluchtelingen/](/thema/homoseksuele-vluchtelingen/)

**Keywords:**
- LHBTIQ+ asiel wetgeving
- VN vluchtelingenverdrag
- EVRM bescherming vervolgden
- Nederland asielprocedure

---

#### Article 5.2: Practical navigation

**URL:** `/blog/2026-04-09-vluchtelingen-hulp/`

**SEO Title:** "Juridische hulp voor LHBTIQ+ vluchtelingen: gids voor asielproces in Nederland"

**Meta Description:** "Asielverzoek, IND interview, juridische bijstand. Gids met contactgegevens van hulporganisaties."

**H1:** "Praktische gids: asiel aanvragen als LHBTIQ+ persoon"

**H2 Structure:**
- Asielverzoek indienen
- IND interview voorbereiding
- Bewijs en documentatie
- Juridische bijstand (advocaat, LIWC, etc.)
- Positief / negatief besluit
- Hernieuwing en rechtszaak
- Psychische ondersteuning

**Internal Links:**
- → LIWC organisatie
- → juridisch loket
- → IND informatie

**Keywords:**
- LHBTIQ+ asielverzoek
- IND interview
- juridische bijstand vluchtelingen
- EVRM bescherming asiel

---

### Thema 6: Gezondheidszorg (1 article — can expand to 2 later)

#### Article 6.1: Transgender healthcare rights

**URL:** `/blog/2026-04-16-gezondheidszorg-rechten/`

**SEO Title:** "Transgender rechten in de zorg: geslachtsherkenning, medische transitie, juridische bescherming"

**Meta Description:** "Hoe regel je geslachtsverandering? Wat vergoeid je ziekteveking? Welke rechten heb je op zorg?"

**H1:** "Transgender zorgrechten: geslachtsherkenning en medische zorg"

**H2 Structure:**
- Geslachtsverandering procedure (sinds 2019)
- Medische transitie: hormonen en chirurgie
- Zorgverzekeringswet vergoeding
- AWGB discriminatieverbod zorg
- Zeggenschap en informed consent
- Klacht procedures (IGJ, AWGB)

**Internal Links:**
- → transgender geslachtsherkenning
- → medische autonomie
- → zorgrechten [/thema/gezondheidszorg/](/thema/gezondheidszorg/)

**Keywords:**
- transgender geslachtsverandering
- medische transitie verzekering
- gezondheidszorg LHBTIQ+
- zorgrechten discriminatie

---

---

## CONTROLLED VOCABULARY BY THEMA

Use these anchor texts consistently to reinforce topical authority:

### Mensenrechten
- mensenrechten van LHBTIQ+ personen
- juridische grondslag gelijkheid
- EVRM bescherming
- jurisprudentie EHRM
- CGE klachtenprocedure

### Homorechten
- homorechten en seksuele oriëntatie
- gelijke behandeling AWGB
- discriminatieverbod Nederland
- praktische toepassing rechten

### Onderwijs
- LHBTIQ+ veiligheid school
- pesterijen tegen leerlingen
- onderwijsinspectie toezicht
- inclusief onderwijs beleid
- geslachtsnaam wijziging

### Discriminatie werk
- werkdiscriminatie AWGB
- gelijke behandeling werk
- schadevergoeding claim
- CGE klacht
- juridische bijstand werk

### Vluchtelingen
- LHBTIQ+ asiel
- VN vluchtelingenverdrag
- EVRM artikel 3 en 8
- IND procedure
- juridische hulp vluchtelingen

### Gezondheidszorg
- transgender geslachtsverandering
- medische transitie zorg
- zorgverzekeringswet vergoeding
- informed consent
- zorgrechten discriminatie

---

## SEO PATTERNS

### Title Formula
`[KEYWORD PHRASE] | [LEGAL ANGLE] — GayJustice.org`

Example: "Discriminatie op het werk | AWGB bescherming en praktische stappen"

### Meta Description Length
120–160 characters. Include keyword + benefit/question.

Example: "Wat zegt de AWGB? Hoe bescherm je jezelf tegen werkdiscriminatie? Gids met stappen en contactgegevens."

### H1 Placement
- Exactly 1 H1 per article (matches SEO title concept)
- Positioned after intro, before first H2

### H2 Count
- 4–6 H2 sections per article
- Clear topical progression (foundation → application → action)

---

## ARTICLE SCHEMA TEMPLATE

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "[H1 TEXT]",
  "description": "[Meta Description]",
  "image": "[Optional: featured image URL]",
  "datePublished": "[ISO 8601 DATE]",
  "dateModified": "[ISO 8601 DATE]",
  "author": {
    "@type": "Organization",
    "name": "GayJustice.org",
    "url": "https://gayjustice.org/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Stichting Vrijheid & Gelijkheid",
    "logo": {
      "@type": "ImageObject",
      "url": "https://gayjustice.org/logo.png"
    }
  },
  "isPartOf": {
    "@type": "WebPage",
    "name": "[THEMA PAGE TITLE]",
    "url": "[THEMA PAGE URL]"
  },
  "mainEntity": {
    "@type": "Thing",
    "name": "[ARTICLE TOPIC]"
  }
}
```

---

## INTERNAL LINKING STRATEGY

**Per article:** Min 3–5 links to thema pages + related articles.

**Example for Article 4.1 (work discrimination):**
- Work discrimination definition → /thema/discriminatie-werk/
- AWGB explanation → /thema/gay-rechten/
- Mensenrechten basis → /thema/mensenrechten/
- CGE process → /blog/[date]-cge-klacht/
- Related article: Article 4.2 (action steps)

**Incoming anchor text:** Use controlled vocabulary from above.

---

## PRODUCTION CHECKLIST

- [ ] Article written (600–1200 words typically)
- [ ] H1 + H2 structure validated
- [ ] Internal links added (min 3–5 to thema)
- [ ] SEO title + meta description finalized
- [ ] Schema.org Article JSON added
- [ ] Hreflang nl/en tags included
- [ ] Build validation (npm run build)
- [ ] Manual QA: links work, layout clean
- [ ] Commit message: "blog: [Article title]"

---

## NEXT PHASES

### Phase 6 (After blog launch)
- Monitor performance (Search Console, traffic)
- Update FAQ sections on thema pages with blog links
- Create topical clusters (3–4 articles per thema eventually)

### Phase 7 (Content Operations)
- Establish editorial calendar
- Create contributor guidelines
- Document publishing workflow
- Set review process for legal accuracy

---
