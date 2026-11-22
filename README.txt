THE NIGHT HER STAR WAS BORN
A quiet, interactive birthday sky for Shaista, turning 19 on 3 December 2026.
It waits for midnight in Pakistan, then opens into memories, wishes and a personal letter.

1. RUN IT
Double-click index.html. There is no install, npm, framework or build step.
The only optional external requests are Google Fonts; offline system fonts work too.
Use headphones and turn your screen brightness up.

2. ADD PHOTOS
Put your pictures in the photos folder and name them photo1.jpg, photo2.jpg, ...
photo8.jpg (replace the old ones). Best size: under 1 MB each, around 1000 pixels
on the longer side. Edit the captions in script.js under memories.
.jpeg, .png and .webp are also tried automatically. Missing pictures become dreamy
blue-violet-teal star art. No pictures are uploaded anywhere.

3. CHANGE WORDS
Open script.js in Notepad. At the top you will see CONFIG. Change only the text
inside quotation marks. Replace every {{...}} with the real name/song/line.
In particular edit senderName, dedicationSong and privateLine, then personalise
the main letter. CONFIG.ui holds the interface text. Keep punctuation outside
quotation marks intact. Use \" for a quotation mark inside a sentence.
Optional: put music.mp3 / dedication.mp3 in audio and set musicFile /
dedicationFile to their relative paths, e.g. "audio/music.mp3".
If music is unavailable the synthesised ambient pad takes over.

4. PASSWORD
Her birthdate: 3122007. 03122007 and punctuation-separated versions also work.
This is a surprise gate, NOT real security. Anyone who reads the public source
can read the password, letter and photos. Only publish photos you may share.

5. TEST IT
Append these to the address (works with file:// too):
index.html?test=countdown
index.html?test=birth
index.html?test=galaxy
index.html?test=secret
index.html?test=wish
index.html?test=dawn
Test links bypass the gate; they are not displayed in the experience.
index.html?nogate=1 skips only the gate.
index.html?nogate=1&fake=2026-12-02T23:59:40%2B05:00
pretends it is twenty seconds before Pakistan midnight, then advances normally.
An unescaped +05:00 is also supported. The production target is fixed to
2026-12-03T00:00:00+05:00 regardless of the viewer's timezone.
Before midnight the sky waits. Up to 90 seconds late it plays the birth.
After that it welcomes her and opens the galaxy.
Explore a constellation, then tap each of its stars (or Next star).
Close cards / tap the guide to return to the sky. Complete all six to find #19.
Tap a typing letter to speed its current paragraph. Hold the candle for 2.2s.
Escape closes a card. Tab navigates controls; Enter / Space holds the candle.
Exploration is remembered if storage is available; Replay clears progress.
To fully reset, use Replay on the dawn screen or clear site storage.

6. PUT IT ONLINE (FREE)
Netlify Drop: visit Netlify Drop, sign in, and drag the complete website folder
(the folder containing index.html) into the upload area. Copy the resulting link.
GitHub Pages: push the files to your repository. In Settings > Pages choose
Deploy from a branch, choose the branch containing these files and /(root),
then Save. Wait for the deployment and copy the URL displayed there.
The current implementation lives on the Arena working branch; select that
branch to publish directly, or merge it into main before publishing main.
Send her the link BEFORE midnight, or let her find it herself.

7. RECORD THE LAPTOP VIDEO (CINEMA MODE)
Open the site in Chrome with ?cinema=1, e.g. .../index.html?cinema=1.
The gate is automatically skipped. The black screen waits for SPACE.
Press F11 for full screen, browser zoom 100%. Turn on Do Not Disturb / Focus
Assist. Use a 1920x1080 screen. Keep this tab visible throughout recording.
Use OBS Studio (free): add Display Capture, set canvas and output to
1920x1080 at 30 or 60 fps. Enable Desktop Audio and turn the microphone off.
Choose MP4, or MKV then remux to MP4. Do a short test: check sound is captured.
Click Start Recording in OBS, click the browser, then press SPACE.
There is a three-second black pre-roll; the rest plays hands-free.
Stop after the final fade to black. Trim the start/end using CapCut or
Clipchamp. Export 1080p MP4, H.264, around 8 to 10 Mbps.
Send on WhatsApp as a Document to avoid heavy compression.
Tip: send the video first (the emotional movie), then the link (the interactive sky).

TIMING / DESIGN NOTES
The brief's 15-second constellation slots cannot hold three six-second photos,
and its long letter needs more than 40 seconds at 32ms per character plus
paragraph pauses. Readability wins: the tour gives Memories 24 seconds and
the others 16 seconds, and the complete letter is allowed to finish. The film
is approximately five minutes rather than cutting off words at 4:20.
Long custom text can extend it further. Scene changes remain cross-fades.
No microphone, analytics, tracking, external images or external scripts.
Device tilt permission is optional. Dragging works when it is denied.
The sky calms down with reduced motion and reduces detail on slow devices.

VALIDATION
See tests/RESULTS.md for the checks performed and device/browser limitations.
The optional development tests are not needed to open or host the website.

TEST PREVIEW MODE
Open index.html?preview=1, enter the normal password and tap Unlock to rehearse
10 → 00, Birth, and the complete interactive story without waiting for December.
Music stays on through this preview countdown; the one-second darkness remains.
A small PREVIEW tag marks rehearsals. Alternatively set previewMode: true in CONFIG.
To turn preview off, remove preview=1 from the URL AND set previewMode: false.
Cinema ignores preview mode. The real birthday target and midnight rules are unchanged.
