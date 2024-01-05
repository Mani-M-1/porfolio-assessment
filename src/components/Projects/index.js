import { useState } from 'react';
import './index.css';
import { useNavigate } from 'react-router-dom';


const projectsList = [
    {
        id: '1',
        title: 'Project Name',
        description: "I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.",
        imgUrl: '/yoga_png.png'
    },
    {
        id: '2',
        title: 'Project Name',
        description: "What was your role, your deliverables, if the project was personal, freelancing.",
        imgUrl: '/marker_png.png'
    },
    {
        id: '3', 
        title: 'Project Name',
        description: "You can also add in this description the type of the project, if it was for web, mobile, electron.",
        imgUrl: '/smartphone_png.png'
    }
]

const Projects = () => {

    const navigate = useNavigate();

    const [form, setForm] = useState({title: '', description: '', imgUrl: ''})



    const ProjectItem = (props) => {
        const {project, index} = props;
        const {title, description, imgUrl} = project;

        const shiftOrderOfElements = index % 2 === 0 ? "even-order-styles" : "odd-order-styles"
        

        return (
            <li className='projects-list-section__project-item'>
                <div className='projects-list-section__project-item-details-card'>
                    <h1 className='projects-list-section__project-item-title'>{title}</h1>
                    <p className='projects-list-section__project-item-description'>{description}</p>

                    <button type='button' className='projects-list-section__project-item-view-project-btn' onClick={() => navigate(imgUrl)}>
                        View Project
                    </button>
                </div>

                <img className={`${shiftOrderOfElements} projects-list-section__project-item-img`} src={imgUrl} alt="project img"/>
            </li>
        )
    }


    const handleOnclickSubmitBtn = (event) => {
        event.preventDefault();

        console.log(form)

        const {title, description, imgUrl} = form;

        if (title.length > 0 && description.length > 0 && imgUrl.length > 0) {
            const projectId = (projectsList.length + 1).toString()
            projectsList.push({id: projectId, title, description, imgUrl})

            setForm({title: '', description: '', imgUrl: ''})
        }
        
    }


    const handleOnchangeInput = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    
    
    
    
    return (
        <div id="projects" className='projects-section'>
            {/* add projects section  */}
            <div className='add-projects-section'>
                <h1 className='add-projects-section__heading'>
                    Add Project 
                    <hr className='add-projects-section__active-tab-styles'/>
                </h1>

                <form className='add-projects-section__form' onSubmit={handleOnclickSubmitBtn}>
                    <label htmlFor="projectName"  className='add-projects-section__labels'>
                        Project Name 
                    </label>
                    <input id='projectName' type='text'  className='add-projects-section__inputs' name='title' value={form.title} onChange={handleOnchangeInput} />
                    
                    <label htmlFor="projectLink" className='add-projects-section__labels'>
                        Project Link 
                    </label>
                    <input id='projectLink' type='text'  className='add-projects-section__inputs' name='imgUrl' value={form.imgUrl} onChange={handleOnchangeInput} />
                    
                    <label htmlFor="projectDescription" className='add-projects-section__labels'>
                        Description 
                    </label>
                    <textarea id='projectDescription'  className='add-projects-section__inputs'  rows={10} name='description' value={form.description}  onChange={handleOnchangeInput} />


                    <button type='submit' className='add-projects-section__add-project-btn'>
                        Add
                    </button>
                </form>

                <div className='add-projects-section__image-wrapper'>
                    <img className='add-projects-section__image' src="/Vector.png" alt="add projects section img" />
                </div>
            </div>

            {/* projects list section  */}
            <div className='projects-list-section'>
                <h1 className='projects-list-section__heading'>
                    Projects 
                    <hr className='projects-list-section__active-tab-styles'/>
                </h1>

                <ul className='projects-list-section__project-items-wrapper'>
                    {projectsList.map((project, index) => <ProjectItem key={project.id} project={project} index={index} />)}
                </ul>
            </div>
        </div>
    )
}

export default Projects;