import FormNote from "./note/FormNote";
import { Matiere, getMatieres } from "./services/note.services";

import "./App.css";
import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";

const recupererMatiere = async (callback: (matieres: Matiere[]) => void) => {
  const matieresApi = await getMatieres();
  matieresApi && callback(matieresApi);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="pro-note-checker.png" className="App-logo" alt="Pro Note Checker" />
        <h1>Bulletin trimestriel</h1>
      </header>
      <section>
        <FormNote onSucess={() => console.log('Super')} />
      </section>
    </div>
  );
}

export default App;
