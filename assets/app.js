{
/* .map(yt) passes the array index as a label: drop non-text labels */
PROJECTS.forEach(p => p.videos.forEach(v => { if (typeof v.label !== "string") delete v.label; }));

/* festival honors for Summer Fog (Christopher Kenji) */
{ const sf = PROJECTS.find(p => p.id === "mv-5GbaPiJKkK8");
  if (sf) sf.awards = ["London Intl. Monthly Film Festival — Honorable Mention, Best Editing (Feb 2022)", "Tokyo Intl. Monthly Film Festival — Honorable Mention, Best Editing (2022)"]; }

/* festival selection for The Sleepless Club */
{ const sc = PROJECTS.find(p => p.id === "sleepless");
  if (sc) sc.awards = ["Chelsea Film Festival 2025 — Nominee, Best Short Film (Narrative Short Award)"]; }

/* Fish Out of Water: honors (from the film's poster) + clip names */
{ const f = PROJECTS.find(p => p.id === "fish");
  if (f) {
    f.awards = [
      "Global Film Festival Awards, Los Angeles — Winner",
      "Best Shorts Competition — Award of Merit",
      "IndieFEST Film Awards — Award of Merit",
      "48 Independent Short Film Festival 2018 — Best Actor",
      "Finalist — Australia Independent FF 2018 · Olympus FF 2019 · California Music Video & Film Awards",
      "Semi-Finalist — LA Independent Film Festival Awards 2018",
      "Official Selection — Festival Internacional de Cortometrajes Independientes 2019"
    ];
    if (f.videos[0]) f.videos[0].label = "Trailer";
    if (f.videos[1]) f.videos[1].label = "Full Short Film";
  } }

/* Restoration, Inc.: link to the full movie */
{ const r = PROJECTS.find(p => p.id === "restoration");
  if (r) {
    r.link = {label:"Watch movie", url:"https://www.primevideo.com/region/na/detail/0FQTIDUNDNUB9RNM4FZXCF1JOD"};
    r.awards = ["Montreal Independent Film Festival — Official Selection 2021", "Chicago Indie Film Awards — Official Selection 2021"];
  } }
document.addEventListener("click", e => { const b = e.target.closest(".ext-btn"); if (b) document.querySelectorAll(".ext-btn").forEach(x => x.classList.add("clicked")); });
const linkBtn = p => p.link ? `<a class="btn ext-btn" href="${esc(p.link.url)}" target="_blank" rel="noopener">${esc(p.link.label)} <span aria-hidden="true">↗</span></a>` : "";

/* Like a Girl: role + clip names */
{ const g = PROJECTS.find(p => p.id === "likeagirl");
  if (g) {
    g.role = "Editor · Seasons 1 & 2";
    if (g.facts && g.facts.Role) g.facts.Role = "Editor, Seasons 1 & 2";
    ["Ep 1 · April Ross (Interview)", "Ep 1 · April Ross (Activity)", "Ep 6 · Angel McCoughtry (Interview)", "Ep 6 · Angel McCoughtry (Activity)", "Ep 3 · CeCé Telfer (Interview)", "Ep 3 · CeCé Telfer (Activity)"]
      .forEach((t, i) => { if (g.videos[i]) g.videos[i].label = t; });
  } }

/* Upcycle Nation: role + clip names */
{ const u = PROJECTS.find(p => p.id === "upcycle");
  if (u) {
    u.role = "Editor · Season 1";
    if (u.desc && u.desc[1]) u.desc[1] = "I edited Episode 5 in its entirety and co-edited four additional episodes alongside two fellow editors.";
    if (u.facts && u.facts.Role) u.facts.Role = "Editor, Season 1";
    ["Ep 5 · A Quinceañera Dress that lasts beyond the Party", "Ep 1 · Anything can be a Bag, a Bag can be anything", "Ep 7 · A Glove that Fits Like a Dress", "Ep 6 · Gym Shorts on Runway"]
      .forEach((t, i) => { if (u.videos[i]) u.videos[i].label = t; });
  } }

/* Made From Scratch: clip names */
{ const m = PROJECTS.find(p => p.id === "scratch");
  if (m) ["S6 · Mario Lopez Special (Part 1)", "S6 · Mario Lopez Special (Part 2)", "S4, Ep 6 · Kyle"]
    .forEach((t, i) => { if (m.videos[i]) m.videos[i].label = t; }); }

/* role lines */
[["sexsells", "Editor · Seasons 2 & 3", "Editor, Seasons 2 & 3"], ["dontcancel", "Editor · Season 1", "Editor, Season 1"]].forEach(([id, role, fact]) => {
  const p = PROJECTS.find(x => x.id === id);
  if (p) { p.role = role; if (p.facts && p.facts.Role) p.facts.Role = fact; }
});

/* We Need to Talk About America: clip names */
{ const w = PROJECTS.find(p => p.id === "wntta");
  if (w) ["Ep 4 · Parties", "Ep 8 · Obsessions", "Ep 7 · This is a sexy Toy", "Ep 4 · I Took the Wrong Pill"]
    .forEach((t, i) => { if (w.videos[i]) w.videos[i].label = t; }); }

/* Sex Sells: clip names */
{ const s = PROJECTS.find(p => p.id === "sexsells");
  if (s && s.desc && s.desc[1]) s.desc[1] = "Episodes I edited feature Sarunas Jackson and Charlamagne tha God.";
  if (s) s.awards = ["Gracie Awards 2024 — Honorable Mention, Non-Fiction Entertainment"];
  if (s) ["Ep 5 · 3's a Blast (Part 1)", "Ep 5 · 3's a Blast (Part 2)", "Ep 8 · Pop Your Podcast (Part 1)", "Ep 8 · Pop Your Podcast (Part 2)"]
    .forEach((t, i) => { if (s.videos[i]) s.videos[i].label = t; }); }

/* recognition banner */
const AWARDS = [
  {org:"Chelsea Film Festival", result:"Nominee", cat:"Best Short Film · 2025", work:"The Sleepless Club", sub:"Dir. Guillermo Arcaya", href:"scripted.html#sleepless"},
  {org:"Global Film Festival Awards", result:"Winner", cat:"Los Angeles", work:"Fish Out of Water", sub:"Dir. Chunyu Bao", href:"scripted.html#fish"},
  {org:"Best Shorts Competition", result:"Award of Merit", cat:"Short Film", work:"Fish Out of Water", sub:"Dir. Chunyu Bao", href:"scripted.html#fish"},
  {org:"IndieFEST Film Awards", result:"Award of Merit", cat:"Short Film", work:"Fish Out of Water", sub:"Dir. Chunyu Bao", href:"scripted.html#fish"},
  {org:"48 Independent Short Film Festival", result:"Winner", cat:"Best Actor · 2018", work:"Fish Out of Water", sub:"Dir. Chunyu Bao", href:"scripted.html#fish"},
  {org:"Montreal Independent Film Festival", result:"Official Selection", cat:"2021", work:"Restoration, Inc.", sub:"Dir. Bolaji Tijani-Qudus", href:"scripted.html#restoration"},
  {org:"Chicago Indie Film Awards", result:"Official Selection", cat:"2021", work:"Restoration, Inc.", sub:"Dir. Bolaji Tijani-Qudus", href:"scripted.html#restoration"},
  {org:"Gracie Awards", result:"Honorable Mention", cat:"Non-Fiction Entertainment · 2024", work:"Sex Sells", sub:"Fuse", href:"unscripted.html#sexsells"},
  {org:"Critics Choice Awards", result:"Nominee", cat:"Best Sports Show", work:"Like a Girl", href:"unscripted.html#likeagirl"},
  {org:"Shorty Impact Awards", result:"Audience Honor", cat:"Gender Equality", work:"Like a Girl", href:"unscripted.html#likeagirl"},
  {org:"The Buzzies", result:"Nominee", cat:"Best Short Form Factual", work:"Fascinating Fails", sub:"PBS Terra", href:"social-media.html#fascinatingfails"},
  {org:"London International Monthly Film Festival", result:"Honorable Mention", cat:"Best Editing · February 2022", work:"Summer Fog", sub:"Christopher Kenji", href:"music.html#mv-5GbaPiJKkK8"},
  {org:"Tokyo International Monthly Film Festival", result:"Honorable Mention", cat:"Best Editing · 2022", work:"Summer Fog", sub:"Christopher Kenji", href:"music.html#mv-5GbaPiJKkK8"}
];

const CATS = [
  {id:"scripted",   page:"scripted.html",   name:"Scripted",        unit:"projects", img:"images/sleepless.jpg",
   short:"Short and feature films, trailers and post supervision.",
   blurb:"Short and feature films where performance, tension and rhythm carry the story. Also trailers, VFX editing and post supervision."},
  {id:"unscripted", page:"unscripted.html", name:"Unscripted TV",   unit:"shows", img:"images/likeagirl.jpg",
   short:"Docu-series, competition, cooking, talk and clip shows.",
   blurb:"Finding the story in hours of footage — building characters, comedic beats and emotional payoffs for docu-reality, competition and talk formats."},
  {id:"digital",    page:"social-media.html", name:"Social Media", unit:"projects", img:"images/fascinatingfails.jpg",
   short:"PBS Terra, YouTube, commercials, social, corporate and events.",
   blurb:"Content built for retention: YouTube, social ads, commercials, corporate and event recaps, with motion graphics when the story needs it."},
  {id:"music",      page:"music.html",      name:"Music Videos",    unit:"videos", img:"https://i.ytimg.com/vi/TUvKh-Y7gCA/maxresdefault.jpg",
   short:"Rock, pop and more.",
   blurb:"Cutting to the beat and beyond it — visual energy that matches the artist, from intimate ballads to high-octane tracks in English and Spanish."}
];

const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const pad = n => String(n).padStart(2, "0");
const PLAY = '<svg viewBox="0 0 12 14"><path d="M0 0l12 7-12 7z"/></svg>';
const img = (src, alt = "") => src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="this.remove()">` : "";
const thumbOf = (v, p) => v.type === "yt" ? `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg` : p.thumb;
const embedOf = v => v.type === "yt"
  ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}?autoplay=1&rel=0&modestbranding=1`
  : `https://player.vimeo.com/video/${encodeURIComponent(v.id)}?autoplay=1&dnt=1&title=0&byline=0&portrait=0`;
const visible = PROJECTS.filter(p => !p.hidden);
const byCat = id => visible.filter(p => p.cat === id);
const page = document.body.dataset.page;

/* ---- nav ---- */
const nav = $("nav"), ph = $("#playhead");
const onScroll = () => {
  nav.classList.toggle("solid", scrollY > 40);
  const h = document.documentElement.scrollHeight - innerHeight;
  ph.style.width = (h > 0 ? scrollY / h * 100 : 0) + "%";
};
addEventListener("scroll", onScroll, {passive:true}); onScroll();

const dd = $(".dd"), ddBtn = $(".dd>button");
const setDD = open => { dd.classList.toggle("open", open); ddBtn.setAttribute("aria-expanded", open); };
/* click to open; stays open until an option is picked, a click lands elsewhere, or Esc */
ddBtn.addEventListener("click", e => { e.stopPropagation(); setDD(!dd.classList.contains("open")); });
dd.querySelectorAll(".menu a").forEach(a => a.addEventListener("click", () => setDD(false)));
dd.addEventListener("keydown", e => {
  const items = [...dd.querySelectorAll(".menu a")], i = items.indexOf(document.activeElement);
  if (e.key === "ArrowDown") { e.preventDefault(); setDD(true); items[(i + 1) % items.length].focus(); }
  if (e.key === "ArrowUp") { e.preventDefault(); setDD(true); items[(i - 1 + items.length) % items.length].focus(); }
});
document.addEventListener("click", e => { if (!dd.contains(e.target)) setDD(false); });

const burger = $("#burger");
const setMenu = open => { document.body.classList.toggle("menu-open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
burger.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
document.querySelectorAll(".mmenu a").forEach(a => a.addEventListener("click", () => setMenu(false)));

/* About / Contact stay purple once clicked (and when the address points to them) */
const markSection = () => {
  const h = location.hash;
  document.querySelectorAll('.links>a, .mmenu>a').forEach(a => {
    const href = a.getAttribute("href") || "";
    a.classList.toggle("on", page === "home" && !!h && href.endsWith(h) && (h === "#about" || h === "#contact"));
  });
};
document.querySelectorAll('.links>a, .mmenu>a').forEach(a => a.addEventListener("click", () => {
  document.querySelectorAll('.links>a, .mmenu>a').forEach(x => x.classList.remove("on"));
  if (/#(about|contact)$/.test(a.getAttribute("href") || "")) a.classList.add("on");
}));
addEventListener("hashchange", markSection); markSection();
if (CATS && page && page !== "home") document.querySelectorAll('.mmenu>a[href="scripted.html"]').forEach(a => a.classList.add("on"));

/* menu counts + current page */
document.querySelectorAll("[data-count]").forEach(el => el.textContent = pad(byCat(el.dataset.count).length));
if (CATS.some(c => c.id === page)) {
  dd.classList.add("on");
  document.querySelectorAll(`a[data-cat="${page}"]`).forEach(a => a.classList.add("on"));
}

/* ---- phone tab bar ---- */
const tabbar = $(".tabbar"), sheetBtn = $('.tabbar [data-tab="work"]');
const setSheet = open => { document.body.classList.toggle("sheet-open", open); sheetBtn.setAttribute("aria-expanded", open); markTabs(); };
const markTabs = () => {
  const h = location.hash, open = document.body.classList.contains("sheet-open");
  const active = open || (page !== "home") ? "work" : h === "#about" ? "about" : h === "#contact" ? "contact" : "home";
  tabbar.querySelectorAll("[data-tab]").forEach(t => t.classList.toggle("on", t.dataset.tab === active));
};
sheetBtn.addEventListener("click", () => setSheet(!document.body.classList.contains("sheet-open")));
$("#sheetBg").addEventListener("click", () => setSheet(false));
document.querySelectorAll(".sheet a").forEach(a => a.addEventListener("click", () => setSheet(false)));
tabbar.querySelectorAll("a[data-tab]").forEach(a => a.addEventListener("click", () => setTimeout(markTabs, 0)));
addEventListener("hashchange", markTabs);
markTabs();

/* ---- lightbox player: video left, details right ---- */
const lb = $("#lb"), screen = $("#lbScreen"), strip = $("#lbStrip");
let lastFocus = null, cur = null, idx = 0;
const clipName = (v, k) => v.label || (cur.videos.length > 1 ? `${cur.title} — clip ${pad(k + 1)}` : cur.title);
const load = (i, autoplay) => {
  idx = i;
  const v = cur.videos[i];
  if (autoplay) {
    screen.innerHTML = `<iframe src="${embedOf(v)}" title="${esc(clipName(v, i))}" allow="autoplay; fullscreen; picture-in-picture; encrypted-media" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else {
    screen.innerHTML = `<button class="poster" aria-label="Play ${esc(clipName(v, i))}">${img(thumbOf(v, cur))}<span class="pb">${PLAY}</span></button>`;
    $(".poster", screen).addEventListener("click", () => load(i, true));
  }
  strip.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-current", k === i));
  const b = strip.children[i]; if (b) b.scrollIntoView({block:"nearest", inline:"nearest"});
  $("#lbNow").textContent = cur.videos.length > 1 ? v.label ? `Now playing · ${v.label}` : `Now playing · clip ${pad(i + 1)} of ${pad(cur.videos.length)}` : "";
};
const openPlayer = (p, i = 0) => {
  cur = p; lastFocus = document.activeElement;
  const multi = p.videos.length > 1;
  $("#lbKind").textContent = multi ? `${p.kind} · ${p.videos.length} clips` : p.kind;
  $("#lbTitle").textContent = p.title;
  $("#lbRole").textContent = p.role || "";
  $("#lbAwards").innerHTML = (p.awards || []).map(a => `<span>${esc(a)}</span>`).join("");
  $("#lbFacts").innerHTML = Object.entries(p.facts || {}).filter(([k]) => !(k === "Role" && p.role)).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
  $("#lbDesc").innerHTML = (p.desc || []).map(x => `<p>${esc(x)}</p>`).join("");
  $("#lbLink").innerHTML = linkBtn(p);
  $("#lbClipsWrap").style.display = multi ? "" : "none";
  $("#lbClipCount").textContent = multi ? `${pad(p.videos.length)} clips` : "";
  strip.innerHTML = multi ? p.videos.map((v, k) => `<button data-i="${k}" aria-current="false"><div class="th">${img(thumbOf(v, p))}<i>${pad(k + 1)}</i></div><span>${esc(v.label || "Clip " + pad(k + 1))}</span></button>`).join("") : "";
  lb.classList.add("open"); document.body.style.overflow = "hidden"; lb.scrollTop = 0;
  load(i, true);
  $("#lbClose").focus();
};
const closePlayer = () => { lb.classList.remove("open"); screen.innerHTML = ""; document.body.style.overflow = ""; if (lastFocus) lastFocus.focus(); };
strip.addEventListener("click", e => { const b = e.target.closest("button"); if (b) load(+b.dataset.i, true); });
$("#lbPrev").addEventListener("click", () => load((idx - 1 + cur.videos.length) % cur.videos.length, true));
$("#lbNext").addEventListener("click", () => load((idx + 1) % cur.videos.length, true));
$("#lbClose").addEventListener("click", closePlayer);
lb.addEventListener("click", e => { if (e.target === lb) closePlayer(); });
addEventListener("keydown", e => {
  if (e.key === "Escape") { if (lb.classList.contains("open")) closePlayer(); else { setDD(false); setMenu(false); setSheet(false); } }
});
document.addEventListener("click", e => {
  const t = e.target.closest("[data-play]"); if (!t) return;
  const p = PROJECTS.find(x => x.id === t.dataset.play); if (p) openPlayer(p);
});

/* ---- home ---- */
if (page === "home") {
  /* fade the background reel in only once Vimeo reports it's playing */
  addEventListener("message", e => {
    if (e.origin !== "https://player.vimeo.com") return;
    let d = e.data; try { if (typeof d === "string") d = JSON.parse(d); } catch { return; }
    if (d && /^(ready|play|playProgress|timeupdate)$/.test(d.event)) $(".hero-bg").classList.add("live");
  });
  $("#doors").innerHTML = CATS.map((c, i) => `<a class="door rise" href="${c.page}">
    ${img(c.img)}
    <span class="arrow" aria-hidden="true">→</span>
    <span class="in"><span class="n">${pad(i + 1)} · ${pad(byCat(c.id).length)} ${c.unit}</span><b>${esc(c.name)}</b><small>${esc(c.short)}</small></span></a>`).join("");
}

/* ---- recognition banner (home) ---- */
const track = $("#awardTrack");
if (track) {
  const card = (a, dup) => `<a class="award${dup ? " dup" : ""}" href="${a.href}"${dup ? ' aria-hidden="true" tabindex="-1"' : ""}>
    <span class="wreath"><svg viewBox="0 0 240 240" aria-hidden="true"><use href="#laurel"/></svg>
      <span class="in"><span class="org">${esc(a.org)}</span><b>${esc(a.result)}</b><span class="cat">${esc(a.cat)}</span></span></span>
    <small>${esc(a.work)}${a.sub ? ` <i>· ${esc(a.sub)}</i>` : ""}</small></a>`;
  /* two copies so the loop is seamless */
  track.innerHTML = AWARDS.map(a => card(a, false)).join("") + AWARDS.map(a => card(a, true)).join("");
  $("#awardCount").textContent = `${pad(AWARDS.length)} HONORS`;

  /* motion: slow auto-drift to the right, plus ‹ › buttons and drag / swipe */
  const mq = $("#awardMarquee"), wrap = $("#awardWrap");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const SPEED = 24;                 /* px per second, left → right */
  let x = null, glide = 0, hover = false, drag = null, last = performance.now();
  const half = () => track.scrollWidth / 2;
  const step = () => { const c = track.children; return c.length > 1 ? c[1].getBoundingClientRect().left - c[0].getBoundingClientRect().left : 300; };
  const wrapX = () => { const h = half(); if (!h) return; while (x > 0) x -= h; while (x <= -h) x += h; };
  const frame = now => {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    if (x === null) x = -half();
    if (!drag) {
      if (!hover && !reduce) x += SPEED * dt;
      if (Math.abs(glide) > 0.5) { const m = glide * 0.14; x += m; glide -= m; } else glide = 0;
    }
    wrapX();
    track.style.transform = `translate3d(${x}px,0,0)`;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
  wrap.addEventListener("mouseenter", () => hover = true);
  wrap.addEventListener("mouseleave", () => hover = false);
  mq.addEventListener("focusin", () => hover = true);
  mq.addEventListener("focusout", () => hover = false);
  $("#awardPrev").addEventListener("click", () => glide -= step());
  $("#awardNext").addEventListener("click", () => glide += step());

  let moved = false;
  mq.addEventListener("pointerdown", e => {
    if (e.button !== 0) return;
    drag = {sx: e.clientX, x0: x, id: e.pointerId}; moved = false; glide = 0;
  });
  addEventListener("pointermove", e => {
    if (!drag || e.pointerId !== drag.id) return;
    const dx = e.clientX - drag.sx;
    if (!moved && Math.abs(dx) > 6) { moved = true; mq.classList.add("dragging"); try { mq.setPointerCapture(drag.id); } catch {} }
    if (moved) x = drag.x0 + dx;
  });
  const endDrag = () => { if (!drag) return; drag = null; setTimeout(() => mq.classList.remove("dragging"), 0); };
  addEventListener("pointerup", endDrag); addEventListener("pointercancel", endDrag);
  mq.addEventListener("click", e => { if (moved) { e.preventDefault(); moved = false; } }, true);
  mq.addEventListener("dragstart", e => e.preventDefault());
}

/* ---- category pages ---- */
const cat = CATS.find(c => c.id === page);
if (cat) {
  const list = byCat(cat.id);
  $("#count").textContent = `${pad(list.length)} ${cat.unit.toUpperCase()}`;
  const host = $("#list");
  if (cat.id === "music") {
    host.className = "screenings";
    host.innerHTML = list.map((p, i) => `<article class="screening rise" id="${esc(p.id)}">
      <button class="media" data-play="${esc(p.id)}" aria-label="Play ${esc(p.title)} by ${esc(p.kind)}">${img(p.thumb)}<span class="pb">${PLAY}</span>${(p.awards || []).length ? `<span class="aw">${p.awards.length} AWARDS</span>` : ""}</button>
      <div class="meta"><div><b>${esc(p.title)}</b><small>${esc(p.kind)}</small></div><span class="n">${pad(i + 1)}</span></div></article>`).join("");
  } else {
    host.className = "projects";
    $("#index").innerHTML = list.map(p => `<a href="#${esc(p.id)}">${esc(p.title)}</a>`).join("");
    host.innerHTML = list.map(p => {
      const d = p.desc || [];
      return `<article class="proj" id="${esc(p.id)}">
      <button class="media rise" data-play="${esc(p.id)}" aria-label="Play ${esc(p.title)}">${img(p.thumb, p.title)}<span class="pb">${PLAY}</span>${p.videos.length > 1 ? `<span class="cl">${p.videos.length} CLIPS</span>` : ""}</button>
      <div class="txt rise">
        <span class="label">${esc(p.kind)}</span>
        <h3>${esc(p.title)}</h3>
        <div class="role">${esc(p.role || "")}</div>
        ${(p.awards || []).length ? `<div class="awards">${p.awards.map(a => `<span>${esc(a)}</span>`).join("")}</div>` : ""}
        <dl class="facts">${Object.entries(p.facts || {}).filter(([k]) => k !== "Role").map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
        <div class="desc${d.length > 1 ? " clamp" : ""}">${d.map(x => `<p>${esc(x)}</p>`).join("")}${d.length > 1 ? `<button class="more">Read more</button>` : ""}</div>
        <button class="btn btn-g" data-play="${esc(p.id)}"><svg viewBox="0 0 12 14"><path d="M0 0l12 7-12 7z"/></svg>${p.videos.length > 1 ? `Watch ${p.videos.length} clips` : p.link ? "Watch trailer" : "Watch"}</button>${linkBtn(p)}
      </div></article>`;
    }).join("");
    host.addEventListener("click", e => { const m = e.target.closest(".more"); if (m) { m.parentElement.classList.remove("clamp"); m.remove(); } });
  }
  const n = CATS[(CATS.indexOf(cat) + 1) % CATS.length];
  $("#next").innerHTML = `<a href="${n.page}"><span><span class="label">Next</span><b>${esc(n.name)}</b></span><span class="arrow" aria-hidden="true">→</span></a>`;
}

/* ---- reel button ---- */
$(".tab-reel").addEventListener("click", () => { setSheet(false); openPlayer(PROJECTS.find(p => p.id === "reel")); });
const reelBtn = $("#watchReel");
if (reelBtn) reelBtn.addEventListener("click", () => openPlayer(PROJECTS.find(p => p.id === "reel")));

/* ---- contact ---- */
document.querySelectorAll(".social a").forEach(s => s.addEventListener("click", () => {
  document.querySelectorAll(".social a").forEach(x => x.classList.remove("clicked")); s.classList.add("clicked");
}));
const copyBtn = $("#copyMail");
if (copyBtn) copyBtn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(CONTACT_EMAIL); copyBtn.textContent = "Copied ✓"; copyBtn.classList.add("done"); }
  catch { copyBtn.textContent = "Select & copy"; }
  setTimeout(() => { copyBtn.textContent = "Copy"; copyBtn.classList.remove("done"); }, 2200);
});
const mail = $("#mailLink");
if (mail) { mail.textContent = CONTACT_EMAIL; mail.href = "mailto:" + CONTACT_EMAIL; }
const form = $("#form");
if (form) form.addEventListener("submit", async e => {
  e.preventDefault();
  const st = $("#status");
  if (!form.checkValidity()) { st.textContent = "Please add your name, a valid email and a message."; return; }
  const d = Object.fromEntries(new FormData(form));
  if (FORM_ENDPOINT) {
    st.textContent = "Sending…";
    try { const r = await fetch(FORM_ENDPOINT, {method:"POST", headers:{Accept:"application/json"}, body:new FormData(form)});
      if (!r.ok) throw 0; st.textContent = "Thanks! Your message is on its way."; form.reset(); }
    catch { st.textContent = "That didn't go through. Please email " + CONTACT_EMAIL + " directly."; }
    return;
  }
  const body = `Name: ${d.name}\nEmail: ${d.email}\nProject type: ${d.type}\nTimeline: ${d.timeline}\n\n${d.message}`;
  location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Project inquiry — " + d.type)}&body=${encodeURIComponent(body)}`;
  st.textContent = "Opening your email app… If nothing happens, write to " + CONTACT_EMAIL + ".";
});

$("#yr").textContent = new Date().getFullYear();

/* ---- gentle reveal on scroll ---- */
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), {rootMargin:"0px 0px -8% 0px"});
document.querySelectorAll(".rise").forEach(el => io.observe(el));
}
