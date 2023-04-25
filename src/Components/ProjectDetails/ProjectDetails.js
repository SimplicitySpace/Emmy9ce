import { useParams } from 'react-router-dom'
import ProjectsList from '../Projects/ProjectsList'
import classes from './ProjectDetails.module.css'
const ProjectDetails = () => {
    const { id } = useParams()

    const allProject = ProjectsList.find(project => project.id === parseInt(id))

    const project = allProject.projects


    return (
        <div className={classes.project}>
            {project.map(item => {
                return (
                    <div className={classes.projectBlock}>
                        <div>
                            <a href={item.link}>
                                <img src={item.img} />

                            </a>
                        </div>

                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <div className={classes.btnBox}>
                            <a href={item.link}>
                                <button>View Project </button>
                            </a>
                        </div>

                    </div>
                )
            })}

        </div>
    )
}

export default ProjectDetails