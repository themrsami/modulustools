/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require("node:fs");
const sharp = require(
  require.resolve("sharp", { paths: [require.resolve("next/package.json")] }),
);
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const mark = fs.readFileSync(path.join(root, "public/brand.svg"));
const social = Buffer.from(
  `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#FAF5F6"/><rect x="70" y="65" width="72" height="72" rx="22" fill="#3A1E2B"/><path d="M88 115V88l18 16 18-16v27" fill="none" stroke="#FAF5F6" stroke-width="4"/><path d="M106 104v15" stroke="#829E85" stroke-width="4"/><text x="166" y="113" font-family="Arial,sans-serif" font-size="38" fill="#3A1E2B">modulustools.</text><text x="70" y="275" font-family="Arial,sans-serif" font-size="76" font-weight="bold" fill="#3A1E2B">Small tools.</text><text x="70" y="365" font-family="Georgia,serif" font-style="italic" font-size="76" fill="#3A1E2B">More possibility.</text><path d="M70 445h1060" stroke="#E8DDE1" stroke-width="2"/><text x="70" y="510" font-family="Arial,sans-serif" font-size="26" fill="#76636D">Chrome extensions · Custom browser tools</text><text x="70" y="560" font-family="Arial,sans-serif" font-size="24" fill="#3A1E2B">modulustools.com</text><circle cx="1095" cy="550" r="20" fill="#829E85"/></svg>`,
);
Promise.all([
  sharp(social).png().toFile(path.join(root, "public/social-card.png")),
  sharp(mark)
    .resize(180, 180)
    .png()
    .toFile(path.join(root, "public/apple-icon.png")),
])
  .then(() => console.log("Brand assets generated."))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
