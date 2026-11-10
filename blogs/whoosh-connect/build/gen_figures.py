#!/usr/bin/env python3
"""Draw the whoosh-connect post figures.

Palette: the owner's dark terminal scheme. bg #0e1212, ink #b5cbcb (11.1:1),
headings #cfe7e8 (14.6:1), muted #808f8f (5.6:1), path amber #c7b982 (9.6:1),
flow teal #9acaca (10.5:1), success #7ec98b (9.5:1), alert #e27270 (6.2:1).
Every text colour clears 5:1 on the page background.

Usage:  python3 gen_figures.py <outdir>
"""

C = dict(
    bg="#0e1212", panel="#101616", card="#141a1a",
    line="#303737", line2="#454e4e",
    fg="#b5cbcb", title="#cfe7e8", muted="#808f8f",
    teal="#9acaca", blue="#8396c0", amber="#c7b982",
    green="#7ec98b", red="#e27270", pink="#e6a8df",
)
SANS = "ui-sans-serif,-apple-system,'Segoe UI',system-ui,sans-serif"
MONO = "ui-monospace,SFMono-Regular,Menlo,Consolas,monospace"
NB = "\u00a0"  # SVG collapses runs of plain spaces

HEAD = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 @W@ @H@" role="img" aria-labelledby="t d" preserveAspectRatio="xMidYMid meet">
<title id="t">@TITLE@</title>
<desc id="d">@DESC@</desc>
<!-- whoosh-connect post figure, drawn by build/gen_figures.py.
     Palette: the owner's dark terminal scheme (bg #0e1212, ink #b5cbcb,
     headings #cfe7e8, muted #808f8f, amber #c7b982, teal #9acaca,
     green #7ec98b, red #e27270). All text >= 5:1 on the background. -->
<defs>
  <marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,1 L9,5 L0,9 z" fill="@AMBER@"/>
  </marker>
  <marker id="ag" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,1 L9,5 L0,9 z" fill="@GREEN@"/>
  </marker>
  <marker id="ax" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
    <path d="M0,1 L9,5 L0,9 z" fill="@RED@"/>
  </marker>
</defs>
<rect width="@W@" height="@H@" fill="@BG@"/>
"""


def head(w, h, title, desc):
    return (HEAD.replace("@W@", str(w)).replace("@H@", str(h))
            .replace("@TITLE@", title).replace("@DESC@", desc)
            .replace("@AMBER@", C["amber"]).replace("@GREEN@", C["green"])
            .replace("@RED@", C["red"]).replace("@BG@", C["bg"]))


def box(x, y, w, h, fill=None, stroke=None, rx=12, dash=None, sw=1.4):
    s = (f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill or C["card"]}" '
         f'stroke="{stroke or C["line"]}" stroke-width="{sw}"')
    if dash:
        s += f' stroke-dasharray="{dash}"'
    return s + "/>"


SCALE = 1.0  # per-figure text multiplier, set by the *_landscape/*_portrait wrapper


def txt(x, y, s, size=18, fill=None, anchor="start", weight="400", mono=False, ls=None, op=None):
    size = round(size * SCALE)
    fam = MONO if mono else SANS
    extra = f' letter-spacing="{ls}"' if ls else ""
    extra += f' opacity="{op}"' if op else ""
    return (f'<text x="{x}" y="{y}" font-family="{fam}" font-size="{size}" fill="{fill or C["fg"]}" '
            f'text-anchor="{anchor}" font-weight="{weight}"{extra}>{s}</text>')


def path(d, stroke=None, marker=None, sw=1.8, dash=None):
    s = (f'<path d="{d}" fill="none" stroke="{stroke or C["amber"]}" stroke-width="{sw}" '
         f'stroke-linejoin="round"')
    if dash:
        s += f' stroke-dasharray="{dash}"'
    if marker:
        s += f' marker-end="url(#{marker})"'
    return s + "/>"


def band(x, y, w, h, lines, ink=None, size=17, weight="600"):
    size = round(size * SCALE)
    o = [f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="8" fill="{C["panel"]}" '
         f'stroke="{ink or C["amber"]}" stroke-width="1.2"/>']
    n = len(lines)
    for i, line in enumerate(lines):
        o.append(txt(x + w / 2, y + h / 2 + (i - (n - 1) / 2) * (size + 10) + size * 0.35,
                     line, size, ink or C["amber"], "middle", weight))
    return "\n".join(o)


# ------------------------------------------------------------ figure 1: the path
def fig_path_landscape():
    global SCALE
    SCALE = 1.16
    w, h = 1000, 384
    o = [head(w, h, "The whole path, in three moves",
              "Two BLE pucks on the bike talk to whoosh-connect on the Mac, which serves one "
              "OpenBikeControl device over mDNS and TCP to MyWhoosh.")]
    for x, label in ((24, "ON THE BIKE"), (380, "ON THE MAC"), (750, "IN THE GAME")):
        o.append(box(x, 60, 226 if x != 380 else 256, 240, fill=C["panel"], dash="6 6"))
        o.append(txt(x + 18, 88, label, 13, C["teal"], mono=True, ls="1.4"))

    o.append(box(44, 104, 186, 80))
    o.append(txt(60, 134, "Left puck", 19, C["title"], weight="600"))
    o.append(txt(60, 164, f"−{NB}◀{NB}▶{NB}▲{NB}▼", 17, C["muted"]))
    o.append(box(44, 208, 186, 80))
    o.append(txt(60, 238, "Right puck", 19, C["title"], weight="600"))
    o.append(txt(60, 268, f"+{NB}A{NB}B{NB}Y{NB}Z", 17, C["muted"]))

    o.append(box(400, 150, 220, 100, fill=C["card"], stroke=C["line2"]))
    o.append(txt(510, 190, "whoosh-connect", 20, C["title"], "middle", "600"))
    o.append(txt(510, 216, "BLE → actions → OBC", 14, C["muted"], "middle", mono=True))
    o.append(txt(510, 238, "one process, offline", 14, C["muted"], "middle"))

    o.append(box(770, 150, 186, 100, fill=C["card"], stroke=C["line2"]))
    o.append(txt(863, 190, "MyWhoosh", 20, C["title"], "middle", "600"))
    o.append(txt(863, 216, "OpenBikeControl", 15, C["muted"], "middle"))

    o.append(path("M230 144 H306 V200 H400", marker="ar"))
    o.append(path("M230 248 H306 V200"))
    o.append(path("M620 200 H770", marker="ar"))
    o.append(txt(302, 278, "Bluetooth LE", 15, C["amber"], "middle"))
    o.append(txt(695, 186, "mDNS + TCP", 15, C["amber"], "middle"))
    o.append(band(24, 318, 952, 46,
                  ["One press opens about 50 s of button frames — no unlock, no account."], size=15))
    o.append("</svg>")
    return "\n".join(o)


def fig_path_portrait():
    global SCALE
    SCALE = 1.42
    w, h = 620, 700
    o = [head(w, h, "The whole path, in three moves",
              "Stacked: two BLE pucks on the bike, whoosh-connect on the Mac, and MyWhoosh on the other "
              "side of one OpenBikeControl device over mDNS and TCP.")]
    o.append(box(24, 20, 572, 212, fill=C["panel"], dash="6 6"))
    o.append(txt(44, 48, "ON THE BIKE", 13, C["teal"], mono=True, ls="1.4"))
    o.append(box(44, 68, 264, 86))
    o.append(txt(62, 100, "Left puck", 20, C["title"], weight="600"))
    o.append(txt(62, 130, f"−{NB}◀{NB}▶{NB}▲{NB}▼", 18, C["muted"]))
    o.append(box(312, 68, 264, 86))
    o.append(txt(330, 100, "Right puck", 20, C["title"], weight="600"))
    o.append(txt(330, 130, f"+{NB}A{NB}B{NB}Y{NB}Z", 18, C["muted"]))

    o.append(path("M176 154 V182 H310 V268"))
    o.append(path("M444 154 V182 H310", marker=None))
    o.append(path("M310 182 V268", marker="ar"))
    o.append(txt(324, 258, "Bluetooth LE", 16, C["amber"]))

    o.append(box(150, 270, 320, 104, fill=C["card"], stroke=C["line2"]))
    o.append(txt(310, 308, "whoosh-connect", 21, C["title"], "middle", "600"))
    o.append(txt(310, 332, "BLE → actions → OBC", 15, C["muted"], "middle", mono=True))
    o.append(txt(310, 354, "one process, offline", 14, C["muted"], "middle"))

    o.append(path("M310 374 V442", marker="ar"))
    o.append(txt(326, 414, "mDNS + TCP", 16, C["amber"]))

    o.append(box(150, 444, 320, 100, fill=C["card"], stroke=C["line2"]))
    o.append(txt(310, 482, "MyWhoosh", 21, C["title"], "middle", "600"))
    o.append(txt(310, 508, "OpenBikeControl", 15, C["muted"], "middle"))

    o.append(txt(310, 500, "", 1))
    o.append(band(24, 576, 572, 96,
                  ["One press opens about 50 s", "of button frames — no unlock,", "no account, no network."],
                  size=16))
    o.append("</svg>")
    return "\n".join(o)


# --------------------------------------------------------- figure 2: one press
def fig_window_landscape():
    global SCALE
    SCALE = 1.16
    w, h = 1000, 268
    o = [head(w, h, "One press buys about fifty seconds",
              "A timeline in seconds. At zero a press wakes the unit and every press is reported until "
              "about fifty seconds, when it sends stopped; after that it is silent until the next press.")]
    x0, x1 = 90, 930
    sx = lambda t: x0 + (x1 - x0) * t / 60.0
    ay, bh = 82, 62
    o.append(f'<rect x="{x0}" y="{ay}" width="{x1 - x0}" height="{bh}" rx="8" fill="{C["panel"]}" stroke="{C["line"]}"/>')
    o.append(f'<rect x="{x0}" y="{ay}" width="{sx(50) - x0:.0f}" height="{bh}" rx="8" fill="#161d1d" stroke="{C["amber"]}" stroke-width="1.6"/>')
    o.append(txt((x0 + sx(50)) / 2, ay + 39, "every press is reported", 19, C["title"], "middle", "600"))
    o.append(txt((sx(50) + x1) / 2, ay + 39, "silent", 17, C["muted"], "middle"))

    # press marker: a stem above the bar, a dot on its top edge
    o.append(f'<line x1="{x0}" y1="{ay - 26}" x2="{x0}" y2="{ay}" stroke="{C["green"]}" stroke-width="2"/>')
    o.append(f'<circle cx="{x0}" cy="{ay}" r="6" fill="{C["green"]}"/>')
    o.append(txt(x0, ay - 38, "press", 18, C["green"], "middle", "600"))
    o.append(f'<line x1="{sx(50):.0f}" y1="{ay - 26}" x2="{sx(50):.0f}" y2="{ay}" stroke="{C["red"]}" stroke-width="2"/>')
    o.append(f'<circle cx="{sx(50):.0f}" cy="{ay}" r="6" fill="{C["red"]}"/>')
    o.append(txt(sx(50) - 10, ay - 38, "ff 05 00 ea 05 — stopped", 15, C["red"], "end", mono=True))

    for t in (0, 10, 20, 30, 40, 50, 60):
        o.append(f'<line x1="{sx(t):.0f}" y1="{ay + bh}" x2="{sx(t):.0f}" y2="{ay + bh + 7}" stroke="{C["line2"]}" stroke-width="1.4"/>')
    for t in (0, 50, 60):
        o.append(txt(sx(t), ay + bh + 28, f"{t} s", 14, C["muted"], "middle", mono=True))

    o.append(path(f"M{x0} {ay + bh + 52} V{ay + bh + 64} H{sx(50):.0f} V{ay + bh + 52}", C["line2"], None, 1.6))
    o.append(txt((x0 + sx(50)) / 2, ay + bh + 90, "one press, one window", 17, C["fg"], "middle"))
    o.append(txt(x1, ay + bh + 90, "press again → next window", 16, C["muted"], "end"))
    o.append("</svg>")
    return "\n".join(o)


def fig_window_portrait():
    global SCALE
    SCALE = 1.42
    w, h = 620, 540
    o = [head(w, h, "One press buys about fifty seconds",
              "A vertical timeline. At zero a press wakes the unit and every press is reported until about "
              "fifty seconds, when it sends stopped; after that it is silent until the next press.")]
    y0, y1 = 46, 400
    sy = lambda t: y0 + (y1 - y0) * t / 60.0
    xa, xb = 96, 176
    o.append(f'<rect x="{xa}" y="{y0}" width="{xb - xa}" height="{y1 - y0}" rx="8" fill="{C["panel"]}" stroke="{C["line"]}"/>')
    o.append(f'<rect x="{xa}" y="{y0}" width="{xb - xa}" height="{sy(50) - y0:.0f}" rx="8" fill="#161d1d" stroke="{C["amber"]}" stroke-width="1.6"/>')

    o.append(f'<circle cx="{xa}" cy="{y0}" r="6" fill="{C["green"]}"/>')
    o.append(txt(xb + 22, y0 + 7, "press", 19, C["green"], "start", "600"))

    o.append(txt(xb + 22, 176, "every press", 19, C["title"], "start", "600"))
    o.append(txt(xb + 22, 202, "is reported", 19, C["title"], "start", "600"))

    o.append(f'<line x1="{xa - 22}" y1="{sy(50):.0f}" x2="{xa}" y2="{sy(50):.0f}" stroke="{C["red"]}" stroke-width="2"/>')
    o.append(f'<circle cx="{xa}" cy="{sy(50):.0f}" r="6" fill="{C["red"]}"/>')
    o.append(txt(xb + 22, sy(50) - 8, "ff 05 00 ea 05", 15, C["red"], mono=True))
    o.append(txt(xb + 22, sy(50) + 16, "stopped, ~50 s", 16, C["red"]))

    o.append(txt(xb + 22, 396, "silent until the", 16, C["muted"]))
    o.append(txt(xb + 22, 420, "next press", 16, C["muted"]))

    for t in (0, 20, 40, 60):
        o.append(f'<line x1="{xa - 10}" y1="{sy(t):.0f}" x2="{xa}" y2="{sy(t):.0f}" stroke="{C["line2"]}" stroke-width="1.4"/>')
        o.append(txt(xa - 18, sy(t) + 5, f"{t}s", 13, C["muted"], "end", mono=True))
    o.append(band(24, 448, 572, 72,
                  ["The window opens on a press,", "not on an unlock."], size=17))
    o.append("</svg>")
    return "\n".join(o)


# ------------------------------------------------------------ figure 3: unlock
def fig_unlock_landscape():
    global SCALE
    SCALE = 1.16
    w, h = 1000, 392
    o = [head(w, h, "The unlock path, and where it dead-ended",
              "The puck sends a challenge on characteristic 0002. Zwift's D-Lock service signs some shapes "
              "and returns a 23-byte protobuf in about 0.32 seconds. Writing it back left the puck silent "
              "in every framing tried. The ride worked anyway, with every challenge unanswered.")]
    o.append(box(24, 90, 236, 90))
    o.append(txt(44, 124, "the puck", 19, C["title"], weight="600"))
    o.append(txt(44, 152, "ff 03 00 + 82–100 B", 14, C["muted"], mono=True))

    o.append(box(330, 76, 300, 118, fill=C["card"], stroke=C["line2"]))
    o.append(txt(480, 110, "D-Lock service", 20, C["title"], "middle", "600"))
    o.append(txt(480, 136, "device/authenticate", 15, C["muted"], "middle", mono=True))
    o.append(txt(480, 160, "protobuf in, bearer token", 14, C["muted"], "middle"))
    o.append(txt(480, 182, "0.32 s round trip", 14, C["amber"], "middle", mono=True))

    o.append(box(716, 90, 260, 90))
    o.append(txt(736, 124, "23-byte answer", 19, C["title"], weight="600"))
    o.append(txt(736, 152, "protobuf, 0a 15 + 21 B", 14, C["muted"], mono=True))

    o.append(path("M260 135 H330", marker="ar"))
    o.append(txt(295, 120, "POST", 14, C["amber"], "middle", mono=True))
    o.append(path("M630 135 H716", marker="ar"))
    o.append(txt(673, 120, "sign", 14, C["amber"], "middle"))

    o.append(path("M846 180 V262 H140 V180", C["red"], "ax", 1.8, dash="7 5"))
    o.append(f'<circle cx="200" cy="262" r="16" fill="{C["bg"]}" stroke="{C["red"]}" stroke-width="1.6"/>')
    o.append(txt(200, 268, "×", 18, C["red"], "middle", "700"))
    o.append(txt(244, 296, "written back on 0003 in every framing we could think of", 16, C["red"]))
    o.append(txt(244, 320, "→ zero button frames, every time", 16, C["red"]))

    o.append(band(24, 336, 952, 44,
                  ["The ride worked with every challenge left unanswered. The unlock was optional."], size=16))
    o.append("</svg>")
    return "\n".join(o)


def fig_unlock_portrait():
    global SCALE
    SCALE = 1.42
    w, h = 640, 690
    o = [head(w, h, "The unlock path, and where it dead-ended",
              "Stacked: the puck sends a challenge, Zwift's D-Lock service signs some shapes and returns a "
              "23-byte protobuf, and writing it back left the puck silent in every framing tried. The ride "
              "worked anyway.")]
    o.append(box(60, 20, 520, 86))
    o.append(txt(320, 54, "the puck", 19, C["title"], "middle", "600"))
    o.append(txt(320, 80, "ff 03 00 + 82–100 B", 15, C["muted"], "middle", mono=True))

    o.append(path("M320 106 V150", marker="ar"))
    o.append(txt(336, 134, "POST", 14, C["amber"], mono=True))

    o.append(box(60, 152, 520, 112, fill=C["card"], stroke=C["line2"]))
    o.append(txt(320, 186, "D-Lock service", 20, C["title"], "middle", "600"))
    o.append(txt(320, 212, "device/authenticate", 15, C["muted"], "middle", mono=True))
    o.append(txt(320, 238, "0.32 s round trip", 14, C["amber"], "middle", mono=True))

    o.append(path("M320 264 V308", marker="ar"))
    o.append(txt(336, 292, "sign", 14, C["amber"]))

    o.append(box(60, 310, 520, 86))
    o.append(txt(320, 344, "23-byte answer", 19, C["title"], "middle", "600"))
    o.append(txt(320, 370, "protobuf, 0a 15 + 21 B", 15, C["muted"], "middle", mono=True))

    o.append(path("M320 396 V452", C["red"], None, 1.8, dash="7 5"))
    o.append(f'<circle cx="320" cy="472" r="16" fill="{C["bg"]}" stroke="{C["red"]}" stroke-width="1.6"/>')
    o.append(txt(320, 478, "×", 18, C["red"], "middle", "700"))
    o.append(txt(320, 514, "written back on 0003, every framing", 16, C["red"], "middle"))
    o.append(txt(320, 538, "zero button frames, every time", 16, C["red"], "middle"))

    o.append(band(24, 574, 592, 96,
                  ["The ride worked with every", "challenge left unanswered.", "The unlock was optional."],
                  ink=C["green"], size=16))
    o.append("</svg>")
    return "\n".join(o)


# ------------------------------------------------------------- figure 4: signed
def fig_signed_landscape():
    global SCALE
    SCALE = 1.16
    w, h = 1000, 264
    o = [head(w, h, "Only the long-nonce challenges were signed",
              "Bar chart of the distinct challenges posted to D-Lock, by nonce length. Eight or more 40-byte "
              "nonces returned 204 with no body; all three of the 52 and 58-byte nonces returned 200 with a "
              "23-byte answer.")]
    rows = [("40 B nonce", 8, 0), ("52 B nonce", 1, 1), ("58 B nonce", 2, 2)]
    x0, bw = 210, 440
    for i, (label, posted, signed) in enumerate(rows):
        y = 40 + i * 62
        o.append(txt(24, y + 23, label, 17, C["fg"], weight="600", mono=True))
        o.append(f'<rect x="{x0}" y="{y}" width="{bw}" height="34" rx="6" fill="{C["panel"]}" stroke="{C["line"]}"/>')
        o.append(f'<rect x="{x0}" y="{y}" width="{bw * posted / 8:.0f}" height="34" rx="6" fill="{C["line2"]}"/>')
        if signed:
            o.append(f'<rect x="{x0}" y="{y}" width="{max(bw * signed / 8, 11):.0f}" height="34" rx="6" fill="{C["green"]}"/>')
        o.append(txt(x0 + bw + 20, y + 23, f"{posted}{'+' if posted >= 8 else ''} posted · {signed} signed",
                     15, C["fg"], mono=True))
    o.append(f'<rect x="24" y="232" width="16" height="12" rx="3" fill="{C["line2"]}"/>')
    o.append(txt(48, 243, "posted", 13, C["muted"], mono=True))
    o.append(f'<rect x="120" y="232" width="16" height="12" rx="3" fill="{C["green"]}"/>')
    o.append(txt(144, 243, "signed: 200 and a 23-byte answer", 13, C["muted"], mono=True))
    o.append("</svg>")
    return "\n".join(o)


def fig_signed_portrait():
    global SCALE
    SCALE = 1.42
    w, h = 620, 352
    o = [head(w, h, "Only the long-nonce challenges were signed",
              "Bar chart of the distinct challenges posted to D-Lock, by nonce length. Eight or more 40-byte "
              "nonces returned 204 with no body; the 52 and 58-byte nonces returned 200 with a 23-byte answer.")]
    rows = [("40 B nonce", 8, 0), ("52 B nonce", 1, 1), ("58 B nonce", 2, 2)]
    for i, (label, posted, signed) in enumerate(rows):
        y = 28 + i * 100
        o.append(txt(24, y + 20, label, 17, C["fg"], weight="600", mono=True))
        o.append(txt(24, y + 44, f"{posted}{'+' if posted >= 8 else ''} posted", 14, C["muted"], mono=True))
        o.append(txt(150, y + 44, f"{signed} signed", 14, C["green"] if signed else C["muted"], mono=True))
        o.append(f'<rect x="24" y="{y + 56}" width="572" height="28" rx="5" fill="{C["panel"]}" stroke="{C["line"]}"/>')
        o.append(f'<rect x="24" y="{y + 56}" width="{572 * posted / 8:.0f}" height="28" rx="5" fill="{C["line2"]}"/>')
        if signed:
            o.append(f'<rect x="24" y="{y + 56}" width="{max(572 * signed / 8, 10):.0f}" height="28" rx="5" fill="{C["green"]}"/>')
    o.append(txt(24, 336, "green: 200 with a body. grey: 204, nothing to write back.", 13, C["muted"]))
    o.append("</svg>")
    return "\n".join(o)


# -------------------------------------------------------- share image (1200x630)
def fig_og():
    global SCALE
    SCALE = 1.0
    w, h = 1200, 630
    o = [head(w, h, "whoosh-connect — Zwift Click shifters, without Zwift",
              "Share image. Two BLE pucks on the bike, one offline process on the Mac, and MyWhoosh on the "
              "other side of one OpenBikeControl device. No Zwift, no account, no daily unlock.")]
    o.append(txt(48, 76, "whoosh-connect", 46, C["title"], weight="650"))
    o.append(txt(48, 116, "Zwift Click shifters, without Zwift", 26, C["teal"]))

    o.append(box(48, 168, 300, 196))
    o.append(txt(198, 248, "Two Click pucks", 24, C["title"], "middle", "600"))
    o.append(txt(198, 284, "Bluetooth LE", 18, C["muted"], "middle", mono=True))
    o.append(txt(198, 314, "one press = ~50 s", 18, C["amber"], "middle", mono=True))

    o.append(box(440, 168, 320, 196, fill=C["card"], stroke=C["line2"]))
    o.append(txt(600, 244, "whoosh-connect", 26, C["title"], "middle", "600"))
    o.append(txt(600, 280, "BLE → actions → OBC", 18, C["muted"], "middle", mono=True))
    o.append(txt(600, 310, "one process, offline", 18, C["muted"], "middle"))

    o.append(box(840, 168, 312, 196, fill=C["card"], stroke=C["line2"]))
    o.append(txt(996, 244, "MyWhoosh", 26, C["title"], "middle", "600"))
    o.append(txt(996, 280, "OpenBikeControl", 18, C["muted"], "middle", mono=True))
    o.append(txt(996, 310, "mDNS + TCP", 18, C["amber"], "middle", mono=True))

    o.append(path("M348 266 H440", marker="ar"))
    o.append(path("M760 266 H840", marker="ar"))

    o.append(band(48, 428, 1104, 96, ["No Zwift, no account, no daily unlock."], size=22))
    o.append(txt(48, 598, "tusharpandey.com", 18, C["muted"], mono=True))
    o.append("</svg>")
    return "\n".join(o)


FIGURES = {
    "path-landscape.svg": fig_path_landscape,
    "path-portrait.svg": fig_path_portrait,
    "window-landscape.svg": fig_window_landscape,
    "window-portrait.svg": fig_window_portrait,
    "unlock-landscape.svg": fig_unlock_landscape,
    "unlock-portrait.svg": fig_unlock_portrait,
    "signed-landscape.svg": fig_signed_landscape,
    "signed-portrait.svg": fig_signed_portrait,
    "og-whoosh-connect.svg": fig_og,
}

if __name__ == "__main__":
    import sys
    from pathlib import Path
    out = Path(sys.argv[1] if len(sys.argv) > 1 else ".")
    out.mkdir(parents=True, exist_ok=True)
    for name, fn in FIGURES.items():
        body = fn() + "\n"
        (out / name).write_text(body)
        print(f"{name:26s} {len(body):6d} B")
