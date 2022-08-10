import React from "react";
import GoogleAuth from "./GoogleAuth";
import ModeToggle from "./ModeToggle";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='flex-1 gap-2'>
        <ModeToggle />
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link className='btn normal-case text-xl' href='/'>
              SOAR
            </Link>
          </li>
        </ul>
      </div>

      <div className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link href='/'>View Rides</Link>
          </li>
          <li tabIndex='0'>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <GoogleAuth />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
