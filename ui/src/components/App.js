import React from 'react'
import Footer from './Footer'
import AddProject from '../containers/AddProject'
import VisibleProjectList from '../containers/VisibleProjectList'

const App = () => (
  <div>
    <AddProject />
    <VisibleProjectList />
    <Footer />
  </div>
)

export default App