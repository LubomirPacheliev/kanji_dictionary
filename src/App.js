import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import DictionaryPage from './components/DictionaryPage.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* This route is temporary */}
          <Route exact path="/test">
            <DictionaryPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
