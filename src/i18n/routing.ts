import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  pathnames: {
    "/": "/",
    "/fuer-jobsuchende": {
      de: "/fuer-jobsuchende",
      en: "/for-jobseekers",
    },
    "/fuer-schueler": {
      de: "/fuer-schueler",
      en: "/for-students",
    },
    "/datenschutz": { de: "/datenschutz", en: "/privacy" },
    "/nutzungsbedingungen": { de: "/nutzungsbedingungen", en: "/terms" },
    "/impressum": { de: "/impressum", en: "/imprint" },
    "/cookies": "/cookies",
    "/auth/reset": "/auth/reset",
    "/auth/confirm": "/auth/confirm",
  },
});
