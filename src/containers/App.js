import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/genero" component={GeneroScreen} />
        <Route path="/director" component={DirectorScreen} />
        <Route path="/productora" component={ProductoraScreen} />
        <Route path="/tipo" component={TipoScreen} />
        <Route path="/media" component={MediaScreen} />
      </Switch>
    </Router>
  );
}

export default App;
