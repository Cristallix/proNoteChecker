export const matieresName = [
  "Histoire",
  "Mathématiques",
  "Physique",
].sort();

export const calculMoyenne = (notes: number[]) =>
  Number((notes.reduce((a, b) => a + b, 0) / notes.length).toFixed(1));

export type MatiereAPI = {
  eleve: string;
  matiere: string;
  coefficient: number;
  note: number;
};
