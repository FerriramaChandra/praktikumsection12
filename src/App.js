import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutAuthor from './components/routes/aboutAuthor';
import AboutApp from './components/routes/aboutApp';
import Navbar from './components/routes/Navbar';
import Home from './components/Home';
import Header from "./components/pages/Header"



const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path={'/'}/>
        <Route path={'/AboutApp'} exact component={AboutApp} />
        <Route path={'/AboutAuthor'} exact component={AboutAuthor} />
      </Switch>
      
    </Router>
    
    <div className="App">
      <Header/>
      <Home/>
    </div>
    </>
  );
}

export default App;
