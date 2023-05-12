import React from 'react'
import '../styles/components/jobsCard.scss'
import { Icon } from '@iconify/react'

export default function JobsCard({job}) {
  return (
    <div className='job'>
        <img className='job-logo' src={job.logo} />
        <div className='job-info'>
            <div className='job-info-title'>
                <h4 className='job-info-title-name'>{job.name}</h4>
                <p className='job-info-title-period'>{job.period}</p>
            </div>
            <h5 className='job-info-job'>{job.job}</h5>
            <div className='job-info-tech'>
                {
                    job.technologies.map((tech, _) => {
                        if(tech.includes(':'))
                            return <Icon className='job-info-tech-icon' key={_} icon={tech}/>
                        else
                            return <img className='job-info-tech-img' key={_} src={tech}/>
                    })
                }
            </div>
        </div>
    </div>
  )
}
