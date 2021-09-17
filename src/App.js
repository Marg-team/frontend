import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './ui/components/Footer/Footer';
import Navigation from './ui/components/Navbar/Navbar';
import Complain from './ui/screens/complain/Complain';
import Home from './ui/screens/home/home';
import HomelessReport from './ui/screens/homlessReport/homelessReport';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Switch>
        <Route path="/report">
          <HomelessReport/>
        </Route>
        <Route path="/complain">
          <Complain/>
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
