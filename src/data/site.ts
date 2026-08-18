// Costanti di brand e contatto — un solo punto di modifica per tutto il sito.
// I valori segnati [DA CONFERMARE] vanno sostituiti con i dati reali dello
// studio prima del lancio (vedi README).

export const SITE_URL = "https://www.ediliziafiscale.it";
export const SITE_NAME = "Edilizia Fiscale";

// [DA CONFERMARE] recapiti reali dello studio
export const PHONE_TEL = "+390200000000";
export const PHONE_DISPLAY = "02 0000 0000";
export const EMAIL = "info@ediliziafiscale.it";
export const PEC = "ediliziafiscale@pec.it";

// Autore di default dei contenuti. Per l'E-E-A-T va sostituito con un
// dottore commercialista reale, nominato, con Ordine di appartenenza e anno
// di iscrizione ([DA CONFERMARE]).
export const DEFAULT_AUTHOR = "Redazione Edilizia Fiscale";

export const abs = (path: string) => `${SITE_URL}${path}`;
