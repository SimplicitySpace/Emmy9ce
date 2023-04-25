import React, { useState } from 'react'
import classes from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { Link as Nav } from "react-scroll";

const Navigation = () => {

    const [firstText, setfirstText] = useState(true)
    const [secondText, setsecondText] = useState(false)
    const [mobileNav, setmobileNav] = useState(false)


    const handleMouseEnter = () => {
        setfirstText(false)
        setsecondText(true)
    }

    const handleMouseLeave = () => {
        setfirstText(true)
        setsecondText(false)
    }
    const openNavHandler = () => {
        setmobileNav(!mobileNav)
    }
    return (
        <>
            <nav>
                <div className={classes.mobileWrapper}>

                    <div className={classes.rightNav}>
                        <div className={classes.textBox}>
                            {firstText && <h3 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`${firstText ? classes.slideup : classes.slidedown}`}>9ce Analytics</h3>}
                            {secondText && <h3 onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseEnter} className={`${secondText ? classes.slideupgrand : ''}`} >9celytics</h3>}

                        </div>

                    </div>
                    <div className={classes.leftNav}>
                        <ul>
                            <Link className={classes.link} to='/'>
                                <li>Home</li>
                            </Link>
                            <Nav
                                to="projects"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}
                            >
                                <li>Projects</li>

                            </Nav>

                            <Nav
                                to="contacts"
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={500}>
                                <li>Contact</li>

                            </Nav>
                            <Link className={classes.link} to='/about'>
                                <li>About</li>
                            </Link>

                        </ul>



                    </div>
                    <div onClick={openNavHandler} className={classes.btnBox}>
                        <button className={classes.openBtn}>{!mobileNav ? ' Menu' : 'Close'}</button>

                    </div>



                </div>


            </nav >

            {mobileNav && <div className={classes.mobileNavDropdown}>
                <ul>
                    <Link onClick={() => setmobileNav(!mobileNav)} className={classes.link} to='/'>
                        <li>Home</li>
                    </Link>
                    <Nav onClick={() => setmobileNav(!mobileNav)}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                    >
                        <li>Projects</li>

                    </Nav>

                    <Nav
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}>
                        <li onClick={() => setmobileNav(!mobileNav)}>Contact</li>

                    </Nav>
                    <Link onClick={() => setmobileNav(!mobileNav)} className={classes.link} to='/about'>
                        <li>About</li>
                    </Link>

                </ul>
            </div>
            }
        </>
    )
}

export default Navigation