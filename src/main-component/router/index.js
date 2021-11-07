import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Homepage from '../HomePage'
import AboutPage from '../AboutPage'
import PracticePage from '../PracticePage'
import PracticePageS2 from '../PracticePageS2'
import PracticeSinglePage from '../PracticeSinglePage'
import CasePage from '../CasePage'
import AttorneysPage from '../AttorneysPage'
import AttorneySinglePage from '../AttorneySinglePage'
import PricingPage from '../PricingPage'
import ContactPage from '../ContactPage'
import ErrorPage from '../ErrorPage'
      

const AllRoute = () => { 

  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/home' component={Homepage} />
            <Route path='/contact' component={ContactPage}/> 
            <Route path='/about' component={AboutPage} />
            <Route path='/attorneys' component={AttorneysPage} />
            <Route path='/pricing' component={PricingPage} />
            <Route path='/practice' component={PracticePage}/>
            <Route path='/practice-s2' component={PracticePageS2}/>
            <Route path='/practice-single/:id' component={PracticeSinglePage}/>
            <Route path='/case' component={CasePage}/>
            <Route path='/attorneys-single/:id' component={AttorneySinglePage}/>
            <Route path='/404' component={ErrorPage}/>
          </Switch>
      </Router>
      
    </div>
  );
}

export default AllRoute;
