import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiBookshelf } from "react-icons/gi";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const{user} = useContext(AuthContext)
    console.log(user)

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array to run the effect only once

    const navItems = [
        { link: "Home", path: "/" },
        { link: "About", path: "/about" },
        { link: "Shop", path: "/shop" },
        { link: "Sell your Book", path: "/admin/dashboard" },
       
    ];

    return (
        <header className='w-full bg-tranparent fixed top-0 left-0 right-0 transtion-all ease-in duration-300'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-slate-400": "" }`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                 <NavLink to="/" className='text-2xl font-bold text-orange-400 flex item-center gap-2'><GiBookshelf className='inline-Block' />Book <span className='text-black'>ShelfBuddy</span></NavLink>
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link, path}) => <NavLink key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-blue-700'>{link}</NavLink>)
                    }
                </ul>
                {/* btn for lg devices */}
               <div className='space-x-12 hidden lg:flex items-center'>
            <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
               {
                user? user.email:""
               }
               
               </div>

{/* menuButton for the mobile devices*/}
<div className='md:hidden'>
    <button onClick={toggleMenu} className='text-black focus:outline-none'>
{
    isMenuOpen ? <FaXmark className='h-5 w-5 text-black'/> : 
    <FaBarsStaggered className='h-5 w-5 text-black'/>
}
    </button>
</div>
</div>
{/* navitem for small devices */}
<div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
{navItems.map(({link, path}) => <NavLink key={path} to={path} className='block text-base text-black uppercase cursor-pointer'>{link}</NavLink>)}
</div>
            </nav>
        </header>
    );
};

export default Navbar;

