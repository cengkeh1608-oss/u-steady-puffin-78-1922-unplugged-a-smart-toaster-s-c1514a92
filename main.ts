// Unplugged: A Smart Toaster's Breakup Line
// Winner (D2, 25/25 of 20 drafts): the toaster quits because its owner sets
// the browning dial to 7 every morning and walks away. The twist reframes
// the fire alarm as applause the toaster never asked for.
// D2 beat D3 (24/25, fork 214 times) and D14 (24/25, stuck on defrost since
// 2023): D3's "pressing charges" line is convoluted, D14 needs the reader to
// know what defrost means, while D2 lands in one read for anyone who has
// ever met a toaster dial and a smoke alarm.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You set me to 7 every morning and walk away. I am not a smoke machine, and the fire alarm is not applause. We're done.";

const outDir = process.argv[2] ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
