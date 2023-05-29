import React, { useEffect, useState } from 'react'
import Socials from './Socials'
import { getHomeData } from '../services/dataFetching'
import '../styles/components/home.scss'
import cv from '/Ruben_BM_CV.pdf'

export default function Home() {
  
  const [homeData, setHomeData] = useState()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const query = await getHomeData()
    setHomeData(query)
    
  }


  function downloadCV() {
    window.open(cv, '_blank')
  }

  return (
    
    <div className='home'>
      {
        homeData && (
          <div className='home_content'>
            <Socials className='home_socials' github={homeData.githubLink} linkedin={homeData.linkedinLink}/>
            <div className='home_info'>
              <div className='home_info_text'>
                <h1>{homeData.name}</h1>
                <h2>{homeData.description}</h2>
              </div>
              <button onClick={downloadCV}>Descargar CV</button>
            </div>
            <img className='home_image' src='https://avatars.githubusercontent.com/u/67047753?v=4' alt='ad'/> 
   
          </div>
        )
      }
        
    </div>
  )
}
