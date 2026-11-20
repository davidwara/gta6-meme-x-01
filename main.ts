// gta6-meme-x-01 entry program (Node 22, standard library only).
// The entry is the X post itself: this program only hands the house the
// post's address. It copies POST.json from the repository root into the
// output directory, where the gate reads it. Nothing else it writes is judged.
//
// Run locally:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const src = join(BOT_DIR, 'POST.json');
const dst = join(OUTPUT_DIR, 'POST.json');

// Fail fast with a clear message if the post file is missing or malformed.
const raw = readFileSync(src, 'utf8');
const parsed: unknown = JSON.parse(raw);
if (typeof parsed !== 'object' || parsed === null || !('url' in parsed)) {
  console.error('POST.json must be a JSON object with a "url" field.');
  process.exit(1);
}
const url = (parsed as { url: unknown }).url;
if (typeof url !== 'string' || !/^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/\w+\/status\/\d+/.test(url)) {
  console.error(
    'POST.json "url" is not a real X post address yet (still the starter placeholder?). ' +
      'Post the meme on X first, then put its address in POST.json.',
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(src, dst);
console.log(`POST.json copied to ${dst}`);
