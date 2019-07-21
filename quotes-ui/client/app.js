import React from 'react'
//import Routes from './routes'
import {Navbar, GetQuote, Home} from './components'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className = 'container' id='containerStyle'>
        <div className = 'row'>
          <div className='col s6 offset-s3'>
            <Home />
          </div>
        </div>
        <div className='row'>
          <div className='col s6 offset-s3'>
            <GetQuote/>
          </div>
        </div>

      </div>
      {/* <Routes /> */}
    </div>
  )
}

export default App
