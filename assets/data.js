/* Sheila Da Silva — portfolio data. Edit projects, videos and the contact email here. */
/* ======== CONFIG ========
   Contact form: paste a Formspree (or similar) endpoint to receive messages directly.
   If left blank, the form opens the visitor's email app addressed to CONTACT_EMAIL. */
const FORM_ENDPOINT = "";
const CONTACT_EMAIL = "hello@sheiladasilva.com"; // ← replace with your booking email

const yt = (id,label) => ({type:"yt", id, label});
const vm = id => ({type:"vm", id});

const PROJECTS = [
  {id:"reel", cat:"reel", title:"Editor Reel", kind:"Reel", hidden:true,
   thumb:"https://i.vimeocdn.com/video/1786629516-c2676ac9371a86c56fd2530cafbfa050674b06d72a8556141cd882b50cfa4356-d_1280x720",
   videos:[vm("905389708")], facts:{Runtime:"1:58", Scope:"Scripted · Unscripted · Digital · Music"},
   desc:["A two-minute look at the range — tension, comedy, emotion and rhythm across film, TV and digital."]},

  // Scripted
  {id:"sleepless", cat:"scripted", size:"lg", title:"The Sleepless Club", kind:"Short Film", role:"Editor & Post Supervisor",
   thumb:"images/sleepless.jpg", badge:"Festival run",
   videos:[yt("jf0uCMmpahM")], facts:{Genre:"Neo-Noir, Thriller, Mystery", Role:"Editor & Post Production Supervisor", Director:"Guillermo Arcaya"},
   desc:["An ex-NBA player whose son disappears without a trace takes matters into his own hands, crashing between a pharmaceutical corporation and a group of anarchists.","Currently on the film festival circuit."]},
  {id:"lifeofothers", cat:"scripted", size:"lg", title:"The Life of Others", kind:"Short Film", role:"Editor & Post Supervisor",
   thumb:"images/lifeofothers.jpg", badge:"Festival run",
   videos:[yt("N7F7oDnEa80")], facts:{Genre:"Magical Realism, Thriller", Role:"Editor & Post Production Supervisor", Director:"Guillermo Arcaya"},
   desc:["A drifter with a haunting past becomes a discreet body-for-hire, temporarily taking over the lives of others — until he assumes the identity of a desperate client and must protect both of their lives.","Currently on the film festival circuit."]},
  {id:"restoration", cat:"scripted", title:"Restoration, Inc.", kind:"Feature Film", role:"Assistant Editor & Trailer Editor",
   thumb:"images/restoration.jpg",
   videos:[vm("573706646")], facts:{Genre:"Suspense, Action", Role:"Assistant Editor & Trailer Editor", Director:"Bolaji Tijani-Qudus"},
   desc:["To prevent damaging information from surfacing before a presidential election, Alex Quinn's team is hired by the US Attorney General to make sure a notorious drug lord never makes it to prison. Things don't go as planned… intentionally."]},
  {id:"fish", cat:"scripted", title:"Fish Out of Water", kind:"Short Film", role:"Editor & VFX Editor",
   thumb:"images/fish.jpg",
   videos:[vm("278053241"), vm("319571637")], facts:{Genre:"Comedy Drama", Role:"Editor & VFX Editor", Director:"Bao Chunyu"},
   desc:["Lin, a teenage rap fanatic fresh off the boat from China, is bullied for barely speaking English at his inner-city American high school — so he battles for acceptance by taking on the reigning rap champ."]},

  // Unscripted
  {id:"likeagirl", cat:"unscripted", size:"lg", title:"Like a Girl", kind:"Sports Docu-Series", role:"Editor · 3 episodes",
   thumb:"images/likeagirl.jpg", award:"Critics Choice nom.",
   videos:["HUsbgczgb40","4MZkPOmScJY","1D-n7hoIa8o","ZK-oolnrvmQ","lTvWitj4fHY","cgh3SpA_4UE"].map(yt), facts:{Format:"Sports / Docu-Style", Host:"Beija Velez", Role:"Editor, 3 episodes"},
   awards:["Critics Choice nominee — Best Sports Show","Shorty Impact Awards — Audience Honor, Gender Equality"],
   desc:["Keeping up with the most inspiring women in sports — host Beija Velez gets real with iconic athletes about mental health, body image, and gender and race inequality.","Episodes I edited feature 3-time Olympic medalist April Ross on her struggle with depression, Angel McCoughtry on the pay gap in basketball, and track & field star CeCé Telfer on her journey as a trans woman in sports."]},
  {id:"upcycle", cat:"unscripted", size:"lg", title:"Upcycle Nation", kind:"Competition Show", role:"Editor · 5 episodes",
   thumb:"images/upcycle.jpg",
   videos:["zKO1s3k_fI8","9c3mVcumCh8","BRwlBmLy1uk","nEju_TRi1Ws"].map(yt), facts:{Format:"Fashion Competition", Hosts:"Karrueche Tran, Peder Cho, Jerome Lamaar", Role:"Editor (1 full episode) + co-editor (4)"},
   desc:["Fashion gets altered in this high-stakes competition where talented upcycling designers make something out of nothing.","I edited Episode 5 — three designers transform discarded quinceañera dresses into streetwear — and co-edited four more episodes, from bags turned into garments to gloves turned into dresses."]},
  {id:"scratch", cat:"unscripted", title:"Made From Scratch", kind:"Cooking Show", role:"Editor · Seasons 3, 4 & 6",
   thumb:"images/scratch.jpg",
   videos:["MRCUPg9gnM0","nGab25DsalI","NPJEI36gMTc"].map(yt), facts:{Format:"Celebrity Cooking", Role:"Editor, Seasons 3, 4 & 6"},
   desc:["I edited various episodes across three seasons. Highlights include Mario Lopez and his wife Courtney cooking their family's manicotti (Season 6 special), and rapper Kyle with DJ Jadaboo making tamales (Season 4)."]},
  {id:"wntta", cat:"unscripted", title:"We Need to Talk About America", kind:"Comedy Clip Show", role:"Co-editor · Seasons 1 & 2",
   thumb:"images/wntta.jpg",
   videos:["x49oSRPPeew","V1bVoHMMW1U","tvljmQlbwgg","UujKglHQYq8"].map(yt), facts:{Format:"Comedy Clip Show", Cast:"Sherry Cola, Tim Chantarangsu, Jesus Trejo & more", Role:"Co-editor, all episodes S1–S2"},
   desc:["American culture can be wild and weird — especially through the eyes of sharp-witted, first-generation, bicultural comedians.","I collaborated with two other editors on every episode of Seasons 1 and 2."]},
  {id:"sexsells", cat:"unscripted", title:"Sex Sells", kind:"Docu-Reality", role:"Editor · 2 episodes",
   thumb:"images/sexsells.jpg",
   videos:["jvnOzRbdM3k","qcJX_yn5CSM","GcaVc_9Dybw","dl9UmuU-0xE"].map(yt), facts:{Format:"Docu-Reality", Host:"Weezy WTF", Role:"Editor, 2 episodes"},
   desc:["Host Weezy WTF explores sex-related businesses while helping celebrity guests solve their issues — whether they know they have them or not.","Episodes I edited feature Sarunas Jackson and a call-in from Charlamagne tha God."]},
  {id:"dontcancel", cat:"unscripted", title:"Don't Cancel Me", kind:"Talk Show", role:"Editor · 2 episodes",
   thumb:"images/dontcancel.jpg",
   videos:["jREqwRxAseY","mhkhNv8XmvQ"].map(yt), facts:{Format:"Talk Show", Host:"Amara La Negra", Role:"Editor, 2 episodes"},
   desc:["Host Amara La Negra challenges her guests to speak out about difficult topics while creating a comforting space to learn and grow.","I edited Episode 3 (Finance, with Jay Ajayi and Sharelle) and Episode 4 (Body Parts, with Dr. Miami and Jennell Butler)."]},

  // Digital
  {id:"fascinatingfails", cat:"digital", title:"Fascinating Fails", kind:"PBS Terra Series", role:"Editor · Docu-style science",
   thumb:"images/fascinatingfails.jpg", award:"Buzzies nom.",
   videos:[yt("xDWLjNhHRUk","How a Kitchen Mishap Changed Science Forever"), yt("Q4VIa5a8FqQ","Invasion of the Toxic Toads"), yt("Nq_7AfAhKPM","How Moldy Bread Can Change Your Brain")],
   facts:{Network:"PBS Terra", Format:"Docu-style · Science · Educational", Role:"Editor"},
   awards:["The Buzzies nominee — Best Short Form Factual Program"],
   desc:["A PBS Terra series about the accidents, blunders and failures that ended up changing science — from a kitchen mishap that rewrote chemistry to the cane toad, nature's most successful failure.","Fast, playful docu-style storytelling that makes science stick."]},
  {id:"youtube", cat:"digital", title:"YouTube Content", kind:"Digital", role:"FUSE · Chris Heria · Career Girls",
   thumb:"images/yt/bEWZe1n_eYA.jpg",
   collage:["bEWZe1n_eYA","MM4eA9HJAV4","TThA56FFfuM","YclZFqB8wao","HavmienB0Vg","-KnsJ-xy47c"],
   videos:[
     yt("bEWZe1n_eYA","FUSE · Mind Massage — Alessia Cara (ASMR)"),
     yt("L5VyI5YnGSA","FUSE · Mind Massage — Ed Maverick (ASMR)"),
     yt("6T86rOc6sqA","FUSE · Lie Detector — Suigeneris"),
     yt("TThA56FFfuM","FUSE · Lie Detector — Toosii"),
     yt("Ty6Utd1-cYE","FUSE · Sex Sells — Weezy & Brent Faiyaz"),
     yt("-KnsJ-xy47c","FUSE · Kids on Lyrics — Jay Park"),
     yt("YclZFqB8wao","FUSE · Drip vs. Flex — The Kid LAROI"),
     yt("5Ach2wpgY-Q","FUSE · Hype Market — Vintage Streetwear"),
     yt("MM4eA9HJAV4","Chris Heria — What 600 Calories Look Like"),
     yt("s99e__0Ev5E","Chris Heria — Eating vs. Burning Food Challenges"),
     yt("HavmienB0Vg","Career Girls — Physicist Elizabeth Donley")],
   facts:{Channels:"FUSE (40+ videos) · Chris Heria · Career Girls (80+ videos)", Formats:"ASMR, entertainment, reaction, interview, fashion, fitness, vlog, educational"},
   desc:["Content built for retention on YouTube: 40+ entertainment videos for FUSE — ASMR, lie-detector, reaction and fashion series — plus fitness vlogs for Chris Heria.","I also edited 80+ educational videos for the Career Girls channel, some with my own motion graphics."]},
  {id:"commercials", cat:"digital", title:"Commercials", kind:"Brand", role:"Editor",
   thumb:"images/commercials.jpg",
   videos:[yt("8quTL2M8QEQ"), yt("5bcFa__ZwNo")], facts:{Format:"Commercial spots", Role:"Editor"},
   desc:["Brand spots built around mood, motion and a single clear message."]},
  {id:"social", cat:"digital", title:"Social Media Ads", kind:"Performance", role:"Editor",
   thumb:"images/social.jpg",
   videos:[yt("PQdj5hCju8s")], facts:{Format:"Paid social", Role:"Editor"},
   desc:["A reel of social ads — thumb-stopping hooks, fast pacing, and calls to action that land in the first seconds."]},
  {id:"corporate", cat:"digital", title:"Microsoft Learning Circle", kind:"Corporate", role:"Editor & Translation",
   thumb:"images/corporate.jpg",
   videos:[yt("YRUyMolrMn0")], facts:{Client:"Microsoft", Location:"Medellín, Colombia", Role:"Editor & translation support"},
   desc:["A corporate video for Microsoft's Learning Circle employee series, produced for the Medellín, Colombia franchise. I also helped with the translation."]},
  {id:"events", cat:"digital", title:"Event Recaps", kind:"Events", role:"Editor",
   thumb:"images/events.jpg",
   videos:[yt("br_BhdEB-bQ"), yt("s3MYSUSfzRM")], facts:{Events:"Caribbean Posh Weekend · Prolific Studios", Role:"Editor"},
   desc:["A 3-day recap of Caribbean Posh Weekend in St. Thomas, USVI, celebrating Caribbean women across the region — and a 2-day recap for the Prolific Studios tattoo artists at the San Diego Convention Center."]},
];

const MUSIC = [
  ["TUvKh-Y7gCA","Christopher Kenji","Never Enough",1],["5GbaPiJKkK8","Christopher Kenji","Summer Fog"],
  ["ORExDVjhT9c","Francisco Leal ft. Gabriel Loynaz","Friends"],["efDQgARPJz8","Razteria","What I Love",1],
  ["I605Dq8Yv-s","Razteria","Me Gusta Estar Sola"],["SoC2LqfaWBY","Drei Tortugas","Extrañando Caracas",1],
  ["OM6nBuVyek4","Ferrer","La Lista"],["tbQAZKhfgts","Razteria","Why"],
  ["RSXWR4JP3w4","Razteria","100%"],["sTqm3hvLZ8E","Flesh Man and the Death Band","A Corpse in Love"]
];
MUSIC.forEach(([id,artist,song,feat])=>PROJECTS.push({
  id:"mv-"+id, cat:"music", title:song, kind:artist, role:"Music Video · Editor", feat:!!feat,
  thumb:`https://i.ytimg.com/vi/${id}/hqdefault.jpg`, videos:[yt(id)],
  facts:{Artist:artist, Role:"Editor"}, desc:[`Official music video for "${song}" by ${artist}.`]
}));
