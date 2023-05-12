import { doc, getDoc, getDocs, collection } from 'firebase/firestore'
import { db } from '../services/firebase'

export async function getHomeData() {
    const querySnapshot = await getDoc(doc(db, 'home', 'UMlRqIQkVei6VFpaXKU3'))
    const data = querySnapshot.data()

    return {
        description: data.description,
        githubLink: data.githubLink,
        linkedinLink: data.linkedinLink,
        name: data.name,
        profileImagen: data.profileImagen
    }
}

export async function getAboutData() {
    const querySnapshot = await getDoc(doc(db, 'about', 'MBDe5gqPZWIhWHPooLtJ'))
    const data = querySnapshot.data()
    
    return {
        description: data.description,
        languages: data.languages,
        studies: data.studies,
        jobs: data.jobs.reverse(),
        skills: data.skills
    }
}

export async function getProjectsData() {
    const querySnapshot = await getDocs(collection(db, 'projects'))
    const projects = []
    querySnapshot.forEach(d =>  projects.push(d.data()))

     const res = projects.map(project => {
        return {
            name: project.name,
            description: project.description,
            projectImage: project.projectImage,
            deployLink: project.deployLink,
            githubLink: project.githubLink,
            technologies: project.technologies
        }
    }) 

    return res
}