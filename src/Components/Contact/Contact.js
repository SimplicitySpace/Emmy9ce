import React from 'react'
import classes from './Contact.module.css'
import { SocialIcon } from 'react-social-icons';

const Contact = () => {
    return (
        <section id='contacts' className={classes.section}>
            <div className={classes.main}>
                <div className={classes.textBox}>
                    <h4>Want to work with me?</h4>
                    <p>Get in touch!
                    </p>
                </div>


                <button className={classes.CTA}>Contacts</button>
                <div className={classes.socials}>
                    <SocialIcon network="linkedin" className={classes.social} url='https://www.linkedin.com/in/9celytics/' />
                    <SocialIcon network="twitter" className={classes.social} url='https://twitter.com/9celytics' />
                    <SocialIcon network="instagram" className={classes.social} url='https://instagram.com/9celytics?igshid=YmMyMTA2M2Y=' />
                    <SocialIcon network="github" className={classes.social} url='https://github.com/9celytics' />

                </div>
            </div>
        </section>
    )
}

export default Contact;