import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Switch component
import HomePage from './HomePage';
import NewPage from './NewPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/new" element={<NewPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
