import React from 'react'
import {StyleSheet,Text} from 'react-native'
import {Container,Spinner} from 'native-base'

const EmptyContainer=()=>{
    return (
        <Container style={styles.emptycont}>
            <Spinner/>
        </Container>
    )
}

export default EmptyContainer

const styles = StyleSheet.create({
    emptycont:{
        backgroundColor:"#1b262c",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})