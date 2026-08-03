/* global React, Icon, CONTENT */
const { useState: useStateP } = React;

/* ============================================================
   About page
   ============================================================ */
const AboutPage = ({ go }) => (
  <main>
    <section className="about-hero">
      <div className="container">
        <span className="eyebrow"><span className="bullet" /> About the Foundation</span>
        <h1 style={{ marginTop: 18 }}>
          We're starting small.<br />A weekend outreach in Bauchi,<br /><em>and a notebook of names</em>.
        </h1>
        <p className="lead">
          Chiroma Empowerment Foundation was founded in early 2026 in Bauchi, Nigeria. Our discipline is simple: meet a community where it is, listen first, and design every programme to outlast us.
        </p>
      </div>
    </section>

    <section className="about-grid">
      <div className="container" style={{ display: "contents" }}>
        <div className="col">
          <span className="label">Our Mission</span>
          <h2>To walk alongside <em>the people the system forgets</em>.</h2>
          <p>{CONTENT.brand.mission}</p>
          <p style={{ marginTop: 16 }}>
            We work in integrated cohorts — a mother enrolled in our antenatal programme is invited to vocational training; her daughter is offered a school scholarship. Health, education, and livelihood, braided together.
          </p>
        </div>
        <div className="col">
          <span className="label">Our Vision</span>
          <h2>A society where <em>no woman, child, or family</em> is left out.</h2>
          <p>{CONTENT.brand.vision}</p>
          <p style={{ marginTop: 16 }}>
            We measure our work not in headcount but in second visits: people who return, who bring a neighbour, who eventually outgrow us. That's the metric that matters.
          </p>
        </div>
      </div>
    </section>

    <section className="timeline">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="bullet" /> Timeline</span>
            <h2 style={{ marginTop: 14 }}>Year one,<br /><em>and just getting started</em>.</h2>
          </div>
          <p className="lead">
            Every milestone here started with a request from a community we were already serving — never the other way around.
          </p>
        </div>
        <div className="timeline-rows">
          {CONTENT.timeline.map((t) => (
            <div className="timeline-row" key={t.year}>
              <div className="year">{t.year}</div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow"><span className="bullet" /> Team</span>
            <h2 style={{ marginTop: 14 }}>The people who <em>show up</em>.</h2>
          </div>
          <p className="lead">
            A small staff team supported by hundreds of volunteers, community leaders, and partner clinicians across the north-east.
          </p>
        </div>
        <div className="team-grid">
          {CONTENT.team.map((m) => (
            <div className="member" key={m.name}>
              <div className="avatar"><img src={m.img} alt={m.name} /></div>
              <div className="info">
                <h4>{m.name}</h4>
                <div className="role">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

/* ============================================================
   Donate page
   ============================================================ */
const DonatePage = () => {
  const [freq, setFreq] = useStateP("once");
  const [amountIdx, setAmountIdx] = useStateP(2);
  const [custom, setCustom] = useStateP("");
  const [pay, setPay] = useStateP("card");

  const amounts = CONTENT.donateAmounts.slice(0, 5); // exclude "Custom"
  const customMode = amountIdx === 5;

  const display = customMode
    ? (custom ? "₦" + Number(custom).toLocaleString() : "₦—")
    : amounts[amountIdx]?.v || "₦25,000";

  return (
    <main className="donate-page">
      <div className="container">
        <div className="donate-page-grid">
          <div>
            <span className="eyebrow"><span className="bullet" /> Support our work</span>
            <h1 style={{ marginTop: 20 }}>
              A donation is a<br />programme on the<br /><em>ground</em>.
            </h1>
            <p className="lead">
              Your gift directly funds maternal healthcare, girls' education, vocational training, and humanitarian relief for displaced families in northern Nigeria.
            </p>
            <div className="badges">
              <span className="badge"><span className="dot" /> Tax-deductible receipt</span>
              <span className="badge"><span className="dot" /> 98% to programmes</span>
              <span className="badge"><span className="dot" /> Quarterly impact report</span>
              <span className="badge"><span className="dot" /> 256-bit SSL secure</span>
            </div>

            <div style={{ marginTop: 40, paddingTop: 28, borderTop: "1px solid var(--rule)" }}>
              <span className="eyebrow"><span className="bullet" /> Where your money goes</span>
              <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  ["Healthcare programmes", 38],
                  ["Education & scholarships", 28],
                  ["Livelihoods training", 18],
                  ["Humanitarian relief", 14],
                  ["Operations & overhead", 2],
                ].map(([lbl, pct]) => (
                  <div key={lbl}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                      <span>{lbl}</span>
                      <span style={{ fontFamily: "var(--mono)", color: "var(--ink-3)", fontSize: 11, letterSpacing: ".08em" }}>{pct}%</span>
                    </div>
                    <div style={{ height: 6, background: "var(--bg-2)", borderRadius: 999, overflow: "hidden" }}>
                      <div style={{ width: pct + "%", height: "100%", background: lbl === "Operations & overhead" ? "var(--ink-3)" : "var(--brand)" }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="donate-form">
            <div className="seg">
              <button className={freq === "once" ? "active" : ""} onClick={() => setFreq("once")}>Give once</button>
              <button className={freq === "monthly" ? "active" : ""} onClick={() => setFreq("monthly")}>Monthly</button>
            </div>

            <div className="label">
              <span className="a">Select an amount (₦)</span>
              <span className="b">Tap to see impact</span>
            </div>
            <div className="amount-grid">
              {CONTENT.donateAmounts.map((a, i) => (
                <button
                  key={i}
                  className={"amount" + (amountIdx === i ? " active" : "")}
                  onClick={() => setAmountIdx(i)}
                  type="button"
                >
                  {a.popular && <span className="ribbon">Popular</span>}
                  <div className="v">{a.v}</div>
                  <div className="impact-line">{a.impact}</div>
                </button>
              ))}
            </div>

            {customMode && (
              <div className="custom-row">
                <span className="symb">₦</span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                />
              </div>
            )}

            <div className="label" style={{ marginTop: 28 }}>
              <span className="a">Payment method</span>
            </div>
            <div className="pay-methods">
              {[
                { k: "card", name: "Card", meta: "Visa, Mastercard, Verve" },
                { k: "bank", name: "Bank transfer", meta: "NGN account" },
                { k: "ussd", name: "USSD", meta: "Mobile bank short code" },
              ].map((p) => (
                <button
                  key={p.k}
                  className={"pay" + (pay === p.k ? " active" : "")}
                  onClick={() => setPay(p.k)}
                  type="button"
                >
                  <span className="pname">{p.name}</span>
                  <span className="pmeta">{p.meta}</span>
                </button>
              ))}
            </div>

            <div className="summary">
              <div>
                <div className="total">{display}</div>
                <div className="freq">{freq === "monthly" ? "every month, recurring" : "one-time donation"}</div>
              </div>
              <Icon name="heart" size={28} />
            </div>
            <button className="submit" type="button">
              Donate {display} {freq === "monthly" ? "monthly" : "now"}
            </button>
            <div className="secure">
              <Icon name="lock" size={14} /> Secure 256-bit SSL encrypted payment
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/* ============================================================
   Causes / Programs page (deep dive)
   ============================================================ */
const CausesPage = ({ go }) => (
  <main>
    <section className="about-hero">
      <div className="container">
        <span className="eyebrow"><span className="bullet" /> Our Programmes</span>
        <h1 style={{ marginTop: 18 }}>
          Four pillars,<br /><em>braided into one community</em>.
        </h1>
        <p className="lead">
          Every programme is run in partnership with community leaders, local clinicians, and the families it serves. We don't parachute in. We stay.
        </p>
      </div>
    </section>

    <section className="section" style={{ paddingTop: 64 }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {CONTENT.causes.map((c, i) => (
          <div
            key={c.num}
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--rule)",
              borderRadius: "var(--r-lg)",
              padding: 40,
              display: "grid",
              gridTemplateColumns: "120px 1fr 1fr",
              gap: 32,
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 48, color: "var(--brand)", lineHeight: 1 }}>
                {c.num}
              </div>
              <div className="glyph" style={{ marginTop: 20 }}><Icon name={c.icon} size={28} /></div>
            </div>
            <div>
              <h3 style={{ fontFamily: "var(--serif)", fontSize: 36, lineHeight: 1.05, marginBottom: 12 }}>
                {c.title}
              </h3>
              <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.65 }}>
                {c.body}
              </p>
              <p style={{ color: "var(--ink-2)", fontSize: 15, lineHeight: 1.65, marginTop: 12 }}>
                {[
                  "We run quarterly mobile clinics, antenatal classes, and a child nutrition initiative serving 4 local government areas in Bauchi State.",
                  "Through scholarships, learning kits, and after-school tutoring, we support girls and out-of-school children to stay in education through senior secondary.",
                  "Our vocational centre in Makama trains women in tailoring, hairdressing, catering, and digital literacy — paired with small grants and cooperative formation.",
                  "Coordinated with state agencies and community leaders, we deliver food, hygiene kits, and shelter materials to displaced families across the north-east.",
                ][i]}
              </p>
            </div>
            <div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: ".14em", color: "var(--ink-3)", marginBottom: 14 }}>
                BY THE NUMBERS · Q1 2026
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  [["2,400", "Free hepatitis tests run"], ["380", "Started on care same week"], ["3", "Partner clinics"]],
                  [["600", "Out-of-school children reached"], ["1,200", "Trained in Be2Sure hygiene"], ["3", "Schools active"]],
                  [["—", "Launching late 2026"], ["—", "Vocational pilot in planning"], ["—", "—"]],
                  [["—", "Launching late 2026"], ["—", "Partnership in discussion"], ["—", "—"]],
                ][i].map(([n, l]) => (
                  <div key={l} style={{ display: "flex", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid var(--rule)" }}>
                    <span style={{ fontSize: 13, color: "var(--ink-2)" }}>{l}</span>
                    <span style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--brand)" }}>{n}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </main>
);

/* ============================================================
   Stories page
   ============================================================ */
const StoriesPage = () => {
  const all = [
    {
      meta: "HEALTHCARE · MAR 2026",
      title: "Free hepatitis B and C testing: 2,400 in one outreach day.",
      img: "photos/06-hepatitis-testing.jpeg",
    },
    {
      meta: "EDUCATION · FEB 2026",
      title: "Out-of-school programme reaches 600 children in rural Bauchi.",
      img: "photos/02-school-outreach.jpeg",
    },
    {
      meta: "HYGIENE · JAN 2026",
      title: "Be2Sure handwashing campaign trains 1,200 schoolchildren.",
      img: "photos/04-handwashing-demo.jpeg",
    },
    {
      meta: "HEALTHCARE · DEC 2025",
      title: "Vaccination drive reaches 1,500 women in a single afternoon.",
      img: "photos/07-vaccination.jpeg",
    },
    {
      meta: "COMMUNITY · NOV 2025",
      title: "Volunteers gather for the largest community outreach yet.",
      img: "photos/05-2sure-volunteers.jpeg",
    },
    {
      meta: "EDUCATION · OCT 2025",
      title: "Hygiene education programme expands to three new schools.",
      img: "photos/03-hygiene-children.jpeg",
    },
  ];
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <span className="eyebrow"><span className="bullet" /> Stories from the field</span>
          <h1 style={{ marginTop: 18 }}>
            Notes from the people<br /><em>we work alongside</em>.
          </h1>
          <p className="lead">
            Every week our team sends back a short note from somewhere in the north-east. These are a few of them.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="story-list" style={{ maxWidth: 920 }}>
            {all.map((s, i) => (
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
      </section>
    </main>
  );
};

/* ============================================================
   Gallery page
   ============================================================ */
const GalleryPage = () => (
  <main className="gallery-page">
    <div className="container">
      <span className="eyebrow"><span className="bullet" /> Field gallery</span>
      <h1 style={{ marginTop: 18, fontFamily: "var(--serif)", fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1.0, marginBottom: 16 }}>
        From the field,<br />on the ground.
      </h1>
      <p style={{ fontSize: 17, color: "var(--ink-2)", maxWidth: 640, marginBottom: 48 }}>
        Photographs from outreach weekends, classrooms, training centres, and graduations across Bauchi, Gombe, and surrounding states.
      </p>

      <div className="gallery-grid">
        {CONTENT.gallery.map((g, i) => (
          <div className={"gallery-item " + g.cls} key={i}>
            <img src={g.src} alt={g.label} loading="lazy" />
            <span className="label">{g.label}</span>
          </div>
        ))}
      </div>
    </div>
  </main>
);

/* ============================================================
   Contact page
   ============================================================ */
// ⚠️ STEP 1: Replace "YOUR_TYPEFORM_ID" below with your real Typeform ID.
// Create your form at https://typeform.com, then click Share — the link looks
// like "https://form.typeform.com/to/abcDEFg". Just swap the ID part (the bit
// after "/to/") into the string below.
const TYPEFORM_ID = "R7YjJlv9";

const ContactPage = () => {
  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <div>
            <span className="eyebrow"><span className="bullet" /> Get in touch</span>
            <h1 style={{ marginTop: 18 }}>
              Drop us a note.<br /><em>We read every one</em>.
            </h1>
            <p className="lead">
              Whether you'd like to volunteer, partner, fundraise, or simply learn more about our work — we'd love to hear from you.
            </p>

            <div className="contact-info">
              <div className="info-row">
                <div className="lbl"><Icon name="pin" size={12} /> &nbsp;Address</div>
                <div className="val">{CONTENT.brand.address}</div>
              </div>
              <div className="info-row">
                <div className="lbl"><Icon name="phone" size={12} /> &nbsp;Phone</div>
                <div className="val">{CONTENT.brand.phone}</div>
              </div>
              <div className="info-row">
                <div className="lbl"><Icon name="mail" size={12} /> &nbsp;Email</div>
                <div className="val">{CONTENT.brand.email}</div>
              </div>
              <div className="info-row">
                <div className="lbl">Office hours</div>
                <div className="val">Monday — Friday · 9:00 to 17:00 WAT</div>
              </div>
            </div>
          </div>

          <div className="contact-form" style={{ padding: 0, overflow: "hidden" }}>
            <iframe
              src={"https://form.typeform.com/to/" + TYPEFORM_ID}
              title="Contact form"
              style={{ width: "100%", height: 640, border: "none", borderRadius: "inherit" }}
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

Object.assign(window, {
  AboutPage, DonatePage, CausesPage, StoriesPage, GalleryPage, ContactPage,
});
