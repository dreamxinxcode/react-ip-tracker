import { useContext } from 'react';
import './App.css';
import Header from './components/header/Header';
import { SearchProvider } from './SearchContext';
import axios from 'axios';

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Header />
      </div>
    </SearchProvider>
  );
}

export default App;
