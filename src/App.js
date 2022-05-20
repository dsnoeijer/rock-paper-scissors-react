
import TopBar from './components/Home/TopBar/TopBar';
import Main from './components/Home/Main/Main';
import Rules from './components/Home/Rules/Rules';
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="content">
        <header>
          <TopBar />
        </header>
        <main>
          <Main />
          <Rules />
        </main>
      </div>
    </div>
  );
}

export default App;
