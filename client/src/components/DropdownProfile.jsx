import React from 'react'
import { useAuth } from '../context/AuthContext';
function DropdownProfile() {
  const{ logout } = useAuth();

  return (
    <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1 rounded-[100%]">O</div>
  <ul tabIndex={0} className="dropdown-content menu bg-background text-white rounded-box z-1 w-40 shadow-lg shadow-white/5">
    <li className='hover:bg-white/30 hover:rounded-xl transition duration-75'><a>My Profile</a></li>
    <li className='hover:bg-white/30 hover:rounded-xl'><a>My Subjects</a></li>
    <li className='hover:bg-white/50  hover:rounded-xl'><a>Assesment Marks</a></li>
    <li className='hover:bg-white/30  hover:rounded-xl'><a>Results</a></li>
    <li
    className='hover:bg-white/30 hover:rounded-xl'
    onClick={logout}
    ><a>Logout</a></li>
  </ul>
</div>
  )
}

export default DropdownProfile