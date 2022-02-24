
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
        <Resumo />
      </main>
    </div>
  );
}

export default App;
