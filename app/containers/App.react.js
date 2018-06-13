import React from 'react';
import {Route, Switch} from 'react-router';

/* rutes */
import Home from './home/Home.react';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div id="home-container">
      <Switch>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/training" component={Home}/>
      </Switch>
    </div>)
  }
}

/* default export */
export default App;
