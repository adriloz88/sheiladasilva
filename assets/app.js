{
/* .map(yt) passes the array index as a label: drop non-text labels */
PROJECTS.forEach(p => p.videos.forEach(v => { if (typeof v.label !== "string") delete v.label; }));

/* festival honors for Summer Fog (Christopher Kenji) */
{ const sf = PROJECTS.find(p => p.id === "mv-5GbaPiJKkK8");
  if (sf) sf.awards = ["London Intl. Monthly Film Festival — Honorable Mention, Best Editing (Feb 2022)", "Tokyo Intl. Monthly Film Festival — Honorable Mention, Best Editing (2022)"]; }

/* festival selection for The Sleepless Club */
{ const sc = PROJECTS.find(p => p.id === "sleepless");
  if (sc) sc.awards = ["Chelsea Film Festival 2025 — Nominee, Best Short Film (Narrative Short Award)"]; }

/* recognition banner */
const AWARDS = [
  {org:"Chelsea Film Festival", result:"Nominee", cat:"Best Short Film · 2025", work:"The Sleepless Club", sub:"Dir. Guillermo Arcaya", href:"scripted.html#sleepless"},
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
const watchUrl = v => v.type === "yt" ? `https://www.youtube.com/watch?v=${v.id}` : `https://vimeo.com/${v.id}`;
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
  const ext = $("#lbExt");
  ext.href = watchUrl(v); ext.textContent = `Watch on ${v.type === "yt" ? "YouTube" : "Vimeo"} ↗`;
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
        <button class="btn btn-g" data-play="${esc(p.id)}"><svg viewBox="0 0 12 14"><path d="M0 0l12 7-12 7z"/></svg>${p.videos.length > 1 ? `Watch ${p.videos.length} clips` : "Watch"}</button>
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
