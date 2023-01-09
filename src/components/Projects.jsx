import React, { useEffect, useState } from 'react'
import "./Projects.css"
import ProjectList from './ProjectList'
import Spinner from "../spinner/Spinner"
import { useProjectContext } from "../hooks/useProjectContext"

const Projects = () => {
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const { projects, dispatch } = useProjectContext()


  useEffect(() => {
    const fetchProjects = async () => {
      setIsPending(true)
      setError(null)
      try {
        const response = await fetch("http://localhost:5000/api/projects")
        if (!response.ok) {
          throw new Error("Could not fetch the data..")
        }
        const json = await response.json(response)
        setError(null)
        setIsPending(false)

        // set local storage
        // localStorage.setItem("projects", JSON.stringify(json))
        dispatch({
          type: "GET_PROJECTS",
          payload: json
        })
        console.log("Projects Data", json)
      } catch (error) {
        console.log(error.message)
        setError(error.message)
        setIsPending(false)
      }
    }
    fetchProjects()
  }, [dispatch]);

  return (
    <section className='project-section'>
      <div className='project-heading'>
        <h1>My Projects</h1>
        <div className='project-underline' />
      </div>
      {!isPending && projects && projects.length === 0 && <div className='error'>No projects in your List to load...</div>}
      {error && <div className='error'>{error}</div>}
      {isPending && <div className='spinner'><Spinner /></div>}
      <div className='project-container'>
        {projects && projects.map((projectsData) => <ProjectList key={projectsData._id} projectsData={projectsData} />)}
      </div>
    </section>
  )
}

export default Projects