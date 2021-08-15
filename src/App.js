import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContextData from './Components/Context/ContextData';
import Navbar from './Components/Navbar/Navbar';
import Addtask from './Components/pages/Addtask';
import Edittask from './Components/pages/Edittask';
import Home from './Components/pages/Home';
import ViewUser from './Components/pages/ViewUser';

function App() {

  return (
    <div >

      <ContextData>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/viewuser/:id" exact component={ViewUser} />
            <Route path="/edittask/:id" exact component={Edittask} />
            <Route path="/addtask" exact component={Addtask} />
            <Route path="/" exact component={Home} />
          </Switch>
        </Router>
      </ContextData>

    </div>
  );
}

export default App;
