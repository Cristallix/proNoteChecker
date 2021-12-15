import { useEffect, useState } from "react";
import FormNote from "./note/FormNote";
import Bulletin from "./note/Bulletin";
import { Matiere, getMatieres } from "./services/note.services";

import "./App.css";
import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";

const recupererMatiere = async (callback: (matieres: Matiere[]) => void) => {
  const matieresApi = await getMatieres();
  matieresApi && callback(matieresApi);
};

function App() {
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
        <FormNote onSucess={() => recupererMatiere(setMatieres)} />
        {matieres && <Bulletin matieres={matieres} />}
      </section>
    </div>
  );
}

export default App;
