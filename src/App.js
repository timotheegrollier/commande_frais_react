import PriseCommande from './pages/PriseCommande';
import Recap from './components/Recap';
import './App.scss'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename='/fresh'>
      <Routes>
        <Route path="/" element={<PriseCommande />} />
        <Route path="/recap" element={<Recap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
