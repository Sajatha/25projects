import './App.css';
import menus from './data.js';
import TreeView from './index.jsx';

function App() {
  return (
    <div className="App">
      <TreeView menus={menus}/>
    </div>
  );
}

export default App;
