
import './App.css';
import HomePage from "./page/homepage/homepage.component";
import {Route, Switch} from 'react-router-dom'

const HatsPage = () => (
    <div>
        <h1>Hat</h1>
    </div>
)

function App() {
  return (
    <div>
        <Switch>
            <Route exact path='/' component={HomePage}>
            </Route>
            <Route exact path='/hat' component={HatsPage}/>
        </Switch>
    </div>
  );
}

export default App;
