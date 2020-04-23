import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';
import { loadContacts } from './store/actions/ContactAction';

import MainNavbar from './cmps/MainNavbar';
import MainFooter from './cmps/MainFooter';
import Home from './pages/Home';
import ContactApp from './pages/ContactApp';
import Statistics from './pages/Statistics';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHome, faAddressBook, faChartLine, faCoins ,faInfoCircle, faUserPlus, faSortAlphaDown, faRandom, faExchangeAlt,
         faSignInAlt, faChevronRight, faChevronLeft, faArrowAltCircleLeft, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faBitcoin, faBtc } from '@fortawesome/free-brands-svg-icons';
import ContactDetails from './pages/ContactDetails';
import ContactEdit from './pages/ContactEdit';
import SignUp from './pages/SignUp';
import PrivateRoute from './HOC/PrivateRoute';

library.add(faHome, faAddressBook, faChartLine, faCoins, faBitcoin, faInfoCircle, faUserPlus, faBtc, faRandom, faExchangeAlt,
        faSortAlphaDown, faSignInAlt, faChevronRight, faChevronLeft, faArrowAltCircleLeft, faEdit, faTrashAlt);

const history = createBrowserHistory();

function App(props) {
  useEffect(() => {
    props.loadContacts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="app">
      <Router history={history}>
        <MainNavbar />
        <main>
          <Switch>
            <Route path="/" exact component={PrivateRoute(Home)} />
            <Route path="/contact" exact component={PrivateRoute(ContactApp)} />
            <Route path="/contact/edit/:id?" exact component={PrivateRoute(ContactEdit)} />
            <Route path="/contact/:id" exact component={PrivateRoute(ContactDetails)} />
            <Route path="/statistics" component={PrivateRoute(Statistics)} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </main>
        <MainFooter />
      </Router>
    </div>
  );
}

const mapDispatchToProps = {
  loadContacts
}

export default connect(null, mapDispatchToProps)(App);
