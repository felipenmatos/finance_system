
import './App.css';
import Header from './components/Header';
import List from './components/List/index';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <List />
      </main>
    </div>
  );
}

export default App;
