---
name: portal-ui
description: >
  Designs or revises a personal project homepage: several real works, one live
  device, no fake blog and no borrowed projects in the work grid. Use when the
  user says 个人主页, 项目主页, 博客首页, portal, portfolio home, or asks to
  fix navigation, authorship, ornament, motion, or share tags on that kind of
  page. Use /portal-ui. A single-offer landing page is out of scope.
---

# Portal UI

A portal serves several intents. A landing page wins one. If the page has one offer and one action, stop and use a landing-page skill. This file is the decision layer for a person's own work.

Two sources set the defaults this file does not restate. Visual costume bans follow [Leonxlnx/taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT). Spacing, focus, and motion timing follow [elayadesign/ai-design-skills](https://github.com/elayadesign/ai-design-skills) `landing-page-design` (MIT) only where this file names them. When those two conflict on a portal, this file wins.

## Idea

Write one sentence before editing:

> On this page, **[an artefact that exists only here]** becomes **[the one live device]**.

The terminal, the running project, or the real interface counts. A scanline, a neon grid, or "SYS.ONLINE" does not: the same sentence works for any developer. Keep one live device. It must work with a thumb, have a no-script fallback, and never block the work.

Mark a real interface fragment with `data-ui`. Monospace stays inside that fragment, inside `pre`/`code`, and on tabular figures.

## Page order

1. First screen: who this is, what they make, the live device. One `h1`, two lines or fewer at every width. One sentence under it that says what to do.
2. Own work, with the real picture or clip. Someone else's software is a guide. Name the author in the guide row. Do not put it in the work grid.
3. Optional live list (a feed, a ranking) if it is actually fetched.
4. Guides: how to use the tool, in one sentence. Star counts are secondary and may update themselves.
5. Documents that already exist. Do not title the site with a section that has no documents. A promised blog gets a real list, or the word comes out of the title.
6. Footer: the name, contact, and any paid or support offer. The support offer is not a peer of the work.

Every item in the nav has a heading and a real target. The phone layout keeps that nav. If the bar hides below a breakpoint, add a control that opens a full-height flat panel. Links arrive in reading order, 60ms apart, total under 400ms. The panel background is the page ground, not a blur.

## Visual cuts

Remove these before adding anything: text gradients, glass bars, scanlines, animated grids, conic borders, glows, emoji in headings, index numbers (`01 //`), pill badges above the headline, and more than one ambient effect behind the work.

Keep the existing ground, ink, and one accent when the site already has them. Do not introduce a second display face. Weight stays at 700 or below.

Motion uses `cubic-bezier(0.22, 1, 0.36, 1)`. Animate `transform` and `opacity` only. Reveal each section once with `IntersectionObserver`. A scroll listener that must exist is gated by `requestAnimationFrame`. `prefers-reduced-motion` keeps every word on screen and drops the travel.

Shared CSS: put portal-only cuts in the homepage stylesheet. Change the shared file only for a bug that every page has, such as a missing focus ring.

## Ship

- Skip link, visible `:focus-visible`, current nav item marked.
- No `href="#"`.
- `og:image` is a wide picture of the work. Twitter card is `summary_large_image`.
- Alt text on the work images. The live device has an accessible name.

## Check

Run `node scripts/check.mjs <index.html> <css files>` from this skill. Then open the page at 1440, 768, and 390. On the phone, open the menu and follow each link. With motion reduced, the first screen still names the person and the work.

Fix a `FAIL` from the script. Do not restyle sibling pages to match a homepage cut.
