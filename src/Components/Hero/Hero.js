import React, { useState, useEffect } from 'react';
import classes from './Hero.module.css';



const Hero = () => {
    const [showGreetings, setShowGreetings] = useState(false);
    const [ShowImg, setShowImg] = useState(false)
    const [contactReveal, setcontactReveal] = useState(false)


    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowGreetings(true);
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        };
    }, []);
    useEffect(() => {
        const timeoutId2 = setTimeout(() => {
            setShowImg(true)
        }, 2000);

        return () => {
            clearTimeout(timeoutId2)
        }
    }, [])


    return (
        <section className={classes.section}>
            {showGreetings && (
                <div className={`${classes.greetings} ${showGreetings ? classes.show : ''}`} >

                    <div className={classes.imgNtext}>
                        {ShowImg && <img className={classes.heroimg} src='https://res.cloudinary.com/dt9f36crx/image/upload/v1678626872/Emmy9ce/My_project-2_ospnt7.png' alt='hero-img' />}
                        <h1>Hello &</h1>
                    </div>
                    <h1>Welcome !</h1>
                </div>
            )}
            {showGreetings && <p className={classes.textBox}>
                I'm  Ugwuidu Emmanuel. <br />
                A Data Analyst who turns data <br />
                into insights that drive decisions.
            </p>}
            {showGreetings && <div className={classes.heroBTns}>
                <button className={classes.viewBtn}>
                    <a target="_blank" href='https://www.dropbox.com/s/urefk1oxkfei97w/CV.Emmanuel.pdf?dl=0'>Download Resume</a>

                </button>
                <button onClick={() => setcontactReveal(!contactReveal)} className={classes.getInTouchBtn}>{contactReveal ? 'Hit Me Up' : "Get In Touch"}</button>


            </div>}
            {contactReveal && <div className={classes.contactReveal}>
                <p>
                    Email: ugwuiduemmanuel@gmail.com

                </p>
                <p>     Phone: +86 13754878141

                </p>
            </div>}
        </section>
    );
};

export default Hero;
