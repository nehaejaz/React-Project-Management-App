export const createProject =(project)=>{
    return(dispatch,getState,{getFirebase, getFirestore})=>{
        //make aysync call to db
        const firestore=getFirestore();
        const profile= getState().firebase.profile;
        const authID = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project,
            authorFirstName:profile.firstName,
            authorLastName: profile.lastName,
            authorID: authID,
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