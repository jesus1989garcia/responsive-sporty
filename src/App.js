import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/home'
import Matches from './components/matches';
import Team from './components/pages/Team';
import Player from './components/pages/Player';
import Results from './components/pages/results';
import Highlights from './components/pages/highlights';



function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar />
     <Switch>
       <div className="pages">
        <Route exact path="/" component={Home} />
        <Route exact path="/allmatches" component={Matches} />
        <Route exact path="/team/:id" component={Team} />
        <Route exact path="/player/:id" component={Player} />
        <Route exact path="/results/:id" component={Results} />
        <Route exact path="/highlights" component={Highlights} />
       </div>
      
     </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
