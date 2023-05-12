import { Icon } from '@iconify/react'
import React from 'react'
import '../styles/components/socials.scss'

export default function Socials({ github, linkedin }) {
  return (
    <div className='socials'>
        <a 
        href={github} 
        title='Github' 
        target='_blank'
        >
            <Icon icon="uil:github" />
        </a>
        <a 
        href={linkedin} 
        title='LinkedIn' 
        target='_blank'
        >
            <Icon icon="uil:linkedin" />
        </a>
    </div>
  )
}
