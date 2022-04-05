import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Add from './pages/Add';
import AddProperty from './pages/AddProperty';
import Home from './pages/Home';
import Property from './pages/Property';

function App() {
  return (
    <div className='App'>
      {/* <h1>App</h1> */}
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
        <Route path='/property'>
          <Property />
        </Route>
        <Route path='/add-property'>
          <AddProperty />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
