import {
    getFirestore
} from "redux-firestore";

export const signIn = (credentials) => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        //make Aysn call to db
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
                credentials.email,
                credentials.password
            )
            .then(() => {
                dispatch({
                    type: 'Login_Success'
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'Login_Error',
                    err
                })
            });
    }

}

export const signOut = () => {
    return (dispatch, getState, {
        getFirebase
    }) => {
        const firebase = getFirebase()

        firebase.auth().signOut()
            .then(() => {
                dispatch({
                    type: 'SignOut_Success'
                })
            })
    }
}

export const signUp = (newUser) => {
    return (dispatch, getState, {
        getFirebase,
        getFirestore
    }) => {
        const firebase = getFirebase()
        const firestore = getFirestore()

            firebase.auth().createUserWithEmailAndPassword(
                newUser.email,
                newUser.password
            )
            .then((resp) => {
                return firestore.collection('users').doc(resp.user.uid).set({
                    firstName: newUser.firstName,
                    lastName: newUser.lastName,
                    initials: newUser.firstName[0] + newUser.lastName[0]
                })
            }).then(() => {
                dispatch({
                    type: 'Signup_Success'
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'Signup_Failed',
                    err
                })
            })

    }
}