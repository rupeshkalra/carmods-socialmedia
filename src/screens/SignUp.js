import React,{useState} from 'react'
import {StyleSheet, ScrollView, TouchableOpacity, View} from 'react-native'

import {
    Container,
    Form,
    Item,
    Input,
    Text,
    Button,
    Thumbnail,
    Content
} from 'native-base'
import storage from '@react-native-firebase/storage'
import ProgressBar from 'react-native-progress/Bar'

import ImagePicker from 'react-native-image-picker'
import {options} from '../utils/options'

//redux
import propTypes from 'prop-types'
import {signUp} from '../action/auth'
import {connect} from 'react-redux'

const SignUp=({signUp})=>{

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState(
        'https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png'
    )

    
    const [imageUploading, setImageUploading] = useState(false)
    const [uploadStatus, setUploadStatus] = useState(null)

    return (
        <>
        <Text>Sign up</Text>
        </>
    )
}

const mapDispatchToProps = {
    signUp: (data) => signUp(data)
}

SignUp.propTypes = {
    signUp: propTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(SignUp)
