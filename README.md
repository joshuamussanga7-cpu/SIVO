# SIVO

**Earn. Explore. Evolve.**

SIVO is an independent, global-minded online earning platform concept that brings together eligible surveys, partner offers, microjobs, AI/data tasks, referrals and progress features in one user experience.

> **Current status:** Early frontend foundation. The website is a visual prototype; authentication, live task providers, wallet accounting, payouts, KYC and production policies are not connected yet. Example rewards shown in the interface are illustrative only.

## Product principles

- Build the public website and user-facing experience first; add internal administration later.
- Design for international users while respecting provider, country, age and legal restrictions.
- Review SAVI's actual policy documents and adapt them specifically for SIVO. Do not assume SAVI's terms automatically apply to SIVO.
- Keep pending and approved rewards distinct.
- Use a server-controlled, auditable transaction ledger for balances. Never allow the browser to directly credit a wallet.
- Validate provider webhooks, signatures, idempotency and reward status server-side.
- Do not store secrets in source control; use environment variables and provider secret management.
- Build for a future Android client by keeping core business rules behind a stable backend API.

## Planned user-facing areas

- Public landing page and how-it-works content
- Account registration, login and recovery
- User dashboard and opportunity discovery
- Task details, submission and reward status
- Wallet, transaction history and withdrawal requests
- Referral tracking, achievements and notifications
- Profile, verification where required, and support
- Privacy, terms, cookies and other reviewed legal documents

## Initial stack

- Next.js App Router, React and TypeScript
- Tailwind CSS and custom SIVO design tokens
- Framer Motion for restrained motion
- Lucide React icons
- Planned backend: TypeScript API and PostgreSQL with a ledger-oriented data model
- Planned hosting: Vercel for the web application; backend/database provider to be chosen after requirements and cost review

## Run locally

Requirements: Node.js LTS and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Useful checks:

```bash
npm run typecheck
npm run build
```

## Environment and deployment

No live service credentials are required for the current landing-page prototype. Before connecting auth, database, task providers, analytics or payouts, create environment-variable templates and configure secrets in the hosting provider. Never commit real API keys, access tokens, service-account files or production user data.

## Development sequence

1. Establish the visual system and responsive user-facing screens.
2. Review SAVI's actual policy documents and adapt them specifically for SIVO.
3. Finalize product rules, eligibility, reward states, payout methods and provider contracts.
4. Design the database, audit model and backend API.
5. Connect authentication and profile/security flows.
6. Integrate task providers and verified server-side reward callbacks.
7. Implement wallet ledger, withdrawal requests, reconciliation and fraud controls.
8. Test accessibility, security, responsive behavior, provider failure cases and production readiness.
9. Plan Android integration against the same backend API.

## Important

This repository is not yet a production earning or payment system. Do not accept real users or real money until the backend, security controls, provider agreements, payout operations, privacy requirements and applicable legal obligations have been implemented and reviewed.
