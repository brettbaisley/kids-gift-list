import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
// My Pages
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './pages/Welcome';
import GiftsListPage from './pages/GiftsList';
import GiftDetailsPage from './pages/GiftDetails';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
          <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignUpPage} />
            <Route exact path="/gifts/:id" component={GiftDetailsPage} />
            <Route exact path="/gifts" component={GiftsListPage} />
          </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App;
