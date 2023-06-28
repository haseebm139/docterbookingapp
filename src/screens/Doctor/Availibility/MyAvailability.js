import { StyleSheet, Text, View } from 'react-native'
import React,  { useState } from 'react'
import BackBtn from '../../../assets/assets/icon-button.svg'
import Calender from '../../../assets/assets/calendar_today.svg'
import Header from '../../../components/Header'
import { responsiveScreenHeight, responsiveScreenWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions'
import { Divider, TextInput } from 'react-native-paper';
import { CheckBox } from 'react-native-elements'
import CustomButtom from '../../../components/Button'
import MyStatusBar from '../../../components/Statusbar'
import { useNavigation } from '@react-navigation/native'

const MyAvailability = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    const handleCheck = ()=>{
      setToggleCheckBox(!toggleCheckBox)
    }
    const Navigation = useNavigation()

  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="transparent"/>
      <View style={{flexDirection:"row"}}>
      <Header
          image={<BackBtn/>}
          handlePress={()=> Navigation.goBack()}
          />
          <View style={ {textAlign:"center", alignSelf:"center", margin:"auto"}}>
          <Text style={styles.h1}>My Availability</Text>
          </View>
          </View>

          <View style={styles.my}>
            <Text style={styles.header}>Update your preferred working week days and time</Text>
          </View>
          <View style={styles.my4}>
          <TextInput
      mode="outlined"
      label="Week days"
      placeholder="This Week"
      theme={{ 
        roundness: 12,
        colors:{
          primary: "#D8D5D3",
          underlineColor: "#D9D5D3",
          background:"#fff"
        }
       }}
      right={<TextInput.Affix text="" />}
    />
    <Calender style={{position:"absolute", right: 10, top: 32}}/>
          </View>
          <View >
            <View style={{flexDirection:"row", alignItems:"center", gap:5, justifyContent:"flex-start"}}>
          <CheckBox
          checked={false}
          disabled
          iconType='material-community'
          checkedIcon="checkbox-outline"
          uncheckedIcon={'checkbox-blank-outline'}
          containerStyle={{ marginLeft: 0 , paddingLeft: 0}}  
         />
  <Text style={styles.chechboxLabel}>Sunday</Text>
  </View>
  <Text style={styles.unavalable}>Unavailable</Text>
          </View>
          <Divider style={{marginTop: 10}}/>
          <View >
            <View style={{flexDirection:"row", alignItems:"center", gap:5, marginLeft:0}}>
          <CheckBox
    checked={toggleCheckBox}
    onPress={handleCheck}
    checkedColor='#4464D9'
    iconType='material-community'
    uncheckedIcon={'checkbox-blank-outline'}
    checkedIcon="checkbox-marked"
    containerStyle={{ marginLeft: 0 , paddingLeft: 0}}  
  />
  <Text style={styles.chechboxLabel}>Monday</Text>
  </View>
  <View style={[{flexDirection:"row", gap: 10, marginTop: responsiveScreenHeight(1.5), width:responsiveScreenWidth(60), flexWrap: 'wrap'}]}>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
  </View>
          </View>
          <View style={styles.my4}>
            <View style={{flexDirection:"row", alignItems:"center", gap:10}}>
          <CheckBox
   checkedColor='#4464D9'
   iconType='material-community'
   uncheckedIcon={'checkbox-blank-outline'}
   checkedIcon="checkbox-marked"
   containerStyle={{ marginLeft: 0 , paddingLeft: 0}}  
  />
  <Text style={styles.chechboxLabel}>Tuesday</Text>
  </View>
  <View style={[{flexDirection:"row", gap: 10, marginTop: responsiveScreenHeight(1.5), width:responsiveScreenWidth(60), flexWrap: 'wrap'}]}>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
    <View style={styles.timingcard}> 
        <Text style={styles.timingcardTxt}>9:00am</Text>
    </View>
    <View style={styles.line}/>
    <View style={styles.timingcard}>
        <Text style={styles.timingcardTxt}>9:30am</Text>
    </View>
  </View>
          </View>

          <View
          style={{
            position:"absolute",
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4464D9',
            // padding: 10,
            height: responsiveScreenHeight(6.5),
            left: 20,
            bottom: responsiveScreenHeight(3)
          }}>
            
            <Text style={{fontSize: responsiveScreenFontSize(2),
    color: '#fff',
    fontFamily: 'PlusJakartaSans-Bold',}}>Save my availability </Text>
          </View>
    </View>
  )
}

export default MyAvailability

const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding: 20,
        paddingTop: responsiveScreenHeight(5)
    },
    h1: {
        fontFamily: "Raleway-SemiBold",
        fontSize: 20,
        color: "#172331",
        marginHorizontal: responsiveScreenWidth(15)
      },
      my:{
        marginTop: responsiveScreenHeight(3)
      },
      my4:{
              paddingVertical:responsiveScreenHeight(1.5),
              borderBottomColor: "#F5F5F5",
              borderBottomWidth: 1,
      },
      header:{
        fontFamily:"Raleway-Regular",
        fontSize: 12,
        color:"#172331"
      },
      input:{
        borderColor: "#D8D5D3"
      },
      chechboxLabel:{
        color: "#172331",
        fontFamily: "Raleway-SemiBold",
        fontSize: 16
      },
      unavalable:{
        fontFamily:"Raleway-Regular",
        fontSize: 14,
        color: "#172331",
        marginTop: responsiveScreenHeight(1.5),
        lineHeight: 20
      },
      timingcard:{
        borderColor:"#D8D5D3",
        borderWidth:1,
        borderRadius:8,
        width:responsiveScreenWidth(20),
        height: responsiveScreenHeight(5),
        alignItems:"center",
        justifyContent:"center"
      },
      timingcardTxt:{
        fontFamily:"Raleway-Medium",
        fontSize: 10,
        color:"#172331"
      },
      line:{
        width: 5
      }
})