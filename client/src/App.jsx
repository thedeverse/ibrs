import './stylesheets/App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from './appRoutes';

function App() {
  return (
    <Router>
      <div className="App">
        <AppRoutes/>
      </div>
    </Router>
  );
}

export default App;
