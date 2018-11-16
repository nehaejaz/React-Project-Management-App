const initState={
    projects:[
    {id:1, title: "Learn React", content: "Please try to complete this project as soon as possible"},
    {id:2, title: "Learn Git", content: "Please try to complete this project as soon as possible"},
    {id:3, title: "Learn Materliaze Css", content: "Please try to complete this project as soon as possible"}

    ]

}
const projectReducer=(state=initState,action)=>{
    switch(action.type){
        case 'Create_Project':
        console.log('created project',action.project)
        return state;

        case "Create_Project_Error":
        console.log("Error creating project",action.err)
        return state;

        default:
        return state;
    }

}

export default projectReducer