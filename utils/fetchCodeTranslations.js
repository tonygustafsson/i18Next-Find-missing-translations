import process from "child_process";
import fs from "fs";
import util from "util";

import {
  I18NEXT_BIN_PATH,
  I18NEXT_CONFIG_PATH,
  TRANSLATION_FILE,
} from "./config.js";

const exec = util.promisify(process.exec);

const fetchCodeTranslations = async () => {
  try {
    await fs.promises.unlink(TRANSLATION_FILE);
  } catch (error) {
    // Ignore
  }

  await exec(
    `${I18NEXT_BIN_PATH} './**/*.tsx' --config ${I18NEXT_CONFIG_PATH}`
  );

  try {
    const fileData = await fs.promises.readFile(TRANSLATION_FILE);

    try {
      await fs.promises.unlink(TRANSLATION_FILE);
    } catch (error) {
      console.warn("Could not remove temporary translation file");
    }

    return JSON.parse(fileData);
  } catch (error) {
    console.error(error);
  }
};

export default fetchCodeTranslations;
