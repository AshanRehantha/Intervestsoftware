import React from 'react'
import { UiSearchBar } from '../common/UiInput'
import Notify from './Notify'

const TopRibbon = () => {
  return (
    <div className='top-ribbons'>
        <div className='top-ribbons__search-bar'>
            <UiSearchBar
                placeholder="Search..."
            />
        </div>
        <div className='top-ribbons__notify'>
            <Notify/>
        </div>
    </div>
  )
}

export default TopRibbon
