import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import LoginAdmin from './component/Admin/loginadmin';


function App() {

  return (
    <div>
      <Router>
        <Switch>
		      <Route path="/" exact component={LoginAdmin} />
          <Route path="/adminlogin" exact component={LoginAdmin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
