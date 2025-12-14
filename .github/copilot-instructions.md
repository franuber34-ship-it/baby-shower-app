# Baby Shower Digital Invitation Generator

## Architecture Overview

Multi-page web application for creating personalized digital baby shower invitations with:
- **Firebase Realtime Database** for invitation storage and guest confirmations
- **Gender-specific workflows** (`boy/` and `girl/` folders) with separate style systems
- **Dual-mode architecture**: Admin creation flow + Guest RSVP view
- **Multi-step form** (gender → color → effects → theme → form → preview)

## Critical Data Flow Patterns

### State Management via localStorage
The app persists user selections across pages using localStorage keys:
- `boySelectedColor` / `girlSelectedColor` - Hex color values
- `boySelectedEffects` / `girlSelectedEffects` - JSON array of effect IDs
- `boySelectedTheme` / `girlSelectedTheme` - Theme identifier
- `boyFormData` / `girlFormData` - Complete form submission data
- `babyShowerLanguage` - User's language preference (es/en)

**Important**: Each gender flow has separate localStorage keys to prevent cross-contamination.

### Firebase Data Structure
```
invitations/{invitationId}
  ├─ token: string (8-char short token for privacy)
  ├─ gender: "M" | "F"
  ├─ color: hex string
  ├─ effects: array of effect IDs
  ├─ theme: theme object with fontFamily
  ├─ babyName, fatherName, motherName: strings
  ├─ date, time, address, googleMapsLink, wazeLink
  ├─ message: string
  └─ gifts: array of gift objects

confirmations/{invitationId}/{pushId}
  ├─ name: string
  ├─ phone: string
  ├─ count: number
  ├─ selectedGifts: array
  └─ savedAt: timestamp
```

### URL Structure
- **Admin creation**: `/index.html` → `/pages/{boy|girl}/color.html` → `effects.html` → `theme.html` → `form.html` → `preview.html?mode=admin`
- **Guest view**: `/pages/{boy|girl}/preview.html?id={invitationId}&mode=guest`
- **Admin dashboard**: `/admin-dashboard.html` (requires Firebase Auth)

## File Navigation Patterns

### Gender-Specific Pages
Each gender has parallel file structures:
```
pages/boy/                    pages/girl/
  ├─ boy-color.js               ├─ girl-color.js
  ├─ boy-effects.js             ├─ girl-effects.js
  ├─ boy-theme.js               ├─ girl-theme.js
  ├─ boy-form.js                ├─ girl-form.js
  └─ boy-preview.js             └─ girl-preview.js
```

When editing, **always update both boy AND girl versions** for consistency.

### Shared Resources
- [app.js](app.js) - Main orchestrator (only used in root [index.html](index.html))
- [firebase.js](firebase.js) - Firebase utility functions (loaded globally)
- [styles.css](styles.css) - Global CSS with CSS variables for theming
- `recursos/{boy|girl}/` - SVG assets for floating effects

## Key Conventions

### Internationalization (i18n)
Two systems coexist:
1. **Root app.js**: `translations` object with `t(key)` function for [index.html](index.html)
2. **Page-specific**: Each `boy-*.js` / `girl-*.js` has own `langMap` object with `getLang()` / `getTexts()`

Language preference stored in `localStorage.babyShowerLanguage` (defaults to 'es').

### Color System
Uses CSS custom properties set dynamically:
```javascript
document.documentElement.style.setProperty('--primary-color', selectedColor);
```

Boy colors (blues/teals) vs Girl colors (pinks/purples) defined in [app.js](app.js#L462) `colorPalettes` object.

### Effect System
Effects are SVG-based animations stored in `recursos/{gender}/` and referenced by ID:
- Boy: `football`, `footprints`, `animals`, `waves`, `cars`, `tools`
- Girl: `stars`, `leaves`, `animals-f`, `footprints-f`, `balloons`, `waves-f`

Max 3 effects per invitation enforced in UI.

### Form Validation
Phone numbers validated using country-specific digit requirements from `countryCodes` array in [app.js](app.js#L302):
```javascript
{ code: '+52', country: 'México', flag: '🇲🇽', digits: 10 }
```

## Firebase Security Rules

From [FIREBASE_RULES.json](FIREBASE_RULES.json):
- **Invitations**: Public read, no public write (admin-only via Auth)
- **Confirmations**: Public read/write (guests submit RSVPs directly)

Rate limiting for confirmations enforced client-side via localStorage timestamps.

## Admin Authentication

Login at [admin-login.html](admin-login.html) uses Firebase Auth (`signInWithEmailAndPassword`).
Dashboard at [admin-dashboard.html](admin-dashboard.html) shows all invitations + confirmation stats.

## Export Functionality

Guest view generates PDF via [html2canvas](export/html2canvas.min.js) + [jsPDF](export/jspdf.umd.min.js):
1. Render invitation DOM to canvas
2. Convert to image
3. Embed in PDF with proper dimensions

Located in [boy-preview.js](pages/boy/boy-preview.js#L790) / `girl-preview.js`.

## Common Pitfalls

1. **Don't mix gender data**: Always check `localStorage` keys match current gender flow
2. **Firebase token requirement**: All invitations need 8-char `token` field for privacy (auto-generated in [firebase.js](firebase.js#L21))
3. **CSS custom properties**: Changes to color/theme must update `--primary-color` variable
4. **Page redirection**: Root [pages/index.html](pages/index.html) redirects to `../../index.html` - it's a navigation guard
5. **Language consistency**: When adding text, update BOTH `es` and `en` in all relevant i18n objects

## Testing Workflow

1. **Local dev**: Open [index.html](index.html) in browser (no build step required)
2. **Create invitation**: Select gender → customize → fill form → generate
3. **Guest view**: Copy generated link from preview, open in new tab
4. **Admin view**: Login at [admin-login.html](admin-login.html) to see all invitations

No package.json or build process - pure client-side HTML/CSS/JS application.

## Adding New Features

### New Effect
1. Add SVG to `recursos/{boy|girl}/new-effect.svg`
2. Add to `floatingEffects` object in [app.js](app.js#L618)
3. Update `effectLabels` in `boy-effects.js` / `girl-effects.js`
4. Add CSS animation in [styles.css](styles.css)

### New Theme
1. Add to `themes` array in [app.js](app.js#L650) with fontFamily
2. Update `themeLabels` in `boy-theme.js` / `girl-theme.js`
3. Font family will apply to invitation text via inline styles

### New Gift
Modify `giftsList` array in [app.js](app.js#L680) - each gift needs `name` and `icon` (SVG string).
