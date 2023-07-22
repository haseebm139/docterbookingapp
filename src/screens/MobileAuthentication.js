import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header from "../components/Header/index"
import BackBtn from '../assets/assets/icon-button.svg'
import CustomButtom from '../components/Button'

import InputField from '../components/InputFiels'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import MyStatusBar from '../components/Statusbar'
import axios from 'axios'
import { setPhoneNumber as phone } from './Redux/Reducer/phoneSlice'
import { useDispatch } from 'react-redux'
import { ActivityIndicator } from 'react-native-paper'
import { Spinner } from '../components/Spinner'
const MobileAuthentication = ({route}) => {
  const navigation = useNavigation();
  let textInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, SetFocusInput] = useState(true)
  const [loading , setLoading] = useState(false)
  const {role} = route.params
  const dispatch = useDispatch()
  const onChangeFocus = ()=>{
    SetFocusInput(true)
  }
  const handleChange = (number)=>{
   setPhoneNumber(number)
  }

  const handlePress= ()=>{
    navigation.goBack();
  }
 const onPress = async ()=>{
  setLoading(true)
  const data = await axios.post("https://customdemowebsites.com/dbapi/auth/add",{
    phone_no: phoneNumber
  }).then((response)=>{
    
    dispatch(phone(phoneNumber))
    setLoading(false)
    navigation.navigate("OTPVerify", {role})
  }).catch(err => console.log(err))

  // if(!loading) return <Text>Loading</Text>
 }
  return (
    <>
    {loading? <Spinner/>
    :
    <KeyboardAvoidingView style={{ flex:1 }} behavior='padding'>
      
    <View style={styles.container}>
    {/* {!loading && <ActivityIndicator/>} */}
        <View>
        <MyStatusBar barStyle="dark-content" backgroundColor="#fff"/>
          <Header
          image={<BackBtn/>}
          handlePress={handlePress}
          />
        <Text style={styles.h1}>Enter your mobile no.</Text>
        <InputField
        onFocus={onChangeFocus}
        handleChange={handleChange}
        value={phoneNumber}
        placeholder="99001 99001"
        keyboardType="numeric"
        />
        </View>
        <CustomButtom
        title="Get Started"
        onPress={onPress}
        />
          </View>
          </KeyboardAvoidingView>
}
          </>
 )
}

export default MobileAuthentication

const styles = StyleSheet.create({
   container:{
    paddingTop:responsiveScreenHeight(7),
    paddingBottom: 40,
    paddingHorizontal: 20,
    backgroundColor : "#fff",
    flex: 1,
    justifyContent: "space-between"
   },
  
   input: {
    fontFamily: "Raleway",
    width: 1000,
    height: 64,
    fontSize: 26,
    marginVertical: 10,
}, 
   h1:{
    fontFamily: "Raleway-Medium",
    marginTop: 24,
    color: "#172331",
   fontSize: 20,
   fontWeight: 500,
   marginBottom: 20
   },
  
   button:{
    backgroundColor: "#4464D9",
    width: '100%',
    height: 48,
   color: "#fff",
   borderRadius : 10,
   display: 'flex',
   alignItems: "center",
   justifyContent:"center",
   marginBottom: 10
   },
   colorWhite:{
    fontFamily: "PlusJakartaSans",
   color : "#fff",
   textAlign: "center",
   fontWeight: 600,
   }
})