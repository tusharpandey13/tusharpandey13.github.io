# Saturn post: running feedback log

Owner comments on the draft of `blogs/saturn/`, in the order given. Kept verbatim (lightly spell-corrected) with the revision made for each. When the post is published this file is distilled into `docs/technical-blog-spec.md`: the reusable spec for technical posts on this site.

## Standing alignments (apply to every draft)

- **Phone first.** The phone is the major platform this will be read on. The phone experience must be really good. (07-Nov-2026)
- **Voice.** All prose in the character of Dr. Michael "Robby" Robinavitch from *The Pitt*: direct, short, warm, teaching, no drama. (comment 7)
- **Concise and high signal** throughout; points over prose; no historical context; no low-level detail. (comments 12, 14, 15, 27)

## Canvas round 1 (07-Nov-2026, 27 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 1 | digest image | "118/62 is PHI, should be redacted (block or blur); also the question" | Reading and question covered with labelled REDACTED blocks, even though synthetic |
| 2 | hero (prescription slip) | "only conveys a prescription, does not convey if it's good/bad/useful or not" | New hero: the empty stretch between two consult days |
| 3 | title | "better title" | Retitled; intent in the title |
| 4 | subtitle | "this line is bad" | Replaced with what the post delivers |
| 5 | opening paragraph | "too long, intent has not been established up front" | Four short lines, intent first |
| 6 | "The gap between visits" | "needs to be higher signal" | Section rewritten as one visit, in points |
| 7 | all prose | "reads like written by an AI (sentence/section lengths, cardinality, feel). Assume the character of Dr. Michael Robby from The Pitt" | Full rewrite in that voice |
| 8 | whole page | "see if more inline links can be added" | Links on every tool, service and paper named |
| 9 | non-goals paragraph | "can be in soft points" | Three short lists: in, out, never |
| 10 | "what Saturn is" paragraph | "first point where we establish what Saturn is; improve text structure, components, formatting" | Definition block with in/out/never lists |
| 11 | "The trade-offs" | "move to bottom and convert to Future scope" | Merged into Future scope |
| 12 | pipeline paragraph | "prose is harder to consume than points / short lines" | Numbered steps |
| 13 | pipeline diagram | "no need to copy the ghostlock diagram style; research how good system-design blogs show diagrams, also YouTube" | Diagrams redrawn after research; notes in design/ |
| 14 | three-repo paragraph | "too long, no super low-level details: throughout" | Three lines |
| 15 | "first version was one repo" | "no historical context: throughout" | Cut |
| 16 | three-repo figure | "colour scheme too dark and gloomy; works for cybersecurity, not this; research a good one" | Warm light palette for this post |
| 17 | "Hindi voice notes" | "graphics showing progress in accuracy for Hindi transcription, cross-ref accuracy, research runs; how we improved should be a dedicated section" | "How it got better" section with measured charts; unmeasured items stated as such |
| 18 | phone voice screenshot | "good that redaction is done but write REDACTED on it" | REDACTED labels on all covered blocks |
| 19 | loop diagram | "since Microsoft's research inspired this, should be mentioned and linked" | MAI-DxO credited and linked in prose, caption and addendum |
| 20 | whole page | "Saturn builds on a lot of public research papers; all should be mentioned in an addendum" | "Research this builds on" addendum |
| 21 | "What went wrong" | "change to Evolution of the system, highlighting easy-to-miss events that were detected and fixed" | "Evolution" section with timeline |
| 22 | results table | "feel like a status report, not results; results mean what Saturn achieved" | "What it has done" as achievements |
| 23 | results table (phone) | "tables look weird on phone" | No wide tables; stacked cards on narrow screens |
| 24 | before/after figure (phone) | "diagrams too small on phone; need zoom or restructure for vertical screens" | Portrait variants for phones; tap opens full-size |
| 25 | limitations | "make it read like a WIP, not a failed product" | "Work in progress" |
| 26 | "What I would do differently" | "add to future scope, merge points, very concise and high signal" | Merged into Future scope |
| 27 | whole page | "convert prose of the whole blog to a more concise, high-signal version" | Done throughout |

## Canvas round 2 (07-Nov-2026, 4 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 28 | in/out/never cards | "very low contrast of the cards bg" | White cards, darker border, faint shadow, title-coloured headings |
| 29 | pipeline figure | "color scheme is again bad" | All diagrams redrawn in the warm light palette (visuals agent) |
| 30 | digest image | "still not redacted" | Reading and question covered with labelled REDACTED blocks in the new image |
| 31 | whole page | "architecture diagram showing the components of a running Saturn system (not processes): actors, hosts, services, stores, policies, connections, failure paths, queues, tailscale, intuitively" | New "The parts" figure, drawn in D2 (deterministic source next to the post), landscape and stacked portrait |

Standing note from this round: diagrams as text (D2) rendered at build, so every change is a diff the owner can make.

## Canvas round 3 (07-Nov-2026, 4 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 32 | research list | "mention the full list on this page itself" | Full cited list added on the page, grouped as the design record groups them |
| 33 | phone screenshot (desktop) | "this image is too big on desktop" | Phone screenshots capped at 360 px wide and centred on wide screens |
| 34 | title | "Make it Saturn : Personal Health System for your family" | Done, including page and share titles |
| 35 | subtitle | "Mention the capabilities of Saturn beyond just data capture" | Subtitle names record, watch, review, prepare |

## Chat feedback (07-Nov-2026)

- On the first components diagram (ELK auto-layout, ~40 nodes): "this is bad and ugly". Standing rule from it: architecture diagrams are laid out by hand (explicit grid or coordinates), at most about 22 boxes and 14 orthogonal edges, box text at least 16 px at 1200 px and 14 px effective on a phone, whitespace under a quarter of the canvas; policies as a callout band, not boxes; failure paths limited to the three that matter.

## Canvas round 4 (07-Nov-2026, 3 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 36 | pipeline figure | "text overflow happening, make it more comfy" | Redraw with text fitted inside boxes with padding (visuals agent) |
| 37 | components figure | "too complex and ugly; too wide, components scattered, industrial-looking lines, humans cannot follow; looks like mermaid; need something intuitive" | Redo as an illustrated map: few zones, icons, few lines, hand-placed |
| 38 | in/out/never cards | "why is never a card? describe I/O, or input, output, side effects, like an FP function" | Cards are now Input / Output / Side effects; the three nevers are one sentence below |

## Canvas round 5 (07-Nov-2026, 6 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 39 | components figure | "still too complex, too many criss-cross lines, very UML-like, ugly; research into attractive architecture diagrams" (chat: "self debating agent") | Concept changed to an illustration; a self-debating agent researches, proposes three concepts, critiques, draws the winner, critiques at phone size |
| 40 | charts | "better plots, graphs, better looking visualizations for the whole blog; find numbers that can be visualized; this looks very bland" | New series measured (rhythm by hour, KB growth, message kinds, lag histogram, KB composition, loop buckets, cost); existing charts redone with more visual interest |
| 41 | whole page | "the whole page feels monochrome, introduce some colour" | Orange section headings with accent bars, blue links and hovercard chips, tinted Input/Output/Side-effects cards, framed figures, coloured list markers |
| 42 | whole page | "make sure linked github files don't contain PHI / internal stuff" | Every linked file audited for PHI, hostnames, private names and anchor drift |
| 43 | "What it has done" | "this is important, should be quite up" | Moved to directly after "What Saturn is" |
| 44 | "Work in progress" | "merge with future scope" | One section, "Where it is going": status list then next steps |

## Canvas round 6 (07-Nov-2026, 2 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 45 | hero (phone) | "missing pic?" | Hero is now two plain images toggled by CSS (portrait on phones) instead of a picture/source element the canvas did not render; full width on phones |
| 46 | research section (phone) | "should be more compact and collapsed by default on mobile" | Both lists inside collapsible blocks, closed on phones, open on wide screens; smaller type |

## Chat feedback (07-Nov-2026, after round 5)

- "design has degraded. i just asked to introduce a more expressive colour palette but you have changed design details. it looks worse now." Reverted the accent bars on headings, figure frames, tinted cards, coloured list markers and the chip restyle; kept only colour values (orange headings, blue links, accent banner). Standing rule: a palette request changes colours, never layout, spacing, borders or component shapes.
- "PII" on the diagram label "Family home, [place]": the state name is treated as identifying. Removed from every image and the prose. Standing rule: no place name of any size in text or images; "the family home", "far from the city".

## Canvas round 7 (07-Nov-2026, 1 comment)

| # | Element | Comment | Revision |
|---|---|---|---|
| 47 | "Who may write what" | "not related to the sections above and below it; other ordering mistakes might be there" | Reordered into clusters: problem → what it is → what it has done → how it works → where the data lives → one rule for the record → who may write what → Hindi voice notes → the loop → evolution → how it got better → where it is going → research |

## Canvas round 8 (07-Nov-2026, 2 comments)

| # | Element | Comment | Revision |
|---|---|---|---|
| 48 | subtitle | "too long, should be one line" | One line: records, watches, reviews, prepares |
| 49 | components figure | "home laptop shown as location for family site should be replaced with a server; important services are not mentioned; can the flow be improved" | Home server pictogram; services named inside each host; numbered left-to-right flow (illustration agent) |

## Usability round (07-Nov-2026)

From the Playwright usability review (details and before/after numbers: /tmp/saturn-blog/v2/usability-fixes.md).

| id | change |
|---|---|
| B-01 | Hovercards removed; the two definitions (home health log, supersede) are inline text with their links |
| B-02 | Site header with link home; Contents list of the 13 sections after the repo banner; "Back to top · All posts" at the end |
| B-03 | "What it has done" moved up to directly after the hero (screen 2.1 on a phone, was 3.8) |
| B-05 | "Self-hosted, for one family, on free tiers and a laptop." added; "Code is public" links to the repo, visible without scrolling |
| B-06 | Read time ~8 min -> ~10 min |
| B-07 | On phones a figure tap no longer opens the landscape file in a new tab |
| B-08 | Fixed with B-01: no hidden text inside the paragraphs |
| B-09 | Heading outline H1 > H2 > H3 (subtitle is a paragraph, card titles are H3); content in an article |
| B-10 | Desktop text column capped at 44rem, header aligned to it |
| B-12 | Generic vendor links dropped (Telegram, Cloudflare Worker, D1, R2, SQLite, ndjson) |
| B-13 | Repo banner arrow hidden on narrow screens |
| B-14 | Hidden hero variant no longer downloaded; phone screenshots re-encoded (voice detail 160 -> 50 KB) |
| B-15 | color-scheme light and a PNG share image (og:image) |
| B-16 | Blank space under the pipeline phone figure trimmed |
| B-17 | Research summary tap target 44 px |
| figure-13 | Components figure: two stacked portrait parts on phones, landscape on wide screens |
| palette-07-Nov | Owner Xresources scheme converted to light mode, colours only: paper #F3F6EF (color7 lightened), ink #171816 (color0), muted #646861 (color4, 5.2:1), lines #AFB5AA (color6) / #878C82 (color5); text accents darkened in hue to >= 5:1: H2 teal #007760, links blue #007197, highlights and diagram path amber #8C5B16, alert pink #AA4670 (fill #F88CB6); charts 1-6 #AB7839 #0082A9 #7FA838 #C65F89 #37BBEA #009379 (dataviz validator pass on #F3F6EF) |

## Publish pass (07-Nov-2026)

Owner: "Fix diagram and share image and do a quick run of filtering any PII and Publish."

| change |
|---|
| Diagram wording matches the colour: every alt text, title, description and in-chart note that said "orange" now says "amber" (the colour itself unchanged) |
| KB composition treemap: tile text is dark ink, and white only where white reaches 4.5:1 on that tile. No tile passes with white, so all tiles use ink |
| Share card redrawn from source (`build/gen_og.py`): 1200x630, paper, teal title, subtitle, site name, a strip of days with two amber visits; og:image and twitter:image |
| PII sweep before publish: gitleaks (default and PHI rules), name/place/host/repo/value greps, PNG metadata, visual check of screenshots. One state name redacted in this log |
| The draft commit was not published: it named places and facilities. The post went live as one squashed commit |
| Spec distilled to `docs/technical-blog-spec.md` |
