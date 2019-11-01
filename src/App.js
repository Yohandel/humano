import React from 'react';
import Layout from './Components/UI/Layout/Layout';
import Home from './Components/Home/Home';
import ContactUs from './Components/ContactUs/ContactUs'
import Products from './Components/Products/Products'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Layout>
        <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
        </Switch>

    </Router>
      
    </Layout>
  );
}

export default App;
