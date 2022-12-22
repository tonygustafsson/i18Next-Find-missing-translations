import path from "path";

export const API_URL = "https://yourdomain.com/api/translations/sv";
export const ROOT_PATH = path.resolve("./utils/findMissingTranslations");
export const I18NEXT_CONFIG_PATH = path.resolve(
  ROOT_PATH,
  "i18next-parser.config.js"
);
export const I18NEXT_BIN_PATH = path.resolve(".", "node_modules/.bin/i18next");
export const TRANSLATION_FILE = path.resolve(ROOT_PATH, "sv.json");
export const OUTPUT_FILE = path.resolve(ROOT_PATH, "missing-translations.csv");
export const CONSOLE_COLORS = {
  reset: "\x1b[0m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
};
