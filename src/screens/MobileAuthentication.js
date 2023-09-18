// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
// import React, { useEffect, useRef, useState } from 'react'
// import { useNavigation } from '@react-navigation/native'
// import Header from "../components/Header/index"
// import BackBtn from '../assets/assets/icon-button.svg'
// import CustomButtom from '../components/Button'

// import InputField from '../components/InputFiels'
// import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
// import MyStatusBar from '../components/Statusbar'
// import axios from 'axios'
// import { setPhoneNumber as phone } from './Redux/Reducer/phoneSlice'
// import { useDispatch } from 'react-redux'
// import { Spinner } from '../components/Spinner'
// // import CountryPicker from 'react-native-country-picker-modal';
// import auth from '@react-native-firebase/auth';
// import { Button } from 'react-native-paper'
// import CountryPicker from 'react-native-country-picker-modal';
// const MobileAuthentication = ({route}) => {
//   const navigation = useNavigation();
//   let textInput = useRef(null)
//   const [phoneNumber, setPhoneNumber] = useState();
//   const [focusInput, SetFocusInput] = useState(true)
//   const [loading , setLoading] = useState(false)
//   const {role} = route.params
//   const [countryCode, setCountryCode] = useState(''); // To store the selected country code
//   const [countryModalVisible, setCountryModalVisible] = useState(false);
//   const [phoneNumberError, setPhoneNumberError] = useState('');
//   const [confirm, setConfirm] = useState(null);
//   const [code, setCode] = useState('');
//   const [next , setNext] = useState(false)

//   // Function to handle country selection from the country picker modal
//   const handleCountrySelect = (country) => {
//     setCountryCode(country.cca2);
//     setCountryModalVisible(false);

//     // Automatically update the phoneNumber state with the country code
//     if (country.callingCode && country.callingCode.length > 0) {
//       const code = country.callingCode[0];
//       setPhoneNumber(`+${code}`);
//     }
//   };
//   const phoneFormatsByCountry = {
//     PK: /^(\+92|92)?(0?3[0-9]{2})([0-9]{7})$/,
//     IN: /^(\+91|91)?[789]\d{9}$/,
//     // Add more country formats as needed
//     // For example, US: /^\+?1?(\d{3})(\d{3})(\d{4})$/
//   };
//   const dispatch = useDispatch()
//   const onChangeFocus = ()=>{
//     SetFocusInput(true)
//   }
//   const handleChange = (number)=>{
//    setPhoneNumber(number)
//    setPhoneNumberError('');
//   }
//   console.log(countryCode)

//   const handlePress= ()=>{
//     navigation.goBack();
//   }
//  const onPress = async ()=>{
//   const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//     console.log(confirmation)
//   const phoneFormatRegex = phoneFormatsByCountry[countryCode];
//     if (!phoneFormatRegex.test(phoneNumber)) {
//       setPhoneNumberError('Invalid phone number');
//       return;
//     }
//     setNext(true)

//     setLoading(true);
//   const data = await axios.post("https://customdemowebsites.com/dbapi/auth/add",{
//     phone_no: phoneNumber
//   }).then((response)=>{
    
//     dispatch(phone(phoneNumber))
//     setLoading(false)
//     navigation.navigate('OTPVerify', {
//       confirm: confirm, // Pass the confirm object to the OTPVerify screen
//       role: role, // Pass the role
//     });
//   }).catch(err => console.log(err))
//  }


// console.log(confirm)
//   return (
//     <>
//     {loading? <Spinner/>
//     :
//     <KeyboardAvoidingView style={{ flex:1 }} behavior='padding'>
      
//     <View style={styles.container}>
//     {/* {!loading && <ActivityIndicator/>} */}
//         <View>
//         <MyStatusBar barStyle="dark-content" backgroundColor="#fff"/>
//           <Header
//           image={<BackBtn/>}
//           handlePress={handlePress}
//           />
//         <Text style={styles.h1}>Enter your mobile no.</Text>
//         <TouchableOpacity
//           style={styles.countryPicker}
//           onPress={() => setCountryModalVisible(true)}
//         >
//           <CountryPicker
//             visible={countryModalVisible}
//             withFilter
//             withFlag
//             withCountryNameButton
//             onSelect={handleCountrySelect}
//             onClose={() => setCountryModalVisible(false)}
//           />
//           <Text style={styles.countryCodeText}>{countryCode}</Text>
//           <Image
//               source={{ uri: `https://flagpedia.net/data/flags/h80/${countryCode.toLowerCase()}.png` }}
//               style={styles.flag}
//               resizeMode="contain"
//             />
//         </TouchableOpacity>
//         {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
//         {/* <InputField
//           style={styles.input}
//           onFocus={onChangeFocus}
//           handleChange={handleChange}
//           value={phoneNumber}
//           placeholder="99001 99001"
//           keyboardType="numeric"
//         /> */}
//         <InputField
//         onFocus={onChangeFocus}
//         handleChange={handleChange}
//         value={phoneNumber}
//         placeholder="99001 99001"
//         keyboardType="numeric"
//         />
//         </View>
//         <CustomButtom
//         title="Get Started"
//         onPress={onPress}
//         />
//           </View>
//           <View>
//           </View>
//           </KeyboardAvoidingView>
// }
//           </>
//  )
// }

// export default MobileAuthentication

// const styles = StyleSheet.create({
//    container:{
//     paddingTop:responsiveScreenHeight(7),
//     paddingBottom: 40,
//     paddingHorizontal: 20,
//     backgroundColor : "#fff",
//     flex: 1,
//     justifyContent: "space-between"
//    },
  
//    input: {
//     fontFamily: "Raleway",
//     width: 1000,
//     height: 64,
//     fontSize: 26,
//     marginVertical: 10,
// }, 
//    h1:{
//     fontFamily: "Raleway-Medium",
//     marginTop: 24,
//     color: "#172331",
//    fontSize: 20,
//    fontWeight: 500,
//    marginBottom: 20
//    },
  
//    button:{
//     backgroundColor: "#4464D9",
//     width: '100%',
//     height: 48,
//    color: "#fff",
//    borderRadius : 10,
//    display: 'flex',
//    alignItems: "center",
//    justifyContent:"center",
//    marginBottom: 10
//    },
//    colorWhite:{
//     fontFamily: "PlusJakartaSans",
//    color : "#fff",
//    textAlign: "center",
//    fontWeight: 600,
//    },
//    countryPicker: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   flag: {
//     width: 30,
//     height: 20,
//     marginLeft: 10,
//   },
// })




import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, ScrollView } from 'react-native'
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
import PhoneNumber from 'react-native-phone-number-input'
import OTPScreen from './OTPVerify'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import Toast from 'react-native-toast-message';
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
  const [otpInput,setOtpInput] = useState('')
  const [error, setError] =useState(false)

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
  // try{
  // const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //   setConfirm(confirmation);
  //   console.log(confirmation.uid)
  //   console.log("working")
  // }catch(err){
  //   console.log(err)
  // }
  // const phoneFormatRegex = phoneFormatsByCountry[countryCode];
  //   if (!phoneFormatRegex.test(phoneNumber)) {
  //     setPhoneNumberError('Invalid phone number');
  //     return;
  //   }

    setLoading(true);
    setNext(true)
  const data = await axios.post("https://customdemowebsites.com/dbapi/auth/add",{
    phone_no: phoneNumber
  }).then((response)=>{
    console.log(response.data)
    dispatch(phone(phoneNumber))
    setLoading(false)
    // navigation.navigate('OTPVerify', {
    //   confirm: confirm, // Pass the confirm object to the OTPVerify screen
    //   role: role, // Pass the role
    // });
  }).catch((err)=>{
    setLoading(false);
    setNext(false); // Reset 'next' to false to stay on the phone number input screen

    // Show toast notification to the user
    // Toast.show({
    //   type: 'error',
    //   text1: 'Error',
    //   text2: 'There was an error while processing your request. Please try again later.',
    //   position: 'bottom',
    //   visibilityTime: 4000, // Duration of the toast message in milliseconds
    // });
  })
 }
const submitOTP = async(otp)=>{
  // try{
  //   const response = await confirm.confirm(otp);
  //   console.log(response)
  //   Alert.alert("sign In")
  //   if(response){
       if (role === "Customer") {
      navigation.navigate('CreateAccount', { role });
    } else {
      navigation.navigate('DoctorAccount', { role });
    }
    
    // }
      
  // }catch(err){
  //   Alert.alert("invalid OTP")
  //   setError(true)
    
  //   console.log(err)
  //   setLoading(false);
  //   setNext(false); 
  //   return// Reset 'next' to false to stay on the phone number input screen

  //   // Show toast notification to the user
  //   // Toast.show({
  //   //   type: 'error',
  //   //   text1: 'Error',
  //   //   text2: 'There was an error while processing your request. Please try again later.',
  //   //   position: 'bottom',
  //   //   visibilityTime: 4000, // Duration of the toast message in milliseconds
  //   // });
  // }
  
}
const handleResendOTP = async () => {
  try {

    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
    console.log('OTP Resent Successfully.');
    // You can add additional handling here if needed, like showing a success message.
  } catch (err) {
    console.log('Error sending OTP:', err);
    Alert.alert('An error occurred while resending OTP. Please try again later.');
  }
};

console.log(phoneNumber)
if(next === true){
  return <OTPScreen role={role} handleResendOTP={handleResendOTP} submitOTP={submitOTP} error={error} phone={phone}/>
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
        
        {phoneNumberError ? <Text style={styles.errorText}>{phoneNumberError}</Text> : null}
       
        {/* <InputField
          style={styles.input}
          onFocus={onChangeFocus}
          handleChange={handleChange}
          value={phoneNumber}
          placeholder="99001 99001"
          keyboardType="numeric"
        /> */}
        <View>
        {/* <TouchableOpacity
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
        </TouchableOpacity> */}
        <PhoneNumber
        defaultValue={phoneNumber}
        value={phoneNumber}
        containerStyle={styles.inputFiedls}
        placeholder='99100 99100'
        defaultCode='PK'
        layout='first'
        autoFocus
        textContainerStyle={{paddingVertical:0, backgroundColor:"#fff", fontFamily: 'Raleway-Medium',}}
        onChangeFormattedText={text=>{
          setPhoneNumber(text)
          setPhoneNumberError('');
          
        }}
        />

<ScrollView>
                    <GooglePlacesAutocomplete
                        placeholder='Search destination'
                        minLength={2}
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: "AIzaSyB4kdLXqVay4JN-vuRNkLU_8Cu5D0saFMY",
                            language: 'en',
                        }}


                    />
                </ScrollView>
       
        {/* <TextInput placeholder='OTP'
        onChangeText={value => setOtpInput(value)}
        />
        <Button title="submit" onPress={submitOTP}/> */}
        
         {/* <InputField
        onFocus={onChangeFocus}
        handleChange={handleChange}
        value={phoneNumber}
        placeholder="99001 99001"
        keyboardType="numeric"
        /> */}
        </View>
       
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
  inputFiedls: {
    width: "100%",
    fontFamily: 'Raleway-Medium',
    backgroundColor: '#fff',
    borderColor: '#EBEBEB',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: responsiveScreenHeight(1.5),
    borderRadius: 8,
    height: responsiveScreenHeight(6.5),
    color: '#172331',
    justifyContent: 'center',
  },
})