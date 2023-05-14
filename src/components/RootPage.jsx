import React from 'react'
import { ApplicationRoutes } from '../router/ApplicationRoutes';
import TopRibbon from './TopRibbon/TopRibbon';
import NavMenu from './NavMenu/NavMenu';

const RootPage = (props) => {
  {/** This is the Main Page Auth Users can Access In Hear contain main page sidebar nd Main Routers Root */}
  return (
    <React.Fragment>
      <div className='inter-main-wrapper'>
          <div className='inter-main-wrapper__nav-menu'>
              <NavMenu/>
          </div>
          <div className='inter-main-wrapper__main-row'>
            <div className='inter-main-wrapper__top-ribbon'>
              <TopRibbon/>
            </div>
              <ApplicationRoutes {...props} />
          </div>
      </div>
    </React.Fragment>
  )
}

export default RootPage

