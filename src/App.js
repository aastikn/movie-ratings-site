import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" style = {{display:"flex",flexDirection:"column"}}>
      <div style = {{height:"10vw"}}>
    <h1>Movie Ratings App</h1>
      </div>
      <div style = {{height:"80vw"}}>

      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      
    </div>
  );
}

export default App;
