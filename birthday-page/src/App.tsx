import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BirthdayAnimation from './components/BirthdayAnimation.tsx';

function App() {
  return (
    <Router basename="/birthday">
      <Routes>
        <Route path="/" element={<BirthdayAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;