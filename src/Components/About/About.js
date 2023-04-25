import React from 'react'
import Contact from '../Contact/Contact'
import classes from './About.module.css'

const About = () => {
    return (
        <><section className={classes.section}>
            <div className={classes.intro}>
                <h3>
                    Hi, my name is Emmy9ce.
                </h3>
                <h4>I'm an Entry Level Data Analyst.</h4>
            </div>
            <div className={classes.passion}>
                <h6>
                    I am drawn to solving problems and my intellectual curiosity motivates me to identify solutions.
                    This drive has guided me throughout my life, leading me to seek out answers and explore new possibilities.
                    I don't give up!  I possess a strong enthusiasm for utilizing data to steer decision-making and advance business expansion.
                </h6>
            </div>
            <div className={classes.interest}>
                <h5>
                    I'm very interested in anything Data and Business Analytics.
                    I am a quick learner who has always had to adapt well to new environments.
                    By leveraging data, I can drive business growth and deliver Innovative and cost-effective solutions for business problems.

                </h5>
            </div>
            <div className={classes.application}>
                <h4>
                    I'm currently looking for a role as a business analyst or data analyst to collaborate on projects that would help me improve my skills and experience.
                    🌱 I'm currently using Python to complement SQL, Excel, Tableau and Power BI in data querying, manipulation and visualization and I'm constantly upskilling and practicing these skills.
                    Feel free to connect with me!
                </h4>
            </div>
            <div className={classes.langs}>
                <h6>
                    I am fluent in Chinese(中文), beginner in French.

                    I love languages  , I love to travel , workout , and meet new people
                </h6>
            </div>
        </section><Contact /></>
    )
}

export default About