import { useState } from "react";
import { ButtonCore as Button } from "@axa-fr/react-toolkit-button";
import { saveNote } from "../services/note.services";
import "./FormNote.css";
import { matieresName } from "../common/note-utils";

const enregistreNote = async (
  note: number,
  matiere: string,
  onSucess?: () => void,
  onFail?: () => void
) => {
  try {
    await saveNote(note, matiere);
    alert(`Super !!!! Ta note de ${note} en ${matiere} a été enregistrée`);
    onSucess && onSucess();
  } catch {
    console.log(`Oooops la note n'a pas été enregistrée`);
    onFail && onFail();
  }
};

type Props = {
  onSucess?: () => void;
  onFail?: () => void;
};

const FormNote = ({ onSucess, onFail }: Props) => {
  const [note, setNote] = useState(0);
  const [matiere, setMatiere] = useState(matieresName[0]);

  return (
    <form
      onSubmit={(e) => {
        enregistreNote(note, matiere, onSucess, onFail);
        e.preventDefault();
      }}
    >
      <label>
        Note :
        <input
          type="number"
          max="20"
          min="0"
          step="0.1"
          value={note}
          onChange={(e) => setNote(Number(e.currentTarget.value))}
        />
      </label>
      <label>
        Matière :
        <select name="matiere" id="matiere-select" value={matiere} onChange={(e) => setMatiere(e.currentTarget.value)}>
          {matieresName.map((m) => (
            <option value={m}>{m}</option>
          ))}
        </select>
      </label>
      <Button type="submit">Ajouter votre note</Button>
    </form>
  );
};
export default FormNote;
