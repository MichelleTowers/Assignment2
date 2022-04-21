import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Reflections from './views/reflections'
import ITTechnologies from './views/i-t-technologies'
import ITInterview from './views/i-t-interview'
import IdealJobs from './views/ideal-jobs'
import OurProject from './views/our-project'
import AboutUs from './views/about-us'
import OurFavouritethings from './views/our-favouritethings'
import Index from './views/index'
import Tools from './views/tools'
import TeamProfile from './views/team-profile'
import IndustryData from './views/industry-data'
import References from './views/references'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Reflections} path="/reflections" />
        <Route exact component={ITTechnologies} path="/i-t-technologies" />
        <Route exact component={ITInterview} path="/i-t-interview" />
        <Route exact component={IdealJobs} path="/ideal-jobs" />
        <Route exact component={OurProject} path="/our-project" />
        <Route exact component={AboutUs} path="/about-us" />
        <Route
          exact
          component={OurFavouritethings}
          path="/our-favouritethings"
        />
        <Route exact component={Index} path="/" />
        <Route exact component={Tools} path="/tools" />
        <Route exact component={TeamProfile} path="/team-profile" />
        <Route exact component={IndustryData} path="/industry-data" />
        <Route exact component={References} path="/references" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
