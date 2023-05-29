import React, { useEffect, useState } from 'react'
import { getAboutData } from '../services/dataFetching'
import { Icon } from '@iconify/react'
import '../styles/components/about.scss'
import JobsCard from './JobsCard'

export default function About() {

    const [aboutData, setAboutData] = useState()

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const query = await getAboutData()
        console.log(query.studies)
        setAboutData(query)
      }

    return (
        <div id='SobreMi' className='about'>
            <div>
                <p style={{margin:'0', color:'#333333'}}>aboutme</p>
                <h1 className='about-title'>Sobre mí</h1>
                {
                    aboutData && 
                    <div className='about-content'>
                        <div className='about-content-description'>
                            <h3>¡Hola!🖐 Soy Rubén</h3>
                            <div className='about-content-description-text'>

                                <p>{aboutData.description}</p>

                                <div className='about-content-description-text-icons'>
                                    <Icon className='about-content-description-text-icons-icon' icon='bi:display'/>
                                    <Icon className='about-content-description-text-icons-icon' icon='ic:outline-smartphone'/>
                                    <Icon className='about-content-description-text-icons-icon' icon='material-symbols:web'/>

                                </div>

                            </div>
                            
                            <h3 style={{marginTop:'30px'}}>Habilidades y características</h3>
                            <ul className='about-content-description-skills'>
                                {aboutData.skills.map((item, _) =>(
                                    <li key={_} className='about-content-description-skills-skill'>
                                        <Icon className='about-content-description-skills-skill-icon' icon={item.icon} />
                                        <p>{item.skill}</p>
                                    </li>
                                ))}
                            </ul>

                        </div>
                        <div className='about-content-technologies'>
                            <h3>Estudios</h3>
                            <ul className='about-content-technologies-studies'>
                                {aboutData.studies.map((item, _) =>(
                                    <li key={_} className='about-content-technologies-studies-study'>
                                        <Icon className='about-content-technologies-studies-study-icon' icon={item.icon} />
                                        <p>{item.study}</p>
                                    </li>
                                ))}
                            </ul>
                            <h3>Tecnologías</h3>
                            <div className='about-content-technologies-languages'> 
                                {
                                    aboutData.languages.map((item, _) => (
                                        <Icon className='about-content-technologies-languages-icon' key={_} icon={item}/>
                                    ))     
                                }
                            </div>
                        </div>
                        <div className='about-content-work'>
                            <h3>Laboral</h3>
                            {
                                aboutData.jobs.map(
                                    (job, _) => <JobsCard key={_} job={job}/>)
                            }
                        </div>

                    </div>
                }
            </div>

            
        
            <div className="about-footer">
                <h1 style={{padding: '0', margin:'0'}}>Rubxn</h1>
                <ul className='about-footer-contacts'>
                    {aboutData &&
                    aboutData.footer.map((item, _) => {
                        if(item.contact.includes('@'))
                            return <li className='about-footer-contacts-contact' key= {_}>
                                        
                                        <Icon className='about-footer-contacts-contact-icon' icon={item.icon} ></Icon>
                                        <p>{item.contact}</p>

                                    </li>
                        else
                            return <li className='about-footer-contacts-contact' key= {_} >
                                        <a className='about-footer-contacts-contact-content'
                                        href={item.contact} 
                                        title={item.contact}  
                                        target='_blank'
                                        >
                                            <Icon className='about-footer-contacts-contact-icon' icon={item.icon} />
                                        </a>
                                    </li>

                    }) 
                    }
                </ul>
               
            </div>

        </div>
    )
}
