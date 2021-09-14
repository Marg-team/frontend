import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './ui/component/Footer/Footer';
import Navigation from './ui/component/Navbar/Navbar';
import Home from './ui/screens/home/home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/about">
          about
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
