const CONFIG = {
  // ---------- PEOPLE & DATES ----------
  herName: "Shaista",
  senderName: "{{FRIEND_NAME}}", // EDIT ME: the boyfriend's name
  age: 19,
  birthdayLabel: "3 December",
  // Midnight of the birthday in Pakistan Standard Time (UTC+5):
  targetISO: "2026-12-03T00:00:00+05:00",
  // Password = her birthdate as D M YYYY with no spaces. Accepts all of these:
  passwords: ["3122007", "03122007"], // also accept "3-12-2007", "3/12/2007", "03.12.2007" by stripping non-digits

  // ---------- OPTIONAL AUDIO FILES (leave "" to use synthesised music) ----------
  musicFile: "", // e.g. "audio/music.mp3"
  dedicationFile: "", // e.g. "audio/dedication.mp3"
  dedicationSong: "{{SONG_NAME}}", // EDIT ME

  // ---------- 1) MEMORIES (photo stars) ----------
  // photo file name is photo1.jpg ... photo8.jpg in /photos
  memories: [
    {
      caption: "The day everything felt a little brighter.",
      date: "A day I'll never forget",
    },
    {
      caption: "A small moment that became a big memory.",
      date: "Somewhere, sometime",
    },
    { caption: "You, being you. My favourite view.", date: "Always" },
    {
      caption: "Laughing at something nobody else understood.",
      date: "Our little secret",
    },
    {
      caption: "The kind of day I wish I could replay.",
      date: "A golden afternoon",
    },
    { caption: "No special reason. Just you, just happy.", date: "Any day" },
    {
      caption: "Proof that good company makes any place beautiful.",
      date: "A good place",
    },
    { caption: "To many more memories like this one.", date: "Soon" },
  ],

  // ---------- 2) WISHES ----------
  wishes: [
    {
      from: "{{FRIEND_NAME}}",
      text: "May your 19th year be gentle with you and generous with its surprises.",
    },
    {
      from: "Your friends",
      text: "Wishing you laughter that arrives without a reason and happiness that stays.",
    },
    {
      from: "Your family",
      text: "May every door you knock on this year open with a smile.",
    },
    {
      from: "Someone who believes in you",
      text: "Grow in the direction of your dreams, and never forget how far you have already come.",
    },
    {
      from: "The sky",
      text: "May peace find you on the busy days and joy find you on the quiet ones.",
    },
    {
      from: "{{FRIEND_NAME}}",
      text: "I hope this year gives you everything you quietly hope for.",
    },
  ],

  // ---------- 3) THOUGHTS ("Things we noticed about you") ----------
  thoughts: [
    "You make ordinary moments feel special.",
    "Your kindness is quiet, but everyone feels it.",
    "You carry a calm that makes people around you feel lighter.",
    "You have a way of being brave without making any noise about it.",
    "Your smile can change the mood of a whole room.",
    "You are the kind of person people are lucky to know.",
  ],

  // ---------- 4) POEMS (original, short, clean) ----------
  poems: [
    {
      title: "Her Star",
      lines: [
        "The night was quiet, the sky was wide,",
        "Then one small star lit up with pride.",
        "Not to be seen by all the world,",
        "But to remind one girl she is worth the gold.",
      ],
    },
    {
      title: "Nineteen",
      lines: [
        "Nineteen years, nineteen lights,",
        "Each one brighter than the nights.",
        "May the next one hold more peace,",
        "More laughter, and a gentle ease.",
      ],
    },
    {
      title: "Midnight Wish",
      lines: [
        "If the sky could keep a wish,",
        "It would keep yours safe and tight.",
        "And when the morning comes around,",
        "It would hand it back with light.",
      ],
    },
  ],

  // ---------- 5) PREDICTIONS (light, funny, sweet) ----------
  predictions: [
    "This year, you will find the perfect snack at exactly the right moment.",
    "A very good surprise is hiding in your next three weeks.",
    "Someone will make you laugh so hard you forget what you were worried about.",
    "You will take at least one photo this year that you will love forever.",
    "An old dream will quietly knock on your door again.",
  ],

  // ---------- 6) LITTLE SURPRISES ----------
  surprises: [
    {
      type: "song",
      title: "A song for you",
      text: "This one is for you, from {{FRIEND_NAME}}.",
    },
    {
      type: "coupon",
      title: "Coupon: One Free Treat",
      text: "Valid for one treat of your choice. No expiry date. Terms: you must smile when you redeem it.",
    },
    {
      type: "coupon",
      title: "Coupon: One Long Talk",
      text: "Valid for one long, uninterrupted conversation about anything you like.",
    },
    {
      type: "open",
      title: "Open when you need a smile",
      text: "Remember: you are doing better than you think, and you are loved more than you know.",
    },
  ],

  // ---------- HIDDEN SURPRISES ----------
  shootingStarText: "A wish has been granted. Ask me for it in real life. ✨",
  moonPoem: [
    "The moon has watched the whole year through,",
    "And every night it spoke of you.",
  ],
  privateLine: "{{PRIVATE_LINE}}", // EDIT ME: a line only she will understand
  ownStarText:
    "Do you know why this one shines brighter? Because it was born for you.",

  // ---------- THE MAIN LETTER (in his voice; he should edit it) ----------
  letter: [
    "Dear Shaista,",
    "If I could give you the sky, I would. Since I can't, I made you a small one instead.",
    "Every star you opened tonight is a piece of how I see you: kind, calm, brave and bright in a way you rarely notice yourself.",
    "This year, I hope you laugh more than you worry, rest more than you rush, and believe in yourself the way the people who love you already do.",
    "Whatever the year brings, I hope you remember that you were never ordinary to me. You were always a star.",
    "Happy 19th birthday.",
    "With all my heart,",
    "{{FRIEND_NAME}}",
  ],

  // ---------- FINAL LINES ----------
  finalLine: "The sky has a new star today. Look up tonight. It's yours.",
  // EDIT ME: Interface wording.
  ui: {
    brand: "The night her star was born",
    edition: "A little universe · 03 / 12 / 2026",
    gateEyebrow: "A SKY THAT ONLY YOU CAN OPEN",
    gateTitle: "Someone left a secret in the sky.",
    gateSub: "Enter the date the universe remembers you by.",
    passwordLabel: "Your birthdate",
    passwordHint:
      "Day, month, year, with no spaces or dashes. For example, 5 June 2001 is 562001.",
    unlock: "Unlock ✦",
    soundHint: "🎧 Best with sound on and brightness up.",
    wrong: "The stars didn't recognise that one. Try again?",
    wrongHint: "Think of the day you were born.",
    lockedLines: [
      "Somewhere in the universe...",
      "a star is waiting for its moment.",
      "Keep this page open.",
      "At midnight, something will be born.",
    ],
    clock: "Midnight arrives in",
    skyHint: "Tap the sky. It listens.",
    countdownEyebrow: "The sky is holding its breath",
    birthEyebrow: "The night her star was born",
    birthdayTitle: "Happy {age}th Birthday, {name} ✨",
    birthdaySub:
      "On 3rd December, the universe added one more star. It belongs to you.",
    welcome: "Welcome back, {name}. Your star is already shining. ✦",
    galaxyEyebrow: "Nineteen lights. One little universe.",
    galaxyTitle: "A sky full of you.",
    guide: "Every glowing star holds something for you. Start here.",
    progress: "{n} of 6 constellations explored ✦",
    labels: [
      "Memories",
      "Wishes",
      "Thoughts",
      "Poems",
      "Predictions",
      "Little Surprises",
    ],
    feelings: [
      "Moments to keep",
      "Words with love",
      "The way we see you",
      "Written in starlight",
      "A little forecast",
      "Just because",
    ],
    back: "Back to the sky",
    next: "Next star ✦",
    thoughtTitle: "Things we noticed about you",
    forecast: "Your forecast...",
    from: "— from ",
    secretLine: "One star is still hiding...",
    star19: "Star #19",
    continue: "Continue ✦",
    wishEyebrow: "One last thing, before the morning",
    wishTitle: "Close your eyes. Make a wish.",
    wishHint: "Hold the screen to blow it out.",
    wishMade: "May it come true.",
    dawnEyebrow: "And so, your new year begins",
    certificateTitle: "CERTIFICATE OF A NEW STAR",
    certificateDate: "Star No. {age} · Born at midnight, 3 December 2026",
    certificateNamed: "Named: {name}'s Star",
    certificateMotto: "Look up tonight. It's yours.",
    replay: "Replay the night 🌙",
    save: "Save this moment 📷",
    cinemaStart: "Press SPACE to begin",
    play: "Play dedication",
    pause: "Pause dedication",
    audioMissing: "The dedication will be here soon.",
    mute: "Mute sound",
    unmute: "Unmute sound",
  },
};

const $ = (id) => document.getElementById(id);
const params = new URLSearchParams(location.search);
const cinema = params.get("cinema") === "1";
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const replace = (text) =>
  String(text)
    .replaceAll("{{FRIEND_NAME}}", CONFIG.senderName)
    .replaceAll("{name}", CONFIG.herName)
    .replaceAll("{age}", CONFIG.age);
const text = (node, value) => (node.textContent = replace(value));
const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const escapeHTML = (s) =>
  replace(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ],
  );
const target = Date.parse(CONFIG.targetISO);
// URLSearchParams interprets a literal + as a space; restore timezone offsets.
const fake = params.get("fake");
const fakeStart = fake ? Date.parse(fake.replace(/ (\d\d:\d\d)$/, "+$1")) : NaN;
const loadedAt = Date.now();
const now = () =>
  Number.isFinite(fakeStart) ? fakeStart + Date.now() - loadedAt : Date.now();
let scene = "gate",
  generation = 0,
  countdownTarget = target,
  lastNumber = -1,
  clockTimer,
  focused = -1,
  modalOrigin,
  modalToken = 0,
  letterStarted = false,
  letterSpeed = 38,
  blown = false,
  holdTimer,
  growTimer,
  wrongAttempts = 0,
  moonTaps = [];
const visited = CONFIG.ui.labels.map(() => new Set());
const groups = [
  "memories",
  "wishes",
  "thoughts",
  "poems",
  "predictions",
  "surprises",
];
const colors = [
  "--ice",
  "--rose",
  "--violet",
  "--gold",
  "--teal",
  "--gold-soft",
];
const shapes = [
  [
    [15, 55],
    [35, 24],
    [61, 40],
    [87, 16],
    [110, 49],
    [144, 36],
    [122, 75],
    [73, 67],
  ],
  [
    [15, 27],
    [47, 46],
    [70, 14],
    [100, 53],
    [146, 24],
    [123, 76],
  ],
  [
    [12, 44],
    [43, 16],
    [65, 48],
    [96, 30],
    [144, 61],
    [99, 77],
  ],
  [
    [20, 64],
    [77, 16],
    [142, 61],
  ],
  [
    [15, 65],
    [47, 20],
    [83, 53],
    [113, 24],
    [147, 68],
  ],
  [
    [18, 25],
    [64, 54],
    [108, 17],
    [145, 64],
  ],
];

// The audio engine stays silent until a real tap or key press unlocks it.
class AudioEngine {
  constructor() {
    this.muted = false;
    this.level = 0.6;
    this.started = false;
  }
  async start() {
    try {
      if (!this.ctx) {
        this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        this.master = this.ctx.createGain();
        this.master.gain.value = 0;
        this.master.connect(this.ctx.destination);
        this.started = true;
        this.ambient();
      }
      await this.ctx.resume();
      this.fade(0.6, 1.8);
    } catch (e) {
      /* The visual story also works without audio. */
    }
  }
  fade(value, seconds = 0.5) {
    this.level = value;
    if (!this.ctx) return;
    const t = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(t);
    this.master.gain.setTargetAtTime(
      this.muted || document.hidden ? 0 : value,
      t,
      Math.max(0.02, seconds / 3),
    );
  }
  tone(hz, duration = 1.4, volume = 0.08, delay = 0, type = "sine") {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay,
      o = this.ctx.createOscillator(),
      g = this.ctx.createGain();
    o.type = type;
    o.frequency.value = hz;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(volume, t + 0.025);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    o.connect(g);
    g.connect(this.master);
    o.start(t);
    o.stop(t + duration + 0.05);
  }
  chime() {
    this.tone(
      [440, 523.25, 587.33, 659.25, 783.99, 880][Math.floor(Math.random() * 6)],
    );
  }
  heartbeat() {
    this.tone(55, 0.08, 0.15);
    this.tone(55, 0.08, 0.1, 0.22);
  }
  ambient() {
    if (CONFIG.musicFile) {
      const media = new Audio(CONFIG.musicFile);
      media.loop = true;
      const source = this.ctx.createMediaElementSource(media);
      source.connect(this.master);
      media.play().catch(() => this.pads());
      media.addEventListener(
        "error",
        () => {
          if (!this.padTimer) this.pads();
        },
        { once: true },
      );
      this.music = media;
    } else this.pads();
  }
  pads() {
    const chords = [
      [220, 261.63, 329.63],
      [174.61, 220, 261.63],
      [130.81, 164.81, 196],
      [196, 246.94, 293.66],
    ];
    let index = 0;
    const play = () => {
      const t = this.ctx.currentTime,
        filter = this.ctx.createBiquadFilter();
      filter.frequency.value = 900;
      filter.connect(this.master);
      const lfo = this.ctx.createOscillator(),
        lg = this.ctx.createGain();
      lfo.frequency.value = 0.09;
      lg.gain.value = 160;
      lfo.connect(lg);
      lg.connect(filter.frequency);
      lfo.start();
      lfo.stop(t + 12);
      chords[index++ % 4].forEach((hz, i) => {
        const o = this.ctx.createOscillator(),
          g = this.ctx.createGain();
        o.type = i === 1 ? "triangle" : "sine";
        o.frequency.value = hz;
        o.detune.value = (i - 1) * 5;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(0.026, t + 3);
        g.gain.setValueAtTime(0.026, t + 8);
        g.gain.linearRampToValueAtTime(0, t + 11);
        o.connect(g);
        g.connect(filter);
        o.start();
        o.stop(t + 11.1);
      });
    };
    play();
    this.padTimer = setInterval(play, 8000);
  }
  whoosh() {
    if (!this.ctx) return;
    const t = this.ctx.currentTime,
      b = this.ctx.createBuffer(1, this.ctx.sampleRate, this.ctx.sampleRate),
      a = b.getChannelData(0);
    for (let i = 0; i < a.length; i++) a[i] = Math.random() * 2 - 1;
    const source = this.ctx.createBufferSource(),
      f = this.ctx.createBiquadFilter(),
      g = this.ctx.createGain();
    source.buffer = b;
    f.type = "bandpass";
    f.frequency.setValueAtTime(250, t);
    f.frequency.exponentialRampToValueAtTime(1800, t + 0.8);
    g.gain.setValueAtTime(0.001, t);
    g.gain.linearRampToValueAtTime(0.07, t + 0.25);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.95);
    source.connect(f);
    f.connect(g);
    g.connect(this.master);
    source.start();
    source.stop(t + 1);
  }
  swell() {
    this.whoosh();
    [220, 261.63, 329.63, 440].forEach((f, i) =>
      this.tone(f, 4, 0.065, i * 0.15, "triangle"),
    );
  }
}
const audio = new AudioEngine();

// One canvas draws three quiet layers of stars, dust and eased parallax.
const canvas = $("starfield"),
  ctx = canvas.getContext("2d");
let width = innerWidth,
  height = innerHeight,
  stars = [],
  dust = [],
  px = 0,
  py = 0,
  tx = 0,
  ty = 0,
  raf,
  previous = 0,
  slowTime = 0,
  density = 0.15;
function resizeSky() {
  width = innerWidth;
  height = innerHeight;
  const d = Math.min(devicePixelRatio || 1, 2);
  canvas.width = width * d;
  canvas.height = height * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
  stars = Array.from(
    { length: Math.round((width < 700 ? 120 : 300) * (reduced ? 0.4 : 1)) },
    () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.05 + 0.25,
      z: 1 + Math.floor(Math.random() * 3),
      phase: Math.random() * 7,
      period: 2000 + Math.random() * 4000,
    }),
  );
  dust = Array.from({ length: reduced ? 12 : 30 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: Math.random() * 0.8 + 0.2,
  }));
}
function frame(t) {
  if (document.hidden) {
    raf = null;
    return;
  }
  const delta = previous ? t - previous : 16;
  previous = t;
  if (delta > 24) slowTime += Math.min(delta, 100);
  else slowTime = Math.max(0, slowTime - delta);
  if (slowTime > 2000 && !document.body.classList.contains("low-performance")) {
    stars = stars.slice(0, Math.ceil(stars.length * 0.6));
    document.body.classList.add("low-performance");
  }
  px += (tx - px) * 0.06;
  py += (ty - py) * 0.06;
  const wanted = ["gate", "locked", "countdown", "wish"].includes(scene)
    ? 0.15
    : 1;
  density += (wanted - density) * 0.018;
  ctx.clearRect(0, 0, width, height);
  for (const s of stars) {
    ctx.globalAlpha =
      (0.3 +
        0.5 * (0.5 + 0.5 * Math.sin((t / s.period) * Math.PI * 2 + s.phase))) *
      density;
    ctx.fillStyle = s.z === 3 ? "#ffe6b0" : "#bfe3ff";
    ctx.beginPath();
    ctx.arc(s.x + (px * s.z) / 3, s.y + (py * s.z) / 3, s.r, 0, Math.PI * 2);
    ctx.fill();
  }
  for (const d of dust) {
    if (!reduced) d.y -= 0.03;
    if (d.y < 0) d.y = height;
    ctx.globalAlpha = 0.15;
    ctx.fillStyle = "#c4d7ec";
    ctx.fillRect(d.x, d.y, d.r, d.r);
  }
  ctx.globalAlpha = 1;
  raf = requestAnimationFrame(frame);
}
resizeSky();
raf = requestAnimationFrame(frame);
addEventListener("resize", resizeSky);
addEventListener("pointermove", (e) => {
  if (!reduced) {
    tx = (e.clientX / width - 0.5) * 28;
    ty = (e.clientY / height - 0.5) * 28;
  }
});
async function tiltPermission() {
  if (reduced) return;
  try {
    if (
      typeof DeviceOrientationEvent !== "undefined" &&
      typeof DeviceOrientationEvent.requestPermission === "function"
    ) {
      if ((await DeviceOrientationEvent.requestPermission()) !== "granted")
        return;
    }
    addEventListener("deviceorientation", (e) => {
      if (e.gamma !== null) {
        tx = Math.max(-14, Math.min(14, e.gamma * 0.4));
        ty = Math.max(-14, Math.min(14, (e.beta - 40) * 0.3));
      }
    });
  } catch (e) {
    /* Finger-drag remains available. */
  }
}

// Scene changes cross-fade the same layers in interactive and film modes.
function showScene(next) {
  generation++;
  scene = next;
  document.body.dataset.scene = next;
  document.querySelectorAll(".scene").forEach((el) => {
    const active = el.id === next;
    el.classList.toggle("active", active);
    el.inert = !active;
    el.setAttribute("aria-hidden", String(!active));
  });
  if (clockTimer) {
    clearInterval(clockTimer);
    clockTimer = null;
  }
  closeCard(true);
  return generation;
}
function effect(className, duration = 3000) {
  const el = document.createElement("div");
  el.className = className;
  $("effects").append(el);
  setTimeout(() => el.remove(), duration);
  return el;
}
function ripple(x, y) {
  const el = effect("ripple", 950);
  el.style.left = x + "px";
  el.style.top = y + "px";
  audio.chime();
}
function growStar(x, y) {
  const s = effect("new-star", 86400000);
  s.textContent = "✦";
  s.style.left = x + "px";
  s.style.top = y + "px";
  s.style.fontSize = "10px";
  stars.push({ x, y, r: 1.4, z: 3, phase: 0, period: 3500 });
  setTimeout(() => s.remove(), 2000);
}

// The gate is a personal surprise, not security: all content is public in source.
async function unlock() {
  const value = $("password").value.replace(/\D/g, "");
  if (!CONFIG.passwords.includes(value)) {
    wrongAttempts++;
    text(
      $("gate-message"),
      CONFIG.ui.wrong + (wrongAttempts >= 3 ? " " + CONFIG.ui.wrongHint : ""),
    );
    const key = document.querySelector(".keyhole");
    key.classList.remove("shake");
    void key.offsetWidth;
    key.classList.add("shake");
    return;
  }
  if ($("unlock").disabled) return;
  $("unlock").disabled = true;
  audio.start();
  tiltPermission();
  syncSound();
  audio.chime();
  effect("bloom", 2600);
  document.querySelector(".gate-content").style.transition =
    "opacity 1.6s,filter 1.6s";
  document.querySelector(".gate-content").style.opacity = 0;
  document.querySelector(".gate-content").style.filter = "blur(8px)";
  await wait(1600);
  route();
}
$("unlock").onclick = unlock;
$("password").addEventListener("keydown", (e) => {
  if (e.key === "Enter") unlock();
});
function syncSound() {
  const audible = audio.started && !audio.muted;
  $("sound").setAttribute(
    "aria-label",
    audible ? CONFIG.ui.mute : CONFIG.ui.unmute,
  );
  $("sound").setAttribute("aria-pressed", String(audible));
  document.querySelector(".sound-slash").hidden = audible;
}
$("sound").onclick = async () => {
  if (!audio.started) await audio.start();
  else audio.muted = !audio.muted;
  audio.fade(audio.level);
  syncSound();
};
function route() {
  const test = params.get("test");
  if (test === "countdown") {
    countdownTarget = now() + 10000;
    startCountdown();
    return;
  }
  const routes = {
    birth: startBirth,
    galaxy: startGalaxy,
    secret: startSecret,
    wish: startWish,
    dawn: startDawn,
  };
  if (routes[test]) {
    routes[test]();
    return;
  }
  const remaining = target - now();
  if (remaining > 10000) startLocked();
  else if (remaining > 0) {
    countdownTarget = target;
    startCountdown();
  } else if (remaining >= -90000) startBirth();
  else welcome();
}
async function welcome() {
  const token = showScene("locked");
  text($("locked-line"), CONFIG.ui.welcome);
  text($("clock"), "");
  await wait(4000);
  if (token === generation) startGalaxy();
}
// Before midnight, the quiet sky keeps a clock anchored to the target instant.
async function startLocked(film = false) {
  const token = showScene("locked");
  $("sky-hint").style.opacity = 0;
  const tick = () => {
    const ms = target - now();
    if (ms <= 10000 && !film) {
      countdownTarget = target;
      startCountdown();
      return;
    }
    const seconds = Math.max(0, Math.ceil(ms / 1000));
    text(
      $("clock"),
      `${CONFIG.ui.clock} ${String(Math.floor(seconds / 3600)).padStart(2, "0")}h ${String(Math.floor(seconds / 60) % 60).padStart(2, "0")}m ${String(seconds % 60).padStart(2, "0")}s`,
    );
  };
  if (!film) {
    tick();
    clockTimer = setInterval(tick, 250);
  } else text($("clock"), "");
  for (const line of CONFIG.ui.lockedLines) {
    if (token !== generation) return;
    $("locked-line").style.opacity = 0;
    await wait(600);
    if (token !== generation) return;
    text($("locked-line"), line);
    $("locked-line").style.opacity = 1;
    await wait(film ? 1900 : 3500);
  }
  if (token === generation && !film) {
    $("locked-line").style.opacity = 0;
    await wait(3000);
    if (token === generation) {
      text($("sky-hint"), CONFIG.ui.skyHint);
      $("sky-hint").style.opacity = 1;
    }
  }
}
// The final ten beats are recomputed from the clock, so zero cannot drift.
function startCountdown(film = false) {
  const token = showScene("countdown");
  lastNumber = -1;
  let finishing = false;
  const tick = () => {
    if (token !== generation) return;
    const n = Math.max(0, Math.ceil((countdownTarget - now()) / 1000));
    if (n !== lastNumber) {
      lastNumber = n;
      const el = $("number");
      text(el, String(n).padStart(2, "0"));
      el.classList.remove("count-beat");
      void el.offsetWidth;
      el.classList.add("count-beat");
      document
        .querySelector(".count-halo")
        .style.setProperty("--halo", 80 + (10 - n) * 14 + "px");
      if (n > 3) audio.heartbeat();
      else audio.fade(0, 0.35);
      if (n > 0)
        setTimeout(() => {
          if (token === generation)
            growStar(
              width * (0.15 + Math.random() * 0.7),
              height * (0.2 + Math.random() * 0.6),
            );
        }, 800);
    }
    if (n === 0 && !finishing) {
      finishing = true;
      $("blackout").style.transition = "opacity .15s";
      $("blackout").classList.add("dark");
      setTimeout(() => {
        if (token === generation) {
          $("blackout").classList.remove("dark");
          $("blackout").style.transition = "opacity 1s";
          if (!film) startBirth();
        }
      }, 1000);
    }
  };
  tick();
  clockTimer = setInterval(tick, 50);
}
// Nineteen lights bloom outward and the name gathers from sampled star points.
async function startBirth(film = false) {
  const token = showScene("birth");
  audio.fade(0.6, 2.5);
  audio.swell();
  effect("bloom", 4500);
  $("birth-stars").replaceChildren();
  $("birthday-title").textContent = "";
  $("birthday-sub").style.opacity = 0;
  document.querySelector(".birth-copy").classList.remove("visible");
  for (let i = 0; i < 19; i++) {
    const s = document.createElement("span");
    s.className = "birth-star";
    s.textContent = "✦";
    const angle = i * 2.39996,
      r = 80 + Math.sqrt(i / 19) * Math.min(width, height) * 0.5;
    s.style.setProperty("--tx", Math.cos(angle) * r + "px");
    s.style.setProperty("--ty", Math.sin(angle) * r + "px");
    s.style.setProperty("--delay", 0.5 + i * 0.035 + "s");
    $("birth-stars").append(s);
  }
  setTimeout(() => {
    if (token === generation) {
      effect("wave", 3200);
      audio.whoosh();
    }
  }, 1500);
  await wait(4000);
  if (token !== generation) return;
  drawName(token);
  await wait(film ? 18000 : 6000);
  if (token !== generation) return;
  document.querySelector(".birth-copy").classList.add("visible");
  await typeInto(
    $("birthday-title"),
    replace(CONFIG.ui.birthdayTitle),
    45,
    token,
  );
  await wait(1600);
  if (token !== generation) return;
  text($("birthday-sub"), CONFIG.ui.birthdaySub);
  $("birthday-sub").style.opacity = 1;
  if (!film) {
    await wait(5500);
    if (token === generation) startGalaxy();
  }
}
function drawName(token) {
  const c = $("name-stars"),
    cx = c.getContext("2d"),
    off = document.createElement("canvas"),
    ox = off.getContext("2d");
  c.width = width;
  c.height = height;
  off.width = width;
  off.height = height;
  const size = Math.min(width * 0.19, 190);
  ox.font = `300 ${size}px "Cormorant Garamond", Georgia`;
  ox.textAlign = "center";
  ox.fillStyle = "#fff";
  ox.fillText(CONFIG.herName.toUpperCase(), width / 2, height / 2);
  const pixels = ox.getImageData(0, 0, width, height).data,
    points = [];
  for (let y = Math.floor(height / 2 - size); y < height / 2; y += 4)
    for (let x = 0; x < width; x += 4)
      if (pixels[(y * width + x) * 4 + 3] > 100) points.push({ x, y });
  const sampled = points
      .filter((_, i) => i % Math.max(1, Math.ceil(points.length / 250)) === 0)
      .map((p) => ({
        ...p,
        sx: Math.random() * width,
        sy: Math.random() * height,
      })),
    beg = performance.now();
  function draw(t) {
    cx.clearRect(0, 0, width, height);
    if (token !== generation) return;
    const elapsed = t - beg,
      p = Math.min(1, elapsed / 2500),
      ease = 1 - Math.pow(1 - p, 3),
      alpha = elapsed > 5200 ? Math.max(0, 1 - (elapsed - 5200) / 1000) : 1;
    cx.globalAlpha = alpha;
    cx.fillStyle = "#ffe6b0";
    cx.strokeStyle = "#ffe6b044";
    cx.lineWidth = 0.5;
    sampled.forEach((pt, i) => {
      const x = pt.sx + (pt.x - pt.sx) * ease,
        y = pt.sy + (pt.y - pt.sy) * ease;
      cx.beginPath();
      cx.arc(x, y, 1.1, 0, 7);
      cx.fill();
      if (
        elapsed > 2500 &&
        i &&
        Math.hypot(pt.x - sampled[i - 1].x, pt.y - sampled[i - 1].y) < 35
      ) {
        cx.beginPath();
        cx.moveTo(x, y);
        cx.lineTo(sampled[i - 1].x, sampled[i - 1].y);
        cx.stroke();
      }
    });
    if (elapsed > 4000) {
      cx.globalAlpha = Math.min(1, (elapsed - 4000) / 1500) * alpha;
      cx.font = ox.font;
      cx.textAlign = "center";
      cx.fillText(CONFIG.herName.toUpperCase(), width / 2, height / 2);
    }
    if (elapsed < 6300) requestAnimationFrame(draw);
    else cx.clearRect(0, 0, width, height);
  }
  requestAnimationFrame(draw);
}
async function typeInto(el, value, speed, token) {
  el.textContent = "";
  for (const char of value) {
    if (token !== generation) return;
    el.textContent += char;
    await wait(reduced ? Math.min(speed, 12) : speed);
  }
}

// The galaxy lets each constellation keep its own visited-star collection.
function buildGalaxy() {
  const mobile = width < 700;
  const positions = mobile
    ? [
        [30, 22],
        [72, 30],
        [25, 50],
        [74, 58],
        [32, 78],
        [70, 84],
      ]
    : [
        [12, 28],
        [43, 16],
        [78, 27],
        [24, 69],
        [58, 64],
        [89, 73],
      ];
  $("constellations").replaceChildren();
  groups.forEach((key, g) => {
    const group = document.createElement("div");
    group.className =
      "cluster" + (visited[g].size === CONFIG[key].length ? " done" : "");
    group.style.setProperty("--x", positions[g][0] + "%");
    group.style.setProperty("--y", positions[g][1] + "%");
    group.style.setProperty("--accent", `var(${colors[g]})`);
    group.dataset.group = g;
    const points = shapes[g];
    group.innerHTML = `<svg viewBox="0 0 165 100" aria-hidden="true"><path d="M ${points.map((p) => p.join(" ")).join(" L ")}"/>${points.map((p) => `<circle cx="${p[0]}" cy="${p[1]}" r="2"/>`).join("")}</svg><span class="cluster-label">${escapeHTML(CONFIG.ui.labels[g])}<small>${escapeHTML(CONFIG.ui.feelings[g])}</small></span>`;
    const open = document.createElement("button");
    open.className = "cluster-open";
    open.setAttribute("aria-label", CONFIG.ui.labels[g]);
    open.onclick = () => focusGroup(g);
    group.append(open);
    CONFIG[key].forEach((_, i) => {
      const p = points[i % points.length],
        b = document.createElement("button");
      b.className = "star-choice" + (visited[g].has(i) ? " seen" : "");
      b.style.left = (p[0] / 165) * 100 + "%";
      b.style.top = p[1] + "%";
      b.textContent = g === 4 ? "?" : "✦";
      b.setAttribute("aria-label", `${CONFIG.ui.labels[g]} ${i + 1}`);
      b.tabIndex = -1;
      b.onclick = () => openStar(g, i);
      group.append(b);
    });
    $("constellations").append(group);
  });
}
function startGalaxy() {
  showScene("galaxy");
  focused = -1;
  buildGalaxy();
  updateProgress();
  if (!cinema && !visited.some((s) => s.size)) {
    const fly = document.createElement("div");
    fly.className = "firefly";
    fly.id = "firefly";
    $("galaxy").append(fly);
  }
  scheduleShooting();
}
function focusGroup(g) {
  focused = g;
  $("firefly")?.remove();
  $("guide").textContent = CONFIG.ui.back;
  $("guide").style.cursor = "pointer";
  $("constellations").classList.add("focused");
  document.querySelectorAll(".cluster").forEach((c, i) => {
    c.classList.toggle("focused", i === g);
    c.querySelectorAll(".star-choice").forEach(
      (b) => (b.tabIndex = i === g ? 0 : -1),
    );
  });
  audio.chime();
  if (g === 0) {
    loadPhoto(0);
    loadPhoto(1);
  }
}
function unfocus() {
  focused = -1;
  $("constellations").classList.remove("focused");
  document.querySelectorAll(".cluster").forEach((c) => {
    c.classList.remove("focused");
    c.querySelectorAll(".star-choice").forEach((b) => (b.tabIndex = -1));
  });
  text($("guide"), CONFIG.ui.guide);
}
$("guide").onclick = unfocus;
const photoCache = new Map();
function loadPhoto(i) {
  if (photoCache.has(i)) return photoCache.get(i);
  const promise = new Promise((resolve) => {
    const extensions = ["jpg", "jpeg", "png", "webp"];
    let e = 0;
    function attempt() {
      if (e === extensions.length) {
        resolve(null);
        return;
      }
      const img = new Image();
      img.onload = () => resolve(img.src);
      img.onerror = attempt;
      img.src = `photos/photo${i + 1}.${extensions[e++]}`;
    }
    attempt();
  });
  photoCache.set(i, promise);
  return promise;
}
function updateProgress() {
  const n = visited.filter(
    (s, g) => s.size === CONFIG[groups[g]].length,
  ).length;
  text($("progress"), CONFIG.ui.progress.replace("{n}", n));
  try {
    localStorage.setItem(
      "shaista-visited",
      JSON.stringify(visited.map((s) => [...s])),
    );
  } catch (e) {}
  return n;
}
function openCard(html, accent = "--ice") {
  modalOrigin = document.activeElement;
  modalToken++;
  $("card-content").innerHTML = html;
  const m = $("modal");
  m.style.setProperty("--accent", `var(${accent})`);
  m.hidden = false;
  requestAnimationFrame(() => m.classList.add("open"));
  m.querySelector(".glass").focus({ preventScroll: true });
  audio.chime();
}
function closeCard(immediate = false) {
  if ($("modal").hidden) return;
  modalToken++;
  $("modal").classList.remove("open");
  const token = modalToken;
  const done = () => {
    if (token !== modalToken) return;
    $("modal").hidden = true;
    $("card-content").replaceChildren();
    if (!immediate && modalOrigin?.isConnected)
      modalOrigin.focus({ preventScroll: true });
    if (!immediate && scene === "galaxy" && updateProgress() === 6 && !cinema)
      startSecret();
  };
  if (immediate) done();
  else setTimeout(done, 450);
}
$("close-card").onclick = () => closeCard();
$("modal").onclick = (e) => {
  if (e.target === $("modal")) closeCard();
};
addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!$("modal").hidden) closeCard();
    else if (scene === "galaxy") unfocus();
  }
  if (e.key === "Tab" && !$("modal").hidden) {
    const controls = [
      ...$("modal").querySelectorAll('button,a,[tabindex="0"]'),
    ].filter((el) => !el.hidden);
    if (!controls.length) return;
    const first = controls[0],
      last = controls.at(-1);
    if (
      e.shiftKey &&
      (document.activeElement === first ||
        document.activeElement === $("modal").querySelector(".glass"))
    ) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});
// A shared card renderer supplies the six different kinds of personal gifts.
async function openStar(g, i) {
  visited[g].add(i);
  const completed = visited[g].size === CONFIG[groups[g]].length;
  const cluster = document.querySelectorAll(".cluster")[g];
  cluster?.querySelectorAll(".star-choice")[i]?.classList.add("seen");
  if (completed) {
    cluster?.classList.add("done");
    audio.chime();
  }
  updateProgress();
  const item = CONFIG[groups[g]][i];
  let html = `<h2 id="card-title" class="card-title">${escapeHTML(CONFIG.ui.labels[g])}</h2>`;
  if (g === 0) {
    html += `<div class="polaroid"><div class="photo" role="button" tabindex="0" aria-label="Enlarge memory"><span>✦</span></div><p>${escapeHTML(item.caption)}</p><small>${escapeHTML(item.date)}</small></div>`;
  }
  if (g === 1)
    html += `<p class="card-text">${escapeHTML(item.text)}</p><p class="card-from">${escapeHTML(CONFIG.ui.from + item.from)}</p>`;
  if (g === 2)
    html += `<p class="eyebrow" style="margin-top:20px">${escapeHTML(CONFIG.ui.thoughtTitle)}</p><p class="card-text">✧ ${escapeHTML(item)}</p>`;
  if (g === 3)
    html += `<h2 style="margin:20px 0">${escapeHTML(item.title)}</h2>${item.lines.map((l, n) => `<p class="poem-line" style="--delay:${n * 0.9}s">${escapeHTML(l)}</p>`).join("")}<p style="color:var(--gold);margin-top:20px">✦</p>`;
  if (g === 4)
    html += `<div class="forecast"><p class="eyebrow" style="margin-top:20px">${escapeHTML(CONFIG.ui.forecast)}</p><p class="card-text">${escapeHTML(item)}</p></div>`;
  if (g === 5) {
    html += `<div class="${item.type === "coupon" ? "ticket" : ""}">${item.type === "open" ? '<div class="envelope">✉</div>' : ""}<h2 style="margin-top:20px">${escapeHTML(item.title)}</h2>${item.type === "song" ? `<div class="equalizer"><i></i><i></i><i></i></div><p>${escapeHTML(CONFIG.dedicationSong)}</p>` : ""}<p class="card-text" style="font-size:1.55rem">${escapeHTML(item.text)}</p>${item.type === "song" && CONFIG.dedicationFile ? `<button id="dedication-play" class="pill">${escapeHTML(CONFIG.ui.play)}</button>` : ""}</div>`;
  }
  html += `<div class="card-nav"><button id="card-back" class="pill">${escapeHTML(CONFIG.ui.back)}</button><button id="card-next" class="pill">${escapeHTML(CONFIG.ui.next)}</button></div>`;
  openCard(html, colors[g]);
  $("card-back").onclick = () => {
    closeCard();
    unfocus();
  };
  $("card-next").onclick = () =>
    openStar(g, (i + 1) % CONFIG[groups[g]].length);
  if (g === 0) {
    const photo = document.querySelector(".photo"),
      token = modalToken;
    photo.onclick = () => photo.classList.toggle("zoomed");
    photo.onkeydown = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        photo.click();
      }
    };
    const src = await loadPhoto(i);
    if (src && token === modalToken) {
      const img = document.createElement("img");
      img.alt = item.caption;
      img.src = src;
      photo.replaceChildren(img);
    }
  }
  if ($("dedication-play")) {
    const song = new Audio(CONFIG.dedicationFile);
    $("dedication-play").onclick = async () => {
      if (song.paused) {
        try {
          await song.play();
          text($("dedication-play"), CONFIG.ui.pause);
        } catch (e) {
          text($("dedication-play"), CONFIG.ui.audioMissing);
        }
      } else {
        song.pause();
        text($("dedication-play"), CONFIG.ui.play);
      }
    };
    const watcher = setInterval(() => {
      if (!$("dedication-play")) {
        song.pause();
        clearInterval(watcher);
      }
    }, 500);
  }
}
function smallCard(title, lines) {
  openCard(
    `<h2 id="card-title" class="card-title">${escapeHTML(title)}</h2>${lines.map((l) => `<p class="card-text">${escapeHTML(l)}</p>`).join("")}`,
  );
}
$("moon").onclick = () => {
  moonTaps.push(performance.now());
  moonTaps = moonTaps.filter((t) => performance.now() - t < 1200);
  if (moonTaps.length >= 3) {
    moonTaps = [];
    smallCard("☾", CONFIG.moonPoem);
  }
};
$("own-star").onclick = () => smallCard("✦", [CONFIG.ownStarText]);
$("corner-star").onclick = () => smallCard("✧", [CONFIG.privateLine]);
$("shooting-star").onclick = () => smallCard("✦", [CONFIG.shootingStarText]);
let shootingTimer;
function scheduleShooting() {
  clearTimeout(shootingTimer);
  shootingTimer = setTimeout(
    () => {
      if (scene !== "galaxy") return;
      const el = $("shooting-star");
      el.classList.remove("shooting");
      void el.offsetWidth;
      el.classList.add("shooting");
      scheduleShooting();
    },
    20000 + Math.random() * 15000,
  );
}
document.addEventListener("pointerdown", (e) => {
  if (e.target.closest("button,input,a,.glass,.letter-panel") || cinema) return;
  if (scene === "wish") {
    beginHold();
    return;
  }
  ripple(e.clientX, e.clientY);
  if (scene === "galaxy")
    growTimer = setTimeout(() => growStar(e.clientX, e.clientY), 600);
});
document.addEventListener("pointerup", () => {
  clearTimeout(growTimer);
  if (scene === "wish") releaseHold();
});
document.addEventListener("pointercancel", () => {
  clearTimeout(growTimer);
  releaseHold();
});
document.addEventListener("pointermove", (e) => {
  if (e.buttons && Math.abs(e.movementX) + Math.abs(e.movementY) > 8)
    clearTimeout(growTimer);
});

// The final star opens a handwritten letter, one gentle paragraph at a time.
function startSecret() {
  showScene("secret");
  letterStarted = false;
  letterSpeed = 38;
  $("letter-panel").hidden = true;
  $("secret-star").hidden = false;
  $("secret-line").hidden = false;
  $("continue").hidden = true;
  audio.fade(0.28, 2);
}
async function openLetter() {
  if (letterStarted) return;
  letterStarted = true;
  const token = generation;
  $("secret-star").hidden = true;
  $("secret-line").hidden = true;
  $("letter-panel").hidden = false;
  $("letter").replaceChildren();
  for (const paragraph of CONFIG.letter) {
    if (token !== generation) return;
    const p = document.createElement("p");
    p.className = "typing";
    $("letter").append(p);
    letterSpeed = cinema ? 32 : 38;
    for (const char of replace(paragraph)) {
      if (token !== generation) return;
      p.textContent += char;
      if (
        cinema ||
        $("letter-panel").scrollHeight -
          $("letter-panel").scrollTop -
          $("letter-panel").clientHeight <
          160
      )
        $("letter-panel").scrollTop = $("letter-panel").scrollHeight;
      await wait(letterSpeed);
    }
    p.classList.remove("typing");
    await wait(cinema ? 1200 : 900);
  }
  $("continue").hidden = false;
}
$("secret-star").onclick = openLetter;
$("letter-panel").onclick = (e) => {
  if (!e.target.closest("button")) letterSpeed = 8;
};
$("continue").onclick = () => startWish();
// Holding the candle for a full breath turns its final light into new stars.
function startWish() {
  showScene("wish");
  blown = false;
  $("candle").classList.remove("out", "holding");
  text($("wish-hint"), CONFIG.ui.wishHint);
  audio.fade(0.45, 2);
}
function beginHold() {
  if (blown || holdTimer) return;
  $("candle").classList.add("holding");
  holdTimer = setTimeout(blowCandle, 2200);
}
function releaseHold() {
  clearTimeout(holdTimer);
  holdTimer = null;
  if (!blown) $("candle").classList.remove("holding");
}
function blowCandle() {
  if (blown) return;
  blown = true;
  releaseHold();
  $("candle").classList.add("out");
  audio.whoosh();
  const box = $("candle").getBoundingClientRect();
  for (let i = 0; i < (reduced ? 30 : 80); i++) {
    const s = effect("spark", 3200),
      dx = (Math.random() - 0.5) * width * 0.9,
      dy = -80 - Math.random() * height * 0.65;
    s.style.left = box.left + 55 + "px";
    s.style.top = box.top + "px";
    s.style.setProperty("--tx", dx + "px");
    s.style.setProperty("--ty", dy + "px");
    if (i % 3 === 0)
      stars.push({
        x: box.left + 55 + dx,
        y: Math.max(0, box.top + dy),
        r: 0.9,
        z: 2,
        phase: Math.random() * 6,
        period: 3000,
      });
  }
  const token = generation;
  setTimeout(() => {
    if (token === generation) text($("wish-hint"), CONFIG.ui.wishMade);
  }, 2200);
  if (!cinema)
    setTimeout(() => {
      if (token === generation) startDawn();
    }, 6000);
}
$("candle").onpointerdown = (e) => {
  e.preventDefault();
  $("candle").setPointerCapture?.(e.pointerId);
  beginHold();
};
$("candle").onpointerup = releaseHold;
$("candle").onpointercancel = releaseHold;
$("candle").onkeydown = (e) => {
  if (e.key === " " || e.key === "Enter") {
    e.preventDefault();
    beginHold();
  }
};
$("candle").onkeyup = (e) => {
  if (e.key === " " || e.key === "Enter") releaseHold();
};
$("candle").onblur = releaseHold;
// Dawn warms the same sky and leaves a personal certificate to keep.
function startDawn() {
  const token = showScene("dawn");
  text($("final-line"), CONFIG.finalLine);
  text($("certificate-name"), CONFIG.herName);
  text($("certificate-date"), CONFIG.ui.certificateDate);
  text($("certificate-named"), CONFIG.ui.certificateNamed);
  text($("signature"), "— " + CONFIG.senderName);
  $("certificate").classList.remove("visible");
  setTimeout(() => {
    if (token === generation) $("certificate").classList.add("visible");
  }, 4000);
  audio.fade(0.3, 8);
}
$("replay").onclick = () => {
  visited.forEach((s) => s.clear());
  try {
    localStorage.removeItem("shaista-visited");
  } catch (e) {}
  startGalaxy();
};
$("save").onclick = async () => {
  if (document.fonts) await document.fonts.ready;
  const c = document.createElement("canvas");
  c.width = 1500;
  c.height = 1000;
  const x = c.getContext("2d"),
    g = x.createLinearGradient(0, 0, 0, 1000);
  g.addColorStop(0, "#08122b");
  g.addColorStop(0.6, "#303366");
  g.addColorStop(1, "#9c6e89");
  x.fillStyle = g;
  x.fillRect(0, 0, 1500, 1000);
  x.strokeStyle = "#f4c97a";
  x.lineWidth = 2;
  x.strokeRect(45, 45, 1410, 910);
  x.strokeRect(58, 58, 1384, 884);
  x.textAlign = "center";
  x.fillStyle = "#ffe6b0";
  const line = (value, y, font) => {
    x.font = font;
    x.fillText(replace(value), 750, y, 1300);
  };
  line("✦", 170, "50px Georgia");
  line(CONFIG.ui.certificateTitle, 240, "22px Quicksand, sans-serif");
  line(CONFIG.herName, 450, '140px "Great Vibes", cursive');
  line(CONFIG.ui.certificateDate, 560, "26px Quicksand, sans-serif");
  line(CONFIG.ui.certificateNamed, 625, "26px Quicksand, sans-serif");
  line(
    CONFIG.ui.certificateMotto,
    740,
    'italic 42px "Cormorant Garamond", Georgia',
  );
  line("— " + CONFIG.senderName, 850, "48px Caveat, cursive");
  const a = document.createElement("a");
  a.download = CONFIG.herName + "-star-certificate.png";
  a.href = c.toDataURL("image/png");
  a.click();
};

// Cinema schedules the very same scene and card functions as a hands-free film.
async function playCinema() {
  if (playCinema.started) return;
  playCinema.started = true;
  await audio.start();
  $("cinema-start").hidden = true;
  $("blackout").classList.add("dark");
  const start = performance.now();
  const at = async (seconds) => {
    await wait(Math.max(0, seconds * 1000 - (performance.now() - start)));
  };
  await at(3);
  $("blackout").classList.remove("dark");
  startLocked(true);
  await at(15);
  countdownTarget = now() + 10000;
  startCountdown(true);
  await at(28);
  startBirth(true);
  await at(65);
  startGalaxy();
  let slot = 65;
  for (let g = 0; g < 6; g++) {
    await at(slot);
    focusGroup(g);
    const count = g === 0 ? 3 : 2;
    for (let i = 0; i < count; i++) {
      await at(slot + 1 + i * 7.5);
      openStar(g, i);
      await at(slot + 7.5 + i * 7.5);
      closeCard(true);
    }
    CONFIG[groups[g]].forEach((_, i) => visited[g].add(i));
    document.querySelectorAll(".cluster")[g].classList.add("done");
    updateProgress();
    unfocus();
    slot += g === 0 ? 24 : 16;
  }
  await at(Math.max(169, slot));
  startSecret();
  await wait(7000);
  await openLetter();
  await wait(5000);
  startWish();
  await wait(10000);
  beginHold();
  await wait(12000);
  startDawn();
  await wait(30000);
  $("blackout").style.transition = "opacity 10s";
  $("blackout").classList.add("dark");
  audio.fade(0, 10);
}

// Populate static text, then choose either the private entrance or rehearsal route.
for (const el of document.querySelectorAll("[data-copy]"))
  text(el, CONFIG.ui[el.dataset.copy]);
text($("brand"), CONFIG.ui.brand);
text($("edition"), CONFIG.ui.edition);
text($("birthday-sub"), CONFIG.ui.birthdaySub);
try {
  const saved = JSON.parse(localStorage.getItem("shaista-visited") || "[]");
  saved.forEach((items, g) => {
    if (visited[g] && Array.isArray(items))
      items.forEach((i) => {
        if (Number.isInteger(i) && i >= 0 && i < CONFIG[groups[g]].length)
          visited[g].add(i);
      });
  });
} catch (e) {
  /* Private mode and malformed storage never block the gift. */
}
document.addEventListener("visibilitychange", () => {
  audio.fade(audio.level, 0.5);
  if (!document.hidden) {
    previous = 0;
    if (!raf) raf = requestAnimationFrame(frame);
  } else {
    releaseHold();
    if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  }
});
if (cinema) {
  document.body.classList.add("cinema");
  $("cinema-start").hidden = false;
  addEventListener("keydown", (e) => {
    if (e.code === "Space") {
      e.preventDefault();
      playCinema();
    }
  });
} else if (params.get("nogate") === "1" || params.has("test")) route();
