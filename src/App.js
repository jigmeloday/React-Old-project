
import './App.css';
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom'
import ShopPage from './page/shopPage/shop.component'
import Header from './component/header/header.component'

function App() {
  return (
    <div>
        <Header/>
        <Switch>
            <Route exact path='/' component={HomePage}>
            </Route>
            <Route exact path='/shop' component={ShopPage}/>
        </Switch>
    </div>
  );
}

export default App;
