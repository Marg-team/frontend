import { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './ui/components/Footer/Footer';
import Navigation from './ui/components/Navbar/Navbar';
import Page404 from './ui/screens/404/404';
import Admin from './ui/screens/admin/Admin';
import Complain from './ui/screens/complain/Complain';
import Donate from './ui/screens/donate/Donate';
import Home from './ui/screens/home/home';
import HomelessReport from './ui/screens/homlessReport/homelessReport';
import Login from './ui/screens/login/Login';
import Signup from './ui/screens/signup/Signup';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" exact>
          <Signup/>
        </Route>
        <Route path="/login" exact>
          <Login/>
        </Route>
        <Route path="/admin" exact>
          <Admin/>
        </Route>
        <Suspense>
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
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
