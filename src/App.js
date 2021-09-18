import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './ui/components/Footer/Footer';
import Navigation from './ui/components/Navbar/Navbar';
import Page404 from './ui/screens/404/404';
import Complain from './ui/screens/complain/Complain';
import Donate from './ui/screens/donate/Donate';
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
        <Route path="/donate">
          <Donate/>
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Suspense>
          <Page404/>
        </Suspense>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
