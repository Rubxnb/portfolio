import React, { useEffect, useState } from 'react'
import { getProjectsData } from '../services/dataFetching'
import ProjectCard from './ProjectCard'
import '../styles/components/projects.scss'

export default function Projects() {

    const [ProjectsData, setProjectsData] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const query = await getProjectsData()
        setProjectsData(query)
    }

    const projectsCardConstructor = () => {
        return ( 
            <div className='projects-cards'>
                {ProjectsData.map((project) => {
                    return (<ProjectCard key={project.name} project={project}/>)})}
            </div>
        )
    }

    return (
        <div id='Proyectos' className='projects'>
            <p style={{margin:'0', color:'#333333'}}>proyect</p>
            <h1 className='projects-title'>Proyectos</h1>
            { ProjectsData && projectsCardConstructor() }
        </div>
    )
}
