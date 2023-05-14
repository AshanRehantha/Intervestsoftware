import React from 'react';
import { AiOutlineBell } from "react-icons/ai";

const Notify = () => {
  const data = {
    name:'Matt Appleyard'
  }
  const profile = () => {
    return (
        <div className='inter-notify__profile'>
            {data.name}
            <div className='inter-notify__profile-image'>

            </div>
        </div>
    )
  }
  return (
    <div className='inter-notify'>
        <span className='inter-notify__icon'><AiOutlineBell/></span>
        <div className='inter-notify__profile'>
            {profile()}
        </div>
    </div>
  )
}

export default Notify