# CWKIT go-live checklist

## Required before public launch
- [ ] Confirm the legal operator / business identity and whether CWKIT is a registered entity or brand.
- [ ] Create and test the business email address.
- [ ] Set `CONTACT_EMAIL` in `script.js` to that working mailbox.
- [ ] Decide if you want a direct web form; current form opens a mail draft and does not send/store data.
- [ ] Review every service description and remove anything you cannot currently deliver.
- [ ] Add genuine contact details and social links, or omit them.
- [ ] Review `privacy.html` and `terms.html` with a qualified adviser and complete missing legal details.
- [ ] Check trademark/name availability before spending on branding.
- [ ] Test the site on a phone and desktop.

## Deploy
- [ ] Create a GitHub repository and upload the project files.
- [ ] Import repository into Vercel as a static site (Framework: Other; no build command; output directory `.`).
- [ ] Add `cwkit.in` and `www.cwkit.in` in Vercel Domains.
- [ ] Copy the exact DNS records Vercel provides into the domain registrar.
- [ ] Do not remove existing MX, SPF, DKIM or DMARC records used by email.
- [ ] Wait for DNS propagation and verify HTTPS on both hostnames.
- [ ] Submit `https://cwkit.in/sitemap.xml` in Google Search Console after the site is live.

## After launch
- [ ] Send a test enquiry and verify it opens the intended email draft.
- [ ] Verify navigation, page links, title, description and mobile layout.
- [ ] Add analytics only if needed and update the privacy notice accordingly.
- [ ] Keep a copy of the source in GitHub and a local backup.
