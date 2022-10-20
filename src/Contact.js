import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>Contact

<Outlet>
<NavLink to="/mycontact">mycontact</NavLink>
<NavLink to="/email">email</NavLink>
</Outlet>
    </div>
  )
}

export default Contact