import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Announcement from './components/Announcement';

function App() {
  return (
    <div className="App">
      <Announcement></Announcement>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  );
}

export default App;
