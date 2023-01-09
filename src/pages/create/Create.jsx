import React, { useState } from 'react'
import "./Create.css"
import { useProjectContext } from '../../hooks/useProjectContext'
import { useNavigate } from 'react-router-dom'
import FileBase from "react-file-base64"

const Create = () => {
  const Navigate=useNavigate()
  const {dispatch}=useProjectContext()
  const [title, setTitle] = useState("")
  const [newTech, setNewTech] = useState("")
  const [techUsed, setTechUsed] = useState([])
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [projectImage, setProjectImage] = useState(null)
  const [projectUrl,setProjectUrl]=useState("")
  const [error,setError]=useState(null)


const resetForm=()=>{
  setTitle("")
  setCategory("")
  setDescription("")
  setProjectUrl("")
  setProjectImage(null)
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!title || !category ||!description||!projectUrl||!projectImage){
      setError("All field must be filled...")
      return 
    }
    const Projects={
      title,
      technology:techUsed,
      category,
      description,
      projectUrl,
      projectImage
    }
    try {
       const response=await fetch("http://localhost:5000/api/projects",{
        method:"post",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(Projects)
       })
       if(!response.ok){
        throw new Error("Something went wrong could'nt upload the projects...")
       }
       const json=await response.json()
       console.log("posted data",json)
       if(response.ok){
        dispatch({
          type:"SET_PROJECTS",
          payload:json
       })
     
       }
       resetForm()
       Navigate("/projects")
    } catch (error) {
       console.log(error.message)
    }
  
  }

  const addTechnology = (e) => {
    e.preventDefault()
    const tech = newTech.trim()
    if (tech && !techUsed.includes(tech)) {
      setTechUsed((prevTech) => {
        return [...prevTech, tech]
      })
    }
    setNewTech("")
  }

  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add Your Projects</h2>
        <label>
          <span>Project Title:</span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          <span>Technology:</span>
          <div className='tech-div'>
            <input
              type="text"
              value={newTech}
              onChange={(e) => setNewTech(e.target.value)}
            />
            <button onClick={addTechnology}>Add</button>
          </div>
        </label>
        <div className='technology-list'>
          <strong>Used:</strong>
          {techUsed && techUsed.map((tech)=><p key={tech}>{tech}</p>)}
        </div>
        <label>
          <span>Project Category:</span>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </label>
        <label>
          <span>Project Description:</span>
          <textarea
            rows={3}
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          <span>Hosted Url:</span>
          <input
            type="text"
            value={projectUrl}
            onChange={(e) => setProjectUrl(e.target.value)}
          />
        </label>
        <label>
          <span>Project Image:</span>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setProjectImage(base64)}
          />
        </label>
        <button>Post Project</button>
        {error && <div className='error'>{error}</div>}
      </form>
    </div>
  )
}

export default Create