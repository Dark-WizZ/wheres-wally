import './app.scss'
import './toastr.scss'
import Cont from "./comps/Cont";
import LBoard from './comps/LBoard';
import Score from './comps/Score';
import TopBar from "./comps/TopBar";
import AuthContextProvider from './context/AuthContext';
import CharContextProvider from './context/CharContext';
import { CoordsContextProvider } from './context/CoordsContext';
import UserContextProvider from './context/UserContext';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
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
      </AuthContextProvider>
    </div>
  );
}

export default App;
