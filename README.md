# Northwind Studio — static site

A small static website: plain HTML, one shared stylesheet, and a little
vanilla JavaScript. No build step, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Homepage — hero, service cards, CTA |
| `about.html` | About page — intro, how we work, values, team |
| `styles.css` | Shared stylesheet for both pages |
| `main.js` | Mobile nav toggle, footer year, smooth anchor scroll |

## Running locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Opening the `.html` files directly from disk works too, though serving them
over HTTP matches how they will behave when deployed.

## Customising

Colours, spacing, radius and max width are all CSS custom properties declared
in `:root` at the top of `styles.css`. Change them there and both pages
follow. The placeholder brand name is "Northwind" — replace the logo text in
each page's header and footer.
