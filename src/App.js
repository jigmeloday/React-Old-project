
import './App.css';
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom';
import ShopPage from './page/shopPage/shop.component';
import Header from './component/header/header.component';
import Auth from './page/auth/auth.component'

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/shops' component={ShopPage}/>
            <Route exact path='/auth' component={Auth}/>
        </Switch>
    </div>
  );
}

export default App;
