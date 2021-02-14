import { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MapArea from './components/MapArea/MapArea';
import { SearchProvider } from './SearchContext';
import axios from 'axios';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Header />
        <MapArea />
      </div>
    </SearchProvider>
  );
}

export default App;
