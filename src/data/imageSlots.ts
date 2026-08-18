/**
 * SLOT IMMAGINE DEL SITO — un solo punto per collegare le foto reali.
 *
 * Come si usa: metti il file in /public/images/ (es. public/images/imprese-hero.jpg)
 * e scrivi qui il percorso, es.:  "imprese-hero": "/images/imprese-hero.jpg"
 * Finché il valore è null, la pagina mostra un segnaposto elegante con l'etichetta.
 */

export type ImageSlotId =
  | "home-due-fronti"
  | "imprese-hero"
  | "patrimonio-hero"
  | "studio-team"
  | "contatti-studio"
  | "guide-hero";

export const imageSlots: Record<ImageSlotId, string | null> = {
  /** Home, sezione "due fronti": cantiere e scrivania, il conto economico accanto al ponteggio */
  "home-due-fronti": null,
  /** Hub impresa: cantiere reale, gru, operai (no stock finto-americano) */
  "imprese-hero": null,
  /** Hub patrimonio: immobili, famiglia dell'imprenditore, chiavi e atti */
  "patrimonio-hero": null,
  /** Pagina studio: foto vera del team / dello studio */
  "studio-team": null,
  /** Contatti: ingresso o sala riunioni dello studio */
  "contatti-studio": null,
  /** Guide: scrivania con bilanci, computo metrico e calcolatrice */
  "guide-hero": null,
};

/** Didascalie/alt di default per ogni slot (usate anche dal segnaposto). */
export const imageSlotLabels: Record<ImageSlotId, string> = {
  "home-due-fronti": "Il cantiere e i numeri: i due fronti su cui si gioca il margine",
  "imprese-hero": "Cantiere di un'impresa edile",
  "patrimonio-hero": "Il patrimonio dell'imprenditore edile",
  "studio-team": "Il team dello studio",
  "contatti-studio": "Lo studio",
  "guide-hero": "Bilanci, computi metrici e calcolatrice",
};
