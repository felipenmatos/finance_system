
import './App.css';
import Header from './components/Header';
import List from './components/List/index';
import Resumo from './components/Resumo';

function App() {
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
    </div>
  );
}

export default App;
