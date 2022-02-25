
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import List from './components/List/index';
import Resumo from './components/Resumo';
import ModalTransactions from './components/ModalTransactions';

function App() {
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
      <Header/>
      <main>
        <List />
        <div>
          <Resumo />
          <button className='btn-insert-register'>
            Adcionar Registro
          </button>
        </div>
      </main>
      {open && <ModalTransactions />}
    </div>
  );
}

export default App;
