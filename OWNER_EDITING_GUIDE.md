# Casa Sole Owner Editing Guide

This project is now arranged so small edits can be made without touching the main app design code.

## 1. Change Brand, Logo, Font, Colors, Background

Edit this file:

```text
content/brandSettings.ts
```

You can safely edit:

```ts
brandName: "Casa Sole",
resortName: "Sharm Hills Resort",
appName: "Casa Sole Sharm Hills",
logoPath: "/casa-sole-logo.png",
fontStyle: "luxury",
heroMood: "sunrise",
logoTransparent: true,
enableMotion: true,
topBarTransparency: "more-transparent",
showEmergency: false,
```

The logo file should be a transparent PNG. Put it in:

```text
public/
```

Then point to it like:

```ts
logoPath: "/casa-sole-logo.png",
```

Safe font choices:

```ts
fontStyle: "modern"
fontStyle: "luxury"
fontStyle: "clean"
```

Safe hero background choices:

```ts
heroMood: "sunrise"
heroMood: "sea"
heroMood: "sand"
```

Motion:

```ts
enableMotion: true
```

Set it to `false` if you want a calmer app.

Weather forecast settings are also in `content/brandSettings.ts`:

```ts
weather: {
  enabled: true,
  label: "Sharm El Sheikh",
  latitude: 27.9158,
  longitude: 34.3299,
  timezone: "Africa%2FCairo",
},
```

The app shows a fallback forecast immediately and then updates if live weather is available.

Weather note: the current preview uses a free forecast source and may not exactly match AccuWeather. Exact AccuWeather matching would require an AccuWeather API key later.

v10 note: the palm background uses the real image file at `public/palm-silhouettes.jpg`. Replace that file if you want a different palm silhouette later.

You can also edit colors:

```ts
navy: "#173F8A",
seaBlue: "#1F77B4",
sunGold: "#F4B83A",
warmSand: "#F7EFE0",
```

Use hex color codes only.

## 2. Change Guest Text, Timeline Pages, Maps, WhatsApp

Edit this file:

```text
content/siteContent.ts
```

This controls:

- homepage quick action cards
- private Wi-Fi/code message
- guest timeline
- page titles
- page summaries
- editable guest note boxes
- editable page detail labels and text
- Google Maps links
- WhatsApp links
- phone links
- review links

Each page now has its own editable blue note box:

```ts
guestNote: {
  title: "Arrival note",
  text: "Keep this page simple because guests may open it while travelling.",
},
```

Each white instruction card also has an editable label and text:

```ts
details: [
  {
    label: "Airport arrival",
    text: "Use this screen for airport arrival, transfer guidance, and the Sharm Hills map link.",
  },
],
```

Edit only the words inside quotation marks. Keep the commas, braces, and brackets.

In v5, the guest support style is WhatsApp-first. The Emergency page was removed from the journey.

In v6, `Facilities Around You` replaces the old food delivery page. Add pharmacy, market, laundry, supermarket, ATM, and other nearby services there.

## 3. Change WhatsApp Link

Find:

```ts
href: "https://wa.me/",
```

Replace it with your number in international format, without `+` or spaces:

```ts
href: "https://wa.me/201234567890",
```

Example for Egypt:

```ts
href: "https://wa.me/201001234567",
```

## 4. Change Google Maps Link

Use a normal Google Maps share/search link.

Example:

```ts
href: "https://www.google.com/maps/search/?api=1&query=Sharm%20Hills%20Resort%20Sharm%20El%20Sheikh",
```

Later, we can replace these with exact saved pins.

## 5. Add Photos

Put photos inside:

```text
public/photos/
```

Example:

```text
public/photos/pool.jpg
public/photos/beach.jpg
public/photos/apartment-living-room.jpg
```

Page photo sliders are supported now. Put photos in a folder such as:

```text
public/photos/beach/
```

Then add them to the page in `content/siteContent.ts`:

```ts
photos: [
  {
    src: "/photos/beach/sinbad-beach-01.png",
    alt: "Sinbad Beach covered seating area",
  },
],
```

The app will automatically show a left/right swipe photo slider on that page.

The logo is supported separately through:

```ts
logoPath: "/casa-sole-logo.png",
```

## 6. Preview After Editing

In VS Code terminal:

```cmd
npm run dev
```

Open:

```text
http://localhost:3000/sharmhills
```

This opens the language selection page. The English guide opens at:

```text
http://localhost:3000/sharmhills/en
```

If the app is already running, most changes appear after refreshing the browser.
