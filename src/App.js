import './app.scss'
import Cont from "./comps/Cont";
import LBoard from './comps/LBoard';
import Score from './comps/Score';
import TopBar from "./comps/TopBar";
import CharContextProvider from './context/CharContext';
import { CoordsContextProvider } from './context/CoordsContext';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <CharContextProvider>
        <TopBar />
        <CoordsContextProvider>
          <Cont />
        </CoordsContextProvider>
        <Score />
        <LBoard />
      </CharContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
