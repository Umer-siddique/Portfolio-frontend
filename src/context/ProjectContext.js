import {createContext, useReducer,useEffect} from "react"

export const ProjectContext=createContext()

const projectReducer=(state,action)=>{
   switch(action.type){
    case "GET_PROJECTS":
        return {projects:action.payload}
    case "SET_PROJECTS":
        return {...state, projects:[action.payload,...state.projects]}    
    case "DELETE_PROJECT":
      return {...state, projects: state.projects.filter((project)=>project._id!==action.payload._id)}    
     default:
        return state;
   }
}


export const ProjectContextProvider=({children})=>{

    const [state,dispatch]=useReducer(projectReducer,{
        projects:[]
    })
    console.log("Projects Context",state)

    // useEffect(() => {
    //     const projects=JSON.parse(localStorage.getItem("projects"))
    //      dispatch({
    //         type:"GET_PROJECTS",
    //         payload:projects
    //      })
    // }, []);

     return (
        <ProjectContext.Provider value={{...state,dispatch}}>
            {children}
        </ProjectContext.Provider>
     )
}