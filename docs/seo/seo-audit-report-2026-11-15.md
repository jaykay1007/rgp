# Raja Ganapathi Offset: SEO audit and strategy, first report

Site: https://www.rajaganapathioffset.in (from `SITE_CONFIG.domain`)
Audit date: 15 November 2026
Scope: source code on branch `claude_design`, the local dev server, the live site, and live Google India results.

## How to read this report

Every finding carries one of these labels.

| Label | Meaning |
|---|---|
| **Verified** | I saw it directly: in the source, in the live HTML, or in a Google results page on 15 Nov 2026 |
| **Estimate** | A qualitative judgement. No measured data behind it |
| **Assumption** | Reasonable but unchecked. Needs confirming |
| **Owner to confirm** | Only the press owner can answer |

Limits of this pass:

- **No Search Console or Analytics access.** I have no impressions, clicks, or query data. The live HTML carries no Analytics tag and no Search Console verification tag, so there may be no measurement at all.
- **No keyword tool.** This report contains no search volumes, difficulty scores, or backlink counts. Demand is given as High / Medium / Low, as an estimate based on how many directories and competitors target the term.
- **Google results are one snapshot.** I ran 12 searches on google.com (India, English) from an Indian connection. Google placed me in Coimbatore for vague queries and in the named town for town queries. Positions move daily and by location. Treat them as indicative, not as rank tracking.
- **No lab performance numbers.** The PageSpeed Insights API quota was exhausted. Performance findings come from the source and page weight only.
- **Competitor sites were judged from their search listings**, not crawled.
- Nothing here promises a first-place ranking.

---

## 1. Executive summary

The site has a better starting position than the brief assumes. The Google Business Profile already ranks first in the map results for "printing press in bhavani erode", and site pages already sit on page one for several Erode-wide service searches. The biggest problems are not missing keywords. They are accuracy and trust.

**The eight findings that matter most**

1. **Production is a stale build from July 2026. (Verified)** The live site still sells packaging, gold foil, embossing, laser-cut cards, and turmeric packaging, and still says "Get a quote on WhatsApp". All of those were removed in the repo. Two current pages, `/services/calendar-printing` and `/services/sticker-labels`, return 404 on live. Google has indexed the stale copy: its AI Overview for the brand name lists packaging and WhatsApp, and the wedding page snippet reads "Foiled, embossed and laser-cut wedding cards". Calendar season peaks now and the calendar page does not exist in production.
2. **Trust claims on the site do not match reality. (Verified)** The site says "4.9, based on 200+ verified Google reviews". The structured data claims 4.9 from 5 reviews on every page and 4.9 from 500 reviews on the Bhavani page. Google shows the real profile at 5.0 from 6 reviews, and Justdial at 5.0 from 7. Other unsupported claims: "50K+ projects", "10,000+ happy clients", "99.4% on-time", "ISO-standard processes", "#1 Printing Press", "Best Printing Press". This is a policy risk with Google and a credibility risk with customers who check.
3. **The business has three names online. (Verified)** Google profile: "Raja Ganapathi Press". Site: "Raja Ganapathi Offset" and "Raja Ganapathi Offset Printers". Justdial: "Raja Ganapathi Offset Printers", in "Palanipuram". Opening hours also differ between the site and Justdial.
4. **Three pages compete for the same search. (Verified)** The homepage, `/printing-press-bhavani-erode`, and `/printing-press` all target "printing press Bhavani / Erode". Google shows two of them for one query, and shows the Gobichettipalayam page for "offset printing press erode" instead of the Erode page.
5. **Town pages are close to doorway pages. (Verified)** Six pages share one template, run 320 to 370 words, and differ mainly by town name. Each one declares a separate business entity in its schema with the Bhavani address. Several contain geography errors. Komarapalayam is titled "Printing Press in Komarapalayam, Erode", but Komarapalayam is in Namakkal district.
6. **Service pages are thin and use stock photos as proof. (Verified)** Pages run 275 to 370 words. A section headed "From our press floor" shows Unsplash images with alt text such as "Textile sample books and shade cards printed in Komarapalayam".
7. **Titles and descriptions are too long everywhere. (Verified)** A 51-character suffix is appended to every title. Titles run 85 to 154 characters. The Bhavani page title repeats the brand twice.
8. **The path to an enquiry is narrow. (Verified)** The homepage hero has no call button. On mobile the phone link is inside the menu. There is no contact page and no way to send artwork. The header menu links (`#services`, `#contact` and so on) do nothing on every page except the homepage.

**What to do first:** deploy the corrected site, remove the invented ratings, align the business name and hours everywhere, then start collecting real Google reviews. Those four steps are worth more than any new page.

---

## 2. Website overview

| Item | Finding | Label |
|---|---|---|
| Business | Offset printing press in Bhavani, Erode district, since 1997 | Verified (site and Google profile: "30+ years in business") |
| Address | 24 Palani Andavar Kovil Street, opposite CSI School, Bhavani 638301 | Verified against Google profile |
| Phone | +91 99944 66277 | Verified against Google profile and Justdial |
| Stack | Next.js 14.2 App Router, hosted on Vercel, statically generated | Verified |
| Pages in the repo | 25 indexable URLs: 5 static, 14 services, 6 towns | Verified |
| Pages live | 26 in the sitemap: 15 services (3 retired packaging pages, minus calendar and sticker pages), 6 towns, 5 static | Verified |
| Languages | English, plus one Tamil page at `/ta` | Verified |
| Redirects | http to https and bare domain to www both work (308) | Verified |
| 404 handling | Unknown URLs return a real 404 | Verified |
| Deployed branch | Not the audited one. `main` still contains the packaging services | Verified |
| Analytics | No Google Analytics tag in the live HTML. It only loads if `NEXT_PUBLIC_GA_ID` is set | Verified |
| Search Console | No verification meta tag in the live HTML. DNS verification is possible | Owner to confirm |

### Live site versus repo

| Area | Live (July build) | Repo (`claude_design`) |
|---|---|---|
| Packaging, foil, embossing, turmeric packaging | Advertised on 3 service pages, the homepage title, and descriptions | Removed. 301 redirects to `/services/sticker-labels` are ready |
| WhatsApp | 4 to 28 mentions per page | None |
| `/services/calendar-printing` | 404 | Exists, 513 words |
| `/services/sticker-labels` | 404 | Exists, 367 words |
| Homepage description | "South India's most-loved offset printing press" | "Multicolour offset printing press in Bhavani, Erode since 1997" |
| Offset page | Mentions a Heidelberg press | Machine name removed |

---

## 3. Site architecture

```
/                                   Homepage (10 sections, FAQ, map)
├── /services                       Index of 14 services in 5 groups
│   ├── /services/multicolour-offset-printing
│   ├── /services/wedding-invitations
│   ├── /services/visiting-cards
│   ├── /services/calendar-printing          (404 on live)
│   ├── /services/sticker-labels             (404 on live)
│   ├── /services/brochures
│   ├── /services/book-printing
│   ├── /services/bag-printing
│   ├── /services/business-stationery
│   ├── /services/stationery-printing        (bill books)
│   ├── /services/promotional-materials
│   ├── /services/educational-materials
│   ├── /services/textile-sample-books
│   └── /services/bhavani-jamakkalam-brochures
├── /printing-press                 Town hub
│   ├── /printing-press/erode
│   ├── /printing-press/komarapalayam
│   ├── /printing-press/gobichettipalayam
│   ├── /printing-press/anthiyur
│   ├── /printing-press/sathyamangalam
│   └── /printing-press/perundurai
├── /printing-press-bhavani-erode   "Authority" page, 2,283 words
└── /ta                             Tamil page, 197 words
```

Observations, all **Verified**:

- **Internal linking is wide and flat.** Every page links to every service and every town through the header and footer. Nothing is more than one click from anywhere. That is good for crawling.
- **`/ta` is an orphan.** No page links to it with a normal link. The language button changes text in place and does not navigate. Google can find `/ta` only through the sitemap and hreflang.
- **Header links break off the homepage.** `#services`, `#expertise`, `#process`, `#showcase`, and `#contact` are bare fragments. Those sections exist only on the homepage, so the menu is dead on 24 of 25 pages.
- **Missing standard pages.** There is no Contact page, no About page, no gallery of real work, and no privacy policy.
- **Breadcrumbs** are visible and marked up on service and town pages.

---

## 4. Complete service inventory

Status reflects the live site unless it says "repo". Opportunity is an estimate.

### 4a. Confirmed services (each has a page in the repo)

| Service | Category | Website URL | Current SEO status | Search opportunity | Recommended action |
|---|---|---|---|---|---|
| Multicolour offset printing | Offset, Calendars & Labels | `/services/multicolour-offset-printing` | Indexed. Not seen on page one for "offset printing press erode"; the Gobi page ranks there instead | High. Core term, directory-heavy | Make this the target for "offset printing Erode / Bhavani". Add real press photos, machine and sheet-size details |
| Wedding invitations | Celebrations & Events | `/services/wedding-invitations` | Page one for "wedding card printing bhavani" (2nd organic) and "wedding card printing erode" (5th organic). Snippet shows stale foil copy | High. Strong local specialists with 160 to 500 reviews | Deploy corrected copy. Add a real card gallery, starting prices, wording help in Tamil |
| Digital & PVC visiting cards | Business Identity | `/services/visiting-cards` | Page one for "visiting card printing erode" (2nd organic) | High | Add price table and turnaround. Confirm the "From ₹399" tag is current |
| Calendar printing | Offset, Calendars & Labels | `/services/calendar-printing` | **404 on live.** Absent from "calendar printing erode" | High and seasonal, peaking October to December | Deploy now. Add the 17 real catalogue designs with design numbers and order deadline |
| Die-cut sticker labels | Offset, Calendars & Labels | `/services/sticker-labels` | **404 on live.** The retired `/services/packaging-materials` page ranks 3rd organic for "sticker label printing erode" | High | Deploy. The ready redirect passes that ranking to the new page |
| Brochures & catalogues | Marketing & Publishing | `/services/brochures` | Indexed. Not checked in results | Medium | Add real samples. Cover "catalogue", "company profile", "leaflet" |
| Book printing | Marketing & Publishing | `/services/book-printing` | Indexed. Not checked | Medium. Wider than local | Confirm binding types done in-house. Add souvenir and temple book examples |
| Bag printing | Celebrations & Events | `/services/bag-printing` | Indexed. Not checked | Medium | Confirm in-house or outsourced. Replace stock photos |
| Business stationery | Business Identity | `/services/business-stationery` | Indexed. Appears for brand searches | Medium | Add the term "letter pad", which is the common local word for letterhead |
| Bill books & stationery | Business Identity | `/services/stationery-printing` | Page one for "bill book printing erode" (4th organic) | High. Steady demand from shops | Keep the URL. Retitle around "Bill Book Printing". Add GST invoice format examples |
| Promotional materials | Marketing & Publishing | `/services/promotional-materials` | Indexed. Name matches no search term | Medium | Retitle to "Notice, Pamphlet & Poster Printing" |
| Educational materials | Marketing & Publishing | `/services/educational-materials` | Indexed. Name matches no search term | Medium, seasonal (April to June) | Retitle to "School Diary & Educational Printing" |
| Textile sample books | Specialised | `/services/textile-sample-books` | Indexed. Hero is a stock photo of press sheets | Low volume, high value, little competition | Add real sample book photos. Link from a textile industry page |
| Bhavani jamakkalam brochures | Specialised | `/services/bhavani-jamakkalam-brochures` | Indexed. All images are stock | Low volume. A unique local angle | Add real jamakkalam catalogue work, or fold into the brochure page if there is none |

### 4b. Inferred services (named in copy or shown in photos, no page of their own)

| Service | Category | Website URL | Current SEO status | Search opportunity | Recommended action |
|---|---|---|---|---|---|
| Ceremony invitations: ear-piercing, puberty function | Celebrations | Photos inside `/services/wedding-invitations` | Real work photos exist. No text targets these | Medium. Few local pages target them | New page (section 10, page 1) |
| Daily tear-off calendars | Calendars | Section of the calendar page | Part of a page that is 404 on live | High in season | Deploy first. Split later only if the catalogue grows |
| Letterheads, envelopes | Business Identity | `/services/business-stationery` | Covered | Medium | Keep on this page |
| Posters, notices, pamphlets, handbills | Marketing | `/services/promotional-materials` | Covered under a vague name | Medium | Retitle, as above |
| Menu cards | Marketing | Mentioned on two pages | Not targeted | Low to Medium | Add a section with examples. Owner to confirm demand |
| Prescription pads, receipt and token books | Business Identity | `/services/stationery-printing` | Mentioned in a list | Low to Medium | Add short sections and photos |
| Hang tags and product labels | Labels | Jamakkalam and sticker pages | Mentioned | Low to Medium (trade buyers) | Cover on the textile industry page |
| Souvenirs and temple books | Publishing | `/services/book-printing` | Mentioned | Low | Add examples |
| Design and Tamil typesetting | Support | Mentioned in several FAQs | Not targeted | Low as a search, high as a selling point | Feature on every service page |
| Screen printing | Support | Bag page; Google profile description says "Screen Printer" | Not targeted | Low | Owner to confirm it is offered and for what |

### 4c. Possible opportunities (owner to confirm before any page is written)

| Service | Category | Website URL | Current SEO status | Search opportunity | Recommended action |
|---|---|---|---|---|---|
| ID cards and certificates | Education, Business | Listed on `/printing-press-bhavani-erode` only | Claimed but unsupported | Medium | Confirm. If not offered, remove the claim |
| Housewarming, baby shower, 60th birthday invitations | Celebrations | None | None | Medium | Confirm, then include in the ceremony page |
| Obituary and remembrance cards | Celebrations | None | None | Medium, often urgent | Confirm, including realistic turnaround |
| Temple festival notices and donation receipt books | Community | None | None | Low to Medium | Confirm |
| Paper bags | Bags | Named only in the Bhavani page schema ("Paper Bag Printing") | Claimed but unsupported | Medium | Confirm. The bag page covers cloth and jute only |
| "50+ services", express printing, same-day visiting cards, next-day delivery to Erode | Claims | Several pages | Unverified promises | Not applicable | Confirm each or remove |
| "Moorodu" as a service area | Area | Contact section, config | I could not match this to a known town | Not applicable | Confirm the place name and spelling |

### 4d. Not offered. Never write pages for these

Stated in `lib/services-data.ts`: large format, banners, flex; packaging and carton printing; foil, embossing, spot UV. These still appear on the live site. First-party photos named `...gold-foil...` and `...foil-stamped...` sit in `public/images/works/` and are correctly unused.

---

## 5. Technical SEO audit

Priority: P0 is this week, P1 within 30 days, P2 within 90 days, P3 is housekeeping. All items are **Verified** unless noted.

### Deployment and accuracy

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T1 | Whole live site | Production serves a July 2026 build. `main` still contains packaging services | Customers and Google see services the press does not offer. Two money pages are missing | P0 | Merge the corrected branch to the deployed branch and deploy. Then check `/services/packaging-printing` returns a 301 and `/services/calendar-printing` returns 200 |
| T2 | `/services/calendar-printing`, `/services/sticker-labels` | 404 on live | No presence for calendar or sticker searches during peak season | P0 | Fixed by T1. Then request indexing in Search Console |
| T3 | `/services/packaging-printing`, `/packaging-materials`, `/turmeric-packaging` | Live, indexed, in the sitemap | Advertises retired services | P0 | Fixed by T1. Redirects exist in `next.config.mjs` |
| T4 | `lib/structured-data.ts` lines 87 to 108; `REVIEWS` in `lib/seo-config.ts` | Hard-coded 4.9 rating and five named reviews in LocalBusiness schema on every page. Real Google rating is 5.0 from 6 | Breaks Google's review markup rules. Google does not show stars for a business's own reviews of itself, so there is no upside | P0 | Delete `aggregateRating` and `review` from the schema. Keep the `REVIEWS` list only if the owner confirms these are real customers who agreed to be quoted |
| T5 | `lib/authority-page-schema.ts` | A second LocalBusiness node with the same `@id`, claiming 500 reviews, extra areas (Salem, Namakkal), and alternate names like "Best Printing Press Bhavani" | Two conflicting descriptions of one business on one page | P0 | Remove the LocalBusiness node from this file. Reference `#localbusiness` by `@id` |
| T6 | `components/WhyChooseUs.tsx` line 131; `components/Hero.tsx` stats; `/printing-press-bhavani-erode` | "200+ verified Google reviews", "4.9★", "50K+ projects", "10,000+ happy clients", "99.4%", "ISO-standard", "#1", "Best" | Misleading claims. Contradicted by the Google profile shown beside the site in results | P0 | Replace with facts the owner can back: years in business, the real Google rating with a link, real counts if records exist |

### Indexing, canonicals, language

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T7 | `app/layout.tsx` `alternates` | Canonical and hreflang for the homepage are set in the root layout | Any future page that omits its own canonical will declare the homepage as canonical. All current pages override it, so nothing is broken today | P2 | Move `alternates` from `app/layout.tsx` to `app/page.tsx` |
| T8 | `/ta` | `<html lang="en">` on a Tamil page | Wrong language signal for screen readers and some search engines | P2 | Add `lang="ta"` to the page wrapper, or split root layouts by language |
| T9 | `/ta`, `components/language-toggle.tsx` | No link to `/ta` anywhere. The toggle only swaps a few labels | Tamil page gets no internal authority and users cannot reach it | P1 | Make the toggle a link: `/` to `/ta` and back |
| T10 | `/ta` title | The English suffix is appended to the Tamil title (116 characters) | Truncated mixed-language title | P1 | Use `title: { absolute: "..." }` |
| T11 | `app/sitemap.ts` | hreflang alternate listed on `/` only, not on `/ta`. `lastModified` is the build time for every URL | Google ignores lastmod when it is always "now" | P2 | List both languages on both entries. Use real per-page dates |
| T12 | `app/robots.ts` | Fine. `host` is a non-standard line | None | P3 | Optional: remove `host` |
| T13 | http bare domain | Two redirect hops (http bare, https bare, https www) | Negligible | P3 | Leave |

### Duplicate, thin, and competing pages

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T14 | `/`, `/printing-press-bhavani-erode`, `/printing-press` | All target "printing press Bhavani / Erode". Footer "Popular searches" sends exact-match anchors to two of them | Google splits signals. Two URLs show for one query | P1 | One job per page. Homepage owns "printing press in Bhavani". Turn `/printing-press-bhavani-erode` into the About and visit page (same URL, new title, real photos, history, map). Make `/printing-press` "Areas we deliver to" |
| T15 | `/printing-press-bhavani-erode` | 2,283 words of keyword lists, 68 H3s, lists 17 towns including Salem and Namakkal, claims ID cards and certificates | Reads as written for search engines. Carries the most unsupported claims | P1 | Rewrite as in T14. Cut to what is true and useful |
| T16 | `/printing-press/[location]` (6 pages) | One template, 320 to 370 words, town name swapped | Doorway-page risk under Google's spam policies | P1 | Keep Erode and Komarapalayam, which already rank. Give each page proof unique to that town: how delivery works, distance, kinds of customers, real jobs. Review the other four at day 90 and merge any still generic into the hub with a 301 |
| T17 | `app/printing-press/[location]/page.tsx` title | "Printing Press in Erode, Erode". "Printing Press in Komarapalayam, Erode" (Komarapalayam is in Namakkal district) | Factual error in the title | P1 | Title pattern: "Printing for {Town}, delivered from Bhavani" |
| T18 | `lib/locations-data.ts` `nearbyAreas` | Modakkurichi listed under Gobi. Mohanur Road and Velur under Komarapalayam. "Germalam", "Kuttagam" under Sathyamangalam | Local readers will spot these | P1 | Owner to supply the real nearby areas per town, or remove the lists |
| T19 | `app/printing-press/[location]/page.tsx` schema | Each town page declares its own LocalBusiness ("Raja Ganapathi Offset Printers — Erode") with the Bhavani address | Implies branches that do not exist | P0 | Replace with a `Service` node whose `provider` is `{"@id": ".../#localbusiness"}` and whose `areaServed` is the town |
| T20 | All 14 service pages | 275 to 370 words in the main content (calendar page 513) | Thin next to competitors that show designs and prices | P1 | Add per service: starting price or price drivers, minimum quantity, turnaround, paper options, real photos, how to send artwork |

### Titles, descriptions, headings

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T21 | `app/layout.tsx` title template | Suffix " \| Raja Ganapathi Offset \| Printing Press Bhavani Erode" adds 51 characters. Titles run 85 to 154 characters | Google truncates or rewrites every title | P1 | Template: `%s \| Raja Ganapathi Offset`. Keep titles under about 60 characters |
| T22 | `/printing-press-bhavani-erode` title | 154 characters, brand twice, "Best" | Truncated, spam-like | P1 | "About Our Offset Press in Bhavani, Since 1997" |
| T23 | All pages | Descriptions run 197 to 318 characters. Service descriptions are built by joining strings and repeat the service name | Truncated in results | P1 | Hand-write 140 to 155 characters per page: what, where, one proof, phone |
| T24 | `/` H1 | "Print that speaks. Quality that lasts." | The main heading names no service or place | P1 | Keep the line as a visual headline. Make the H1 "Offset printing press in Bhavani, Erode" (the hero is under redesign, so handle it there) |
| T25 | `/services`, `/printing-press` H1 | "Everything we print, under one roof." and "A printing press close to you." | Same issue | P2 | "Printing services in Bhavani and Erode"; "Areas we deliver to" |
| T26 | `app/layout.tsx` `keywords` | About 50 meta keywords | Ignored by Google. Shows the keyword list to competitors | P3 | Remove |

### Structured data

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T27 | `lib/structured-data.ts` `image` | `/images/workspace/press-1.jpg` is a broken 2-byte file | Invalid image in business schema | P1 | Replace with a real photo of the press floor |
| T28 | `lib/structured-data.ts` `sameAs`; Twitter handles in `app/layout.tsx` | Facebook, Instagram, and `@rajaganapathioffset` are unverified. Both URLs answered 200, which those sites do for any path | Possibly points at pages that are not the business | P1 | Owner to confirm each profile. Remove any that do not exist. Add the Google Maps and Justdial URLs |
| T29 | `app/services/[service]/page.tsx` | `provider` is an inline LocalBusiness with no `@id` and a plain-text address | Creates an extra anonymous business entity | P2 | `provider: {"@id": ".../#localbusiness"}` |
| T30 | FAQ markup on service, town, and home pages | Valid and matches visible content | No rich result expected. Google limits FAQ results to government and health sites. Harmless | P3 | Keep |
| T31 | `app/manifest.ts` | Icons `/icon.png` and `/apple-icon.png` return 404 on live. `/apple-icon` works | Broken install icons | P3 | Use the paths Next generates |

### Images, performance, housekeeping

| # | URL or file | Problem | Impact | Priority | Fix |
|---|---|---|---|---|---|
| T32 | `lib/services-data.ts` `IMG`, `components/WhyChooseUs.tsx`, `lib/locations-data.ts` | 12 Unsplash stock photos used as service proof. 3 to 6 per service page. Six services use a stock hero | No image-search value. Alt text describes work that is not in the picture | P1 | Photograph real jobs on a phone in daylight. Replace stock, starting with bill books, stationery, textile books, jamakkalam |
| T33 | All images | Every image has alt text. Stock alts claim "printed in Bhavani" | Inaccurate alt text | P1 | Fixed by T32 |
| T34 | Homepage | 209 KB of HTML, 49 images, 14 scripts, a three.js scene, animation on every section, smooth-scroll library | Likely slow on mid-range phones. **Estimate**, no lab data | P1 | Run PageSpeed Insights on mobile. Aim for LCP under 2.5 s and INP under 200 ms. Fix what it reports |
| T35 | `app/layout.tsx` | Preconnects to `fonts.googleapis.com` and `fonts.gstatic.com`, but the font is self-hosted | Wasted connections | P3 | Remove |
| T36 | `app/services  let` | Stray scratch file in `app/` | Clutter | P3 | Delete |
| T37 | `components/contact-form.tsx` | Unused. Shows "Message Sent!" without sending anything | A trap if someone wires it in | P3 | Delete, or build a real form |
| T38 | `public/.next/trace` | Build trace file served publicly at `/.next/trace` | Leaks build details | P2 | Delete from `public/` |
| T39 | `components/Header.tsx` `navItems` | Bare `#fragment` links | Dead menu off the homepage | P1 | Use `/#services` and so on, or link to real pages |
| T40 | Live HTML | No Analytics, no Search Console tag | Nothing can be measured | P0 | Set `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GOOGLE_VERIFICATION` in Vercel. Submit the sitemap |

### Rewritten titles (implementation-ready, to review)

| URL | Proposed title | Characters |
|---|---|---|
| `/` | Offset Printing Press in Bhavani, Erode \| Raja Ganapathi Offset | 62 |
| `/services` | Printing Services in Bhavani & Erode \| Raja Ganapathi Offset | 59 |
| `/services/wedding-invitations` | Wedding Card Printing in Bhavani & Erode \| Raja Ganapathi Offset | 63 |
| `/services/visiting-cards` | Visiting Card Printing, Digital & PVC \| Raja Ganapathi Offset | 60 |
| `/services/calendar-printing` | Calendar Printing: Daily & Monthly \| Raja Ganapathi Offset | 57 |
| `/services/sticker-labels` | Sticker & Label Printing, Die-Cut \| Raja Ganapathi Offset | 56 |
| `/services/stationery-printing` | Bill Book Printing in Bhavani & Erode \| Raja Ganapathi Offset | 60 |
| `/services/business-stationery` | Letterhead & Envelope Printing \| Raja Ganapathi Offset | 53 |
| `/services/promotional-materials` | Notice, Pamphlet & Poster Printing \| Raja Ganapathi Offset | 57 |
| `/services/educational-materials` | School Diary & Educational Printing \| Raja Ganapathi Offset | 58 |
| `/services/multicolour-offset-printing` | Multicolour Offset Printing, Erode \| Raja Ganapathi Offset | 57 |
| `/printing-press/erode` | Printing for Erode, Delivered from Bhavani \| Raja Ganapathi Offset | 65 |
| `/printing-press-bhavani-erode` | About Our Offset Press in Bhavani, Since 1997 \| Raja Ganapathi Offset | 68 |

---

## 6. Current strengths and weaknesses

**Strengths**

- First in the Google map results for "printing press in bhavani erode", with a 5.0 rating. **Verified**
- Brand search is clean: site first, Justdial second, knowledge panel with photos and reviews. **Verified**
- Page-one organic positions for wedding cards (Bhavani and Erode), visiting cards (Erode), bill books (Erode), stickers (Erode, via a retired page), and Komarapalayam. **Verified, one snapshot**
- Sound technical base: static pages, clean canonicals, working redirects, valid sitemap and robots, breadcrumbs, alt text on every image.
- Real first-party material that competitors lack: 17 calendar designs, ceremony invitations, product labels, a Tamil poster.
- 29 years in one location. Tamil typesetting. A genuine local angle in jamakkalam and textile work.
- Justdial lists the business first under "Popular Wedding Card Printers in Bhavani". **Verified**

**Weaknesses**

- Production is months behind the repo and advertises retired services.
- Invented ratings and counts, in visible copy and in schema.
- Only 6 Google reviews. Erode competitors show 37 to 3,300.
- Name and hours differ across Google, the site, and Justdial.
- Three pages competing for the head term. Six near-identical town pages.
- Thin service pages. Stock photos presented as the press's own work.
- No prices, minimum quantities, or turnaround times, which is what "People also ask" boxes show buyers want.
- No measurement.
- Weak mobile enquiry path.
- Outside Bhavani the business does not appear in map results. That is expected for a shop about 15 km from Erode and cannot be fixed with pages.

---

## 7. Keyword research

Demand is an **estimate** (High, Medium, Low) with no volume data behind it. "Seen in results" means **verified** on 15 Nov 2026.

### 7a. Brand and core

| Keyword | Type | Intent | Demand | Target page | Seen in results |
|---|---|---|---|---|---|
| raja ganapathi offset / rajaganapathi press bhavani | Brand | Navigational | Low, converts best | `/` | Site 1st, Justdial 2nd |
| printing press bhavani / printing press in bhavani | Primary, local | Commercial | High for the town | `/` | Map 1st. Organic: Justdial 1st, site 2nd |
| offset printing bhavani / offset press bhavani | Primary | Commercial | Medium | `/services/multicolour-offset-printing` | Not checked |
| printing press near me / offset printing near me | Near-me | Transactional | High, decided by map results | Google profile | Depends on searcher location |
| printing press erode / offset printing press erode | Regional | Commercial | High | `/printing-press/erode` and the offset page | Gobi page 5th organic. Wrong page |
| printing press near bhavani bus stand | Long-tail local | Transactional | Low | `/` contact section | Not checked |
| best printing press in bhavani | Comparative | Commercial | Low to Medium | Do not target with "best". Earn it with reviews | Justdial titles use "Best" |
| பவானி அச்சகம் / ஆஃப்செட் பிரிண்டிங் பவானி | Tamil | Commercial | Low, uncontested | `/ta` | Not checked |
| bavani / bhawani printing press | Spelling variants | Commercial | Low | `/`. Google handles variants. Do not add misspellings to copy | Not checked |

### 7b. By service

| Service | Primary | Secondary | Long-tail and transactional | Questions | Tamil and variants | Target page |
|---|---|---|---|---|---|---|
| Wedding invitations | wedding card printing bhavani; wedding card printing erode | marriage invitation printing; wedding invitation printers erode | tamil wedding card printing with price; wedding card printing near me; wedding card shop bhavani | How much does a wedding card cost? Where can I print invitation cards in Erode? (both shown by Google) | திருமண அழைப்பிதழ்; கல்யாண பத்திரிக்கை; kalyana pathirikai; thirumana azhaippithal; "marriage card" | `/services/wedding-invitations` |
| Ceremony invitations | function invitation printing | ear piercing invitation; puberty function invitation | manjal neerattu vizha invitation printing; kathani vizha card erode | What to write on a kathani vizha invitation? | காதணி விழா அழைப்பிதழ்; மஞ்சள் நீராட்டு விழா அழைப்பிதழ்; புதுமனை புகுவிழா அழைப்பிதழ் | New page (section 10) |
| Visiting cards | visiting card printing erode; visiting card printing bhavani | business card printing; pvc visiting card | pvc visiting card price; visiting card 100 nos price; same day visiting card | What is a PVC visiting card? Minimum quantity? | விசிட்டிங் கார்டு; "business card" | `/services/visiting-cards` |
| Calendars | calendar printing erode; calendar printing bhavani | daily calendar printing; monthly calendar printing; tamil calendar printing | daily sheet calendar with shop name; 2027 calendar printing minimum quantity; calendar printing price | How much to print 500 calendars? (shown by Google) | காலண்டர் அச்சு; தினசரி காலண்டர்; நாள்காட்டி; misspelling "calender" | `/services/calendar-printing` |
| Sticker labels | sticker printing erode; label printing erode | die cut stickers; product label printing | waterproof sticker for oil bottle; food label printing with fssai; custom shape sticker | How much to print 100 stickers? (shown by Google) | ஸ்டிக்கர் பிரிண்டிங்; லேபிள் | `/services/sticker-labels` |
| Bill books | bill book printing erode; bill book printing bhavani | invoice book; receipt book printing | gst bill book printing; ncr carbonless bill book; duplicate bill book price | Do bill books need numbering? | பில் புக் | `/services/stationery-printing` |
| Letterheads | letterhead printing erode | letter pad printing; envelope printing | letter pad 1000 nos price; company letterhead with logo | What paper for a letterhead? | லெட்டர் பேட்; "letter pad" is the common local term | `/services/business-stationery` |
| Notices and posters | notice printing bhavani; pamphlet printing erode | poster printing; handbill; flyer | bit notice printing price; 1000 notice printing cost; shop opening notice | How fast can notices be printed? | நோட்டீஸ்; misspelling "pamplet" | `/services/promotional-materials` |
| Brochures | brochure printing erode | catalogue printing; company profile printing | tri-fold brochure printing price; product catalogue printing | Saddle stitch or perfect binding? | "catalog" and "catalogue" | `/services/brochures` |
| Books | book printing erode | souvenir printing; magazine printing | short run book printing tamil nadu; temple book printing | Minimum copies for a book? | புத்தக அச்சு | `/services/book-printing` |
| School printing | school diary printing erode | question paper printing; progress card printing | school diary with logo; school magazine printing | When to order school diaries? | பள்ளி டைரி | `/services/educational-materials` |
| Bags | cloth bag printing erode | cotton bag printing; thamboolam bag printing | wedding return gift bag with names; jute bag printing bulk | Minimum order for printed bags? | மஞ்சப்பை; தாம்பூல பை; "katta pai" | `/services/bag-printing` |
| Offset printing | multicolour offset printing erode | 4 colour offset; bulk printing | offset printing price per 1000; offset vs digital | Minimum quantity for offset? | "multicolor" and "multicolour"; மல்டிகலர் ஆஃப்செட் | `/services/multicolour-offset-printing` |
| Textile | textile sample book printing | shade card printing; hang tag printing | fabric swatch book maker erode; shade card for powerloom | How are swatch books bound? | "sample book" | `/services/textile-sample-books` |
| Jamakkalam | bhavani jamakkalam brochure | handloom catalogue printing | Very specific | None found | பவானி ஜமக்காளம் | `/services/bhavani-jamakkalam-brochures` |

### 7c. Place-name variants to know

Google generally treats these as the same. Use the first form in copy and do not stuff the others.

- Bhavani (also Bavani, Bhawani). "Bhavani Printers" is also a business name in Coimbatore, Tumkur, Khammam, and Jammu, which pollutes results for "printing press bhavani" when Google does not know the searcher is nearby. **Verified**
- Komarapalayam (officially Kumarapalayam). Namakkal district.
- Gobichettipalayam (Gobi). Sathyamangalam (Sathy).

---

## 8. Competitor comparison

All ratings and review counts are **verified** as shown in Google results on 15 Nov 2026. Strengths and weaknesses are judged from the listings, not from a crawl of their sites.

### 8a. Who ranks, by search

| Search | Map results | Organic results, in order | This site |
|---|---|---|---|
| printing press in bhavani erode | **Raja Ganapathi Press 5.0 (6)**; JD Printer & Photo Frame 4.8 (13); Arul Press 5.0 (3) | Justdial; **this site (home)**; Justdial; Sulekha; Justdial; **this site (Bhavani page)**; Justdial; Massclick; magicpin | Map 1st. Organic 2nd and 6th |
| printing press bhavani (Google assumed Coimbatore) | Coimbatore shops | Justdial ×4; tnsearch.in; Instagram; IndiaMART | Absent |
| wedding card printing bhavani | Coimbatore shops | Justdial; **this site**; Justdial; **this site (/services)**; Justdial; Sulekha; Aajjo | 2nd and 4th |
| offset printing press erode | Titaanic Printers 4.7 (3.3K); Bharath Press 4.6 (37); SPY Printers 4.2 (137) | Justdial; srivarioffset.com; agaramprinters.com; erode.idbf.in; **this site (Gobi page)**; UseItYellowPages; Justdial | 5th, wrong page |
| wedding card printing erode | Lovely Cards 4.5 (302); Sri Sumangali Cards 4.8 (504); Dharani Cards 4.6 (161) | Instagram; Justdial; IndiaMART; rayoninvitations.com; **this site**; Justdial; WedMeGood | 5th |
| visiting card printing erode | Titaanic; SPY; Yes Printings 4.7 (150) | Justdial; **this site**; IndiaMART; Justdial; Instagram; IndiaMART; theprintink.in; fratteprint.com | 2nd |
| calendar printing erode | SPY; Shridhev Printers 4.9 (28); Yes Printings | Justdial; IndiaMART; Justdial; balajigrapics.com; gravitfystudio.com; Instagram; IndiaMART; Facebook | Absent (page is 404) |
| sticker label printing erode | SSS Stickers & Graphics 5.0 (77); Shridhev; Yes Printings | Justdial; IndiaMART; **this site (retired packaging page)**; Justdial; theprintink.in; Justdial; IndiaMART; pmlabels.com | 3rd, on a page due to be redirected |
| bill book printing erode | Kalaikkathir Press 4.9 (72); PKM Printers 4.7 (258); SPY | Justdial; IndiaMART; Justdial; **this site**; titaanicprinters.com; coimbatoreoffsetprinting.com; Justdial; agaramprinters.com | 4th |
| printing press komarapalayam | Thirupaty Designerrz 4.3 (52); Adhiban Hi-Speed Xerox 5.0 (34); SJ Printers 5.0 (10) | Justdial; **this site**; Justdial; thirupatydesigners.com; Justdial; idbf.in; Justdial; Facebook; **this site (hub)** | 2nd and 9th |

### 8b. Competitor profiles

| Competitor | Where | Why they rank | Weakness | Opening for this press |
|---|---|---|---|---|
| Titaanic Printers | Erode | 3,300 Google reviews. Own site with a page per product. In the map results for several services | Generalist city shop. Not in Bhavani | Do not chase them in Erode's map. Compete on specialist pages and on Bhavani and the towns north of Erode |
| Yes Printings, SPY Printers, Shridhev Printers | Erode | Central locations, 28 to 150 reviews, long hours | Digital and flex focus | Offset quality, bulk runs, Tamil design, calendars |
| Lovely Cards, Sri Sumangali Cards, Dharani Cards | Erode | Wedding-only shops with 160 to 500 reviews, active Instagram | Card retailers. Printing is not their story | "Designed and printed under one roof", real samples, ceremony cards |
| Sri Vari Offset, Agaram Printers | Erode | Own sites titled "Offset Printers in Erode" | Not assessed beyond listings | A stronger, specific offset page with machine and capacity facts |
| Balaji Grapics, Gravitfy Studio | Erode area | Calendar pages with 44 designs, stated minimums, prices "from ₹69" | Not assessed | Publish the real catalogue with design numbers, minimum quantity, and deadline |
| Thirupaty Designerrz | Komarapalayam | Local address, 52 reviews, own site | Design shop | Textile trade work: sample books, shade cards, labels |
| JD Printer & Photo Frame, Arul Press, Sree Murugan Offset Printers (Justdial, est. 1993), Sree Vani Achagam, Jai Designerss, Dream Designs | Bhavani | Proximity. Low review counts (3 to 13) | No visible websites in results | A few dozen genuine reviews would secure the lead in Bhavani |

### 8c. Keyword gap

| Gap | Evidence | Label |
|---|---|---|
| Calendar printing | Page is 404 on live. Competitors rank with design catalogues and prices | Verified |
| Price and cost searches | Google's "People also ask" shows cost questions for wedding cards, calendars, and stickers. This site states one price on one page | Verified |
| Ceremony invitations | The press has real work photos but no text targets these. No competitor page seen for them | Verified for this site; competitors an estimate |
| Tamil-script searches | One 197-word Tamil page that nothing links to | Verified |
| Offset printing Erode | A town page ranks instead of the service page | Verified |
| Local terms: "letter pad", "notice", "bill book" | Page names use "Business Stationery" and "Promotional Materials" | Verified |
| Images | Directories and Instagram fill image results. Stock photos cannot rank as this press's work | Verified |

---

## 9. Justdial and directory analysis

**Verified**

- Justdial holds the first organic result on 9 of the 10 non-brand searches checked, often with two or three more listings on the page.
- The press has a Justdial listing, "Raja Ganapathi Offset Printers, Palanipuram, Bhavani", rated 5.0 from 7. It ranks second for the brand name and is named first on Justdial's "Top Wedding Card Printers in Bhavani" page.
- Justdial's hours for the press are 9:30 am to 2:30 pm and 4:30 pm to 9:30 pm. The site says 9:30 am to 2 pm and 4 pm to 8 pm.
- IndiaMART ranks for product-style searches (visiting cards, calendars, labels, bill books) with prices in the snippet. I found no IndiaMART listing for this press.
- Sulekha ranks for "printing services in Bhavani". magicpin has a page for the press that repeats the stale description, including packaging.
- Smaller directories on page one: tnsearch.in, Massclick, erode.idbf.in, UseItYellowPages, Aajjo, WedMeGood.

**Why directories rank (estimate):** very strong domains, a page for every category and locality, review counts, constant updates.

**Their weaknesses (verified from snippets):** Bhavani and Erode category pages list businesses from Coimbatore, Bangalore, and national chains. They show no real samples, and they sell the enquiry to several printers at once.

**Realistic position**

- Outranking Justdial for broad category terms is unlikely and not needed. The site already sits directly below it on several searches.
- The map results appear above Justdial. For Bhavani searches the press is already first there. Protect that with reviews.
- Treat Justdial as a channel. The free listing is already well placed. Correct its hours, add real photos and the full service list.
- Win the click below Justdial with what a directory cannot show: a price, a minimum quantity, a turnaround time, and a photo of the actual job, visible in the title and description.

---

## 10. Untapped commercial keywords and recommended new pages

None of these is a town-swap page. Each covers a distinct product or need. Build a page only after the owner confirms the service.

### Untapped commercial opportunities

| Opportunity | Why | Label |
|---|---|---|
| Calendar orders with a shop name (2027) | In season now. Real catalogue exists. Page not live | Verified gap |
| Ceremony invitations | Real photos exist. Little competition seen | Estimate |
| Price-led searches | Buyers ask cost first | Verified via Google's question boxes |
| Textile trade print (shade cards, sample books, hang tags) | High order value, few suppliers publish pages | Estimate |
| Food product labels with FSSAI details | Local food makers. The press has real label work | Estimate |
| GST bill books | Already 4th for the Erode term | Verified position |
| Tamil-language pages | Uncontested | Estimate |

### Recommended pages

**1. Ceremony invitations**

- URL: `/services/ceremony-invitations`
- Target: "function invitation printing"; "kathani vizha invitation"; "manjal neerattu vizha invitation"
- Intent: Commercial, family buyers
- Outline: which ceremonies are covered; real samples by ceremony; Tamil wording help; paper and sizes; quantity and price guide; lead time; how to order
- Internal links: from wedding invitations, `/services`, `/ta`; to bag printing (return gift bags) and sticker labels
- Conversion goal: phone call or shop visit to see samples
- Owner to confirm: which ceremonies

**2. Calendar design catalogue**

- URL: `/calendar-designs` (permanent URL, refreshed each year)
- Target: "calendar designs with shop name"; "daily calendar designs 2027"; "தினசரி காலண்டர்"
- Intent: Transactional, businesses ordering branded calendars
- Outline: designs grouped as daily, monthly, deity, advertisement, each with its design number; sizes; minimum quantity; order deadline; how to send a logo and address
- Internal links: from `/services/calendar-printing`, the homepage calendar section, and a Google profile post; to the calendar service page
- Conversion goal: a call quoting a design number
- Note: the homepage already has a calendar section. This page becomes its indexable home

**3. Price guide**

- URL: `/printing-prices`
- Target: "visiting card printing price"; "wedding card printing cost"; "bill book printing price"
- Intent: Commercial research
- Outline: starting prices or ranges for the main products; what changes the price (quantity, paper, colours, finishing); minimum quantities; typical turnaround; how to get an exact quote
- Internal links: from every service page; to each service page
- Conversion goal: call for a quote
- Owner to confirm: willingness to publish "from" prices. Without real numbers, do not build this page

**4. Printing for textile businesses**

- URL: `/industries/textile-printing`
- Target: "textile sample book printing"; "shade card printing"; "hang tag printing erode"
- Intent: Commercial, trade buyers
- Outline: what textile firms order; sample books; shade cards; hang tags and labels; jamakkalam catalogues; quantities and repeat orders; delivery to Komarapalayam and Erode
- Internal links: from the textile, jamakkalam, sticker, and Komarapalayam pages; to those pages
- Conversion goal: call or email with specifications
- Owner to confirm: real textile clients and photographed jobs

**5. About and visit (reworked, not new)**

- URL: `/printing-press-bhavani-erode`, kept because it is indexed and ranking
- Target: brand, plus "printing press in Bhavani" as a supporting page to the homepage
- Intent: Trust and navigation
- Outline: history since 1997; the people; the machines; real photos of the floor; how a job runs; map, hours, landmark, parking; a link to Google reviews
- Internal links: from the header ("About") and footer; to services and contact
- Conversion goal: directions tap or call

**6. Contact**

- URL: `/contact`
- Target: "raja ganapathi offset contact number"; "printing press near bhavani bus stand"
- Intent: Transactional
- Outline: phone; email; address with landmark; hours including the midday break; map; directions from the bus stand; how to send artwork
- Internal links: from the header on every page
- Conversion goal: call, directions, email with artwork

**7. Our work**

- URL: `/our-work`
- Target: image search and trust, not a head term
- Intent: Evaluation
- Outline: real jobs by type, each with a caption naming the product, paper, and quantity
- Internal links: from every service page; each item back to its service
- Conversion goal: "I want something like this" calls
- Depends on: real photography

**8. Tamil service pages (phase 3)**

- URLs: `/ta/wedding-invitations`, `/ta/calendar-printing`
- Target: திருமண அழைப்பிதழ் அச்சகம்; காலண்டர் அச்சு
- Intent: Commercial
- Outline: written in Tamil from scratch, not machine-translated; same facts as the English pages
- Internal links: hreflang pairs with the English pages; linked from `/ta`
- Conversion goal: phone call
- Owner to confirm: someone to write or check the Tamil

**Pages not to build:** more town pages; any packaging, flex, banner, or foil page; "best printing press in {town}" pages; separate pages for spelling variants.

---

## 11. Local SEO and Google Maps

### Google Business Profile, as seen today (verified)

| Field | Current | Note |
|---|---|---|
| Name | Raja Ganapathi Press | Differs from the site and Justdial |
| Rating | 5.0 from 6 reviews | Low count |
| Category shown | Print shop | Description also mentions offset printer and screen printer |
| Address | Palani Andavar Kovil Street, Palanipuram, Bhavani 638301 | No door number shown. The site says "24" |
| Phone | 099944 66277 | Matches |
| Products | Invitations, Offset Printing | Only two |
| Ranking | 1st in map results for "printing press in bhavani erode" | Not in map results for Erode searches |

### Actions

1. **Settle one business name. (Owner to confirm)** Google requires the profile name to match the real-world name on the signboard. If the board says "Raja Ganapathi Offset Printers", change the profile and Justdial to that and use it as the legal name on the site. If it says "Raja Ganapathi Press", change the site. Do not add keywords or town names to the profile name. That breaks Google's rules.
2. **One address, phone, and hours block everywhere.** Proposed format: *Raja Ganapathi Offset Printers, 24 Palani Andavar Kovil Street (opposite CSI School), Bhavani, Erode district, Tamil Nadu 638301. +91 99944 66277.* Confirm real hours, then correct whichever of the site, Google, or Justdial is wrong.
3. **Reviews, real ones only.** Ask each customer at pickup. Put a QR code linking to the review form on the counter and on bills. Reply to every review. Do not offer discounts for reviews, do not ask only happy customers, and do not post reviews on a customer's behalf. An estimate of a sensible pace is a few each week, which would pass every Bhavani competitor within about two months.
4. **Complete the profile.** Add each real service with a photo and a short description under Products. Add the door number. Review the secondary categories in the dashboard. Leave the primary category alone for now, since it is ranking first.
5. **Photos.** Upload real photos regularly: shopfront, signboard, press, finished jobs. The site needs the same photos.
6. **Posts.** One a week. Start with 2027 calendar orders.
7. **Track it.** Add UTM tags to the profile's website link so Analytics separates Maps visits.
8. **Citations to fix or create.** Justdial (fix hours, add photos), magicpin (claim, correct the description), Sulekha, IndiaMART (owner to confirm whether a listing exists), TradeIndia, Bing Places, Apple Business Connect, Mappls, plus the directories already on page one: tnsearch.in, erode.idbf.in, Massclick. Use the identical name, address, and phone on each.
9. **Social profiles.** Confirm the Facebook and Instagram pages in the schema exist. If not, create them or remove the links. Instagram ranks on page one for wedding card and calendar searches in Erode.
10. **Local links, earned through real relationships.** Ask for a credit or link from schools, temples, associations, and jamakkalam societies the press prints for. Join the local printers' or traders' association listing if there is one.
11. **Town pages.** Keep them honest: "we deliver to" pages for one press in Bhavani. No separate business schema per town (T19). No addresses in towns where there is no shop.

**What local SEO cannot do:** put a Bhavani shop into the map results for searches made in Erode city. Google weighs distance heavily. For Erode, organic rankings are the route, and several are already on page one.

---

## 12. Conversion review

WhatsApp was removed on purpose. Nothing below suggests bringing it back.

| Area | Finding | Label | Recommendation |
|---|---|---|---|
| Hero call button | The homepage hero offers "services" and "directions" but no call link | Verified | Add a call button (in the hero redesign) |
| Mobile call access | The header phone link shows on desktop only. On mobile it is inside the menu | Verified | Add a fixed bottom bar on mobile: Call, Directions |
| Service and town pages | Each has a call button in the hero and at the end | Verified | Good. Add one mid-page |
| Enquiry route | Call, email, or visit. No form. The copy says "Talk to a printer, not a form" | Verified | Acceptable for a walk-in trade. Many print buyers need to send artwork, so add a clear "email your design" link per service with a pre-filled subject |
| Contact page | None. Contact lives at the bottom of the homepage | Verified | Build `/contact` (page 6) |
| Hours | Contact section says "9:30 AM – 8 PM, Mon–Sat" and hides the 2 pm to 4 pm break shown elsewhere | Verified | Show both sessions wherever hours appear |
| Prices | One "From ₹399" tag. Nothing else | Verified | Add starting prices or price drivers, minimum quantity, and turnaround to each service |
| Trust signals | Invented rating and counts | Verified | Replace with the real Google rating linked to the profile, real photos, years in business, named customers only with permission |
| Proof | Stock photos under "From our press floor" | Verified | Real photos |
| Delivery promises | "Same-day pickup and next-day delivery across Erode", "same-day visiting cards" | Owner to confirm | Keep only what is reliably delivered |
| Tracking | No Analytics. No event on call or directions taps | Verified | Add Analytics and track `tel:`, `mailto:`, and directions clicks |
| Language | Tamil speakers cannot reach `/ta` | Verified | Fix the toggle (T9) |

---

## 13. Thirty-day action plan

Effort: S is under 2 hours, M is half a day to a day, L is several days.

| # | Task | URL or file | Reason | Priority | Expected impact | Effort | Steps | Success metric |
|---|---|---|---|---|---|---|---|---|
| 1 | Deploy the corrected site | Whole site | Live site advertises retired services. Calendar and sticker pages are 404 | P0 | High | S to M | Merge to the deployed branch; build; deploy; check the three packaging URLs return 301 and the two new pages return 200 | Live pages match the repo. No packaging or foil text on live |
| 2 | Turn on measurement | Vercel env; Search Console | Nothing is measured | P0 | High (enables everything else) | S | Set `NEXT_PUBLIC_GA_ID` and `NEXT_PUBLIC_GOOGLE_VERIFICATION`; verify the property; submit the sitemap; request indexing for the calendar and sticker pages | Search Console shows data. Sitemap read without errors |
| 3 | Remove invented ratings from schema | `lib/structured-data.ts`, `lib/authority-page-schema.ts` | Policy risk, no upside | P0 | Medium (risk removed) | S | Delete `aggregateRating` and `review`; remove the duplicate LocalBusiness node; test in Google's Rich Results Test | No review markup. One LocalBusiness node per page |
| 4 | Remove unsupported claims from copy | `components/WhyChooseUs.tsx`, `components/Hero.tsx` stats, `/printing-press-bhavani-erode` | Contradicted by the real profile | P0 | Medium | S | Replace with owner-confirmed facts and a link to Google reviews | No claim on the site that the owner cannot evidence |
| 5 | Fix town-page schema, titles, and geography | `app/printing-press/[location]/page.tsx`, `lib/locations-data.ts` | Implied branches. "Komarapalayam, Erode". Wrong nearby areas | P0 / P1 | Medium | M | Swap LocalBusiness for Service; new title pattern; correct or remove nearby areas | Titles accurate. Schema shows one business |
| 6 | Align name, address, phone, hours | Google profile, Justdial, magicpin, site config | Three names, two sets of hours | P0 | High for map results | S | Owner picks the signboard name and real hours; update all four | Identical details on all four |
| 7 | Start a review routine | Google profile | 6 reviews against 13 to 3,300 | P0 | High | S, ongoing | Print a QR card; ask at every pickup; reply to all | Steady growth in genuine reviews. Rating shown in map results |
| 8 | Shorten titles and descriptions | `app/layout.tsx` template; each page's metadata; `lib/services-data.ts` | 85 to 154 character titles | P1 | Medium (click-through) | M | Change the template; apply the table in section 5; write descriptions | All titles under about 65 characters, descriptions under 160 |
| 9 | Resolve the three-way overlap | `/`, `/printing-press-bhavani-erode`, `/printing-press`, footer links | Competing pages | P1 | Medium | M to L | Rewrite the Bhavani page as About; rename the hub; point footer "printing press bhavani" links at `/` | One URL per query in Search Console after re-crawl |
| 10 | Fix navigation and the Tamil link | `components/Header.tsx`, `components/language-toggle.tsx` | Dead menu off the homepage. Orphan Tamil page | P1 | Medium | S | `/#section` links or real pages; toggle becomes a link; absolute Tamil title | Menu works on every page. `/ta` has inbound links |
| 11 | Add mobile call bar and hero call button | Header or layout; hero (coordinate with the redesign) | Call is hidden on mobile | P1 | High (calls) | S | Fixed bottom bar with Call and Directions; track taps | Call-tap events recorded and rising |
| 12 | Photograph real work | `public/images/` | Stock photos as proof | P1 | High over time | M | Shoot 5 to 8 jobs per service, plus shopfront and press; replace Unsplash; fix the broken `press-1.jpg` | No Unsplash images on service pages |
| 13 | Strengthen the calendar page for the season | `/services/calendar-printing` | Peak demand now | P1 | High, short-term | M | Add design numbers, minimum quantity, deadline, starting price; publish a Google profile post | Impressions for calendar searches in Search Console |
| 14 | Retitle vague services | `lib/services-data.ts` (names, not slugs) | Names match no searches | P1 | Medium | S | "Notice, Pamphlet & Poster Printing"; "School Diary & Educational Printing"; "Bill Book Printing"; add "letter pad" | Impressions for those terms |
| 15 | Complete the Google profile | Google profile | Two products listed | P1 | Medium | S | Add all confirmed services with photos; door number; UTM link; weekly posts | Profile complete. Views, calls, and direction requests in profile insights |
| 16 | Housekeeping | `app/services  let`, `components/contact-form.tsx`, `public/.next/trace`, meta keywords, unused preconnects, manifest icons | Clutter and one public leak | P3 | Low | S | Delete or correct each | Files gone. Manifest icons load |
| 17 | Owner answers the open questions | Section 15 | Several fixes depend on them | P0 | Unblocks the rest | S | One call or sitting | All questions answered |

Suggested order: week 1, tasks 1 to 7 and 17. Week 2, tasks 8, 10, 11, 14, 16. Week 3, tasks 9, 12, 13. Week 4, task 15, then re-check live results and Search Console.

---

## 14. Later phases, in outline

**Days 31 to 60: depth on the pages that already rank**

- Expand the five strongest service pages (wedding, visiting cards, calendar, stickers, bill books) with prices or price drivers, minimum quantity, turnaround, paper options, and real photos.
- Build `/contact` and `/our-work`.
- Build the ceremony invitations page once confirmed.
- Enrich the Erode and Komarapalayam pages with real, town-specific proof.
- Run PageSpeed Insights on mobile and fix what it reports.
- Complete the citation list.
- First Search Console review: which queries and pages actually get impressions.

**Days 61 to 90: expansion based on data**

- Build `/calendar-designs`, `/printing-prices` (if prices are agreed), and the textile industry page.
- Decide the four weaker town pages: enrich with real proof or merge into the hub with redirects.
- Expand `/ta` and add the first Tamil service pages.
- Review progress on reviews and map visibility.
- Use Search Console queries to choose the next pages, in place of estimates.

**Months 4 to 6: authority and seasons**

- Helpful guides tied to real questions: wedding card wording in Tamil, paper thickness explained, offset versus digital, calendar ordering deadlines.
- Seasonal preparation: school printing before April, wedding seasons, calendars from September.
- Local links through customers and associations.
- Remaining service pages brought to the same depth.
- Quarterly re-audit.

**What to measure:** non-brand clicks and impressions in Search Console; calls, direction requests, and views in the Google profile; Google review count and rating; call and directions taps on the site.

---

## 15. Questions for the owner

1. What name is on the signboard and the GST registration?
2. What are the real opening hours, including the midday break?
3. Are the five named reviews in `lib/seo-config.ts` real customers who agreed to be quoted?
4. Are there records behind "50K+ projects" or "10,000+ clients"? Any certification behind "ISO-standard"?
5. Which of these are actually offered: ID cards, certificates, paper bags, menu cards, screen printing, obituary cards, which ceremony invitations?
6. Is bag printing done in-house?
7. Which delivery promises are reliable: same-day visiting cards, next-day delivery to Erode, delivery to each listed town?
8. What is "Moorodu"? Please confirm the place and spelling.
9. Is "From ₹399" for visiting cards current? Are you willing to publish starting prices for other products?
10. Do the Facebook and Instagram pages exist? Is there an IndiaMART listing?
11. Is Search Console already verified by another method? Who has access to the Google Business Profile?
12. Which branch does Vercel deploy from?
13. What machines are on the floor (make, colours, sheet size)? The repo removed the Heidelberg mention.

---

## 16. Evidence files and method

- Crawl of 28 URLs on live and local, extracting title, description, canonical, hreflang, headings, images, structured data, word counts, and link counts. Script and output are in the session scratchpad, not the repo.
- Status-code and redirect checks with curl against the live domain.
- Google India results read in a browser on 15 Nov 2026 for 12 queries. One further query (`site:`) was blocked by Google's rate limit, so the indexed page count is unknown.
- Additional web searches for directory listings (Justdial, IndiaMART, D&B, TradeIndia).
- No site code was changed. This file is the only addition.
