import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, buttonVariants } from './ui/button';
import { BellDot, Search, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="flex justify-between items-center bg-secondary p-4 shadow  rounded-md fixed w-full">
    <NavLink to='/' className={buttonVariants({variant:'link'})+" text-xl font-bold"}>Campus Monitor</NavLink>

    <div className="flex items-center space-x-4 ">

      <NavLink to='/' className={buttonVariants({variant:'link'})}>Dashboard</NavLink>
      <NavLink to='/' className={buttonVariants({variant:'link'})}>Students</NavLink>
      <NavLink to='/' className={buttonVariants({variant:'link'})}>Geofences</NavLink>
      <NavLink to='/' className={buttonVariants({variant:'link'})}>Incidents</NavLink>
      <NavLink to='/' className={buttonVariants({variant:'link'})}>Reports</NavLink>
      <NavLink to='/' className={buttonVariants({variant:'link'})}>Support</NavLink>
      
      <Button size='icon' variant='secondary' className='rounded-lg bg-gray-300' ><Search /></Button>
      <Button size='icon' variant='secondary' className='rounded-lg  bg-gray-300' ><BellDot /></Button>
      <Button size='icon' variant='secondary' className='rounded-lg  bg-gray-300' ><Settings /></Button>
      <img
        src="/paul-naho.jpg"
        alt="Profile"
        className="w-10 h-10 rounded-full"
      />
    </div>
  </div>
  );
};

export default Sidebar;
