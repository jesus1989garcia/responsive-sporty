import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Home } from './components/pages/home'
import { Services } from './components/pages/services'
import { About } from './components/pages/about'
import { Contact } from './components/pages/contact'


function App() {
  return (
    <>
    <BrowserRouter>
     <NavBar />
     <Switch>
       <div className="pages">
        <Route exact path="/" component={Home} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact-us" component={Contact} />
       </div>
      
     </Switch>
    </BrowserRouter>
      
    </>
  );
}

export default App;
