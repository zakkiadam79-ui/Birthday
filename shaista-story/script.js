/* ============================================================
   A Cinematic Story for Shaista — script.js
   ------------------------------------------------------------
   EVERYTHING YOU MIGHT WANT TO EDIT LIVES IN `CONFIG` BELOW.
   Names, dates, captions, poem, wishes, letter, theme, mode.
   You do not need to touch anything below the CONFIG block.
   ============================================================ */

const CONFIG = {
  /* ---------------- WHO / WHEN ---------------- */
  herName: "Shaista",
  fromName: "Saifullah",
  age: 19,
  birthdayDate: "December 3",              // shown on the intro screen
  prevDayLabel: "DEC 02",                  // time chip before midnight
  birthdayLabel: "DEC 03",                 // time chip after midnight
  targetISO: "2026-12-03T00:00:00+05:00",  // real midnight (Pakistan) for "live" mode

  /* ---------------- MODES & LOOK ---------------- */
  mode: "story",        // "story" = plays any time (default) | "live" = finale lands on real midnight
  theme: "midnight",    // "midnight" (default) | "plum" (the reference look)
  passwordGate: false,  // true = ask for her birthdate first
  password: "3122007",  // accepted digits, e.g. 3122007 or 03122007

  /* ---------------- SOUND ---------------- */
  musicFile: "audio/music.mp3", // optional; if missing, soft synthesised music-box cues are used
  musicVolume: 0.5,

  /* ---------------- THE STORY (played in order) ---------------- */
  scenes: [
    {
      type: "waiting", duration: 6,
      eyebrow: "DECEMBER 2 • 11:59 PM",
      title: "Waiting for Midnight…",
      subtitle: "A quiet cinematic moment dedicated to someone truly special.",
      line: "December 2 ✨"
    },
    {
      type: "photo", duration: 5,
      title: "A Story Dedicated To",
      photo: "photos/photo1.jpg",
      caption: "The girl who makes every ordinary day feel a little brighter."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 2 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo2.jpg",
      caption: "Some moments become special simply because of the person in them."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 3 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo3.jpg",
      onPhotoText: "Golden hour",
      caption: "Your smile can turn any ordinary day into a beautiful one."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 4 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo4.jpg",
      caption: "The quiet little moments are often the best ones we share."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 5 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo5.jpg",
      caption: "You make even the simplest places feel warm and beautiful."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 6 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo6.jpg",
      caption: "Thank you for all the endless laughter and joy.",
      effects: ["balloons"]
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 7 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo7.jpg",
      caption: "Not every memory needs a reason. Some just feel like home."
    },
    {
      type: "photo", duration: 4,
      eyebrow: "MEMORY 8 OF 8 • DECEMBER 2",
      title: "A Moment Worth Cherishing",
      photo: "photos/photo8.jpg",
      caption: "To many more moments like these."
    },
    {
      type: "poem", duration: 8,
      eyebrow: "A LITTLE POEM",
      title: "For You",
      lines: [
        "If the sky could keep a wish,",
        "It would keep yours safe and tight.",
        "And when the morning comes around,",
        "It would hand it back with light."
      ]
    },
    {
      type: "wishes", duration: 8,
      eyebrow: "FROM THE HEART",
      title: "Wishes For Your {age} Year",
      wishes: [
        "May this year be gentle with you and generous with its surprises.",
        "May peace find you on the busy days and joy find you on the quiet ones.",
        "May every dream you quietly carry find its way to you."
      ]
    },
    {
      type: "clock", duration: 10, // elastic in "live" mode
      eyebrow: "DECEMBER 2 • 11:59 PM",
      line: "Waiting for Midnight to arrive... 🌸✨"
    },
    {
      type: "birthday", duration: 12,
      message: "May your 19th year be filled with endless happiness, beautiful memories, success, and countless reasons to smile."
    },
    {
      type: "letter", duration: 0, // 0 = automatic (scrolls until the last line)
      effects: ["balloons"],
      paragraphs: [
        "Dear Shaista,",
        "Happy 19th Birthday. ❤️",
        "I've been waiting for this moment with so much excitement...",
        "Today isn't just another date on the calendar. It's your day.",
        "Aap ke saath guzra har lamha mere liye khaas hai.",
        "Your presence brings comfort, happiness, laughter and a feeling that everything will be alright.",
        "Life becomes a little easier and a lot more fun when you are around.",
        "Aapki smile se har din behtar ho jata hai.",
        "Your smile, your happiness, your dreams: today, they deserve to be celebrated.",
        "May this new year of your life be gentle, bright and full of everything you quietly hope for.",
        "Thank you for being you.",
        "With all my love,",
        "Saifullah ❤️"
      ]
    },
    {
      type: "end", // stays on screen
      effects: ["balloons"]
    }
  ],

  /* ---------------- INTERFACE WORDING ---------------- */
  ui: {
    begin: "Click to Begin Experience ✨",
    hint: "🎧 Best with sound on.",
    soundOn: "🔊 Sound ON",
    soundOff: "🔇 Sound OFF",
    midnight: "🌙 Midnight",
    birthdayChip: "❤️ Dec 3",
    replayStory: "Replay the story 🌙",
    saveMoment: "Save this moment 📷",
    passwordLabel: "Enter her birthdate to unlock",
    unlock: "Unlock ✦",
    passwordError: "That's not quite it. Try again?"
  }
};

/* ============================================================
   FROM HERE DOWN IS THE ENGINE — no need to edit normally.
   ============================================================ */
(() => {
  "use strict";

  /* ---------- URL helpers (for testing / recording) ---------- */
  const params = new URLSearchParams(location.search);
  if (params.get("mode") === "live" || params.get("mode") === "story") CONFIG.mode = params.get("mode");
  let speed = 1;
  if (params.get("speed")) { const s = parseFloat(params.get("speed")); if (s > 0) speed = s; }
  const skipParam = params.get("skip") ? parseInt(params.get("skip"), 10) : 0;
  const recordMode = params.get("record") === "1";

  /* ---------- Tiny DOM + math helpers ---------- */
  const $ = (id) => document.getElementById(id);
  const rnd = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const pad2 = (n) => String(n).padStart(2, "0");

  // Small helper: turn 19 into "19th", 1 into "1st", 21 into "21st".
  function ordinal(n) {
    const s = ["th", "st", "nd", "rd"], v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  // Create an element with a class and optional text.
  function el(tag, cls, text) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }

  // Mark an element as part of the staggered scene entrance, with a delay.
  function anim(node, delay, extraCls) {
    node.classList.add("el");
    if (extraCls) node.classList.add(extraCls);
    node.style.setProperty("--d", delay + "s");
    return node;
  }

  const HEART_SVG =
    '<svg viewBox="0 0 32 29" class="heart-svg" aria-hidden="true">' +
    '<path d="M16 29C16 29 0 19.5 0 9.3 0 4 4 0 9 0c3.4 0 5.6 1.7 7 3.6C17.4 1.7 19.6 0 23 0c5 0 9 4 9 9.3 0 10.2-16 19.7-16 19.7Z" fill="#e02040"/>' +
    '<ellipse cx="9" cy="8" rx="4" ry="2.4" fill="rgba(255,255,255,.5)" transform="rotate(-25 9 8)"/></svg>';

  /* ============================================================
     AUDIO — soft synthesised music-box (Web Audio, no files).
     If audio/music.mp3 exists it is used instead and ducked.
     ============================================================ */
  const AudioEngine = (() => {
    let ctx = null, master = null, synthBus = null, musicGain = null, reverb = null;
    let musicEl = null, musicSrc = null;
    let ready = false, muted = false;
    let letterTimer = null, photoNoteIdx = 0;

    // Note frequencies (D major-ish).
    const NOTE = {
      A3: 220.0, B3: 246.94, D4: 293.66, E4: 329.63, Fs4: 369.99, G4: 392.0,
      A4: 440.0, B4: 493.88, C5: 523.25, D5: 587.33, E5: 659.25, Fs5: 739.99,
      G5: 783.99, A5: 880.0, B5: 987.77, D6: 1174.66
    };

    // Create a short fake reverb impulse so the bells feel warm.
    function makeImpulse(duration, decay) {
      const rate = ctx.sampleRate, len = Math.floor(rate * duration);
      const buf = ctx.createBuffer(2, len, rate);
      for (let ch = 0; ch < 2; ch++) {
        const data = buf.getChannelData(ch);
        for (let i = 0; i < len; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
      }
      return buf;
    }

    // One music-box style bell: a fundamental plus two soft harmonics.
    function bell(freq, when, vol = 0.2, dur = 1.4) {
      if (!ready) return;
      [1, 2, 3].forEach((mult, i) => {
        const o = ctx.createOscillator();
        o.type = "sine";
        o.frequency.value = freq * mult;
        const g = ctx.createGain();
        g.gain.setValueAtTime(0, when);
        g.gain.linearRampToValueAtTime(vol * [1, 0.28, 0.1][i], when + 0.012);
        g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
        o.connect(g); g.connect(synthBus);
        o.start(when); o.stop(when + dur + 0.05);
      });
    }

    // Low heartbeat thump used during the midnight clock.
    function thump(when, vol = 0.22) {
      if (!ready) return;
      const o = ctx.createOscillator();
      o.type = "sine";
      o.frequency.setValueAtTime(120, when);
      o.frequency.exponentialRampToValueAtTime(46, when + 0.18);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, when);
      g.gain.linearRampToValueAtTime(vol, when + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, when + 0.32);
      o.connect(g); g.connect(synthBus);
      o.start(when); o.stop(when + 0.36);
    }

    function init() {
      if (ready) return true;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      try { ctx = new AC(); } catch (e) { return false; }

      master = ctx.createGain();
      master.gain.setValueAtTime(0.0001, ctx.currentTime);
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18; comp.knee.value = 20; comp.ratio.value = 6;
      master.connect(comp); comp.connect(ctx.destination);
      master.gain.linearRampToValueAtTime(0.6, ctx.currentTime + 1.6);

      reverb = ctx.createConvolver();
      reverb.buffer = makeImpulse(2.2, 2.5);
      const revGain = ctx.createGain(); revGain.gain.value = 0.22;
      reverb.connect(revGain); revGain.connect(master);

      synthBus = ctx.createGain(); synthBus.gain.value = 1;
      synthBus.connect(master); synthBus.connect(reverb);

      musicGain = ctx.createGain(); musicGain.gain.value = 0.0001;
      musicGain.connect(master);

      ready = true;
      return true;
    }

    // Try to load the optional music file; fall back silently to synth cues.
    function loadMusic() {
      if (!ready) return;
      const a = new Audio();
      a.loop = true; a.preload = "auto";
      let settled = false;
      a.addEventListener("canplaythrough", () => {
        if (settled) return; settled = true;
        try {
          musicSrc = ctx.createMediaElementSource(a);
          musicSrc.connect(musicGain);
        } catch (e) { return; }
        musicEl = a;
        a.volume = 1;
        musicGain.gain.cancelScheduledValues(ctx.currentTime);
        musicGain.gain.setValueAtTime(0.0001, ctx.currentTime);
        musicGain.gain.linearRampToValueAtTime(CONFIG.musicVolume, ctx.currentTime + 2);
        a.play().catch(() => {});
      }, { once: true });
      a.addEventListener("error", () => { settled = true; musicEl = null; }, { once: true });
      a.src = CONFIG.musicFile;
    }

    return {
      init,
      loadMusic,
      isMuted: () => muted,
      setMuted(m) {
        muted = m;
        if (!ready) return;
        const t = ctx.currentTime;
        master.gain.cancelScheduledValues(t);
        master.gain.setValueAtTime(Math.max(0.0001, master.gain.value), t);
        master.gain.linearRampToValueAtTime(m ? 0.0001 : 0.6, t + 0.3);
      },
      // Duck the music during the clock (true) or restore it (false).
      duckMusic(on) {
        if (!ready || !musicEl) return;
        const t = ctx.currentTime;
        const level = on ? CONFIG.musicVolume * 0.25 : CONFIG.musicVolume;
        musicGain.gain.cancelScheduledValues(t);
        musicGain.gain.setValueAtTime(musicGain.gain.value, t);
        musicGain.gain.linearRampToValueAtTime(Math.max(0.0001, level), t + 1.2);
      },
      fadeMusicOut() {
        if (!ready) return;
        const t = ctx.currentTime;
        musicGain.gain.cancelScheduledValues(t);
        musicGain.gain.setValueAtTime(musicGain.gain.value, t);
        musicGain.gain.linearRampToValueAtTime(0.0001, t + 3);
      },
      begin() {
        if (!ready) return;
        const t = ctx.currentTime + 0.03;
        ["D4", "Fs4", "A4", "D5"].forEach((n, i) => bell(NOTE[n], t + i * 0.12, 0.2, 1.6));
      },
      photo() {
        if (!ready) return;
        const notes = ["D5", "Fs5", "A5", "E5"];
        const n = notes[photoNoteIdx % notes.length]; photoNoteIdx++;
        bell(NOTE[n], ctx.currentTime + 0.02, 0.16, 1.6);
      },
      poem() {
        if (!ready) return;
        const t = ctx.currentTime + 0.02;
        bell(NOTE.A4, t, 0.14, 1.8);
        bell(NOTE.D5, t + 0.5, 0.14, 1.8);
      },
      heartbeat() { if (ready) thump(ctx.currentTime + 0.01, 0.2); },
      risingNote(sec) {
        if (!ready) return;
        const map = { 57: "A5", 58: "B5", 59: "D6" };
        const n = map[sec];
        if (n) bell(NOTE[n], ctx.currentTime + 0.01, 0.2, 1.6);
      },
      midnight() {
        if (!ready) return;
        const t = ctx.currentTime + 0.05;
        // warm pad underneath
        ["D4", "A4", "D5", "Fs5"].forEach((n) => {
          const o = ctx.createOscillator(); o.type = "triangle"; o.frequency.value = NOTE[n];
          const g = ctx.createGain();
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.06, t + 0.6);
          g.gain.exponentialRampToValueAtTime(0.0001, t + 9);
          o.connect(g); g.connect(synthBus); o.start(t); o.stop(t + 9.2);
        });
        // 12-note celebratory melody
        const mel = ["D5", "D5", "E5", "D5", "A4", "A4", "D5", "D5", "E5", "D5", "Fs5", "A5"];
        mel.forEach((n, i) => bell(NOTE[n], t + 0.15 + i * 0.42, 0.18, 1.2));
      },
      letterStart() {
        if (!ready || letterTimer) return;
        const chords = [
          ["D4", "A4", "D5", "Fs5"],
          ["A3", "E4", "A4", "C5"],
          ["B3", "Fs4", "B4", "D5"],
          ["G3", "D4", "G4", "B4"]
        ];
        let ci = 0;
        const playChord = () => {
          const t = ctx.currentTime + 0.03;
          chords[ci % chords.length].forEach((n, i) => bell(NOTE[n], t + i * 0.18, 0.06, 2.2));
          ci++;
        };
        playChord();
        letterTimer = setInterval(playChord, 7000);
      },
      letterStop() { if (letterTimer) { clearInterval(letterTimer); letterTimer = null; } },
      end() {
        if (!ready) return;
        const t = ctx.currentTime + 0.05;
        ["D4", "A4", "D5", "Fs5", "A5"].forEach((n, i) => bell(NOTE[n], t + i * 0.15, 0.13, 3));
      }
    };
  })();

  /* ============================================================
     PARTICLES — one full-screen canvas, everything drawn in code.
     ============================================================ */
  const Particles = (() => {
    const canvas = $("particles");
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0;
    let items = [];
    let balloons = [];
    let balloonsOn = false;
    let intensity = 1;       // 1 = normal, 3 = midnight burst, 1.6 = settled rich
    let burstTimer = 0;
    let reduceFactor = 1;
    let slowFrames = 0;
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const DOT_COLORS = ["#ffffff", "#f6c86a", "#ff7eb6"];
    const CONF_COLORS = ["#ff7eb6", "#f6c86a", "#7de3e0", "#ffffff", "#ff9f6a"];
    const HEART_COLORS = ["#ff4d6d", "#ff7eb6", "#e02040"];
    const FLOWER_COLORS = ["#ffb3d1", "#ff7eb6", "#f6c86a"];
    const BALLOON_COLORS = ["255,126,182", "181,123,255", "246,200,106"];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth; H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function baseCounts() {
      const phone = W < 700;
      const m = reduced ? 0.4 : 1;
      return {
        dots: Math.round((phone ? 40 : 70) * m),
        confetti: Math.round((phone ? 22 : 40) * m),
        sparkles: Math.round((phone ? 7 : 12) * m),
        hearts: Math.round((phone ? 5 : 9) * m),
        flowers: Math.round((phone ? 7 : 12) * m)
      };
    }

    function desiredCounts() {
      const b = baseCounts(), k = intensity * reduceFactor;
      return {
        dots: Math.round(b.dots * Math.min(k, 1.6)),
        confetti: Math.round(b.confetti * k),
        sparkles: Math.round(b.sparkles * Math.min(k, 2)),
        hearts: Math.round(b.hearts * k),
        flowers: Math.round(b.flowers * k)
      };
    }

    function spawn(kind) {
      switch (kind) {
        case "dots":
          return { kind, x: rnd(W), y: rnd(H), r: rnd(1, 2.6), c: pick(DOT_COLORS), a: rnd(0.25, 0.8), ph: rnd(6.28), sp: rnd(0.15, 0.5), vx: rnd(-4, 4), vy: rnd(-4, 4) };
        case "confetti":
          return { kind, x: rnd(W), y: -20, w: rnd(5, 9), h: rnd(8, 14), c: pick(CONF_COLORS), vy: rnd(22, 55), vx: rnd(-12, 12), rot: rnd(6.28), vr: rnd(-2, 2), a: rnd(0.6, 0.95) };
        case "sparkles":
          return { kind, x: rnd(W), y: rnd(H), s: rnd(5, 13), c: pick(["#ffffff", "#f6c86a", "#ff7eb6"]), ph: rnd(6.28), sp: rnd(0.8, 1.6), a: rnd(0.5, 0.95), vx: rnd(-6, 6), vy: rnd(-6, 6) };
        case "hearts":
          return { kind, x: rnd(W), y: H + 20, s: rnd(7, 15), c: pick(HEART_COLORS), vy: rnd(-48, -26), vx: rnd(-8, 8), rot: rnd(-0.3, 0.3), vr: rnd(-0.5, 0.5), a: rnd(0.6, 0.95) };
        case "flowers":
          return { kind, x: rnd(W), y: -20, s: rnd(7, 14), c: pick(FLOWER_COLORS), vy: rnd(16, 36), vx: rnd(-8, 8), rot: rnd(6.28), vr: rnd(-1, 1), a: rnd(0.6, 0.95) };
      }
      return null;
    }

    function spawnBalloon() {
      return { x: rnd(W * 0.05, W * 0.95), y: H + 50, s: rnd(18, 32), c: pick(BALLOON_COLORS), vy: rnd(-48, -28), sway: rnd(6.28), swaySp: rnd(0.5, 1.2) };
    }

    function update(it, dt) {
      const s = dt / 1000;
      it.x += (it.vx || 0) * s;
      it.y += it.vy * s;
      if (it.vr) it.rot += it.vr * s;
      if (it.kind === "dots" || it.kind === "sparkles") it.ph += it.sp * s;
      if (it.kind === "confetti" || it.kind === "flowers") {
        if (it.y > H + 30) { it.y = -30; it.x = rnd(W); }
      } else if (it.kind === "hearts") {
        if (it.y < -40) { it.y = H + 30; it.x = rnd(W); }
      } else {
        if (it.x < -20) it.x = W + 20;
        if (it.x > W + 20) it.x = -20;
        if (it.y < -20) it.y = H + 20;
        if (it.y > H + 20) it.y = -20;
      }
    }

    function drawSparkle(s) {
      ctx.beginPath();
      ctx.moveTo(0, -s);
      ctx.quadraticCurveTo(0, 0, s, 0);
      ctx.quadraticCurveTo(0, 0, 0, s);
      ctx.quadraticCurveTo(0, 0, -s, 0);
      ctx.quadraticCurveTo(0, 0, 0, -s);
      ctx.fill();
    }

    function drawHeartPath(s) {
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s, -s * 0.5, -s * 0.4, -s * 1.1, 0, -s * 0.4);
      ctx.bezierCurveTo(s * 0.4, -s * 1.1, s, -s * 0.5, 0, s * 0.3);
      ctx.fill();
    }

    function drawFlower(s) {
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(Math.cos(a) * s * 0.55, Math.sin(a) * s * 0.55, s * 0.45, s * 0.28, a, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.fillStyle = "rgba(255,255,255,.85)";
      ctx.beginPath(); ctx.arc(0, 0, s * 0.22, 0, Math.PI * 2); ctx.fill();
    }

    function draw(it, t) {
      ctx.save();
      if (it.kind === "dots") {
        ctx.globalAlpha = it.a * (0.5 + 0.5 * Math.sin(it.ph));
        ctx.fillStyle = it.c;
        ctx.beginPath(); ctx.arc(it.x, it.y, it.r, 0, Math.PI * 2); ctx.fill();
      } else if (it.kind === "confetti") {
        ctx.globalAlpha = it.a;
        ctx.translate(it.x, it.y); ctx.rotate(it.rot);
        ctx.fillStyle = it.c;
        ctx.fillRect(-it.w / 2, -it.h / 2, it.w, it.h);
      } else if (it.kind === "sparkles") {
        ctx.globalAlpha = it.a * (0.5 + 0.5 * Math.sin(it.ph));
        ctx.translate(it.x, it.y);
        ctx.fillStyle = it.c;
        drawSparkle(it.s);
      } else if (it.kind === "hearts") {
        ctx.globalAlpha = it.a;
        ctx.translate(it.x, it.y); ctx.rotate(it.rot);
        ctx.fillStyle = it.c;
        drawHeartPath(it.s);
      } else if (it.kind === "flowers") {
        ctx.globalAlpha = it.a;
        ctx.translate(it.x, it.y); ctx.rotate(it.rot);
        ctx.fillStyle = it.c;
        drawFlower(it.s);
      }
      ctx.restore();
    }

    function drawBalloon(b) {
      const swayX = Math.sin(performance.now() / 1000 * b.swaySp + b.sway) * 12;
      ctx.save();
      ctx.translate(b.x + swayX, b.y);
      ctx.globalAlpha = 0.55;
      ctx.fillStyle = "rgba(" + b.c + ",.5)";
      ctx.beginPath(); ctx.ellipse(0, 0, b.s * 0.75, b.s, 0, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.moveTo(-3, b.s); ctx.lineTo(3, b.s); ctx.lineTo(0, b.s + 5); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = "rgba(" + b.c + ",.5)";
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(0, b.s + 5); ctx.quadraticCurveTo(6, b.s + 22, 0, b.s + 38); ctx.stroke();
      ctx.globalAlpha = 0.5; ctx.fillStyle = "rgba(255,255,255,.5)";
      ctx.beginPath(); ctx.ellipse(-b.s * 0.25, -b.s * 0.3, b.s * 0.16, b.s * 0.28, -0.4, 0, Math.PI * 2); ctx.fill();
      ctx.restore();
    }

    function init() {
      resize();
      window.addEventListener("resize", resize);
      const d = desiredCounts();
      for (const k in d) for (let i = 0; i < d[k]; i++) items.push(spawn(k));
    }

    // Called every animation frame. allowSpawn is false while paused.
    function frame(dt, allowSpawn) {
      if (dt > 24) { slowFrames++; if (slowFrames > 120) reduceFactor = 0.6; }
      else slowFrames = 0;

      if (burstTimer > 0) {
        burstTimer -= dt;
        if (burstTimer <= 0) intensity = 1.6; // settle to a calmer-but-richer level
      }

      const desired = desiredCounts();
      const counts = { dots: 0, confetti: 0, sparkles: 0, hearts: 0, flowers: 0 };
      for (const it of items) counts[it.kind]++;

      if (allowSpawn) {
        for (const kind in desired) {
          for (let i = 0; i < 3 && counts[kind] < desired[kind]; i++) {
            const p = spawn(kind);
            if (p) { items.push(p); counts[kind]++; }
          }
        }
      }

      // Trim anything above the desired level (e.g. after a burst settles).
      const seen = { dots: 0, confetti: 0, sparkles: 0, hearts: 0, flowers: 0 };
      items = items.filter((it) => {
        if (seen[it.kind] < desired[it.kind]) { seen[it.kind]++; return true; }
        return false;
      });

      ctx.clearRect(0, 0, W, H);
      for (const it of items) { update(it, dt); draw(it); }

      // Balloons only appear in scenes that ask for them.
      if (balloonsOn) {
        while (balloons.length < 6) balloons.push(spawnBalloon());
      } else if (balloons.length) {
        balloons = [];
      }
      for (const b of balloons) {
        b.y += b.vy * dt / 1000;
        if (b.y < -80) Object.assign(b, spawnBalloon());
        drawBalloon(b);
      }
    }

    return {
      init,
      frame,
      burst() { intensity = 3; burstTimer = 6000; },
      setBalloons(on) { balloonsOn = !!on; if (!on) balloons = []; }
    };
  })();

  /* ============================================================
     SCENE RENDERERS — one function per scene type.
     Each returns a DOM tree; the engine handles timing/fades.
     ============================================================ */

  // "Waiting for Midnight…" opening scene.
  function renderWaiting(root, scene) {
    root.appendChild(anim(el("div", "eyebrow", scene.eyebrow), 0.05));
    root.appendChild(anim(el("h2", "scene-title", scene.title), 0.2));
    root.appendChild(anim(el("p", "scene-subtitle", scene.subtitle), 0.45));
    root.appendChild(anim(el("div", "scene-small", scene.line), 0.7, "el-fade"));
  }

  // Build a photo with a graceful generated placeholder if the file is missing.
  function buildPhoto(src, alt) {
    const wrap = el("div", "photo-inner");
    const base = String(src).replace(/\.[^.]+$/, "");
    const exts = ["jpg", "jpeg", "png", "webp"];
    const img = new Image();
    img.className = "photo-img";
    img.alt = alt || "";
    img.decoding = "async";
    let i = 0;
    const tryNext = () => {
      if (i >= exts.length) { showPlaceholder(wrap); return; }
      img.src = base + "." + exts[i++];
    };
    img.onload = () => { wrap.appendChild(img); };
    img.onerror = tryNext;
    tryNext();
    return wrap;
  }

  function showPlaceholder(wrap) {
    if (wrap.querySelector(".photo-placeholder")) return;
    const ph = el("div", "photo-placeholder");
    ph.appendChild(el("div", "ph-star", "✦"));
    ph.appendChild(el("div", "ph-text", "a moment for you"));
    wrap.appendChild(ph);
  }

  // A photo memory scene.
  function renderPhoto(root, scene, index) {
    if (scene.eyebrow) root.appendChild(anim(el("div", "eyebrow", scene.eyebrow), 0.05));
    root.appendChild(anim(el("h2", "scene-title", scene.title), 0.2));

    const card = anim(el("div", "photo-card"), 0.45, "el-photo");
    card.appendChild(buildPhoto(scene.photo, CONFIG.herName));
    if (scene.onPhotoText) card.appendChild(el("div", "on-photo-text", scene.onPhotoText));
    card.appendChild(el("div", "photo-badge", pad2(index + 1)));
    root.appendChild(card);

    if (scene.caption) root.appendChild(anim(el("p", "scene-caption", scene.caption), 0.85, "el-fade"));
  }

  // Poem lines revealed one by one.
  function renderPoem(root, scene) {
    if (scene.eyebrow) root.appendChild(anim(el("div", "eyebrow", scene.eyebrow), 0.05));
    root.appendChild(anim(el("h2", "scene-title", scene.title), 0.2));
    const box = el("div", "poem-lines");
    scene.lines.forEach((line, i) => box.appendChild(anim(el("p", "poem-line", line), 0.6 + i * 1.4, "el-fade")));
    root.appendChild(box);
  }

  // Three wishes in glass cards, revealed one by one.
  function renderWishes(root, scene) {
    if (scene.eyebrow) root.appendChild(anim(el("div", "eyebrow", scene.eyebrow), 0.05));
    root.appendChild(anim(el("h2", "scene-title", scene.title.replace("{age}", ordinal(CONFIG.age))), 0.2));
    const box = el("div", "wishes-list");
    scene.wishes.forEach((w, i) => box.appendChild(anim(el("p", "wish-card", w), 0.6 + i * 1.4, "el-fade")));
    root.appendChild(box);
  }

  // The midnight clock card.
  function renderClock(root, scene) {
    if (scene.eyebrow) root.appendChild(anim(el("div", "eyebrow", scene.eyebrow), 0.05));
    const card = el("div", "clock-card");
    const row = el("div", "clock-row");
    clockDigitsEl = el("div", "clock-digits", "11:59:50");
    clockMeridiemEl = el("div", "clock-meridiem", "PM");
    row.appendChild(clockDigitsEl);
    row.appendChild(clockMeridiemEl);
    card.appendChild(row);
    card.appendChild(el("p", "clock-line", scene.line));
    root.appendChild(card);
    clockCardEl = card;
  }

  // The birthday explosion.
  function renderBirthday(root, scene) {
    root.appendChild(anim(el("div", "birthday-number", String(CONFIG.age)), 0.1));
    root.appendChild(anim(el("h2", "birthday-title", "HAPPY " + ordinal(CONFIG.age) + " BIRTHDAY"), 0.3));
    root.appendChild(anim(el("div", "birthday-name", CONFIG.herName.toUpperCase() + " ❤️"), 0.5));
    root.appendChild(anim(el("p", "birthday-message", scene.message), 0.75, "el-fade"));
  }

  // The final letter, auto-scrolling.
  function renderLetter(root, scene) {
    const scroller = el("div", "letter-scroll");
    scene.paragraphs.forEach((p) => {
      const para = el("p", null, p);
      if (/Saifullah|With all my love/.test(p)) para.classList.add("letter-sign");
      scroller.appendChild(para);
    });
    root.appendChild(scroller);
    letter = { scroller, pos: 0, max: 0, speed: 18, holdUntil: 0, measured: false };
    letterDuration = 70000;

    // If the viewer scrolls or drags by hand, pause the auto-scroll for 3 s.
    scroller.addEventListener("scroll", () => {
      if (!letter) return;
      if (Math.abs(scroller.scrollTop - letter.pos) < 1.5) return; // programmatic scroll
      letter.pos = scroller.scrollTop;
      letter.holdUntil = performance.now() + 3000;
    });
    scroller.addEventListener("pointerdown", () => {
      if (letter) letter.holdUntil = performance.now() + 3000;
    });
  }

  // The closing frame.
  function renderEnd(root) {
    const heart = el("div", "intro-heart");
    heart.innerHTML = HEART_SVG;
    root.appendChild(anim(heart, 0.05, "el-fade"));
    root.appendChild(anim(el("h2", "end-title", "Happy Birthday, " + CONFIG.herName), 0.25));
    root.appendChild(anim(el("p", "end-line", "With all my love, " + CONFIG.fromName + " ❤️"), 0.5, "el-fade"));
    const btns = el("div", "end-buttons");
    const replay = el("button", "end-btn primary", CONFIG.ui.replayStory);
    replay.type = "button";
    replay.addEventListener("click", replayStory);
    const save = el("button", "end-btn", CONFIG.ui.saveMoment);
    save.type = "button";
    save.addEventListener("click", saveCard);
    btns.appendChild(replay);
    btns.appendChild(save);
    root.appendChild(anim(btns, 0.7, "el-fade"));
  }

  // Dispatch one scene object to its renderer.
  function renderScene(scene, index) {
    const root = el("div", "scene");
    switch (scene.type) {
      case "waiting": renderWaiting(root, scene); break;
      case "photo": renderPhoto(root, scene, index); break;
      case "poem": renderPoem(root, scene); break;
      case "wishes": renderWishes(root, scene); break;
      case "clock": renderClock(root, scene); break;
      case "birthday": renderBirthday(root, scene); break;
      case "letter": renderLetter(root, scene); break;
      case "end": renderEnd(root); break;
      default: root.appendChild(el("div", "scene-caption", "…"));
    }
    return root;
  }

  /* ============================================================
     ENGINE — timers, story clock, progress, transitions.
     ============================================================ */
  let activeScenes = [];
  let sceneIndex = 0;
  let sceneElapsed = 0;   // ms inside the current scene
  let totalElapsed = 0;   // ms across the whole story (drives the chip)
  let playing = false;
  let paused = false;
  let started = false;
  let currentScene = null;
  let currentSceneEl = null;
  let preBirthdayTotal = 0;
  let totalDuration = 1;
  let virtualMidnight = 0;
  let target = null;
  let letter = null;
  let letterDuration = 70000;
  let liveClockDuration = 0;
  let initialIndex = 0;
  let clockDigitsEl = null, clockMeridiemEl = null, clockCardEl = null;
  let lastClockSecond = -1;
  let hudFadeTimer = null;

  // How long a scene lasts in ms.
  function sceneDuration(s) {
    if (s.type === "letter") return letterDuration;
    if (s.type === "clock" && CONFIG.mode === "live") return liveClockDuration || (s.duration || 10) * 1000;
    return (s.duration || 0) * 1000;
  }

  // Work out the real midnight and the story-clock base.
  function computeTarget() {
    target = new Date(CONFIG.targetISO);
    if (isNaN(target.getTime())) target = new Date(2026, 11, 3);
    virtualMidnight = CONFIG.mode === "live" ? target.getTime() : new Date(2026, 11, 3).getTime();
  }

  // In live mode, skip photo memories from the end so the clock can start in time.
  function prepareLiveScenes() {
    const available = (target.getTime() - Date.now()) / 1000;
    if (available <= 0) return { skipToBirthday: true, scenes: CONFIG.scenes };
    const scenes = CONFIG.scenes.map((s) => Object.assign({}, s));
    const clockIdx = () => scenes.findIndex((s) => s.type === "clock");
    const preClock = () => {
      const i = clockIdx();
      return scenes.slice(0, i).reduce((a, s) => a + (s.duration || 0), 0);
    };
    let guard = 0;
    while (preClock() > available && guard++ < 20) {
      const i = clockIdx();
      let lastPhoto = -1;
      for (let j = i - 1; j >= 0; j--) if (scenes[j].type === "photo") { lastPhoto = j; break; }
      if (lastPhoto < 0) break;
      scenes.splice(lastPhoto, 1);
    }
    return { skipToBirthday: false, scenes };
  }

  // Build the active scene list and precompute totals.
  function buildScenes() {
    if (CONFIG.mode === "live") {
      const res = prepareLiveScenes();
      activeScenes = res.scenes.map((s) => Object.assign({}, s));
      if (res.skipToBirthday) initialIndex = Math.max(0, activeScenes.findIndex((s) => s.type === "birthday"));
    } else {
      activeScenes = CONFIG.scenes.map((s) => Object.assign({}, s));
    }
    const bIdx = activeScenes.findIndex((s) => s.type === "birthday");
    preBirthdayTotal = activeScenes.slice(0, bIdx < 0 ? activeScenes.length : bIdx)
      .reduce((a, s) => a + (s.duration || 0) * 1000, 0);
    totalDuration = activeScenes.reduce((a, s) => a + sceneDuration(s), 0) || 1;
    if (skipParam) initialIndex = Math.min(activeScenes.length - 1, Math.max(0, skipParam - 1));

    // If a photo scene has no eyebrow, generate "MEMORY n OF N" automatically.
    const photoIdx = [];
    activeScenes.forEach((s, i) => { if (s.type === "photo") photoIdx.push(i); });
    photoIdx.forEach((sceneI, k) => {
      const s = activeScenes[sceneI];
      if (!s.eyebrow && k > 0) {
        s.eyebrow = "MEMORY " + (k + 1) + " OF " + photoIdx.length + " • " + CONFIG.prevDayLabel;
      }
    });
  }

  // Warm the browser cache with the first two photos.
  function preloadPhotos() {
    CONFIG.scenes.filter((s) => s.type === "photo").slice(0, 2).forEach((s) => {
      const img = new Image();
      img.src = s.photo;
    });
  }

  // The story clock: midnight minus everything before the birthday scene.
  function chipTimeMs() {
    if (CONFIG.mode === "live") return Date.now();
    return virtualMidnight - preBirthdayTotal + totalElapsed;
  }

  // Render the ticking time chip.
  function updateChip() {
    const ms = chipTimeMs();
    const d = new Date(ms);
    let h = d.getHours();
    const m = d.getMinutes(), s = d.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    $("timeDay").textContent = ms < virtualMidnight ? CONFIG.prevDayLabel : CONFIG.birthdayLabel;
    $("timeClock").textContent = pad2(h) + ":" + pad2(m) + ":" + pad2(s) + " " + ampm;
  }

  function updateProgress() {
    // Time-based overall progress, forced to full on the closing frame.
    const p = currentScene && currentScene.type === "end" ? 1 : Math.min(1, totalElapsed / totalDuration);
    $("progressFill").style.width = (p * 100).toFixed(2) + "%";
  }

  function updateCounter() {
    if (currentScene && currentScene.type === "clock") {
      $("counter").textContent = CONFIG.ui.midnight;
    } else if (currentScene && currentScene.type === "birthday") {
      $("counter").textContent = CONFIG.ui.birthdayChip;
    } else {
      $("counter").textContent = pad2(sceneIndex + 1) + " / " + activeScenes.length;
    }
  }

  // Per-scene start behaviour (sound, balloons, flashes).
  function onSceneStart(scene) {
    Particles.setBalloons(!!(scene.effects && scene.effects.indexOf("balloons") >= 0));
    if (scene.type !== "letter") AudioEngine.letterStop();
    if (scene.type !== "clock") AudioEngine.duckMusic(false);

    switch (scene.type) {
      case "photo": AudioEngine.photo(); break;
      case "poem":
      case "wishes": AudioEngine.poem(); break;
      case "clock":
        AudioEngine.duckMusic(true);
        if (CONFIG.mode === "live") {
          const remaining = Math.max(0, target.getTime() - Date.now());
          liveClockDuration = Math.max(5000, remaining);
        } else {
          liveClockDuration = (scene.duration || 10) * 1000;
        }
        break;
      case "birthday":
        Particles.burst();
        flash();
        AudioEngine.duckMusic(false);
        AudioEngine.midnight();
        break;
      case "letter":
        AudioEngine.letterStart();
        break;
      case "end":
        AudioEngine.end();
        AudioEngine.fadeMusicOut();
        break;
    }
  }

  // Move to a scene with a cross-fade.
  function goToScene(i) {
    if (i < 0 || i >= activeScenes.length) return;
    sceneIndex = i;
    sceneElapsed = 0;
    lastClockSecond = -1;
    letter = null;
    clockDigitsEl = clockMeridiemEl = clockCardEl = null;

    const scene = activeScenes[i];
    currentScene = scene;
    const host = $("sceneHost");

    if (currentSceneEl) {
      const old = currentSceneEl;
      old.classList.remove("scene-enter");
      old.classList.add("scene-exit");
      setTimeout(() => old.remove(), 650);
    }

    const node = renderScene(scene, i);
    host.appendChild(node);
    void node.offsetHeight; // force reflow so the enter animation starts cleanly
    node.classList.add("scene-enter");
    currentSceneEl = node;

    updateCounter();
    updateProgress();
    onSceneStart(scene);
  }

  // Update the big clock digits each frame.
  function updateClockScene() {
    if (!currentScene || currentScene.type !== "clock" || !clockDigitsEl) return;
    const ms = chipTimeMs();
    const d = new Date(ms);
    let h = d.getHours();
    const m = d.getMinutes(), s = d.getSeconds();
    const ampm = h >= 12 ? "PM" : "AM";
    h = h % 12; if (h === 0) h = 12;
    const text = pad2(h) + ":" + pad2(m) + ":" + pad2(s);
    if (clockDigitsEl.textContent !== text) {
      clockDigitsEl.textContent = text;
      if (clockMeridiemEl) clockMeridiemEl.textContent = ampm;
    }
    if (s !== lastClockSecond) {
      lastClockSecond = s;
      AudioEngine.heartbeat();
      AudioEngine.risingNote(s);
    }
    const toMidnight = virtualMidnight - ms;
    if (clockCardEl) {
      clockCardEl.classList.toggle("calm", toMidnight <= 1000 && toMidnight > 0);
      clockCardEl.classList.toggle("bright", toMidnight > 1000 && toMidnight <= 5000);
    }
  }

  // Auto-scroll the letter; pauses while the viewer touches it.
  function updateLetter(dt) {
    if (!letter || !letter.scroller) return;
    const sc = letter.scroller;
    if (!letter.measured) {
      letter.max = Math.max(0, sc.scrollHeight - sc.clientHeight);
      if (letter.max > 0) {
        letter.measured = true;
        const old = letterDuration;
        letterDuration = (letter.max / letter.speed) * 1000 + 400;
        // Keep the overall progress bar consistent with the real letter length.
        totalDuration = Math.max(1, totalDuration - old + letterDuration);
      }
      return;
    }
    if (performance.now() < letter.holdUntil) return;
    letter.pos = Math.min(letter.max, letter.pos + letter.speed * dt / 1000);
    sc.scrollTop = letter.pos;
    if (letter.pos >= letter.max - 1) {
      letterDuration = Math.min(letterDuration, sceneElapsed + 600); // settle, then move on
    }
  }

  // Has the current scene run long enough?
  function checkSceneEnd() {
    if (!currentScene || currentScene.type === "end") return;
    if (sceneElapsed >= sceneDuration(currentScene)) {
      if (sceneIndex + 1 < activeScenes.length) goToScene(sceneIndex + 1);
    }
  }

  // Start the whole film.
  function start() {
    if (started) return;
    started = true;
    buildScenes();
    goToScene(initialIndex);
    playing = true;
  }

  // The single animation loop: scene timers, chip, letter, particles.
  let lastNow = performance.now();
  function loop(now) {
    const rawDt = Math.min(now - lastNow, 60);
    lastNow = now;
    if (playing && !paused) {
      const dt = rawDt * speed;
      totalElapsed += dt;
      sceneElapsed += dt;
      updateClockScene();
      updateLetter(dt);
      checkSceneEnd();
      updateChip();
      updateProgress();
    }
    Particles.frame(rawDt, playing && !paused);
    requestAnimationFrame(loop);
  }

  /* ============================================================
     CONTROLS
     ============================================================ */
  function togglePause() {
    if (!started) return;
    paused = !paused;
    $("btnPause").textContent = paused ? "▶" : "⏸";
    $("stage").classList.toggle("paused", paused);
    if (paused) { $("hud").classList.remove("faded"); clearTimeout(hudFadeTimer); }
    else scheduleHudFade();
  }

  function replayStory() {
    if (!started) return;
    totalElapsed = 0;
    paused = false;
    $("btnPause").textContent = "⏸";
    $("stage").classList.remove("paused");
    AudioEngine.letterStop();
    goToScene(0);
    scheduleHudFade();
  }

  function skipScene() {
    if (!started) return;
    goToScene(Math.min(activeScenes.length - 1, sceneIndex + 1));
  }

  function toggleSound() {
    const m = !AudioEngine.isMuted();
    AudioEngine.setMuted(m);
    $("btnSound").textContent = m ? CONFIG.ui.soundOff : CONFIG.ui.soundOn;
  }

  function showHud() { $("hud").classList.remove("faded"); }
  function scheduleHudFade() {
    clearTimeout(hudFadeTimer);
    hudFadeTimer = setTimeout(() => { if (!paused) $("hud").classList.add("faded"); }, 4000);
  }

  function setupControls() {
    $("beginBtn").addEventListener("click", begin);
    $("btnPause").addEventListener("click", togglePause);
    $("btnReplay").addEventListener("click", replayStory);
    $("btnSkip").addEventListener("click", skipScene);
    $("btnSound").addEventListener("click", toggleSound);

    document.addEventListener("keydown", (e) => {
      if (recordMode) {
        if (e.code === "Space") { e.preventDefault(); beginRecord(); }
        return;
      }
      if (!started) return;
      switch (e.code) {
        case "Space": e.preventDefault(); togglePause(); break;
        case "ArrowRight": skipScene(); break;
        case "ArrowLeft": goToScene(Math.max(0, sceneIndex - 1)); break;
        case "KeyR": replayStory(); break;
        case "KeyM": toggleSound(); break;
      }
    });

    document.addEventListener("pointermove", () => { if (started && !paused) { showHud(); scheduleHudFade(); } });

    // Fade audio out when the tab is hidden.
    document.addEventListener("visibilitychange", () => {
      if (!AudioEngine.isMuted()) AudioEngine.setMuted(document.hidden);
    });
  }

  /* ============================================================
     INTRO / PASSWORD / LIVE LOCK / RECORD
     ============================================================ */
  function applyConfigText() {
    $("introName").textContent = CONFIG.herName;
    $("introDate").textContent = CONFIG.birthdayDate + " • Turning " + CONFIG.age;
    $("beginBtn").textContent = CONFIG.ui.begin;
    document.querySelector(".intro-hint").textContent = CONFIG.ui.hint;
    $("nameChip").textContent = CONFIG.herName.toUpperCase() + " ❤️";
    $("signature").textContent = CONFIG.herName + " ❤️";
    document.title = "A Cinematic Story for " + CONFIG.herName;
    document.querySelector(".password-label").textContent = CONFIG.ui.passwordLabel;
    document.querySelector(".password-unlock").textContent = CONFIG.ui.unlock;
    $("passwordError").textContent = CONFIG.ui.passwordError;
  }

  function applyTheme() {
    document.documentElement.setAttribute("data-theme", params.get("theme") || CONFIG.theme);
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      const edge = getComputedStyle(document.documentElement).getPropertyValue("--bg-edge").trim();
      if (edge) meta.content = edge;
    }
  }

  function setupPassword() {
    if (!CONFIG.passwordGate) return;
    $("beginBtn").classList.add("hidden");
    $("passwordForm").classList.remove("hidden");
    const input = $("passwordInput");
    const err = $("passwordError");
    const want = String(CONFIG.password);
    const check = () => {
      const v = input.value.replace(/\D/g, "");
      if (v === want) {
        $("passwordForm").classList.add("hidden");
        $("beginBtn").classList.remove("hidden");
        err.classList.remove("show");
        return true;
      }
      return false;
    };
    const fail = () => {
      err.classList.add("show");
      $("passwordForm").classList.add("shake");
      setTimeout(() => $("passwordForm").classList.remove("shake"), 450);
    };
    input.addEventListener("input", () => {
      input.value = input.value.replace(/\D/g, "");
      if (input.value.length >= want.length) { if (!check()) fail(); }
    });
    $("passwordForm").addEventListener("submit", (e) => { e.preventDefault(); if (!check()) fail(); });
  }

  function fmtCountdown(ms) {
    const s = Math.max(0, Math.ceil(ms / 1000));
    return pad2(Math.floor(s / 3600)) + ":" + pad2(Math.floor((s % 3600) / 60)) + ":" + pad2(s % 60);
  }

  function setupLiveLock() {
    if (CONFIG.mode !== "live") return;
    const openTime = target.getTime() - 150000;
    if (Date.now() >= openTime) return; // already within the window
    $("intro").classList.add("hidden");
    $("liveLock").classList.remove("hidden");
    const tick = () => {
      const remain = openTime - Date.now();
      $("liveCountdown").textContent = "Opens in " + fmtCountdown(remain);
      if (remain <= 0) {
        clearInterval(timer);
        $("liveLock").classList.add("hidden");
        $("intro").classList.remove("hidden");
      }
    };
    const timer = setInterval(tick, 250);
    tick();
  }

  function begin() {
    if (started) return;
    AudioEngine.init();
    AudioEngine.loadMusic();
    AudioEngine.begin();
    $("intro").classList.add("hidden");
    $("liveLock").classList.add("hidden");
    $("stage").classList.remove("hidden");
    start();
    scheduleHudFade();
  }

  function setupRecord() {
    if (!recordMode) return;
    document.body.classList.add("record");
    $("intro").classList.add("hidden");
    $("recordOverlay").classList.remove("hidden");
  }

  function beginRecord() {
    if (started) return;
    AudioEngine.init();
    AudioEngine.loadMusic();
    // Keep the screen black for 3 s so he can start recording first.
    setTimeout(() => {
      $("recordOverlay").classList.add("hidden");
      $("stage").classList.remove("hidden");
      AudioEngine.begin();
      start();
    }, 3000);
  }

  // Draw a simple birthday card and download it as a PNG.
  function saveCard() {
    const c = document.createElement("canvas");
    c.width = 1080; c.height = 1350;
    const x = c.getContext("2d");

    const g = x.createLinearGradient(0, 0, 1080, 1350);
    g.addColorStop(0, "#0d1230");
    g.addColorStop(0.55, "#3a2a86");
    g.addColorStop(1, "#04060f");
    x.fillStyle = g;
    x.fillRect(0, 0, 1080, 1350);

    const r = x.createRadialGradient(540, 520, 60, 540, 520, 620);
    r.addColorStop(0, "rgba(255,126,182,.45)");
    r.addColorStop(1, "rgba(255,126,182,0)");
    x.fillStyle = r;
    x.fillRect(0, 0, 1080, 1350);

    x.textAlign = "center";
    x.textBaseline = "middle";
    x.font = "150px Georgia, serif";
    x.fillText("❤️", 540, 300);

    x.fillStyle = "#ffffff";
    x.font = "italic 600 82px Georgia, serif";
    x.fillText("Happy Birthday,", 540, 560);

    x.fillStyle = "#ff7eb6";
    x.font = "italic 600 140px Georgia, serif";
    x.fillText(CONFIG.herName, 540, 710);

    x.fillStyle = "#f6c86a";
    x.font = "600 42px Poppins, system-ui, sans-serif";
    x.fillText(CONFIG.birthdayDate + "  •  Turning " + CONFIG.age, 540, 850);

    x.fillStyle = "#cfc7e8";
    x.font = "italic 44px Georgia, serif";
    x.fillText("With all my love, " + CONFIG.fromName + " ❤️", 540, 1040);

    const a = document.createElement("a");
    a.download = "happy-birthday-" + CONFIG.herName.toLowerCase() + ".png";
    a.href = c.toDataURL("image/png");
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  function flash() {
    const f = $("flash");
    f.classList.remove("on");
    void f.offsetWidth;
    f.classList.add("on");
  }

  /* ============================================================
     INIT
     ============================================================ */
  applyTheme();
  applyConfigText();
  computeTarget();
  setupPassword();
  setupControls();
  setupRecord();
  setupLiveLock();
  Particles.init();
  preloadPhotos();
  requestAnimationFrame(loop);
})();
