import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, RadioButton } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from "@react-navigation/native";
import InputField from '../components/InputFiels';
import CustomButtom from '../components/Button';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import DoctorLogin from './Auth/DoctorLogin/MobileLogin';
import DoctorAccount from './Auth/DoctorLogin';

const AccountScreen = ({route}) => {
  const [avatar, setAvatar] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [selectedValue, setSelectedValue] = useState('option1');
  const {role} = route.params;
  const handleRadioChange = (value) => {
    setSelectedValue(value);
  };
  const navigation = useNavigation();

  const handleImageUpload = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
        
      }
    });
  };
  const [isLiked, setIsLiked] = useState([
    { id: 1, value: true, name: "Male", selected: false },
    { id: 2, value: false, name: "Female", selected: false },
    { id: 3, value: false, name: "Other", selected: false }
  ]);


  const handleCameraUpload = () => {
    launchCamera({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.errorCode) {
        setAvatar(response.uri);
      }
    });
  };

  const handlePress = ()=>{
    navigation.navigate("HomePage")
  }
  const onRadioBtnClick = (item) => {
    let updatedState = isLiked.map((isLikedItem) =>
      isLikedItem.id === item.id
        ? { ...isLikedItem, selected: true }
        : { ...isLikedItem, selected: false }
    );
    setIsLiked(updatedState);
  };
  return (
    <KeyboardAvoidingView style={{ flex:1 }} behavior='padding'>
    <View style={styles.container}>
      {role === "Customer" && 
      <>
      <View>
        <View>
            <Text style={styles.h1}>Create Account</Text>
            <Text style={{fontFamily: "Raleway-Medium",color: "#172331", fontSize: 16, marginBottom: 10}}>phone</Text>
            <Text style={{ fontFamily: "Raleway-ExtraBold",color: "#172331",marginBottom: 10 }}>+91 9540826565</Text>
        </View>
      <TouchableOpacity style={styles.avatarContainer} onPress={handleImageUpload}>
       
        <View onPress={handleCameraUpload}>
            <Avatar.Image size={72} source={avatar ? avatar : require("../assets/assets/avatar.png")}/>
            <Image style={{position: "absolute", bottom:2, right:0}} source={require("../assets/assets/cameraIcon.png")}/>
        </View>
      </TouchableOpacity>
     
      <View>
        <Text style={styles.inputLabel}>First Name</Text>
      <InputField
        placeholder="First Name"
        value={firstName}
        handleChange={text => setFirstName(text)}
        keyboardType="default"
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Last Name</Text>
      <InputField
        placeholder="Last Name"
        value={lastName}
        handleChange={text => setLastName(text)}
      />
      </View>
      <View>
        <Text style={styles.inputLabel}>Email</Text>
        <InputField
         placeholder="Email"
         value={email}
         handleChange={text => setEmail(text)}
         keyboardType="email-address"
        />
     
      </View>
      <View style={styles.genderContainer}>
        
        <Text style={styles.inputLabel}>Gender:</Text>
        {/* <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <View style={styles.radioContainer}>
          <RadioButton
            value="male"
            color={'#4464D9'}
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
          />
          <Text style={{color: gender==="male" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Male</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
          />
          <Text style={{color: gender==="female" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Female</Text>
        </View>
        <View style={styles.radioContainer}>
          <RadioButton
          color={'#4464D9'}
            value="other"
            status={gender === 'other' ? 'checked' : 'unchecked'}
            onPress={() => setGender('other')}
            style={{borderColor:"#000", borderWidth: 1}}
          />
          <Text style={{color: gender==="other" ? "#172331" : "#aaa", fontFamily:"Raleway-Bold" , fontSize: 14}}>Other</Text>
        </View>
       
        
        </View> */}
         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
  {isLiked.map((item, e) => (
     <View key={e} style={styles.radioButtonContainer}>
       <TouchableOpacity onPress={() => onRadioBtnClick(item)} style={styles.radioButton}>
       {item.selected ? <View style={styles.radioButtonIcon} /> : <View style={styles.radioButtonIcon2} />}
       </TouchableOpacity>
       <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
         <Text style={!item.selected? styles.radioButtonText : styles.radioButtonText2}>{item.name}</Text>
       </TouchableOpacity>
     </View>
  ))}
  </View>
        
      </View>
      </View>
      <CustomButtom
        title="Continue"
        onPress={handlePress}
        />
        </>
  }
  {role === "Doctor" && <DoctorAccount/>}
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    justifyContent:"space-between",
    paddingTop:responsiveScreenHeight(7),
    paddingBottom: 40
  },
  h1: {
    fontFamily: "Raleway-SemiBold",
    fontSize: 20,
    fontWeight: 500,
    marginBottom: 15,
    color: "#172331",
  },
  avatarContainer: {
    alignItems: 'flex-start',
    marginBottom: 20,
    marginTop: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 16,
    marginTop: 10,
  },
  cameraButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  cameraButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputLabel:{
   fontFamily: "Raleway-SemiBold",
   fontSize: 14,
   color: "#172331",
   marginBottom: 15

  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  genderContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  genderLabel: {
    marginRight: 10,
    fontSize: 16,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
   
  },
  radioLabel: {
    fontSize: 16,
    fontFamily: "Raleway-SemiBold",
    color:"#172331"
  },

  colorWhite: {
    fontFamily: "PlusJakartaSans-ExtraBold",
    color: "#fff",
    textAlign: "center",
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: responsiveScreenWidth(12)
  },
  radioButton: {
    height: 25,
    width: 25,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#4464D9",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon2:{
    height: 25,
    width: 25,
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 12,
    width: 12,
    borderRadius: 7,
    backgroundColor: "#4464D9"
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily : "Raleway-SemiBold",
    color: "#D9D9D9"
  },
  radioButtonText2: {
    fontSize: 16,
    marginLeft: 16,
    fontFamily : "Raleway-SemiBold",
    color:"#172331"
  }
});

export default AccountScreen;