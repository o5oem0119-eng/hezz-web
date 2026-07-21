# HEZZ STUDIO Public Website Brief

Updated: 2026-07-21  
Status: Authoritative design and implementation brief  
Owner: HEZZ Studio Web Developer  
Canonical project root: `C:\Hezz company`  
Primary release language: Korean  
Preview route: `/website-preview`

## 1. Purpose and Authority

This document is the single source of truth for the public HEZZ STUDIO homepage. It must be sufficient for design, implementation, review, and continuation without reconstructing decisions from chat history.

The public website is owned by HEZZ Studio. It is separate from the internal Hezz Company Home, office map, department workspaces, CEO area, and approval UI.

When this document conflicts with an older public-site concept or historical implementation note, this document takes precedence.

Related documents have narrower responsibilities:

- `WEBSITE_OPERATIONS.md`: release, asset, deployment, payment, disclosure, and maintenance rules.
- `PUBLIC_WEBSITE_COMPLETION_CHECKLIST.md`: actual implementation progress and the first unchecked continuation item.
- `docs/HEZZ_STUDIO_OPERATING_PLAN.md`: HEZZ Studio organization and handoff ownership.
- `docs/BEAUTY_CAMPAIGN_LAUNCH_PLAN.md`: campaign and product source material, not homepage information architecture.

## 2. Brand Positioning

Public positioning:

> **HEZZ STUDIO — AI CREATIVE STUDIO**

HEZZ STUDIO studies and designs light, texture, expression, framing, product fidelity, and visual continuity so AI-made scenes feel like real moments.

Beauty UGC is the first applied proof, not the permanent category identity. The site must not present HEZZ STUDIO as beauty-only, a generic AI-image gallery, a SaaS product, or an established high-volume video-production company.

The demonstrated capability order is:

1. natural still-image design;
2. consistency across person, product, hand, material, and scene;
3. controlled short motion derived from approved stills.

Fashion is a future proof candidate only after approved original HEZZ work demonstrates apparel fidelity. Planned categories or software must not appear as current public offers.

## 3. Public-Site Boundary

The homepage presents:

- approved original HEZZ work;
- the Natural Realism criteria behind that work;
- the Natural Beauty UGC guide as the practical method;
- a real project-inquiry path;
- only release-ready purchase, contact, legal, and company information.

Do not present:

- the internal department structure;
- an unbuilt fashion-fitting program;
- participant testing or internal product validation;
- a broad category catalogue without original proof;
- dashboard or SaaS controls;
- fake clients, testimonials, results, checkout success, or unavailable links.

The Natural Beauty UGC case must be identified as AI-generated fictional/spec work where relevant.

## 4. Homepage Flow

The final page order is fixed:

1. Hero
2. Brand Statement
3. Before / After
4. Natural Realism Criteria
5. Guidebook
6. Project Inquiry
7. Footer

Narrative:

> see the work → feel the difference → understand the criteria → learn the method or commission the work

Do not add separate large homepage sections named `REALISM STUDIES`, `HOW IT HOLDS TOGETHER`, `BEAUTY 01`, `SERVICES`, or a standalone transition-copy section.

## 5. Section Specifications

### 5.1 Hero

- Keep three full-viewport vertical campaign-video panels.
- Keep the centered `HEZZ STUDIO` logo.
- Place only `AI CREATIVE STUDIO` directly beneath the logo.
- Do not use the former `NATURAL REALISM · CAPTURED MOMENTS` descriptor.
- Do not use hero shrink behavior or background marquee rows.
- Do not add service copy, long explanation, or CTA.
- Preserve poster fallbacks, synchronized safe playback, mobile loading safety, and reduced-motion behavior.

Descriptor direction:

- desktop: approximately 12–14px;
- mobile: approximately 11–12px;
- weight: 500–600;
- tracking: 0.16–0.22em;
- white at approximately 75–85% opacity;
- 16–22px below the logo.

### 5.2 Brand Statement

Use a left-aligned, text-only white section. Do not use cards, icons, decorative rules, or a colored section band.

Approved copy:

> 만들어진 장면보다,  
> 포착된 순간에 가깝게.

> AI 특유의 매끄러움과 완벽함 대신,  
> 고르지 않은 빛과 살아 있는 질감, 편안한 표정,  
> 살짝 어색한 구도를 남깁니다.

> HEZZ STUDIO는 AI로 만든 장면도  
> 실제 순간처럼 느껴지도록 연구하고 설계합니다.

Layout direction:

- centered content container up to 1400px;
- text measure approximately 800–850px;
- headline 54–62px desktop / 34–40px mobile;
- primary paragraph 20–22px desktop / 17–18px mobile;
- final sentence 17–19px desktop / 16–17px mobile;
- approximately 150–180px desktop and 100–120px mobile vertical padding.

### 5.3 Before / After

Purpose: prove the Natural Realism claim with comparable AI-generated evidence.

Approved heading:

> 같은 인물, 다른 현실감.

Approved description:

> 완벽한 대칭과 과한 보정을 걷어내고,  
> 실제 순간에 가까운 표정과 피부 질감을 남깁니다.

Required disclosure:

> 동일한 AI 생성 인물·구도 기반의 질감 비교 이미지입니다.

Rules:

- Use one 4:5 `SKIN` comparison slider.
- Keep the slider with the copy rather than pushing it to the far edge.
- Cap the slider around 500px on desktop.
- Keep `SMOOTHED` and `NATURAL TEXTURE` as compact in-image labels.
- Do not add further comparison subjects or pagination without explicit approval.
- Keep the displayed `SKIN` pair identity, pose, gaze, light, background, crop, and resolution pixel-aligned. Changed expression or framing belongs in the portfolio, not the comparison slider.

### 5.4 Natural Realism Criteria

This section is the public portfolio.

Section copy:

> 자연스러움을 만드는 기준

> 빛과 질감, 표정과 구도의 작은 불완전함이  
> 장면을 더 실제처럼 느껴지게 만듭니다.

Keep one scroll-pinned horizontal gallery with irregular media sizes, varied vertical placement, and native aspect ratios. Do not split the criteria into four vertical sections, cards, or color bands.

The gallery must visibly organize works into these groups:

- `LIGHT` — 균일하지 않은 빛
- `TEXTURE` — 지워지지 않은 표면
- `EXPRESSION` — 연출되지 않은 표정
- `FRAMING` — 완벽하지 않은 구도

Use 3–4 approved original HEZZ assets per group where possible. The visual language should feel candid and observed: ordinary places, partial or distant subjects, mixed light, flash, off-center crops, hands, clothing, products, objects, and ordinary movement.

Do not use unrelated attractive images only to increase volume. External references may guide visual grammar but cannot be presented as HEZZ work.

Internal asset-production series such as `In Between`, `Hands & Things`, and `Moments Together` are working systems, not required public section labels.

### 5.5 Guidebook

Present `Natural Beauty UGC 제작 가이드` as the practical method behind the work, not as a prompt bundle.

Keep a cover-and-copy split layout and add a compact table-of-contents preview:

1. 실제 장면처럼 보이는 AI 이미지의 기준
2. 베이스 이미지와 비주얼 바이블
3. 인물·제품·손의 일관성
4. 빛, 질감, 프레임의 장면 설계
5. 스틸에서 짧은 영상으로 확장하기
6. 최종 검수 체크리스트

Until the final guide, real checkout, payment confirmation, file delivery, and support path are verified:

- do not show a public price;
- do not show a public purchase CTA;
- do not show test-payment controls to ordinary visitors;
- do not promise a review bonus;
- use `목차 미리보기` and a truthful launch-notification state.

A test-only payment route may remain available to authorized reviewers when it is hidden from normal visitors and governed by `WEBSITE_OPERATIONS.md`.

### 5.6 Project Inquiry

Approved copy:

> 브랜드의 다음 장면, 같이 찾아볼까요?

> AI 이미지·영상 광고, 브랜드 콘텐츠,  
> 캠페인 비주얼을 제작합니다.

Provide a short inquiry form.

Required fields:

- name or contact person;
- email;
- desired content or inquiry type;
- short project description.

Optional fields:

- brand name;
- schedule;
- budget;
- reference URL.

The form destination must be real and tested. Keep spam protection, privacy consent, success feedback, keyboard access, and mobile usability.

### 5.7 Footer

- Use a blackened deep-wine background within `#4A0F1C`–`#581824`.
- Use the HEZZ STUDIO logo, not an oversized text wordmark.
- Use white or cream text with reduced opacity for supporting information.
- Keep compact spacing.
- Public navigation labels are `WORK`, `GUIDEBOOK`, and `CONTACT`.
- Include only real email, social, business-information, terms, and privacy destinations.
- Do not add placeholder `#` links to unavailable pages.

## 6. Shared Visual System

- Use Pretendard only.
- Main surfaces are white.
- Optional supporting surface: warm gray `#F5F4F2`.
- Do not alternate many unrelated gray, blue, charcoal, or powder-blue bands.
- Main heading: `#171717`.
- Body: `#3F3F3F`–`#4F4F4F`.
- Supporting text: `#626262`–`#707070`.
- Small labels: approximately `#737373`.
- Keep a centered maximum content width of 1400px.
- Preserve Korean word units and prevent heading overlap at every viewport.
- Campaign media retains its own approved color and native aspect ratio.

## 7. Motion and Accessibility

- Use restrained upward reveal for the Brand Statement, Before / After, and Project Inquiry.
- The Natural Realism gallery owns the horizontal-scroll interaction.
- Do not reintroduce hero shrink or marquee motion.
- Keep motion reversible and stable under fast scrolling where scroll-linked effects remain.
- Respect `prefers-reduced-motion`; replace complex transformations with stable layouts and simple fades.
- Provide keyboard access, visible focus, sufficient contrast, descriptive alt text, touch-safe controls, and video poster fallbacks.

## 8. Asset and Path Rules

Canonical optimized public asset root:

`public/assets/hezz-studio/website`

Canonical public URL prefix:

`/assets/hezz-studio/website/`

Rules:

- Keep source masters in their owning campaign or production location.
- Store only deliberate web derivatives under the canonical public asset root.
- Record each derivative's source master in `WEBSITE_OPERATIONS.md`.
- Do not edit campaign source masters while preparing web derivatives.
- Do not add new assets under a legacy department asset namespace.

## 9. Current Release Boundary

Local implementation, tests, preview screenshots, and deployment preparation are allowed.

Public deployment, domain changes, analytics activation, payment activation, product delivery, or publishing require explicit user approval.

A successful local build does not mean the site or product is launched.

## 10. Definition of Done

The public site is release-ready only when:

- the page matches the final flow and approved copy;
- all media and claims are approved;
- fictional/spec disclosure is visible where required;
- normal visitors cannot access unfinished payment behavior;
- inquiry, purchase, delivery, legal, company, and social destinations are real and tested where shown;
- desktop, tablet, and mobile layouts are visually reviewed;
- keyboard, focus, contrast, alt text, reduced motion, autoplay fallback, and touch behavior pass;
- media is optimized and below-the-fold media is lazy-loaded where appropriate;
- SEO and social metadata are final;
- tests and production build pass;
- the user explicitly approves public release.

## 11. Ranked Approval Workflow

Implementation progress is tracked only in `PUBLIC_WEBSITE_COMPLETION_CHECKLIST.md`. Do not maintain a second competing rank state in this brief.

For every rank:

1. Work only on the first unchecked rank.
2. Run relevant tests and the production build.
3. Make the result available for review when deployment is part of that rank.
4. Wait for explicit user approval.
5. After approval, mark the rank `[O]`.
6. Do not begin the next rank before approval.

If work is interrupted, resume from the first unchecked rank in `PUBLIC_WEBSITE_COMPLETION_CHECKLIST.md` without asking the user to restate this workflow.
