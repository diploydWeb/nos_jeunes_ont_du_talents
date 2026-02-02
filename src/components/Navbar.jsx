import React, { useState } from 'react';
import { NavLink } from 'react-router';


function Navbar() {
        const [showNavbar, setShowNavbar] = useState(false)
        const handleShowNavbar = () => {
            setShowNavbar(!showNavbar)
        }
    return (
        <div>
            <div className="nav-elements">
                <ul className='list_nav'>
                    <li>
                        <NavLink to="/talents">Les Talents</NavLink>
                    </li>
                </ul>
                <button aria-label='Open Nav' className='hamburger' onClick={handleShowNavbar}>
                    <ion-icon name="menu-outline"></ion-icon>
                </button>
                <div className={`nav_mobil_elements ${showNavbar && 'active'}`} >
                    <ul className='list_nav_mobile'>
                        <li>
                            <NavLink to="/talents" onClick={handleShowNavbar}>Les Talents</NavLink>
                        </li>
                    </ul>
                    <button aria-label="Close nav" className='close_outline' onClick={handleShowNavbar}>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar