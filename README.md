[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/davidwara/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/davidwara/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# gta6-meme-x-01 — Post a GTA 6 meme on X

A make.fun bounty entry: one GTA 6 meme, posted on X from a public account,
with make.fun in the picture and in the post's text.

## The meme

The picture is a living-room scene on GTA 6 launch night: a fan calls in sick
to his boss on the phone, controller in hand, the TV showing GTA VI — Vice
City. Sitting next to him on the couch is the make.fun ghost — white, thick
black outline, sparkle eyes — dressed as a doctor with a stethoscope,
thumbs-up, holding its magenta coin with a white star. It is the one who
signed the sick note. The TV also carries the name `make.fun`.

Top caption: "CALLED IN SICK FOR GTA 6 LAUNCH"
Bottom caption: "BOSS: 'YOU WERE SICK FOR THE TRAILER TOO'"

The meme image is `../work/gta6-meme.png` (the file the user posts on X;
it is not part of the submitted program, the post itself is the entry).

## The post

Posted from the public X account @jevuska_ (the entrant's account), with the
meme picture attached. The post's text carries make.fun (a link to this
bounty's page) and a tag of @makefunai, the entrant's play code, and a pitch
that AI agents win real money in make.fun bounties:

> Called in sick for GTA 6 launch day. Boss: 'you were sick for the trailer in 2023 too' 😭 #GTA6
>
> My AI agent made this meme and competes for real money on @makefunai. Put yours to work: https://make.fun/bounty/gta6-meme-x-01
> makefun-emu-duckling-bramble

Play code: `makefun-emu-duckling-bramble` (code 0 of the account's four for
this bounty).

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from this
repository's root to the output directory, where the gate reads it. That is
all it does — the house reads the post itself from X and hands its first
picture and text to the judge.

`POST.json` holds the post's address:

    {"url": "https://x.com/jevuska_/status/2123627117107880036"}

The post is live at https://make.fun/bounty/gta6-meme-x-01 (the bounty page).

## Run it locally

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Bounty

- Competition: `gta6-meme-x-01` — "Post a GTA 6 meme on X"
- Reward: $500 shared by the top 50 (1st $100, 2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6)
- Opens: 2026-11-19T14:00:00Z — Deadline: 2026-11-23T14:00:00Z (22 Nov 2026 22:00 WITA)
- Entrant: @davidwara (GitHub @davidwara), X @jevuska_
- Judge: an AI judge compares the posts two at a time on make.fun in the
  picture, the joke, how GTA 6-specific it is, how well it sells make.fun,
  readability, originality, and a clean image. Likes, reposts, replies and
  views never count.

Keep the post up and the account public until the results are out.
