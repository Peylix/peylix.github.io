import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BirthdayAnimation from './components/BirthdayAnimation';

function App() {
  const basename = import.meta.env.DEV ? '/' : '/birthday';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/birthday" element={<BirthdayAnimation />} />
      </Routes>
    </Router>
  );
}

export default App;