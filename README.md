# Casa Sole Companion

Project Helios is the React and Tailwind web app for Casa Sole Companion, a mobile-first digital concierge for Casa Sole guests staying at Sharm Hills Resort.

Current guest URL concept:

```text
casasole.info/sharmhills
```

`/sharmhills` is now the language selection landing page.
The English guest guide opens at:

```text
casasole.info/sharmhills/en
```

## Product Direction

- Casa Sole is the parent brand.
- Sharm Hills is the current resort context.
- The first release is resort-based, not apartment-based.
- Guest instructions are shared across the resort.
- Unit-specific private details such as Wi-Fi passwords and access codes stay printed inside each apartment.

## Current App Shape

- `/` shows the Casa Sole Companion app.
- `/sharmhills` shows the Sharm Hills language selection screen.
- `/sharmhills/en` shows the English Sharm Hills resort guest experience.
- The first screen includes a premium mobile concierge layout, quick actions, and a guest journey timeline.
- Each journey item has its own screen, for example `/sharmhills/arrival`, `/sharmhills/check-in`, `/sharmhills/checkout`, and `/sharmhills/airport-departure`.
- The journey runs from Arrival through Check-in, stay guidance, resort/explore/food/transport, FAQ, Checkout, Airport Departure, Returning Guest Club, and Contact.
- The visual palette is based on the Casa Sole logo: navy, sea blue, sun gold, warm sand, sky, waves, and beach tones.
- Journey screens can include action buttons for Google Maps, WhatsApp, phone calls, review links, and external service links.
- Owner-friendly settings live in `content/brandSettings.ts`.
- Owner-friendly text, timeline pages, Maps, WhatsApp, phone, and review links live in `content/siteContent.ts`.
- Simple editing instructions are in `OWNER_EDITING_GUIDE.md`.
- v5 uses the transparent PNG logo without a white background, locks the app to light mode, adds subtle animated sea/birds, and uses WhatsApp support instead of an emergency/call module.
- v6 added a fixed top bar with logo, one-week Sharm El Sheikh forecast, improved flapping birds, press motion on buttons, Facilities Around You, and WhatsApp-only taxi support.
- v8 makes the phone speaker control use generated ocean audio directly from the tap, with a clearer active speaker state.
- v10 replaces the rejected CSS palm shapes with the actual palm silhouette photo provided by the owner, anchored from the bottom-right of the blue hero background, and renames the app title to Casa Sole Sharm Hills.
- v11 removes the speaker from the top bar, keeps logo and weather only, and adds symbols to the four quick action cards.

## Useful Commands

```bash
npm install
npm run dev
```

For Windows preview, keep the project in a normal local folder such as `C:\Projects\casa-sole-companion`. Do not run `npm install` inside Google Drive, OneDrive, Dropbox, or another synced folder because those tools can lock package files while npm is writing them.

The `dev:sites`, `build:sites`, and `start:sites` commands are kept for the Cloudflare/Sites deployment workflow.
