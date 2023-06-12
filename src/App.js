import './app.scss'
import Cont from "./comps/Cont";
import TopBar from "./comps/TopBar";
import CharContextProvider from './context/CharContext';
import { CoordsContextProvider } from './context/CoordsContext';

function App() {
  return (
    <div className="App">
      <CharContextProvider>
        <TopBar />
        <CoordsContextProvider>
          <Cont />
        </CoordsContextProvider>
      </CharContextProvider>
    </div>
  );
}

export default App;
