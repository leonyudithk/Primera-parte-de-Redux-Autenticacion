import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { google } from "../../Firebase/firebaseConfig"
import { typesLogin } from "../types/types"


//---------------------------//
export const loginGoogle = ()=>{
    return (dispatch)=>{
        const auth = getAuth()
        signInWithPopup(auth, google)
       .then(({user})=>{
          //  dispatch(loginSincronico(user.email, user.password))
            console.log(user, 'Usuario autorizado')
    })
        .catch(error=>{
            console.warn(error, 'No autorizado')
        })
    }
}



//validar usuario y Contrase;a
export const loginEmailPassAsync = (email, password)=>{
   
        return(dispatch)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
        .then(({user})=>{
                dispatch(loginSincronico(user.email, user.password))
                console.log('Usuario autorizado')
        })

        .catch(error=>{
            console.warn(error, 'No autorizado')
        })

        }
}

export const loginSincronico = (email, password)=>{
    return{
        type: typesLogin.login,
        payload:{
            email, password
        } 
    }
}