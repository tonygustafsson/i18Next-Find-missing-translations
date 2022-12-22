# i18Next Find missing translations

This script will find missing translations from a backend API and compare them to the translations in the code base.

## How it works

It first fetches all translations from the API configured in `./utils/config.js`,
then fetches all translations in the code base by using `i18next-parser`.

It then compares the two and outputs the missing translations.
The result will be shown in console and also saved to a CSV file that can be opened with Excel.

## Usage

```
npm install
npm start
```

But it won't work by itself. It needs a backend API to fetch the translations from and a project with translations in the code base, with a working i18next setup.

## Configuration

The util configuration is done in `./utils/config.js`.
The i18next-parser configuration is done in `./i18next-parser.config.js`.

This tool will not work if you don't configure it correctly.
Set the API URL, and set the correct language.

## Limitations

Only supports one language at the time. Won't be much work to make it fetch multiple languages though.

# More info

https://github.com/i18next/i18next-parser
