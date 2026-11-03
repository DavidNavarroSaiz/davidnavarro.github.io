# Portfolio analytics

The portfolio uses Umami Cloud for privacy-conscious, aggregate product analytics.
The tracker is loaded only when the runtime hostname is
`davidnavarrosaiz.github.io`; local development and preview hosts do not load the
script or send events. Automatic pageviews and client-side route tracking remain
enabled by the Umami script. No custom analytics backend or public dashboard is
part of the portfolio.

## Configuration

- Tracker: `https://cloud.umami.is/script.js`
- Website ID: `80e8267f-8d6f-4b68-baea-52d41f267d48` (public client-side configuration)
- Production domain restriction: `davidnavarrosaiz.github.io`
- GitHub Pages path: `/davidnavarro.github.io`

## Events

| Event | Properties | Placement or condition |
| --- | --- | --- |
| `cv_download_click` | `cv_type`, `placement` | Homepage hero PDF links; click intent only, not confirmed download |
| `contact_submit_success` | none | Contact page and Hire Me form, only after the EmailJS operation returns success |
| `linkedin_outbound` | `destination: linkedin` | Shared footer LinkedIn link |
| `github_outbound` | `destination: github` | Shared footer GitHub link |
| `project_view_changed` | `view` | Projects Featured / Chronology control when the selection changes |
| `ai_profile_opened` | none | About-page machine-readable profile link |

No event includes form values, email addresses, names, phone numbers, messages,
EmailJS errors, search queries, recruiter identifiers, or other individualized
visitor data. The Umami dashboard remains private.

## Campaign-link examples

These use ordinary low-cardinality UTM values and do not identify individual
people:

```text
https://davidnavarrosaiz.github.io/davidnavarro.github.io/?utm_source=linkedin&utm_medium=profile&utm_campaign=portfolio
https://davidnavarrosaiz.github.io/davidnavarro.github.io/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio
https://davidnavarrosaiz.github.io/davidnavarro.github.io/?utm_source=github&utm_medium=profile&utm_campaign=portfolio
https://davidnavarrosaiz.github.io/davidnavarro.github.io/?utm_source=job_application&utm_medium=application&utm_campaign=portfolio
```
