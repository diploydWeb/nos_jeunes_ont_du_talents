import { NavLink } from "react-router"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";



function Header() {
    
    const location = useLocation();

    const [lastScroll, setLastScroll] = useState(0);

    const threshold = 10;

    useEffect(() => {

        console.log(location.pathname)

        if (location.pathname == "/") {
            
            const header = document.getElementById("main-header");

            header.classList.remove('active')

        }

    }, [location])


    window.addEventListener("scroll", () => {


        const header = document.getElementById("main-header");

        console.log(header)

        const currentScrollY = window.scrollY;


        if (Math.abs(currentScrollY - lastScroll) < threshold) return;

        if (currentScrollY > lastScroll) {

            console.log(currentScrollY, lastScroll)
            header.classList.remove("active");
        } else {
            header.classList.add("active");
        }
        setLastScroll(currentScrollY)
    })



    return (
        
        <header id="main-header" className="header active">

            <NavLink to="/" className="header__img-div" >
                <img src="/assets/logo-event.png" alt="Nos jeunes ont du talents" />
            </NavLink>

            <Navbar></Navbar>

        </header>

    )

}

export default Header