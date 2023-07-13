import scratchDefaultLocales, {localeMap} from '../src/supported-locales';

const unusedLocalesList = [
    'es-419'
];

/** @type {Record<string, {name: string}>} */
const sidekickLocales = {};
for (const localeKey of Object.keys(scratchDefaultLocales).sort()) {
    if (!unusedLocalesList.includes(localeKey)) {
        sidekickLocales[localeKey] = JSON.parse(JSON.stringify(scratchDefaultLocales[localeKey]));
    }
}

export {
    sidekickLocales as supportedLocales,
    localeMap as scratchToTransifex
};