# BV COM project instructions

## Project context

BV COM is a real client website for a German telecom retail business with multiple branches. The stack is Next.js 16 App Router, TypeScript, Tailwind CSS, shadcn, lucide-react, and motion, with Git/GitHub for version control.

## Architecture

- Work directly in the existing repository at `C:\Users\nilou\bv-com` on `main`; do not create a separate checkout or worktree unless requested.
- Keep routes and layouts in `src/app`, reusable components in `src/components`, shared content and types in `src/data`, and utilities in `src/lib`.
- Preserve the branch-specific architecture: `/filialen/[slug]` resolves branches from shared branch data. Unknown branches must return a proper 404.
- Keep branch contact details and other shared business data in a single source of truth. Avoid duplicating service and partner definitions across pages.
- News, offers, branches, and other content will later be managed through a CMS. Keep content models separate from presentation where practical, but do not introduce a CMS or change architecture without an agreed scope.
- Explain the plan before implementing risky or architectural changes.

## Design constraints

- Preserve the current visual language: clean, modern, professional, and restrained.
- Use a white/light gray base with the existing fuchsia BV COM accent. Do not over-design or introduce an unsolicited redesign.
- Preserve the animated partner-logo background.
- Telekom, Vodafone, O2, and congstar are primary partners. Strom & Gas is an important service and must retain appropriate prominence.
- Reuse existing components, spacing, typography, and interaction patterns where suitable.
- Keep customer-facing copy in German. Do not invent real business details, prices, claims, or contact information.

## Responsive and accessibility requirements

- Polish both desktop and mobile layouts. Check affected pages at phone, tablet, and desktop widths, including relevant breakpoint transitions.
- Avoid horizontal overflow, clipped content, overlapping controls, and fixed elements that obscure content.
- Preserve branch-specific mobile call and WhatsApp actions. Account for safe areas when changing fixed mobile controls.
- Support touch and keyboard interaction; do not rely exclusively on hover for essential functionality.
- Use semantic elements, accessible control names, visible focus, and appropriate focus management for dialogs or drawers.
- Respect reduced-motion preferences while retaining the animated background for users who allow motion.

## Assets

- Store public assets in `public` and reference them with root-relative URLs that omit `public`.
- Preserve existing asset filenames and exact casing; deployments may use case-sensitive filesystems.
- Required existing URLs include `/partners/Otelo_logo.svg` and `/partners/strom-gas.png`.
- Use descriptive lowercase kebab-case filenames for new assets, without spaces. Do not rename existing assets merely to enforce this convention.
- Do not replace or distort partner logos. Preserve aspect ratios, use suitable image dimensions, and provide meaningful alt text for informative images; decorative images should have empty alt text.
- Verify asset references after any move or rename. Do not commit credentials or sensitive metadata in assets.

## TypeScript and Next.js conventions

- Follow the installed Next.js version and the bundled documentation referenced below; do not assume older APIs still apply.
- Use TypeScript with explicit shared data and component prop types. Avoid `any`, suppressed errors, or weakened compiler/lint settings as shortcuts.
- Prefer Server Components by default. Add `"use client"` only where state, effects, browser APIs, or interaction require it, and keep client boundaries focused.
- Use App Router conventions, `next/link` for internal navigation, and `next/image` where appropriate.
- Keep secrets and server-only code out of client components and public assets.
- Reuse Tailwind, shadcn, lucide-react, and motion rather than adding overlapping dependencies without a concrete need.
- Preserve valid metadata, language settings, route behavior, and 404 handling when changing pages.

## Preserve existing functionality

- Inspect the relevant code and current behavior before editing. Keep changes within the requested scope.
- Preserve existing navigation, branch routing, contact actions, partner branding, animation, and responsive behavior unless the task explicitly changes them.
- Do not overwrite unrelated or pre-existing user changes. If they conflict with the task, explain the conflict before proceeding.
- Do not silently remove features to resolve an error. Report incomplete areas or blockers accurately.

## Validation and Git workflow

1. Before starting each task, run `git status` and inspect the current branch and existing changes.
2. Keep each coherent feature or fix small and focused. Split large tasks into logical milestones; never combine unrelated work in one commit.
3. Before every commit, run checks appropriate to the change. For application code, run `npm run lint` and `npm run build`, plus relevant existing tests and browser checks for UI changes. On Windows, use `npm.cmd` if PowerShell blocks `npm.ps1`.
4. For documentation-only changes, review the content and run `git diff --check`; a production build is not required unless application behavior is affected.
5. Review the complete diff and staged changes, including checks for accidental files, secrets, regressions, and unrelated changes. Resolve check failures caused by the change; report any unresolved validation blockers before committing.
6. Tell the user what changed and what validation passed, then create a small, descriptive Git commit and push to `origin/main` after each completed feature or fix.
7. If the user explicitly asks to review a file or change before committing, show it and wait for their approval before committing or pushing. Honor explicit inspection-only or no-commit instructions.
8. Never force push, rewrite Git history, or commit secrets, environment files, credentials, or API keys.
9. Stage only intended files. After committing and pushing, verify Git status and report the commit and push result accurately.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
