# CWKIT website

A responsive, single-page company website for CWKIT, built with plain HTML, CSS and JavaScript. No framework, build step or paid website builder is required.

## Run locally
1. Extract the ZIP.
2. Open the `cwkit-website` folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

## Before publishing
1. Open `script.js`.
2. Set `CONTACT_EMAIL` to an inbox you control, for example `hello@cwkit.in` only if you have actually created that mailbox.
3. Replace any copy that does not accurately describe the services you can currently deliver.
4. Add a real business phone number, legal business name, address and social links only when ready. Do not publish invented testimonials, client logos or certifications.

## Publish on Vercel
This is a static site:
1. Create a GitHub repository and upload the contents of this folder (the `index.html`, `styles.css`, `script.js`, `assets` and README files).
2. In Vercel, import the repository.
3. Framework preset: **Other**. Build command: leave blank. Output directory: `.` (or leave the default if Vercel detects the static files).
4. Deploy.
5. In Vercel Project Settings → Domains, add `cwkit.in` and `www.cwkit.in`.
6. Copy the DNS records Vercel displays into the DNS manager at your domain registrar. Do not delete existing mail-related MX, SPF, DKIM or DMARC records.

## Contact form
The form validates fields in the browser and creates a prefilled email draft using the visitor's email application. It does not store or transmit submissions to a server. For a production enquiry form that submits directly from the website, connect a form service or a backend endpoint and add spam protection.

## Current scope
- Responsive layout and mobile navigation
- Services, approach, about, FAQ and contact sections
- SEO title, description and social metadata
- Contact form validation and mail-draft generation (after configuring `CONTACT_EMAIL`)
- Reduced-motion support

The site does not claim certifications, client results or service-level guarantees.

## Additional launch materials
- `BUSINESS-LAUNCH-PLAN.md`: positioning, indicative pilot pricing, validation plan and operating controls.
- `OUTREACH-TEMPLATES.md`: editable prospecting and discovery templates.
- `GO-LIVE-CHECKLIST.md`: deployment and launch checklist.
- `privacy.html` and `terms.html`: starter legal pages that must be reviewed and completed before publication.
