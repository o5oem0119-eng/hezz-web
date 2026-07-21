# HEZZ Studio Website Operations

Updated: 2026-07-21  
Owner: HEZZ Studio Web Developer

## 1. Purpose

This document defines website-specific ownership, handoffs, asset handling, disclosure, payment and delivery gates, deployment approval, release records, and maintenance.

It does not duplicate the homepage design specification, campaign production plan, Guidebook content plan, or HEZZ Studio organization plan.

- Final public design: `PUBLIC_WEBSITE_BRIEF.md`
- Implementation and approval progress: `PUBLIC_WEBSITE_COMPLETION_CHECKLIST.md`
- Studio roles and handoffs: `docs/HEZZ_STUDIO_OPERATING_PLAN.md`

## 2. Operating Boundary

The HEZZ Studio Web Developer owns:

- the public homepage and approved public pages;
- portfolio and campaign presentation;
- Lab Note and Guidebook publication surfaces;
- responsive behavior, accessibility, SEO, metadata, and performance;
- approved checkout and delivery handoff integration;
- deployment, domains, monitoring, rollback, and maintenance records.

The web role does not invent upstream campaign, model, product, price, license, disclosure, or performance decisions. It presents approved artifacts accurately.

The web role is an internal HEZZ Studio function, not an external website agency.

## 3. Required Inputs

### HEZZ Studio advertising

- approved campaign brief and public copy inputs;
- approved stills, video, poster fallback, and source records;
- approved disclosure and claim boundaries;
- campaign delivery package.

### HEZZ Studio model production

- approved persona and product references;
- approved image set and consistency review;
- visual-bible decisions required for accurate public explanation.

### HEZZ Studio Guidebook

- final title and edition;
- approved content and table of contents;
- final files and worksheets;
- offer, price, license, refund, FAQ, and support decisions;
- approved public CTA wording.

### Shared company infrastructure

- payment and checkout destination;
- server-side credential handling;
- order confirmation and delivery behavior;
- verified transaction and performance records.

### User and Approval Desk

- design approval;
- copy and disclosure approval;
- commercial readiness approval;
- explicit public deployment approval.

Missing approved inputs must remain unavailable or visibly pending. Never invent them.

## 4. Current Preview State

The local preview route is `/website-preview`.

The current implementation may contain incomplete sections or reviewer-only integrations. The normal visitor experience must remain truthful:

- unfinished purchase behavior stays hidden or disabled;
- reviewer-only test payment must require an explicit test condition;
- no product is considered launched before real delivery is tested;
- a local build or preview is not a public release.

The project inquiry form may be active only when its destination is real, consent handling is present, and a test submission succeeds.

## 5. Asset Rules

Canonical optimized public asset root:

`public/assets/hezz-studio/website`

Canonical public URL prefix:

`/assets/hezz-studio/website/`

Rules:

- Use only approved HEZZ assets.
- Keep campaign source masters in their owning campaign or production location.
- Create deliberate optimized derivatives for the website.
- Record the source master for each derivative.
- Do not edit a campaign master while producing a web derivative.
- Use an approved poster fallback when video is unavailable or autoplay is blocked.
- Do not use third-party creator footage or external reference images as public HEZZ production assets.
- Do not create new files under a legacy department asset namespace.

### Current derivative record

The preview uses these derivatives under the canonical asset root:

- `hezz-ugc-first-cut.mp4` from `HEZZ UGC 1차 편집본.mp4`; byte-identical local-review copy pending final approval and web compression.
- `hezz-calming-barrier-serum.png` from `hezz-calming-barrier-serum-canonical.png`.
- `hezz-neutral-face.jpg` from `hezz-neutral-face-anchor.jpeg`.
- `hezz-dropper-application.jpg` from `hezz-dropper-application-anchor.jpeg`.
- `hezz-product-introduction-room.jpg` from `hezz-product-introduction-room-anchor.png`.
- `hezz-serum-hand-application.jpg` from `hezz-serum-hand-application-anchor.jpeg`.
- `hezz-skin-detail.jpg` from `hezz-skin-detail-closeup-anchor.jpeg`.
- `hezz-comparison-smoothed.webp` and `hezz-comparison-natural.webp` from the approved aligned comparison sources.
- `gallery/*` from the approved HEZZ portfolio working set.

Source records and approval state must be expanded when new derivatives are added.

## 6. Disclosure and Claims

Where the Beauty UGC case is presented as a campaign or product example, disclose that it is AI-generated fictional/spec work.

Required direction:

> 본 사례는 AI로 제작한 가상 인물·가상 제품 기반의 스펙 캠페인입니다. 실제 제품 광고 또는 실제 사용 후기가 아닙니다.

Do not publish treatment, clinical, verified review, before-and-after efficacy, real-client, or proven-performance claims without approved evidence.

Public copy must distinguish:

- the demonstrated still-image and consistency system;
- the controlled short-motion extension;
- future capabilities that are not yet public proof.

## 7. Payment and Delivery Gates

A test integration is not a launch.

Before a public purchase CTA is enabled, all of the following must be verified:

- final product files and worksheets;
- approved price, license, refund, FAQ, and support policy;
- real checkout destination;
- server-side credential isolation;
- successful payment confirmation;
- cancellation or refund handling;
- successful file delivery;
- duplicate-delivery and failed-delivery handling;
- buyer support contact;
- user approval to activate sales.

Reviewer-only PayApp testing may use a test amount and hidden test condition. Test credentials and verification values must remain server-side. Test payment must not automatically deliver unfinished products.

## 8. Inquiry Gate

Before treating the inquiry form as complete:

- its destination must be real;
- required and optional fields must match the approved brief;
- privacy consent must be explicit;
- spam protection must be active;
- success and failure behavior must be understandable;
- a real test submission must be received;
- mobile and keyboard interaction must be verified.

## 9. Release Checklist

- [ ] Public copy matches `PUBLIC_WEBSITE_BRIEF.md` and is proofread.
- [ ] Every displayed asset is approved and has a source record.
- [ ] Required fictional/spec disclosure is visible.
- [ ] Normal visitors cannot access unfinished payment behavior.
- [ ] Any displayed price, purchase, delivery, support, contact, legal, company, and social destination is real and tested.
- [ ] Desktop, tablet, and mobile layouts are visually reviewed.
- [ ] Keyboard, focus, contrast, alt text, form errors, reduced motion, touch behavior, and autoplay fallbacks work.
- [ ] Images and videos are optimized; below-the-fold media is lazy-loaded where appropriate.
- [ ] SEO title, description, canonical URL, favicon, and social preview metadata are final.
- [ ] Tests and production build pass.
- [ ] The user gives explicit approval immediately before public deployment.

If payment and delivery are not tested, the product is not launched. If public-release approval is missing, keep the site local, private, preview-only, or draft.

## 10. Deployment and Release Record

Current record:

- Public URL: `https://hezzstudio.site/` only when the approved deployment is confirmed.
- Preview route: `/website-preview` in the internal app.
- Purchase URL: pending final commercial readiness.
- Delivery path: pending final commercial readiness.
- Inquiry destination: implemented in source; real receipt test remains part of the checklist.
- Deployment version: pending release record.
- Approved by: pending explicit approval.

Do not infer release completion from source code, a local build, an existing domain, or a test transaction.

## 11. Maintenance Responsibilities

After launch, the HEZZ Studio Web Developer owns:

- copy, image, video, product-state, link, and disclosure updates;
- broken-link, inquiry, checkout, and delivery-path checks;
- responsive and browser regression handling;
- performance, accessibility, SEO, and metadata maintenance;
- domain, certificate, analytics, and deployment health;
- campaign, Lab Note, Guidebook, and approved sales-page additions;
- rollback-ready release history and documented maintenance changes.

Upstream decisions remain with their approved HEZZ Studio or shared-company owners. The Web Developer owns accurate public presentation and technical operation.
