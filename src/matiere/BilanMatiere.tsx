import { calculMoyenne } from "../common/note-utils";
import Note from "../note/Note";
import "./BilanMatiere.css";

type Props = {
  matiere: string;
  notes: number[];
};

const BilanMatiere = ({ matiere, notes }: Props) => {
  const moyenne = calculMoyenne(notes);
  return (
    <>
      <h3>{matiere}</h3>
      <section className="matiere">
        <div>
          <h4>Notes</h4>
          <ul>
            {notes.map((note) => (
              <li>
                <Note>{note.toLocaleString("fr")}</Note>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Moyenne</h4>
          <Note>{moyenne.toLocaleString("fr")}</Note>
        </div>
      </section>
    </>
  );
};
export default BilanMatiere;
