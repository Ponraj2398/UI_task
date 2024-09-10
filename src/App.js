import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import UI from './UI';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <div className="App">
       <Routes>
        <Route path='/' element={<UI />} />
       </Routes>
      </div>
    </Router>

  );
}

export default App;
