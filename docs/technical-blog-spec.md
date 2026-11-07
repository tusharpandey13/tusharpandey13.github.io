# Technical blog spec

How to write, draw, check and publish a technical post on this site. Distilled from the Saturn post's comment log ([feedback/saturn-post-comments.md](feedback/saturn-post-comments.md)). This spec says what to do; the log says why.

## 1. Reader and platform

- **Phone first.** Most readers are on a phone. Check every element at 390 px wide before desktop.
- No wide tables: on narrow screens use stacked cards or lists.
- Body text at least about 16 px on a phone. Tap targets at least 44 px.
- Desktop text column capped at about 44rem. Phone screenshots capped at 360 px and centred.

## 2. Voice

- Direct, short, warm, teaching, no drama (the "Dr. Robby" voice). Vary sentence and section length. It must not read like a generated text.
- Concise and high signal. Points and short lines over paragraphs. No historical context ("the first version was…"). No low-level detail.
- WIP reads as work in progress, not as a failure. Results are what the system achieved, not a status report.

## 3. Structure

- Title states the intent. Subtitle is one line naming what the thing does.
- Opening: intent in the first lines, four short lines at most.
- Define the thing early with an Input / Output / Side-effects block. "Never" rules go in one sentence, not a card.
- Put achievements high, directly after the definition or hero.
- Order sections as clusters a reader can follow: problem → what it is → what it has done → how it works → data → rules → subsystems → evolution → how it got better → where it is going → research.
- Trade-offs, limits and "what I'd do differently" merge into one "Where it is going" section: status, then next steps.
- An "Evolution" section shows easy-to-miss problems that were detected and fixed.
- Site header with a link home, a Contents list, "Back to top · All posts" at the end. Heading outline H1 > H2 > H3, content in an `<article>`.

## 4. Diagrams

- Research the form first (good system-design posts and talks). Do not copy an earlier post's style.
- Diagrams are text sources (D2 or a generator script) kept beside the post and rendered at build, so every change is a diff.
- Architecture: laid out by hand on a grid. At most about 22 boxes and 14 orthogonal edges. Policies go in a callout band. Show only the failure paths that matter (about three). No UML or mermaid look, no criss-cross lines. Prefer an illustrated map: few zones, icons, one numbered path with a verb on each step.
- Text fits inside boxes with padding. At least 16 px at 1200 px wide and 14 px effective on a phone. Whitespace under a quarter of the canvas.
- Every figure has a portrait variant for phones (or two stacked parts) and a landscape one. Wide screens tap through to full size; phones do not.
- Credit and link the work a design came from, in prose, the caption and the addendum.

## 5. Charts

- Find the numbers that can be shown. Measure them; do not illustrate unmeasured claims. Say plainly when something was not measured.
- Each chart carries a takeaway title, a source line, `<title>`/`<desc>` and alt text that state the numbers.
- Pass the dataviz palette validator on the page background.

## 6. Palette

- One palette per post, light, in the owner's scheme. Text accents at least 5:1. Text on a filled mark: white only where white reaches 4.5:1 on that fill, dark ink otherwise. Compute this per fill.
- **A palette request changes colours only**: never layout, spacing, borders or component shapes.
- Words match colours: if a mark is amber, every alt text, caption and annotation says "amber".

## 7. Privacy

- No PHI, real or plausible: readings, values with units, medicine names, dates of medical events, names of family, doctors or facilities.
- **No place name of any size** in text or images, including the state. Write "the family home", "far from the city".
- No hostnames, tailnet names, IPs, private repo or org names, chat ids.
- Every linked file (for example GitHub code) is audited for PHI, internal names and anchor drift before linking.
- Git history is published too: never push a commit that failed the sweep. Squash it out instead.

## 8. Images and redaction

- Screenshots: cover every personal detail with solid blocks labelled REDACTED, even when the data is synthetic.
- Strip PNG metadata (no tEXt/iTXt/eXIf chunks). Check each screenshot at full size for uncovered text.
- Share image: a PNG drawn from source (1200x630) in the post palette, with og:image (+ width, height, alt) and twitter:image.
- Re-encode large images. Lazy-load figures, and do not download hidden variants.

## 9. Links

- Inline links on every tool, service and paper that matters. Drop generic vendor links (a messaging app, a database).
- Link the code where the claim is made ("Code is public" visible without scrolling).

## 10. Research addendum

- Every paper or public work the system builds on is listed on the page itself, grouped, with DOI or URL. On phones the list is collapsed; on wide screens it is open.

## 11. Process

1. **Canvas review.** Publish drafts to the review canvas (desktop and phone copies with inline CSS). The owner comments per element. Log every comment and its revision in `docs/feedback/<post>-comments.md`.
2. **Usability review.** Run a scripted Playwright pass at phone and desktop sizes (scroll depth to the key sections, tap targets, contrast, image weight). Record fixes with ids.
3. **Privacy guard.** The assemble script fails on a denylist. Before publishing, run gitleaks (default rules and the PHI denylist), name, place, host, repo and value greps over every published file and the commits being pushed, plus PNG metadata and a visual check. Record counts only.
4. **Publish.** Signed commits. Merge to the Pages branch, wait for the build, then check the page, the share image and one figure return 200. Distil any new standing rules from the log into this spec.
