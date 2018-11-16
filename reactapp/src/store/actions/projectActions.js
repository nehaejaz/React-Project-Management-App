export const createProject =(project)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        //make aysync call to db
        const firestore=getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName:'Neha',
            authorLastName: 'Ejaz',
            authorID: 12345,
            createdAt: new Date()
        })
        .then(()=>{
            dispatch({type:"Create_Project", project:project})
        })
        .catch((err)=>{
            dispatch({type:"Create_Project_Error", err})
        })
       
    }

}