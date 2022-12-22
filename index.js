import fs from "fs";

import { API_URL, CONSOLE_COLORS, OUTPUT_FILE } from "./utils/config.js";
import fetchCodeTranslations from "./utils/fetchCodeTranslations.js";
import fetchJson from "./utils/fetchJson.js";

const findMissingTranslations = async () => {
  const apiTranslations = await fetchJson(API_URL);
  const codeTranslations = await fetchCodeTranslations();

  if (!apiTranslations || apiTranslations.length === 0) {
    return console.log("No translations found in API.");
  }

  if (!codeTranslations || codeTranslations.length === 0) {
    return console.log("No translations found in code.");
  }

  const missingTranslations = [];

  // Collect missing translations by comparing code translations to API translations
  Object.entries(codeTranslations).forEach(([group, translations]) => {
    Object.keys(translations).forEach((key) => {
      if (!apiTranslations[group] || !apiTranslations[group][key]) {
        missingTranslations.push({ group, key });
      }
    });
  });

  if (missingTranslations.length === 0) {
    console.log("No missing translations found.");
  }

  // Console log it to view the result
  missingTranslations.forEach(({ group, key }, index) => {
    console.log(
      `${index + 1}: ${CONSOLE_COLORS.magenta}${group}${CONSOLE_COLORS.reset}.${
        CONSOLE_COLORS.cyan
      }${key}${CONSOLE_COLORS.reset}`
    );
  });

  console.log(`\nResult is also saved to ${OUTPUT_FILE}`);

  // Convert to CSV
  const csv = missingTranslations.reduce(
    (acc, { group, key }) => (acc += `${group},${key}\n`),
    "Group,Key\n"
  );

  // Save CSV to file
  await fs.promises.writeFile(OUTPUT_FILE, csv);
};

// Run the script
findMissingTranslations();
