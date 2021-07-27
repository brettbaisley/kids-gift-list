import './App.css';
import './firebase/config';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { UserProvider } from './firebase/UserProvider';
import { GiftContextProvider } from './firebase/GiftProvider';

import AdminRoute from './router/AdminRoute';

// My Pages
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './pages/Welcome';
import GiftsListPage from './pages/GiftsList';
import GiftDetailsPage from './pages/GiftDetails';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import AdminPage from './pages/Admin';
import AdminAddPage from './pages/AdminAdd';
import AdminUpdatePage from './pages/AdminUpdate';

function App() {
  return (
    <UserProvider>
      <GiftContextProvider>
        <BrowserRouter>
          <Header></Header>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/gifts/:id" component={GiftDetailsPage} />
              <Route exact path="/gifts" component={GiftsListPage} />
              <AdminRoute exact path="/admin" component={AdminPage} />
              <AdminRoute exact path="/admin/add" component={AdminAddPage} />
              <AdminRoute exact path="/admin/update/:id" component={AdminUpdatePage} />
            </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </GiftContextProvider>
    </UserProvider>
  )
}

export default App;
