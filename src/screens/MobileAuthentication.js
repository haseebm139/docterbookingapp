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
import { Spinner } from '../components/Spinner'
import CountryPicker from 'react-native-country-picker-modal';
import auth from '@react-native-firebase/auth';
import { Button } from 'react-native-paper'
const MobileAuthentication = ({route}) => {
  const navigation = useNavigation();
  let textInput = useRef(null)
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, SetFocusInput] = useState(true)
  const [loading , setLoading] = useState(false)
  const {role} = route.params
  const [countryCode, setCountryCode] = useState(''); // To store the selected country code
  const [countryModalVisible, setCountryModalVisible] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');
  const [next , setNext] = useState(false)

  // Function to handle country selection from the country picker modal
  const handleCountrySelect = (country) => {
    setCountryCode(country.cca2);
    setCountryModalVisible(false);

    // Automatically update the phoneNumber state with the country code
    if (country.callingCode && country.callingCode.length > 0) {
      const code = country.callingCode[0];
      setPhoneNumber(`+${code}`);
    }
  };
  const phoneFormatsByCountry = {
    PK: /^(\+92|92)?(0?3[0-9]{2})([0-9]{7})$/,
    IN: /^(\+91|91)?[789]\d{9}$/,
    // Add more country formats as needed
    // For example, US: /^\+?1?(\d{3})(\d{3})(\d{4})$/
  };
  const dispatch = useDispatch()
  const onChangeFocus = ()=>{
    SetFocusInput(true)
  }
  const handleChange = (number)=>{
   setPhoneNumber(number)
   setPhoneNumberError('');
  }
  console.log(countryCode)

  const handlePress= ()=>{
    navigation.goBack();
  }
 const onPress = async ()=>{
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    console.log(confirmation)
  const phoneFormatRegex = phoneFormatsByCountry[countryCode];
    if (!phoneFormatRegex.test(phoneNumber)) {
      setPhoneNumberError('Invalid phone number');
      return;
    }
    setNext(true)

    setLoading(true);
  const data = await axios.post("https://customdemowebsites.com/dbapi/auth/add",{
    phone_no: phoneNumber
  }).then((response)=>{
    
    dispatch(phone(phoneNumber))
    setLoading(false)
    navigation.navigate('OTPVerify', {
      confirm: confirm, // Pass the confirm object to the OTPVerify screen
      role: role, // Pass the role
    });
  }).catch(err => console.log(err))
 }


console.log(confirm)
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
        <TouchableOpacity
          style={styles.countryPicker}
          onPress={() => setCountryModalVisible(true)}
        >
          <CountryPicker
            visible={countryModalVisible}
            withFilter
            withFlag
            withCountryNameButton
            onSelect={handleCountrySelect}
            onClose={() => setCountryModalVisible(false)}
          />
          <Text style={styles.countryCodeText}>{countryCode}</Text>
          <Image
              source={{ uri: `https://flagpedia.net/data/flags/h80/${countryCode.toLowerCase()}.png` }}
              style={styles.flag}
              resizeMode="contain"
            />
        </TouchableOpacity>
        {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
        {/* <InputField
          style={styles.input}
          onFocus={onChangeFocus}
          handleChange={handleChange}
          value={phoneNumber}
          placeholder="99001 99001"
          keyboardType="numeric"
        /> */}
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
          <View>
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
   },
   countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
  flag: {
    width: 30,
    height: 20,
    marginLeft: 10,
  },
})