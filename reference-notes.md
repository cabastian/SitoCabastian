# Reference site notes

## Structure observed

The reference site is a single-page hospitality landing page in Italian with the following sequence:

1. Transparent top navigation over the hero with links for brand, gallery, booking, and contact.
2. Large hero section with background photo, property title, small subtitle label, short descriptive paragraph, and two call-to-action buttons.
3. Rooms summary section titled **Le nostre camere** with four room cards and two highlight stats.
4. Image-switching section titled **I nostri spazi** with tabs/buttons for each room.
5. Services grid titled **Servizi e comfort**.
6. Reviews/testimonials section titled **Cosa dicono i nostri ospiti** with rating summary and three review cards.
7. Booking/contact form titled **Prenota il tuo soggiorno** with date fields, room selector, email, message, and a primary submit button.
8. Footer links repeating gallery and booking anchors.

## Content and functionality observed

- Brand/title: **Ca' Bastian**.
- Subtitle: **Guest House**.
- Hero CTAs: **PRENOTA ORA** and **SCOPRI DI PIÙ**.
- Room switcher buttons: **Camera 5**, **Camera 22**, **Camera 124**, **Suite 19**.
- Booking form fields: check-in, check-out, room selector, email, message.
- Services listed: dedicated indoor Wi‑Fi, dedicated outdoor Wi‑Fi, security cameras, small garden, parking, equipped kitchen, air conditioning, smart TV, washing machine, coffee machine.
- Reviews section shows **5.0 · 48 recensioni** and three testimonial cards.
- Price note in booking area: **A partire da €170 / notte · minimo 2 notti**.

## Rebuild direction

- Recreate the overall section order and interaction model while keeping implementation static and GitHub Pages friendly.
- Use the user-provided room images in the room-switching gallery as the main visual content.
- Preserve the visible buttons and anchor-style navigation from the reference.
- Avoid backend-only behavior; keep interactions client-side and simple to manage.
- Structure files so content arrays can drive rooms, services, and reviews from a single page/component.

## Uploaded room photo observations

- The provided photography is warm, domestic, and real-estate oriented rather than heavily staged luxury content.
- Images are mostly vertical and work well for room galleries, stacked mosaics, and framed preview cards.
- Visual themes include warm wood, cream walls, terracotta tones, and practical details such as bathrooms, stairs, and furnishings.
- The site design should therefore prioritize a warm editorial presentation with strong framing around vertical images, instead of relying on ultra-wide cinematic crops only.
- A contained implementation can use one featured image per active room plus a secondary thumbnail strip or compact grid sourced from the same room folder.

## Preview validation

The recreated page renders with the intended section order and all main buttons visible. The room switcher updates correctly from Camera 5 to Suite 19, and the thumbnail set changes with the selected room as expected. The booking form, services grid, reviews block, and anchor-style navigation are all present in the preview, which confirms the static interaction model is working.
