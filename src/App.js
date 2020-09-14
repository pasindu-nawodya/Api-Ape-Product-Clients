import React from 'react';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import LoginAdmin from './component/Admin/loginadmin';
import LogoutAdmin from './component/Admin/UserLogout';
import UseApp from './component/UserApp';

function App() {

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={UseApp} />
          <Route path="/logout" exact component={LogoutAdmin} />
          <Route path="/adminlogin" exact component={LoginAdmin} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
