
Claude finished the response
You said: make me a new landing page for https://www.
make me a new landing page for https://www.naphcare.com/. Make it have a new style

Jun 5
Claude responded: Now I have a solid understanding of the site content and design principles.

Searched the web, viewed a file
Searched the web, viewed a file
Now I have a solid understanding of the site content and design principles. Let me build a bold, distinctive redesign.


Created a file, read a file
Created a file, read a file
Here's the redesigned NaphCare landing page! The new style features:

Aesthetic direction — Editorial Navy & Teal: A refined, trust-forward design that feels closer to a premium healthcare brand than a government contractor.

Key design choices:

Dark navy hero with subtle grid lines and radial glows — authoritative and modern
DM Serif Display + DM Sans pairing — editorial warmth meets clean readability
Scrolling marquee band in teal highlighting all service offerings
Hover-reveal cards — serve and news cards invert to navy on hover with teal accents
Stats card in the hero showing key numbers at a glance
Sticky services nav with animated active states
Pull quote section in solid teal — bold and credible
Careers section with a live-feel roles board on a dark background
Smooth scroll-triggered fade-in animations throughout
All links point back to the real naphcare.com pages.


Naphcare landing
Code · HTML 
You said: take out the em dashes
take out the em dashes

Jun 5
Claude responded: Now let me fix the service tile names that had em dashes so they still read cleanly: Done!

Viewed a file, ran a command
Viewed a file, ran a command
Now let me fix the service tile names that had em dashes so they still read cleanly:


Ran 2 commands, edited a file, read a file
Ran 2 commands, edited a file, read a file
Done! All em dashes are gone. The service tile names that previously used them (like "Pharmacy — NaphCare Rx") now use colons instead, and any that appeared mid-sentence were replaced with commas to keep the prose flowing naturally.


Naphcare landing
Code · HTML 
You said: is there not any css or javascript with this?
is there not any css or javascript with this?

12:21 PM
Claude responded: The HTML file has all the CSS and JavaScript built right into it — it's a single self-contained file.
The HTML file has all the CSS and JavaScript built right into it — it's a single self-contained file. The CSS is in a <style> block in the <head>, and the JavaScript is in a <script> block at the bottom of the <body>. There are no separate .css or .js files because everything is bundled together.

If you'd like them split into separate files (e.g. naphcare.html, naphcare.css, and naphcare.js), I can do that — just let me know!

You said: i see the landing page here but when i deployed in vercel from my github it says 404
i see the landing page here but when i deployed in vercel from my github it says 404

12:25 PM
Claude responded: That's a filename issue — Vercel expects the main file to be named index.
That's a filename issue — Vercel expects the main file to be named index.html. Your file is named naphcare-landing.html, so Vercel doesn't know what to serve at the root URL.

Two ways to fix it:

Option 1 — Rename the file (easiest): Rename naphcare-landing.html to index.html in your GitHub repo. Vercel will automatically pick it up.

Option 2 — Add a vercel.json: Add this file to your repo root to tell Vercel which file to serve:

json
{
  "rewrites": [{ "source": "/", "destination": "/naphcare-landing.html" }]
}
Option 1 is simpler. Want me to generate a renamed index.html version you can drop straight into your repo?

You said: yes and make a separate css and javascript file
yes and make a separate css and javascript file

12:26 PM
Claude responded: Now I have everything.

View the full HTML file to extract CSS and JS
View the full HTML file to extract CSS and JS
Now I have everything. Let me view the truncated CSS section too:


View truncated CSS section
View truncated CSS section
Now I have everything. Let me create the three separate files:


Created 3 files, read a file
Created 3 files, read a file
Here are all three files. Just drop them into your GitHub repo root as-is:

index.html — the HTML structure, links to the CSS and JS
style.css — all the styles
main.js — the scroll animations and nav interactions
All three files need to be in the same folder for the links to work. Push them to your repo and Vercel will serve index.html automatically at your root URL.


Index
Code · HTML 

Style
Code · CSS 

Main
JS 
You said: this is how this section is being displayed in my deployment, fix it
Screenshot 2026-06-06 123605.png
this is how this section is being displayed in my deployment, fix it

12:37 PM
Claude responded: The services nav is stacking horizontally instead of vertically because the sticky sidebar layout is collapsing.
The services nav is stacking horizontally instead of vertically because the sticky sidebar layout is collapsing. The grid-template-columns: 1fr 2fr isn't holding. Let me fix the CSS for that section.


Fix services layout and nav to display correctly
Fix services layout and nav to display correctly
Also update the responsive breakpoint to handle the services nav on mobile:


Edited a file, read a file
Edited a file, read a file
Replace your style.css in GitHub with this updated one. The key fixes:

Changed the grid from 1fr 2fr (relative units that can collapse) to a fixed 220px 1fr so the sidebar always holds its width
Added display: flex; flex-direction: column explicitly to .services-nav so the links always stack vertically
Added white-space: nowrap to prevent nav items from wrapping mid-word and looking broken
Fixed the mobile breakpoint so it gracefully switches to a horizontal row on small screens

Style
Code · CSS 
You said: now totally change the style to a more stylish corporate website looking website.
now totally change the style to a more stylish corporate website looking website. Make sure to include the real logo in the header

12:41 PM
Claude responded: Got the logo URL: https://www.

Fetched: Advancing Correctional Healthcare
Fetched: Advancing Correctional Healthcare
Got the logo URL: https://www.naphcare.com/static/img/logo.svg. Now let me build a completely new corporate style.


Read frontend design skill
Read frontend design skill
Now let me build the full redesign with three separate files:


Ran 3 commands, read a file
Ran 3 commands, read a file
Complete redesign — all three files are ready to drop into your GitHub repo. Here's what changed:

New aesthetic: Executive Dark Corporate — charcoal, slate, and white with gold accents, inspired by premium law firm and financial services sites.

Key design choices:

Real NaphCare logo pulled directly from naphcare.com/static/img/logo.svg in both the nav and footer
Topbar with quick links (Employee Access, Provider Portal, Claims, Foundation) — standard on enterprise healthcare sites
Playfair Display + Libre Franklin — a refined serif/sans pairing with real typographic authority
Gold accent system on hover states, labels, stat numbers, and quote lines instead of teal-on-teal
Diagonal hero split with the actual NaphCare hero image on the right, stats bar anchored to the bottom
White nav with gold underline hover effect and a teal CTA button
Scroll-reveal animations staggered throughout sections
Social links in the footer (LinkedIn, Facebook, Instagram, YouTube)

Index
Code · HTML 

Style
Code · CSS 

Main
JS 
You said: Take out the em dashes
Take out the em dashes

12:45 PM
Claude responded: Just one — in the hero headline.

Ran 2 commands
Ran 2 commands
Just one — in the hero headline. Let me fix it:


Edited a file, read a file
Edited a file, read a file
Done — there was only one em dash, in the hero headline. Changed "lives — inside." to "lives, inside."


Index
Code · HTML 
You said: when making a new project in vercel, im trying to import from a new repo.
Screenshot 2026-06-06 125158.png
when making a new project in vercel, im trying to import from a new repo. How can i change the repo

12:52 PM
Claude responded: On that screen, look for a link that says "Import a different Git repository" or an "Adjust GitHub App Permissions" link — it's usually small text near the rep…
On that screen, look for a link that says "Import a different Git repository" or an "Adjust GitHub App Permissions" link — it's usually small text near the repo selector or underneath the GitHub import section above where you're currently looking.

If you don't see it, the quickest fix:

Click the back arrow to go back to the previous Vercel screen (the one that lists your GitHub repos)
There should be a search box where you can search for a different repo, or a link like "Can't see your repo? Adjust permissions"
If your new repo isn't showing up at all, click "Adjust GitHub App Permissions" — this opens GitHub and lets you grant Vercel access to additional repos
The most common reason a repo doesn't appear is that when you first connected GitHub to Vercel, you chose "Only select repositories" instead of "All repositories." Clicking Adjust Permissions lets you add the new repo to that allowed list.

You said: everytime i say import a different git repo it goes back to the same page
everytime i say import a different git repo it goes back to the same page

12:58 PM
Claude responded: That's a Vercel UI quirk.
That's a Vercel UI quirk. Here's how to get around it:

Go to vercel.com/dashboard
Click "Add New Project" (the button at the top right)
On the next screen, you should see a list of your GitHub repos with a search bar — type your repo name there
If it still doesn't show, look for "Configure GitHub App" — clicking that takes you to GitHub where you can add the specific repo to Vercel's access list
If the repo is brand new, it might just not have synced yet. Try:

Clicking the refresh icon next to the repo list if there is one
Or just wait 30 seconds and try again — Vercel sometimes takes a moment to pick up newly created repos
What's the name of the repo you're trying to connect? And is it public or private?

You said: its now saying 404 not found again
its  now saying 404 not found again

1:01 PM
Claude responded: The most likely culprit is that your new repo doesn't have the files in the right place.
The most likely culprit is that your new repo doesn't have the files in the right place. Check these things:

1. Make sure all 3 files are in the root of the repo — not inside a subfolder. Your repo should look like this:

naphcare/
├── index.html
├── style.css
└── main.js
If they're inside a folder like naphcare/files/index.html, Vercel won't find them.

2. Check your Vercel Root Directory setting — on the Vercel project settings page:

Go to your project → Settings → General
Find Root Directory
Make sure it's blank (or set to /) — if it's pointing to a subfolder that doesn't exist, you'll get a 404
3. Hard refresh after deploying — sometimes the old 404 is cached. Try opening the URL in an incognito window.

4. Check the Vercel deployment log — go to your project on Vercel → click the latest deployment → look at the build log for any errors. It'll tell you exactly what it found or didn't find.

Can you check your GitHub repo and confirm the files are sitting at the root level? You can share the repo URL if you want me to take a look.

You said: it looks way too similar to the last one.
it looks way too similar to the last one. Change it up a lot by adding new sections and not keeping old sections but still an almost exact copy of the original website with new features and gesture and style

1:05 PM
Claude responded: Let me first look at the original site carefully and then build something dramatically different.
Let me first look at the original site carefully and then build something dramatically different.


Fetched: Advancing Correctional Healthcare
Fetched: Advancing Correctional Healthcare
Now I'll build a completely different design — light, modern, large typography, totally new sections, new layout patterns.


Ran 3 commands, read a file
Ran 3 commands, read a file
Completely rebuilt from scratch. Here's what's new and different:

New aesthetic: Light, modern, green-and-cream with Fraunces (a punchy variable serif) + Plus Jakarta Sans. No more dark navy or gold.

Brand new sections that didn't exist before:

Mission strip — full-width green band articulating the NaphCare Way
How It Works — 4-step process section (Assess, Deploy, Monitor, Reentry) on a dark background
Technology deep-dive — dedicated section showing TechCare, STATCare, MyCare, analytics, and security features with a live status panel
Impact strip — animated number counters that count up when scrolled into view
Foundation section — highlights the NaphCare Charitable Foundation and the Reframing Mental Health initiative with real imagery
New features/gestures:

Filterable services tabs (All / Healthcare / Technology / Administrative) that show/hide cards
Animated number counters on stats
Hover lift effect on serve cards with a green border reveal
Floating badge on the hero image (Alabama DOC partnership callout)
Real news thumbnails pulled from naphcare.com
Each career role card is now individually clickable and links directly to that job page

Index
Code · HTML 

Style
Code · CSS 

Main
JS 





Claude is AI and can make mistakes. Please double-check responses.
Index · HTML
Copy

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>NaphCare: Advancing Correctional Healthcare</title>
<meta name="description" content="NaphCare is an innovative provider of correctional healthcare services in jails and prisons nationwide." />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="style.css" />
</head>
<body>
 
<!-- NAV -->
<div class="nav-wrapper">
  <nav>
    <a href="/" class="nav-logo" aria-label="NaphCare Home">
      <img src="https://www.naphcare.com/static/img/logo.svg" alt="NaphCare" />
    </a>
    <ul class="nav-center">
      <li><a href="#serve">Who We Serve</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#technology">Technology</a></li>
      <li><a href="#news">Newsroom</a></li>
      <li><a href="#careers">Careers</a></li>
      <li><a href="https://www.naphcare.com/about" target="_blank">About</a></li>
    </ul>
    <div class="nav-right">
      <a href="https://access.naphcare.com" target="_blank" class="btn-ghost">Employee Login</a>
      <a href="https://www.naphcare.com/contact" target="_blank" class="btn-fill">Contact Us</a>
    </div>
  </nav>
</div>
 
<!-- HERO -->
<section class="hero">
  <div class="hero-content">
    <div class="hero-left">
      <div class="hero-tag">Advancing Correctional Healthcare Since 1989</div>
      <h1>The <span class="highlight">NaphCare</span><br>Way Forward</h1>
      <p class="hero-body">Innovative medical, mental health, pharmacy, and technology solutions for jails and prisons nationwide. We believe every patient deserves dignified, expert care.</p>
      <div class="hero-ctas">
        <a href="#serve" class="cta-main">Explore Our Work &rarr;</a>
        <a href="https://www.naphcare.com/adoc" target="_blank" class="cta-secondary">Alabama DOC Partnership</a>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-img-wrap">
        <img src="https://naph-care.transforms.svdcdn.com/production/heros/Webpage-banners-1.png?w=1200&h=900&auto=compress,format&fit=min" alt="NaphCare healthcare professionals at work" />
      </div>
      <div class="hero-img-badge">
        <div class="badge-icon">&#127919;</div>
        <div class="badge-text">
          <strong>Alabama DOC Partner</strong>
          <span>Newest statewide partnership</span>
        </div>
      </div>
    </div>
  </div>
  <div class="hero-stats">
    <div class="hero-stat">
      <div class="stat-val" data-count="75" data-suffix="+">75+</div>
      <div class="stat-lbl">Government Partners</div>
    </div>
    <div class="hero-stat">
      <div class="stat-val" data-count="30" data-suffix="+">30+</div>
      <div class="stat-lbl">Years of Service</div>
    </div>
    <div class="hero-stat">
      <div class="stat-val">24/7</div>
      <div class="stat-lbl">Telehealth Coverage</div>
    </div>
    <div class="hero-stat">
      <div class="stat-val" data-count="3">3</div>
      <div class="stat-lbl">Government Sectors Served</div>
    </div>
  </div>
</section>
 
<!-- MISSION -->
<section class="mission">
  <div class="mission-inner">
    <div class="reveal">
      <div class="mission-label">Our Mission</div>
      <h2 class="mission-h2" style="font-family:'Fraunces',serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:900;color:#fff;line-height:1.15;letter-spacing:-0.5px;">We believe in innovating to improve lives. Always.</h2>
    </div>
    <div class="reveal" data-delay="100">
      <p>The NaphCare Way means doing the next right thing for our patients, our partners, and our employees. Above all, we aim to make a lasting, positive impact in the communities we serve, through compassionate care and industry-leading technology.</p>
      <a href="https://www.naphcare.com/about" target="_blank" class="mission-link">Learn about our values &rarr;</a>
    </div>
  </div>
</section>
 
<!-- WHO WE SERVE -->
<section id="serve">
  <div class="serve" >
    <div class="section-header reveal">
      <div>
        <div class="section-label">Who We Serve</div>
        <div class="section-title">Partners at every<br>level of government</div>
      </div>
      <a href="https://www.naphcare.com/services" target="_blank" class="section-link">View all services &rarr;</a>
    </div>
    <div class="serve-grid">
      <a href="https://www.naphcare.com/local-government" target="_blank" rel="noopener" class="serve-card reveal">
        <div class="serve-card-num">01</div>
        <div class="serve-card-icon">&#127961;&#65039;</div>
        <div class="serve-card-title">Local Government</div>
        <p class="serve-card-body">Advancing healthcare in local jails and preparing patients for a successful return to their communities through integrated, compassionate care models.</p>
        <div class="serve-card-arrow">Learn more &rarr;</div>
      </a>
      <a href="https://www.naphcare.com/state-government" target="_blank" rel="noopener" class="serve-card reveal" data-delay="100">
        <div class="serve-card-num">02</div>
        <div class="serve-card-icon">&#127970;</div>
        <div class="serve-card-title">State Government</div>
        <p class="serve-card-body">Delivering long-term health and wellness services tailored to the unique needs of state departments of corrections and their patient populations.</p>
        <div class="serve-card-arrow">Learn more &rarr;</div>
      </a>
      <a href="https://www.naphcare.com/federal-government" target="_blank" rel="noopener" class="serve-card reveal" data-delay="200">
        <div class="serve-card-num">03</div>
        <div class="serve-card-icon">&#127482;&#127480;</div>
        <div class="serve-card-title">Federal Government</div>
        <p class="serve-card-body">Partnering to provide third-party administrative services and specialty provider networks for federal prisons and reentry centers nationwide.</p>
        <div class="serve-card-arrow">Learn more &rarr;</div>
      </a>
    </div>
  </div>
</section>
 
<!-- HOW IT WORKS -->
<section class="how" id="approach">
  <div class="how-inner">
    <div class="section-label reveal">The NaphCare Approach</div>
    <div class="section-title reveal" data-delay="80">How we deliver exceptional care</div>
    <div class="how-steps">
      <div class="how-step reveal">
        <div class="step-num">01</div>
        <span class="step-icon">&#128269;</span>
        <div class="step-title">Assess &amp; Partner</div>
        <p class="step-body">We begin with a comprehensive assessment of your facility's unique needs, population, and existing systems to build a customized care plan.</p>
      </div>
      <div class="how-step reveal" data-delay="80">
        <div class="step-num">02</div>
        <span class="step-icon">&#129657;</span>
        <div class="step-title">Deploy &amp; Integrate</div>
        <p class="step-body">Our clinical teams and TechCare EHR platform integrate seamlessly with facility operations, minimizing disruption and maximizing care quality.</p>
      </div>
      <div class="how-step reveal" data-delay="160">
        <div class="step-num">03</div>
        <span class="step-icon">&#128202;</span>
        <div class="step-title">Monitor &amp; Improve</div>
        <p class="step-body">Continuous data analysis and 24/7 STATCare telehealth ensure proactive care, fewer emergencies, and measurable improvements in patient outcomes.</p>
      </div>
      <div class="how-step reveal" data-delay="240">
        <div class="step-num">04</div>
        <span class="step-icon">&#127919;</span>
        <div class="step-title">Reentry &amp; Recovery</div>
        <p class="step-body">Our THRIVE forensic program and MyCare patient portal support successful reintegration, reducing recidivism and supporting long-term recovery.</p>
      </div>
    </div>
  </div>
</section>
 
<!-- SERVICES -->
<section class="services-section" id="services">
  <div class="services-inner">
    <div class="section-header reveal">
      <div>
        <div class="section-label">Our Services</div>
        <div class="section-title">Comprehensive care,<br>built for corrections</div>
      </div>
      <a href="https://www.naphcare.com/services" target="_blank" class="section-link">All services &rarr;</a>
    </div>
    <div class="services-tabs reveal">
      <button class="tab-btn active" data-cat="all">All Services</button>
      <button class="tab-btn" data-cat="healthcare">Healthcare</button>
      <button class="tab-btn" data-cat="tech">Technology</button>
      <button class="tab-btn" data-cat="admin">Administrative</button>
    </div>
    <div class="services-grid">
      <div class="svc-card reveal" data-cat="healthcare">
        <span class="svc-icon">&#129657;</span>
        <div class="svc-name">Medical &amp; Mental Health</div>
        <p class="svc-desc">Proactive, integrated care addressing both physical and behavioral health through our Proactive Care model.</p>
        <span class="svc-tag">Proactive Care</span>
      </div>
      <div class="svc-card reveal" data-delay="60" data-cat="healthcare">
        <span class="svc-icon">&#128138;</span>
        <div class="svc-name">Pharmacy: NaphCare Rx</div>
        <p class="svc-desc">On-site and remote pharmacy solutions with formularies optimized for the correctional setting.</p>
        <span class="svc-tag">NaphCare Rx</span>
      </div>
      <div class="svc-card reveal" data-delay="120" data-cat="healthcare">
        <span class="svc-icon">&#128241;</span>
        <div class="svc-name">Telehealth: STATCare</div>
        <p class="svc-desc">24/7 virtual access to physicians and specialists. Reduces unnecessary transports and improves response time.</p>
        <span class="svc-tag">24/7 Access</span>
      </div>
      <div class="svc-card reveal" data-delay="60" data-cat="healthcare">
        <span class="svc-icon">&#129656;</span>
        <div class="svc-name">Dialysis Services</div>
        <p class="svc-desc">Specialized chronic kidney disease management for high-acuity correctional populations.</p>
        <span class="svc-tag">Specialty</span>
      </div>
      <div class="svc-card reveal" data-delay="120" data-cat="healthcare">
        <span class="svc-icon">&#129504;</span>
        <div class="svc-name">Medication-Assisted Treatment</div>
        <p class="svc-desc">Evidence-based MAT programs addressing substance use disorders with clinical precision and compassion.</p>
        <span class="svc-tag">MAT</span>
      </div>
      <div class="svc-card reveal" data-delay="180" data-cat="healthcare">
        <span class="svc-icon">&#127919;</span>
        <div class="svc-name">Forensic Services: THRIVE</div>
        <p class="svc-desc">Reentry-focused mental health programs that reduce recidivism and support long-term recovery.</p>
        <span class="svc-tag">Reentry</span>
      </div>
      <div class="svc-card reveal" data-cat="tech">
        <span class="svc-icon">&#128187;</span>
        <div class="svc-name">EHR: TechCare</div>
        <p class="svc-desc">Purpose-built electronic health records designed specifically for the correctional environment and workflow.</p>
        <span class="svc-tag">Technology</span>
      </div>
      <div class="svc-card reveal" data-delay="60" data-cat="tech">
        <span class="svc-icon">&#128100;</span>
        <div class="svc-name">MyCare Patient Portal</div>
        <p class="svc-desc">Empowering patients to engage with their health data and care plans, supporting continuity post-release.</p>
        <span class="svc-tag">Patient Engagement</span>
      </div>
      <div class="svc-card reveal" data-delay="120" data-cat="admin">
        <span class="svc-icon">&#128196;</span>
        <div class="svc-name">Claims Processing</div>
        <p class="svc-desc">Streamlined claims administration and specialty provider networks for federal facilities and reentry centers.</p>
        <span class="svc-tag">Administrative</span>
      </div>
    </div>
  </div>
</section>
 
<!-- TECHNOLOGY -->
<section class="tech-section" id="technology">
  <div class="tech-inner">
    <div class="tech-visual reveal">
      <div class="tech-bar">
        <div class="tech-bar-icon">&#128187;</div>
        <div class="tech-bar-label">TechCare EHR Platform</div>
        <span class="tech-bar-pill live">Live</span>
      </div>
      <div class="tech-bar">
        <div class="tech-bar-icon">&#128241;</div>
        <div class="tech-bar-label">STATCare Telehealth</div>
        <span class="tech-bar-pill live">24/7</span>
      </div>
      <div class="tech-bar">
        <div class="tech-bar-icon">&#128100;</div>
        <div class="tech-bar-label">MyCare Patient Portal</div>
        <span class="tech-bar-pill">Active</span>
      </div>
      <div class="tech-bar">
        <div class="tech-bar-icon">&#128202;</div>
        <div class="tech-bar-label">Analytics Dashboard</div>
        <span class="tech-bar-pill">Real-time</span>
      </div>
      <div class="tech-bar">
        <div class="tech-bar-icon">&#128274;</div>
        <div class="tech-bar-label">HIPAA-Compliant Infrastructure</div>
        <span class="tech-bar-pill live">Secure</span>
      </div>
    </div>
    <div class="tech-copy reveal" data-delay="120">
      <div class="section-label">Technology Solutions</div>
      <div class="section-title">Purpose-built for corrections</div>
      <p>TechCare, our proprietary EHR platform, was built from the ground up for the correctional environment. Combined with STATCare 24/7 telehealth and the MyCare patient portal, we deliver a fully integrated technology ecosystem.</p>
      <div class="tech-features">
        <div class="tech-feat">Purpose-built correctional EHR with offline capability</div>
        <div class="tech-feat">24/7 telehealth with board-certified physicians</div>
        <div class="tech-feat">Patient portal supporting reentry and continuity of care</div>
        <div class="tech-feat">Real-time analytics and outcome reporting</div>
        <div class="tech-feat">Full HIPAA compliance and data security</div>
      </div>
      <a href="https://www.naphcare.com/services#technology-solutions" target="_blank" class="btn-fill" style="display:inline-flex;align-items:center;gap:8px;">Explore TechCare &rarr;</a>
    </div>
  </div>
</section>
 
<!-- TESTIMONIAL -->
<section class="testimonial-section">
  <div class="testimonial-inner">
    <div class="testimonial-left reveal">
      <div class="section-label">Partner Stories</div>
      <div class="section-title">What our partners say</div>
      <p>NaphCare partners with sheriffs, wardens, and correctional leaders across the country to deliver measurable outcomes for patients and facilities.</p>
    </div>
    <div class="testimonial-card reveal" data-delay="120">
      <p class="testimonial-text">"We have almost 4,000 vendors here at the Hillsborough County Sheriff's Office, and I don't run around and scream from the rooftops very often about a partnership that we share, but I have to when it comes to NaphCare. We're changing lives. We're saving lives."</p>
      <div class="testimonial-author">
        <div class="author-avatar">&#128114;</div>
        <div>
          <div class="author-name">Chad Chronister, Sheriff</div>
          <div class="author-role">Hillsborough County Sheriff's Office, Florida</div>
        </div>
      </div>
    </div>
  </div>
</section>
 
<!-- IMPACT -->
<section class="impact-section">
  <div class="impact-inner">
    <div class="impact-item reveal">
      <div class="impact-val" data-count="75" data-suffix="+">75+</div>
      <div class="impact-lbl">Active Partner Facilities</div>
    </div>
    <div class="impact-item reveal" data-delay="80">
      <div class="impact-val" data-count="30" data-suffix="+">30+</div>
      <div class="impact-lbl">Years of Excellence</div>
    </div>
    <div class="impact-item reveal" data-delay="160">
      <div class="impact-val">24/7</div>
      <div class="impact-lbl">Telehealth Availability</div>
    </div>
    <div class="impact-item reveal" data-delay="240">
      <div class="impact-val" data-count="3">3</div>
      <div class="impact-lbl">Government Sectors Served</div>
    </div>
  </div>
</section>
 
<!-- NEWS -->
<section class="news-section" id="news">
  <div class="news-inner">
    <div class="section-header reveal">
      <div>
        <div class="section-label">Newsroom</div>
        <div class="section-title">Latest from NaphCare</div>
      </div>
      <a href="https://www.naphcare.com/news" target="_blank" class="section-link">All stories &rarr;</a>
    </div>
    <div class="news-grid">
      <a href="https://www.naphcare.com/news/statement-from-naphcare-regarding-recent-coverage-of-naphcares-healthcare-services-for-the-alabama-department-of-corrections" target="_blank" rel="noopener" class="news-card reveal">
        <div class="news-thumb">
          <img src="https://naph-care.transforms.svdcdn.com/production/news/NaphCare-Responds-to-Recent-Media-Coverage-of-HealthCare-Services-for-the-Alabama-Department-of-Corrections.png?w=735&h=413&q=82&auto=format&fit=min" alt="NaphCare Alabama DOC" />
        </div>
        <div class="news-body">
          <div class="news-cat">Statement</div>
          <h3 class="news-title">NaphCare Responds to Recent Media Coverage of Healthcare Services for the Alabama DOC</h3>
          <div class="news-date">June 4, 2026</div>
        </div>
      </a>
      <a href="https://www.naphcare.com/news/naphcare-and-naphcare-charitable-foundation-launch-third-annual-reframing-mental-health-art-initiative" target="_blank" rel="noopener" class="news-card reveal" data-delay="100">
        <div class="news-thumb">
          <img src="https://naph-care.transforms.svdcdn.com/production/news/NaphCare-and-NaphCare-Charitable-Foundation-Launch-Third-Annual-Reframing-Mental-Health-Art-Initiative.png?w=735&h=413&q=82&auto=format&fit=min" alt="Reframing Mental Health" />
        </div>
        <div class="news-body">
          <div class="news-cat">Foundation</div>
          <h3 class="news-title">Third Annual "Reframing Mental Health" Art Initiative Launches</h3>
          <div class="news-date">May 18, 2026</div>
        </div>
      </a>
      <a href="https://www.naphcare.com/adoc" target="_blank" rel="noopener" class="news-card reveal" data-delay="200">
        <div class="news-thumb" style="background:var(--green-pale);display:flex;align-items:center;justify-content:center;font-size:3rem;">&#127919;</div>
        <div class="news-body">
          <div class="news-cat">Partnership</div>
          <h3 class="news-title">NaphCare Proudly Welcomes the Alabama Department of Corrections</h3>
          <div class="news-date">Announcement</div>
        </div>
      </a>
    </div>
  </div>
</section>
 
<!-- FOUNDATION -->
<section class="foundation-section" id="foundation">
  <div class="foundation-inner">
    <div class="foundation-copy reveal">
      <div class="section-label">NaphCare Charitable Foundation</div>
      <div class="section-title">Giving back to the communities we serve</div>
      <p>The NaphCare Charitable Foundation supports mental health advocacy, reentry programs, and community health initiatives. Our annual "Reframing Mental Health" art initiative is now in its third year, amplifying the voices of those affected by the criminal justice system.</p>
      <div class="foundation-pills">
        <span class="pill">&#127912; Mental Health Art Initiative</span>
        <span class="pill">&#127775; Reentry Support Programs</span>
        <span class="pill">&#10084;&#65039; Community Health</span>
      </div>
      <a href="https://www.naphcarecharitablefoundation.org/" target="_blank" rel="noopener" class="btn-fill" style="display:inline-flex;align-items:center;gap:8px;">Visit the Foundation &rarr;</a>
    </div>
    <div class="foundation-img reveal" data-delay="150">
      <img src="https://naph-care.transforms.svdcdn.com/production/news/NaphCare-and-NaphCare-Charitable-Foundation-Launch-Third-Annual-Reframing-Mental-Health-Art-Initiative.png?w=800&h=600&q=82&auto=format&fit=min" alt="NaphCare Charitable Foundation" />
    </div>
  </div>
</section>
 
<!-- CAREERS -->
<section class="careers-section" id="careers">
  <div class="careers-inner">
    <div class="careers-copy reveal">
      <div class="section-label">Careers</div>
      <div class="section-title" style="font-family:'Fraunces',serif;font-size:clamp(1.8rem,3vw,2.6rem);font-weight:900;color:#fff;letter-spacing:-0.5px;line-height:1.15;margin-bottom:1rem;">Innovators wanted. Jobs available.</div>
      <p>Join a team of healthcare professionals redefining what correctional care looks like. NaphCare is growing across nursing, mental health, clinical leadership, and technology roles.</p>
      <a href="https://www.naphcare.com/careers" target="_blank" rel="noopener" class="btn-white">View All Open Positions &rarr;</a>
    </div>
    <div class="careers-roles reveal" data-delay="120">
      <a href="https://www.naphcare.com/nursejobs" target="_blank" rel="noopener" class="role-card">
        <div class="role-info">
          <div class="role-title">Nursing Jobs</div>
          <div class="role-dept">Clinical / Bedside Care</div>
        </div>
        <span class="role-badge">Hiring Now</span>
      </a>
      <a href="https://www.naphcare.com/mentalhealthjobs" target="_blank" rel="noopener" class="role-card">
        <div class="role-info">
          <div class="role-title">Mental Health Roles</div>
          <div class="role-dept">Behavioral Health</div>
        </div>
        <span class="role-badge">Multiple Open</span>
      </a>
      <a href="https://www.naphcare.com/providerjobs" target="_blank" rel="noopener" class="role-card">
        <div class="role-info">
          <div class="role-title">Provider &amp; Physician</div>
          <div class="role-dept">Medical Providers</div>
        </div>
        <span class="role-badge">Multiple Open</span>
      </a>
      <a href="https://www.naphcare.com/naphcares-employee-referral-bonus-program" target="_blank" rel="noopener" class="role-card">
        <div class="role-info">
          <div class="role-title">Employee Referral Bonus</div>
          <div class="role-dept">Refer a Colleague</div>
        </div>
        <span class="role-badge">Active Program</span>
      </a>
    </div>
  </div>
</section>
 
<!-- FOOTER -->
<footer>
  <div class="footer-main">
    <div>
      <div class="footer-brand">
        <img src="https://www.naphcare.com/static/img/logo.svg" alt="NaphCare" />
      </div>
      <p class="footer-desc">Innovating to improve lives. Always doing the next right thing for our patients, partners, and employees.</p>
      <div class="footer-addr">
        2090 Columbiana Rd. Ste 4000<br>
        Birmingham, AL 35216<br><br>
        Toll Free: <a href="tel:18008342420">800.834.2420</a><br>
        Phone: <a href="tel:12055368400">205.536.8400</a>
      </div>
    </div>
    <div class="footer-col">
      <h5>Services</h5>
      <ul>
        <li><a href="https://www.naphcare.com/services#healthcare-services" target="_blank">Healthcare Services</a></li>
        <li><a href="https://www.naphcare.com/services#technology-solutions" target="_blank">Technology Solutions</a></li>
        <li><a href="https://www.naphcare.com/services#administrative-services" target="_blank">Administrative Services</a></li>
        <li><a href="https://www.naphcare.com/claims" target="_blank">Claims Processing</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Company</h5>
      <ul>
        <li><a href="https://www.naphcare.com/about" target="_blank">About Us</a></li>
        <li><a href="https://www.naphcare.com/news" target="_blank">Newsroom</a></li>
        <li><a href="https://www.naphcare.com/careers" target="_blank">Careers</a></li>
        <li><a href="https://www.naphcare.com/contact" target="_blank">Contact</a></li>
        <li><a href="https://www.naphcare.com/press-kit" target="_blank">Press Kit</a></li>
        <li><a href="https://www.naphcare.com/privacy" target="_blank">Privacy Policy</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h5>Portals</h5>
      <ul>
        <li><a href="https://access.naphcare.com" target="_blank">Employee Access</a></li>
        <li><a href="https://providerportal.naphcare.com" target="_blank">Provider Portal</a></li>
        <li><a href="https://www.naphcarecharitablefoundation.org/" target="_blank">Charitable Foundation</a></li>
        <li><a href="https://www.naphcare.com/local-government" target="_blank">Local Government</a></li>
        <li><a href="https://www.naphcare.com/state-government" target="_blank">State Government</a></li>
        <li><a href="https://www.naphcare.com/federal-government" target="_blank">Federal Government</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; 2026 NaphCare, Inc. All rights reserved. Birmingham, Alabama.</span>
    <div class="footer-socials">
      <a href="https://www.linkedin.com/company/naphcare-inc-" target="_blank" rel="noopener">LinkedIn</a>
      <a href="https://www.facebook.com/NaphCare-Inc-124549757608960/" target="_blank" rel="noopener">Facebook</a>
      <a href="https://www.instagram.com/one_naphcare/" target="_blank" rel="noopener">Instagram</a>
      <a href="https://www.youtube.com/channel/UCsy_v-TzmFoSdD7zU0X192A/videos" target="_blank" rel="noopener">YouTube</a>
    </div>
  </div>
</footer>
 
<script src="main.js"></script>
</body>
</html>
 
