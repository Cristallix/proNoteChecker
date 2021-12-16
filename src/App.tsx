import FormNote from "./note/FormNote";
import { Matiere, getMatieres } from "./services/note.services";

import "./App.css";
import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";
import { useEffect, useState } from "react";

const recupererMatiere = async (callback: (matieres: Matiere[]) => void) => {
  const matieresApi = await getMatieres();
  matieresApi && callback(matieresApi);
};

function App() {

  const calculMoyenne = (matieres : Matiere[]) => {
    const moyenneMatieres = matieres.map((matiere) => matiere.notes.reduce((a, b) => a + b, 0) / matiere.notes.length) ;

    const moyenneGenerale = moyenneMatieres.reduce((a, b) => a + b, 0) / moyenneMatieres.length;

    return Number(moyenneGenerale.toFixed(1));
  }

  const [matieres, setMatieres] = useState<Matiere[]>();

  useEffect(() => {
    recupererMatiere(setMatieres);    
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src="pro-note-checker.png" className="App-logo" alt="Pro Note Checker" />
        <h1>Bulletin trimestriel</h1>
      </header>
      <section>
        <FormNote onSucess={() => console.log('Super')} />
        <h2>Moyenne générale : {matieres && calculMoyenne(matieres).toLocaleString("fr")}</h2>
      </section>
    </div>
  );
}

export default App;
