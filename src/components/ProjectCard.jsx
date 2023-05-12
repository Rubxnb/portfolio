import { Icon } from '@iconify/react'
import React from 'react'

import '../styles/components/projectCard.scss'

export default function ({project}) {
  return (
    <div className='project'>
        <h2 className='project-title'>{project.name}</h2>
        <img className='project-img' src={project.projectImage}/>
        <div className='project-links'>
            <a className='project-link' 
            href={project.githubLink} 
            title='Github' 
            target='_blank'
            >
                <Icon icon='uil:github'/>
            </a>
            
            {
                project.deployLink !== '' && 
                    <a className='project-link' 
                    href={project.deployLink} 
                    title='Deploy' 
                    target='_blank'
                    >
                        <Icon icon='ic:baseline-web'/>
                    </a>
            }

        </div>
        <p className='project-description'>{project.description}</p>
        <div className='project-technologies'>
            {
                project.technologies.map(tech => <Icon className='project-technologies-icon' key={tech} icon={tech}/>)
            }
            
        </div>
        
        
    </div>
  )
}
