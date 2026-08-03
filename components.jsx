/* global React, ReactDOM, Icon, CONTENT, LogoMark */
const { useState, useEffect, useCallback } = React;

/* ============================================================
   Ticker bar (above hero)
   ============================================================ */
const TickerBar = () => {
  const items = [
    ["Apr 2026", "600 out-of-school children reached through new outreach"],
    ["Mar 2026", "Be2Sure hygiene campaign trains 1,200 schoolchildren"],
    ["Feb 2026", "2,400 free hepatitis tests in a single outreach day"],
    ["Jan 2026", "Chiroma Empowerment Foundation officially launched"],
    ["Live",    "Volunteers needed for May community outreach — apply now"],
    ["New",     "Partner with us — corporate and individual sponsorships open"],
  ];
  const doubled = [...items, ...items];
  return (
    <div className="ticker-bar">
      <div className="ticker-bar-inner">
        <span className="live">Live from the field</span>
        <div className="feed">
          <div className="feed-track">
            {doubled.map(([d, t], i) => (
              <span key={i} className="feed-item">
                <span className="pin">→ {d}</span>
                {t}
              </span>
            ))}
          </div>
        </div>
          <span className="meta">
            <span>Bauchi · NG</span>
            <span className="sep" />
            <span>Est. 2026</span>
          </span>
      </div>
    </div>
  );
};

/* ============================================================
   Brand mark
   ============================================================ */
const BrandMark = ({ onClick }) => (
  <div className="brand" onClick={onClick}>
    <div className="brand-mark" aria-hidden="true"><LogoMark size={30} color="var(--bg)" accent="var(--accent)" /></div>
    <div className="brand-name">
      <span className="a">Chiroma</span>
      <span className="b">Empowerment · Nigeria</span>
    </div>
  </div>
);

/* ============================================================
   Top bar
   ============================================================ */
const TopBar = ({ route, go }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    ["home", "Home"],
    ["about", "About"],
    ["causes", "Causes"],
    ["stories", "Stories"],
    ["gallery", "Gallery"],
    ["contact", "Contact"],
  ];
  const handleGo = (k) => { go(k); setMenuOpen(false); };
  return (
    <header className="topbar">
      <div className="topbar-inner">
        <BrandMark onClick={() => handleGo("home")} />
        <nav className="nav">
          {links.map(([k, label]) => (
            <a
              key={k}
              className={"nav-link" + (route === k ? " active" : "")}
              href={"#/" + k}
              onClick={(e) => { e.preventDefault(); go(k); }}
            >{label}</a>
          ))}
        </nav>
        <a
          className="top-cta"
          href="#/donate"
          onClick={(e) => { e.preventDefault(); go("donate"); }}
        >
          <span className="dot" /> Donate
        </a>
        <button
          className={"nav-burger" + (menuOpen ? " open" : "")}
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
      <div className={"mobile-nav" + (menuOpen ? " open" : "")}>
        {links.map(([k, label]) => (
          <a
            key={k}
            className={"mobile-nav-link" + (route === k ? " active" : "")}
            href={"#/" + k}
            onClick={(e) => { e.preventDefault(); handleGo(k); }}
          >{label}</a>
        ))}
        <a
          className="mobile-nav-link donate"
          href="#/donate"
          onClick={(e) => { e.preventDefault(); handleGo("donate"); }}
        >Donate</a>
      </div>
    </header>
  );
};

/* ============================================================
   Hero
   ============================================================ */
const Hero = ({ go, variant }) => {
  const { hero } = CONTENT;
  return (
    <section className={"hero variant-" + variant}>
      <div className="container">
        <div className="hero-grid">
          <div className="reveal">
            <span className="eyebrow"><span className="bullet" /> Bauchi · Nigeria · Est. 2026</span>
            <h1 style={{ marginTop: 24 }}>
              We walk <em>alongside</em><br />
              communities <em>building</em><br />
              <span className="underline">futures</span>.
            </h1>
            <p className="hero-sub">
              {CONTENT.brand.mission}
            </p>
            <div className="hero-actions">
              <button className="btn btn-accent" onClick={() => go("donate")}>
                Donate now <Icon name="arrow-right" size={16} />
              </button>
              <button className="btn btn-ghost" onClick={() => go("causes")}>
                See our work
              </button>
            </div>
            <div className="hero-meta">
              {[
                { num: "1.8", em: "K+", lbl: "Lives reached in our first months" },
                { num: "6",   em: "",   lbl: "Active community programmes" },
                { num: "98",  em: "%",  lbl: "Of funds reach the field" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="num">{s.num}{s.em && <em>{s.em}</em>}</div>
                  <div className="lbl">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
          {variant !== "statement" && (
            <div className="hero-image reveal" style={{ "--reveal-delay": "120ms" }}>
              <img src="photos/07-vaccination.jpeg" alt="Vaccination outreach in Bauchi" />
              <span className="tag">Live · Bauchi State · 2026</span>
              <div className="float-card">
                <div className="ring"><span>78%</span></div>
                <div className="ftxt">
                  <div className="a">2,400 mothers reached<br />in Q1 outreach</div>
                  <div className="b">Mobile clinic programme</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Strip / marquee
   ============================================================ */
const Strip = () => {
  const items = [
    ["Healthcare", "for all"],
    ["Education", "that lasts"],
    ["Livelihoods", "with dignity"],
    ["Humanitarian", "relief"],
    ["Women", "& children"],
    ["IDP", "support"],
  ];
  const doubled = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-track">
        {doubled.map(([a, b], i) => (
          <span className="strip-item" key={i}>
            {a} <em>{b}</em>
          </span>
        ))}
      </div>
    </div>
  );
};

/* ============================================================
   Causes
   ============================================================ */
const Causes = ({ go }) => (
  <section className="section" id="causes">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow"><span className="bullet" /> Our Causes</span>
          <h2 style={{ marginTop: 14 }}>Four pillars,<br /><em>one community</em>.</h2>
        </div>
        <p className="lead">
          Our work is integrated by design — a girl's education depends on her mother's livelihood, which depends on her family's health. We invest in all four, together.
        </p>
      </div>
      <div className="causes">
        {CONTENT.causes.map((c) => (
          <div className="cause" key={c.num} onClick={() => go("causes")}>
            <div className="arrow"><Icon name="arrow-ur" size={14} /></div>
            <div className="num">{c.num}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <div className="glyph"><Icon name={c.icon} size={28} /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   Impact
   ============================================================ */
const Impact = () => (
  <section className="impact">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow" style={{ color: "#E0D6BD" }}>
            <span className="bullet" /> Impact, in numbers
          </span>
          <h2 style={{ marginTop: 14 }}>What changes when<br />communities <em>move first</em>.</h2>
        </div>
        <p className="lead">
          We measure success by who shows up at the next clinic, the next class, the next cooperative meeting. These figures cover 2018 through Q1 2026.
        </p>
      </div>
      <div className="impact-grid">
        {CONTENT.impactStats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="tag">{s.tag}</div>
            <div className="n">{s.n}<span className="unit">{s.unit}</span></div>
            <div className="lbl">{s.lbl}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   Stories
   ============================================================ */
const Stories = () => {
  const f = CONTENT.stories.feature;
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="bullet" /> Stories</span>
            <h2 style={{ marginTop: 14 }}>Whose lives,<br /><em>in their own words</em>.</h2>
          </div>
          <p className="lead">
            Every programme begins and ends with a person. These are a few of the people whose lives have intersected with ours — and ours with theirs.
          </p>
        </div>

        <div className="stories">
          <article className="story-feature">
            <div className="img">
              <img src={f.img} alt={f.title} />
              <span className="badge">{f.badge}</span>
            </div>
            <h3>{f.title}</h3>
            <p className="body">{f.body}</p>
            <div className="person">
              <div className="avatar">A</div>
              <div>
                <div className="name">{f.name}</div>
                <div className="meta">{f.meta}</div>
              </div>
            </div>
          </article>

          <div className="story-list">
            {CONTENT.stories.items.map((s, i) => (
              <article className="story-item" key={i}>
                <div className="thumb"><img src={s.img} alt="" /></div>
                <div>
                  <div className="meta">{s.meta}</div>
                  <h4>{s.title}</h4>
                </div>
                <div className="read"><Icon name="arrow-ur" size={14} /></div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Pull quote
   ============================================================ */
const Pull = () => (
  <section className="pull">
    <div className="container">
      <blockquote>
        <em>"</em>{CONTENT.pullQuote}<em>"</em>
      </blockquote>
      <div className="attrib">
        <span className="line" />
        {CONTENT.pullAttrib}
      </div>
    </div>
  </section>
);

/* ============================================================
   Donate CTA block
   ============================================================ */
const DonateCTA = ({ go }) => {
  const [active, setActive] = useState(2);
  const quick = ["₦5K", "₦10K", "₦25K", "₦50K"];
  return (
    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="bullet" /> Give</span>
            <h2 style={{ marginTop: 14 }}>Your gift is a programme,<br />a clinic, <em>a classroom</em>.</h2>
          </div>
          <p className="lead">
            We publish where every Naira lands — every quarter, no exceptions. Ninety-eight kobo of every Naira goes directly to programmes on the ground.
          </p>
        </div>

        <div className="donate-cta">
          <div className="donate-card">
            <h3>Give once. <em>Give monthly.</em><br />Be the steady hand.</h3>
            <p className="body">
              Monthly donors are the backbone of every long-running programme we operate — from school scholarships to mobile clinics. Even ₦5,000 a month changes what's possible.
            </p>
            <div className="tiles">
              {quick.map((q, i) => (
                <button
                  key={q}
                  className={"tile" + (i === active ? " active" : "")}
                  onClick={() => setActive(i)}
                >{q}</button>
              ))}
            </div>
            <div className="actions">
              <button className="btn btn-accent" onClick={() => go("donate")}>
                Continue <Icon name="arrow-right" size={16} />
              </button>
              <button className="btn" style={{ background: "transparent", color: "#FAF7F2", border: "1px solid rgba(250,247,242,0.3)" }} onClick={() => go("about")}>
                See how funds are used
              </button>
            </div>
            <div className="ornament" />
          </div>

          <div className="donate-tiers">
            {CONTENT.donateAmounts.slice(0, 5).map((t, i) => (
              <div className="tier" key={i}>
                <div className="amt">{t.v}</div>
                <div>
                  <h4>{["School supplies", "Antenatal kit", "Mobile clinic week", "Vocational kit + training", "Term scholarship"][i]}</h4>
                  <p>{t.impact}</p>
                </div>
                {t.popular && <div className="pill">Most given</div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============================================================
   Get involved
   ============================================================ */
const Involve = ({ go }) => (
  <section className="section">
    <div className="container">
      <div className="section-head">
        <div>
          <span className="eyebrow"><span className="bullet" /> Get involved</span>
          <h2 style={{ marginTop: 14 }}>There&#39;s more than<br /><em>one way to give</em>.</h2>
        </div>
        <p className="lead">
          Giving money is one path. Giving time, skill, or a network is another. Choose how to walk alongside us.
        </p>
      </div>
      <div className="involve">
        {CONTENT.involve.map((c, i) => (
          <div className="inv-card" key={i}>
            <div className="num">{c.n}</div>
            <h3>{c.title}</h3>
            <p>{c.body}</p>
            <a className="link" href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>
              {c.link} <Icon name="arrow-ur" size={14} />
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ============================================================
   Footer
   ============================================================ */
// ⚠️ Replace "YOUR_NEWSLETTER_FORM_ID" with a Formspree form ID dedicated
// to newsletter signups (create a second form on formspree.io so these
// don't mix in with your contact messages).
const NEWSLETTER_ENDPOINT = "https://formspree.io/f/xjgnnwno";

const Footer = ({ go }) => {
  const [subStatus, setSubStatus] = useState("idle"); // idle | sending | success | error

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubStatus("sending");
    try {
      const res = await fetch(NEWSLETTER_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setSubStatus("success");
        form.reset();
      } else {
        setSubStatus("error");
      }
    } catch (err) {
      setSubStatus("error");
    }
  };

  return (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div>
          <div className="word">Chiroma<em>.</em></div>
          <p className="blurb">
            Building a just, inclusive, and empowered society through healthcare, education, and sustainable livelihood opportunities in Nigeria.
          </p>
          <form className="news" onSubmit={handleSubscribe}>
            <input type="email" name="email" placeholder="Your email" aria-label="Email" required />
            <button type="submit" disabled={subStatus === "sending"}>
              {subStatus === "sending" ? "..." : "Subscribe"}
            </button>
          </form>
          {subStatus === "success" && (
            <p style={{ marginTop: 10, fontSize: 13, color: "var(--accent)" }}>Thanks — you're subscribed.</p>
          )}
          {subStatus === "error" && (
            <p style={{ marginTop: 10, fontSize: 13, color: "crimson" }}>Something went wrong. Please try again.</p>
          )}
        </div>

        <div>
          <h4>Visit</h4>
          <ul>
            <li><a href="#/about" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a></li>
            <li><a href="#/causes" onClick={(e) => { e.preventDefault(); go("causes"); }}>Causes</a></li>
            <li><a href="#/stories" onClick={(e) => { e.preventDefault(); go("stories"); }}>Stories</a></li>
            <li><a href="#/gallery" onClick={(e) => { e.preventDefault(); go("gallery"); }}>Gallery</a></li>
          </ul>
        </div>

        <div>
          <h4>Act</h4>
          <ul>
            <li><a href="#/donate" onClick={(e) => { e.preventDefault(); go("donate"); }}>Donate</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Volunteer</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Partner with us</a></li>
            <li><a href="#/contact" onClick={(e) => { e.preventDefault(); go("contact"); }}>Fundraise</a></li>
          </ul>
        </div>

        <div>
          <h4>Reach us</h4>
          <ul>
            <li>{CONTENT.brand.address}</li>
            <li>{CONTENT.brand.phone}</li>
            <li>{CONTENT.brand.email}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bot">
        <div>© 2026 Chiroma Empowerment Foundation · A registered Nigerian non-profit</div>
        <div className="socials">
          <a href="https://www.instagram.com/chiroma_foundation?igsh=MTBhcGYyZWZtNnNtNQ%3D%3D&utm_source=qr" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><Icon name="instagram" size={18} /></a>
          <a href="https://www.tiktok.com/@chiroma.emp.found?_r=1&_t=ZS-98YuBwemF17" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><Icon name="tiktok" size={18} /></a>
          <a href="https://x.com/chiroma_ef?s=11" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><Icon name="twitter" size={18} /></a>
          <a href="#" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
        </div>
      </div>

      <div className="footer-megaword" aria-hidden="true">
        <span style={{ display: "inline-flex", alignItems: "center", gap: 20 }}>
          <LogoMark size={72} color="var(--bg)" accent="var(--accent)" />
          Chiroma
        </span>
        <span className="country">Bauchi — NG</span>
      </div>
    </div>
  </footer>
  );
};

Object.assign(window, {
  TopBar, TickerBar, Hero, Strip, Causes, Impact, Stories, Pull, DonateCTA, Involve, Footer,
});
