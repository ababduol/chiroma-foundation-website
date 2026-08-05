/* global React */
// Content/data for Chiroma Empowerment Foundation site.

const CONTENT = {
  brand: {
    name: "Chiroma",
    full: "Chiroma Empowerment Foundation",
    tagline: "EMPOWERING COMMUNITIES",
    mission:
      "Improving the well-being of women, children, IDPs, and underserved communities through integrated and sustainable interventions in healthcare, education, and economic empowerment.",
    vision:
      "A just, inclusive, and empowered society where women, children, and vulnerable populations have equitable access to quality healthcare, education, and sustainable livelihood opportunities.",
    address: "No 54, Makama New Extension, Bauchi, Bauchi State, Nigeria",
    phone: "+234 812 526 2405",
    email: "chiromafoundation@gmail.com",
  },

  heroStats: [
    { num: "1,800+", lbl: "Lives reached in our first months" },
    { num: "6",      lbl: "Active community programmes" },
    { num: "2026",   lbl: "Founded in Bauchi" },
  ],

  causes: [
    {
      num: "01",
      title: "Maternal & child healthcare",
      body:
        "Free clinics, antenatal outreach, and child nutrition programs that meet families where they live.",
      icon: "stethoscope",
    },
    {
      num: "02",
      title: "Education for the next generation",
      body:
        "School fees, learning kits, and scholarships for girls and out-of-school children in northern Nigeria.",
      icon: "book",
    },
    {
      num: "03",
      title: "Livelihoods & skills training",
      body:
        "Vocational training, micro-grants, and cooperative support that turn skills into sustainable income.",
      icon: "sprout",
    },
    {
      num: "04",
      title: "Humanitarian relief for IDPs",
      body:
        "Food, shelter kits, and dignity packages for internally displaced persons across Bauchi and beyond.",
      icon: "shield",
    },
  ],

  impactStats: [
    { n: "1.8",  unit: "K",   lbl: "Direct beneficiaries reached in our first months", tag: "PEOPLE" },
    { n: "2,400", unit: "",  lbl: "Free hepatitis tests run in a single outreach day", tag: "HEALTHCARE" },
    { n: "1.2",  unit: "K",   lbl: "Schoolchildren trained in Be2Sure hygiene programme", tag: "HYGIENE" },
    { n: "98",   unit: "%",   lbl: "Of funds reach programmes on the ground", tag: "TRANSPARENCY" },
  ],

  stories: {
    feature: {
      title: "Hepatitis screening reaches 2,400 in a single day",
      body:
        "Working with the Bauchi State Ministry of Health, we set up free hepatitis B and C testing under one tent — mothers, daughters, and grandmothers shoulder to shoulder. By sundown the lab had run 2,400 tests, and 380 women started on care the same week.",
      name: "Faiz Ahmed Omar",
      meta: "Founder · Bauchi Outreach Day",
      badge: "HEALTHCARE · 2026",
      img: "photos/01-hepatitis-outreach.jpeg",
    },
    items: [
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
    ],
  },

  pullQuote:
    "Every Naira given is a hand extended — into a clinic, a classroom, a market stall. We don't aim to give people a future; we walk alongside them while they build one.",
  pullAttrib: "Faiz Ahmed Omar · Founder",

  donateAmounts: [
    { v: "₦5,000",   impact: "Two months of school supplies for a child" },
    { v: "₦10,000",  impact: "Antenatal kit for one expecting mother" },
    { v: "₦25,000",  impact: "One week of mobile clinic outreach", popular: true },
    { v: "₦50,000",  impact: "Sewing kit + 6-week vocational training" },
    { v: "₦100,000", impact: "Term scholarship for a displaced girl" },
    { v: "Custom",   impact: "Choose your own amount" },
  ],

  involve: [
    {
      n: "01",
      title: "Volunteer your time",
      body: "Join outreach weekends, tutor at our learning centres, or contribute a professional skill.",
      link: "Apply to volunteer",
    },
    {
      n: "02",
      title: "Partner with us",
      body: "We work with corporates, NGOs, and government agencies on co-funded community programmes.",
      link: "Start a conversation",
    },
    {
      n: "03",
      title: "Fundraise in your community",
      body: "Run a campaign at your school, mosque, church, or workplace and we'll provide the toolkit.",
      link: "Get the fundraising kit",
    },
  ],

  timeline: [
    { year: "Jan 2026",  title: "Founded in Bauchi",            body: "Chiroma Empowerment Foundation is registered as a community-based non-profit serving women, children, and underserved communities." },
    { year: "Feb 2026",  title: "First outreach weekend",       body: "Free hepatitis B and C screening for 2,400 community members in partnership with the Bauchi State Ministry of Health." },
    { year: "Mar 2026",  title: "Be2Sure hygiene campaign",     body: "Handwashing and hygiene education programme rolled out across 3 primary schools, training 1,200 children." },
    { year: "Apr 2026",  title: "Out-of-school outreach",       body: "Education and vaccination outreach reaches 600 out-of-school children across rural Bauchi." },
    { year: "2026\u201327", title: "What's next",               body: "Expanding mobile clinics across Bauchi LGAs and launching a girls' scholarship pilot for the new academic year." },
  ],

  team: [
    { name: "Faiz Ahmed Omar",    role: "Founder & Executive Director", img: "photos/01-hepatitis-outreach.jpeg" },
    { name: "Abdulhalim Abdullahi", role: "Programmes Director",        img: "photos/02-school-outreach.jpeg" },
    { name: "Nasir Ahmed Omar",   role: "Head of Health Outreach",      img: "photos/06-hepatitis-testing.jpeg" },
    { name: "Aisha Sani Suleiman", role: "Livelihoods Lead",            img: "photos/08-hepatitis-screening.jpeg" },
  ],

  gallery: [
    { cls: "gi-1", src: "photos/07-vaccination.jpeg",        label: "VACCINATION OUTREACH" },
    { cls: "gi-2", src: "photos/02-school-outreach.jpeg",    label: "SCHOOL VISIT \u00b7 BAUCHI" },
    { cls: "gi-3", src: "photos/05-2sure-volunteers.jpeg",   label: "VOLUNTEERS" },
    { cls: "gi-4", src: "photos/06-hepatitis-testing.jpeg",  label: "HEPATITIS TESTING" },
    { cls: "gi-5", src: "photos/04-handwashing-demo.jpeg",   label: "HYGIENE PROGRAMME" },
    { cls: "gi-6", src: "photos/03-hygiene-children.jpeg",   label: "COMMUNITY EDUCATION" },
    { cls: "gi-7", src: "photos/09-hepatitis-awareness.jpeg", label: "HEPATITIS AWARENESS EVENT" },
    { cls: "gi-8", src: "photos/02-school-outreach.jpeg",    label: "OUT-OF-SCHOOL OUTREACH" },
    { cls: "gi-9", src: "photos/10-idp-support.jpeg",        label: "INTERNALLY DISPLACED PERSONS" },
  ],
};

window.CONTENT = CONTENT;
