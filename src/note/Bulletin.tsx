import BilanMatiere from "../matiere/BilanMatiere";
import { calculMoyenne } from "../common/note-utils";
import Note from "./Note";
import type { Matiere } from "../services/note.services";
import "./Bulletin.css";

type Props = {
  matieres: Matiere[];
};

const Bulletin = ({ matieres }: Props) => {
  const moyenneMatieres = matieres.map((matiere) =>
    calculMoyenne(matiere.notes)
  );
  const moyenneGenerale = calculMoyenne(moyenneMatieres);
  return (
    <article>
      <h2 className="moyenne-generale">
        Moyenne Générale: <Note>{moyenneGenerale.toLocaleString("fr")}</Note>
      </h2>
      {matieres &&
        matieres.map((matiere) => (
          <BilanMatiere matiere={matiere.matiere} notes={matiere.notes} />
        ))}
    </article>
  );
};

export default Bulletin;
