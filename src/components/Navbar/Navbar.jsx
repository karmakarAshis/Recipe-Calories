import React from 'react';

const Navbar = () => {

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm flex justify-evenly">
                <div className="flex">
                    <a className="btn btn-ghost text-xl">Recipe Calories</a>
                </div>
                <div className='flex'>
                    <ul className='flex gap-6'><li><a href="">Home</a></li>
                        <li><a href="">Recipes</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Search</a></li></ul>
                </div>
                <div className="flex gap-2">
                    <input type="text" placeholder="Search" className="bg-gray-200 border-1 p-2 w-24 md:w-auto rounded-full" />
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;