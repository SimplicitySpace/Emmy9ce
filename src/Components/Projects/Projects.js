import React, { useState } from 'react'
import classes from './Projects.module.css'
import { Link } from 'react-router-dom';
const Projects = ({ list }) => {

    return (


        <section className={classes.section}>
            {list.map((item) => {

                return (
                    <Link id='projects' className={classes.link} to={`./projects/${item.id}`}>
                        <main key={item.id}>
                            <div className={classes.imgBox}>
                                <img src={item.img} />
                            </div>
                            <figcaption className={classes.caption}>{item.name}{'\u00A0'}Projects</figcaption>
                        </main>
                    </Link>
                )
            })}


        </section>


    )
}

export default Projects