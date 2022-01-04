import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import Snackbar from 'react-native-snackbar'

export const signUp =(data)=> async(dispatch)=>{
    console.log(data);
    const {name,userName,email,password,country,image}=data;

    auth().createUserWithEmailAndPassword(email,password)
    .then((data)=>{
        console.log("Data --"+data.user)
        console.log("User Created.")

        database().ref('/users/'+data.user.uid)
        .set({
            name,
            userName,
            country,
            image,
            uid:data.user.uid
        })
        .then(()=>console.log("Data Set success"))
        Snackbar.show({
            text:"Account created.",
            textColor:"white",
            backgroundColor:"#1b262c"
        })
    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:"Signup failed",
            textColor:"white",
            backgroundColor:"red"
        })
    })
}


export const signIn =(data)=> async(dispatch)=>{
    console.log(data);
    const {email,password}=data;

    auth().signInWithEmailAndPassword(email,password)
    .then(()=>{
        console.log("signin success")
        Snackbar.show({
            text:"Account signed in",
            textColor:"white",
            backgroundColor:"#1b262c"
        })

    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:"Signin failed",
            textColor:"white",
            backgroundColor:"red"
        })
    })
}

export const signOut =()=> async (dispatch)=>{
    auth().signOut()
    .then(()=>{
        Snackbar.show({
            text:"signed out",
            textColor:"white",
            backgroundColor:"#1b262c"
        })

    })
    .catch((error)=>{
        console.error(error);
        Snackbar.show({
            text:"SignOut failed",
            textColor:"white",
            backgroundColor:"red"
        })
    })
}