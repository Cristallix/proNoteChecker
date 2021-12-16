import { MatiereAPI, matieresName } from "../common/note-utils";

const baseUrl = "toto";

export type Matiere = {
  eleve: string;
  matiere: string;
  notes: number[];
  coefficient: number;
};

export const getMatieres = async (eleve: string = "Thomas") => {
  let matieresGlobal: Matiere[] | undefined;
  try {
    const matieres: MatiereAPI[] = await (
      await fetch(`${baseUrl}/notes`)
    ).json();
    matieresGlobal = matieres
      .filter((m) => m.eleve === eleve)
      .reduce((prev, current) => {
        const exist = prev.find(
          (m) => m.matiere === current.matiere && m.eleve === current.eleve
        );
        if (exist) {
          exist.notes.push(current.note);
          return prev;
        }
        prev.push({
          eleve: current.eleve,
          matiere: current.matiere,
          notes: [current.note],
          coefficient: current.coefficient,
        });
        return prev;
      }, [] as Matiere[]);
      matieresGlobal.sort((a,b) => a.matiere.localeCompare(b.matiere));
  } catch {
    matieresGlobal = undefined;
  }
  return matieresGlobal;
};

export const saveNote = async (note: number) => {
  const body = JSON.stringify({
    note,
    matiere: matieresName[0],
    coefficient: 1,
    eleve: "Thomas",
  });
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  await fetch(`${baseUrl}/note`, { method: "POST", body , headers});
};
