# edward-levy-law

Website for the Law Office of Levy & Guagliardi, a real estate and wills practice in West Caldwell, NJ. A small three-page static site (Home, Services, Contact) built with React and deployed on Netlify.

## Stack

- [React](https://react.dev) 19 and [React Router](https://reactrouter.com) 7 (client-side routing)
- [styled-components](https://styled-components.com) 6 for styling
- [Vite](https://vite.dev) 8 for dev server and builds, with [`@mdx-js/rollup`](https://mdxjs.com/packages/rollup/) compiling the markdown pages into components
- [ESLint](https://eslint.org) 9 (flat config)
- [Netlify](https://www.netlify.com) for hosting and continuous deployment

## Getting started

Requires Node `^20.19.0 || >=22.12.0`.

```sh
npm install
npm start        # dev server at http://localhost:5173
npm run build    # production build into build/
npm run preview  # serve the production build locally
npm run lint     # ESLint (also what `npm test` runs; there are no unit tests)
```

## Editing the page text

The copy for each page is plain markdown in [`src/content/`](src/content):

| File | Page |
| --- | --- |
| `home.md` | Home (the photo above the text lives in `src/components/pages/HomePage`) |
| `services.md` | Services |
| `contact.md` | Contact (the embedded map lives in `src/components/pages/ContactPage`) |

Edit a file and the site updates; no React knowledge is needed. At build time each `.md` file is compiled into a React component, and its headings and paragraphs are mapped to the site's styled components in [`src/components/mdComponents.js`](src/components/mdComponents.js). Use plain markdown only (no JSX).

Navigation links are listed in [`src/components/Header/index.jsx`](src/components/Header/index.jsx). A new page needs a markdown file, a page component, a `<Route>` in `src/components/App.jsx`, and a nav entry.

## Deployment

Netlify builds with `npm run build` and publishes `build/` (see [`netlify.toml`](netlify.toml)). A catch-all rewrite to `/index.html` makes client-side routes such as `/services` work on a direct page load.

### Analytics (optional)

Google Analytics 4 is off by default. To enable it, set `VITE_GA_MEASUREMENT_ID` (a `G-XXXXXXXXXX` id) in the Netlify site's environment variables and redeploy. With the variable unset, no analytics code runs and no third-party scripts load.

## License

The source code is released under the [MIT License](LICENSE).

The MIT license covers the code only. The written content (`src/content/`), photographs and images (`src/assets/`), and the firm's name and branding belong to the Law Office of Levy & Guagliardi, and all rights in them are reserved. Please don't reuse them without permission.
