import type { LanguageCode } from "./i18n";
import * as en from "./siteContent.en";
import * as it from "./siteContent.it";
import * as ru from "./siteContent.ru";
import * as hu from "./siteContent.hu";
import * as tr from "./siteContent.tr";
import * as de from "./siteContent.de";
import * as fr from "./siteContent.fr";
import * as ro from "./siteContent.ro";
import * as pl from "./siteContent.pl";
import * as ar from "./siteContent.ar";

const contentByLanguage = { en, it, ru, hu, tr, de, fr, ro, pl, ar };

export function getSiteContent(lang: LanguageCode) {
  return contentByLanguage[lang] ?? contentByLanguage.en;
}
