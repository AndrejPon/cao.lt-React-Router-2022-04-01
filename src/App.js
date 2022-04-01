import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Add from './pages/Add';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <h1>App</h1>
      <Navigation />
      <Route path='/home'>
        <Home />
      </Route>
      <Route path='/add'>
        <Add />
      </Route>
    </div>
  );
}

export default App;
