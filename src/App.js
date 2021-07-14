import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// My Pages
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './pages/Welcome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
          </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
