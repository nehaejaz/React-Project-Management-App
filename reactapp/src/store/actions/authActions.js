export const signIn=(credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        //make Aysn call to db
        const firebase=getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        )
        .then(()=>{
            dispatch({type:'Login_Success'})
        })
        .catch((err)=>{
            dispatch({type:'Login_Error',err})
        });
    }

} 

export const singOut = () => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = firebase()

        firebase.auth().signOut()
        .then(()=>{
            dispatch({type:'SignOut_Success'})
        })
    }
}