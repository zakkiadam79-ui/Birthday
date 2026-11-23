================================================================
A CINEMATIC STORY FOR SHAISTA  —  README
================================================================

1. WHAT THIS IS
---------------
This is a one-click, auto-playing birthday website made for Shaista.
You open the link, tap "Click to Begin Experience", and a short cinematic
story plays by itself — photos, words, music, confetti, a midnight clock,
a birthday moment and a personal letter. There is nothing to solve and
no password to type (unless you turn one on in step 4).


2. HOW TO ADD PHOTOS
--------------------
• Put your photos in the  photos/  folder.
• Name them exactly:  photo1.jpg  photo2.jpg  ...  photo8.jpg
  (The story uses photo1 for the first "dedicated" scene and photo2..photo8
   for the memory scenes. You can add more by copying the pattern.)
• Portrait photos look best. Keep each under about 1 MB and around
  1000 pixels on the long side.
• .jpg is the main format, but .jpeg, .png and .webp with the same name
  also work — the site tries them automatically.
• If a photo is missing, a pretty generated placeholder is shown instead,
  so nothing ever looks broken.


3. HOW TO CHANGE THE WORDS
--------------------------
• Open  script.js  in any simple text editor (Notepad is fine).
• At the very top you will see a block called  const CONFIG = { ... }.
• ONLY change the text inside the quotation marks "like this".
  For example:  herName: "Shaista",   or a caption: "Your words here".
• The main things you may want to edit:
    herName, fromName, age, birthdayDate
    the captions under each photo
    onPhotoText  (the short words written on a photo)
    the poem lines, the wishes, and the letter paragraphs
• Save the file. You never need to touch the HTML or CSS for content.


4. THEME, MODE AND PASSWORD
---------------------------
All three are set at the top of script.js inside CONFIG:

• Theme (the colour look):
    theme: "midnight"   = deep blue-violet night with soft black edges (default)
    theme: "plum"       = the warm plum / magenta look

• Mode:
    mode: "story"       = plays any time (default, best for sending the link)
    mode: "live"        = the birthday moment lands on the REAL midnight
                          (uses targetISO; it waits and then plays)

• Password (optional):
    passwordGate: false  -> change to true to ask for her birthdate first
    password: "3122007"  -> the digits she must type (DDMMYYYY or DDMMYYYY)


5. HOW TO TEST QUICKLY
----------------------
Add these to the end of the address (after a  ?  ):

  ?speed=4     plays 4x faster (great for checking the whole story)
  ?skip=13     jumps straight to scene 13 (the birthday explosion)
  ?skip=14     jumps to the letter
  ?theme=plum  previews the plum theme
  ?mode=live   previews live mode

Examples:
  index.html?speed=4
  index.html?skip=13
  index.html?theme=plum&speed=4


6. HOW TO PUT IT ONLINE FOR FREE
--------------------------------
Easiest (Netlify Drop):
  1. Go to https://app.netlify.com/drop
  2. Drag the whole  shaista-story  folder onto the page.
  3. You get a link like  https://something.netlify.app — send that link.

GitHub Pages:
  1. Push this folder to GitHub.
  2. In the repository: Settings -> Pages -> deploy from a branch.
  3. Choose the branch and the  /shaista-story  folder (or the root).
  4. Your link will be  https://<your-username>.github.io/<repo>/shaista-story/

You can also just double-click  index.html  to open it on your own laptop.


7. HOW TO RECORD THE LAPTOP VIDEO (for WhatsApp)
-------------------------------------------------
  • Open the site with  ?record=1  at the end of the address, e.g.
        index.html?record=1
    (This hides the mouse cursor and the controls so the video is clean.)
  • Press F11 for full screen (browser zoom 100%) and turn on
    "Do Not Disturb" so no notifications appear.
  • Use OBS Studio:
        - Display Capture
        - Output 1920x1080, 30 or 60 fps
        - Desktop Audio ON, microphone OFF
        - Record to MP4 (or MKV and remux later)
  • In OBS press "Start Recording", then click the browser and press SPACE.
  • Stop recording after the closing frame.
  • Trim the ends in CapCut or Clipchamp and export 1080p MP4 (H.264).
  • When sending on WhatsApp, send it as a DOCUMENT so the quality
    is not reduced.


8. TIP
------
Send the video first, then send the link — so she can watch the film
and then replay it herself whenever she wants.

================================================================
Made with love, for Shaista. ❤️
================================================================
