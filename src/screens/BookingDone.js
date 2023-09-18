import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import CircleTick from '../assets/assets/check_circle.svg'
import CalendarIcon from '../assets/assets/appointment.svg';
import Verified from '../assets/assets/doctorverified.svg'
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';
import MyStatusBar from '../components/Statusbar';
import Backbtn from '../assets/assets/icon-button.svg'
import { parse, format } from 'date-fns';
import axios from 'axios';
import { useSelector } from 'react-redux';



const BookingDone = ({route}) => {
  const { item, selectedDate, selectedTime,visitId} = route.params;
  const user = useSelector((state)=> state.customerAccount)
  console.log(user.visitId)
  const parsedDate = parse(selectedDate, 'yyyy-MM-dd', new Date());
  

  // // Format the date to "Fri, 10 Mar" format
  const formattedDate = format(parsedDate, 'E, d MMM');
  // console.log(formattedDate)
//  console.log(item)
  const navigation = useNavigation()

  const handleDone = async()=>{
    
    const data = await axios.put(`https://customdemowebsites.com/dbapi/visits/status/${visitId}`,{
     is_pending: 0,
     is_done:1,
     is_rejected: 0
    })
    Alert.alert("Booking has been done")
    navigation.navigate("HomePage");
    console.log(data.status)
  }
  return (
   <View style={styles.container}>
    <View>
    <MyStatusBar backgroundColor="transparent"/>
    <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
        <Backbtn/>
        </TouchableOpacity>

        <View style={styles.sectionDone}>
            <CircleTick/>
            <View style={{width:"70%"}}>
                <Text style={[styles.h1,{marginBottom: 5}]}>Booking Done</Text>
                <Text style={styles.textsm}>Your appointment has been scheduled successfully.</Text>
            </View>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.textsmbold}>Booking info</Text>
            <View style={styles.confirmedBtn}>
                <Text style={{color:"#fff", fontFamily: "Raleway-SemiBold", fontSize: 12}}>Confirmed</Text>
            </View>
        </View>
        <View style={styles.appointmentContainer}>
        <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
          <View style={styles.circle}>
            <CalendarIcon style={styles.image} />
          </View>
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 10,
              }}>
              Appointment Time
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-SemiBold',
                fontSize: 14,
              }}>
             {formattedDate} {selectedTime}
            </Text>
          </View>
        </View>
        
       
      </View>

      <View style={styles.my2}>
        <Text style={[styles.textsmbold, {marginTop:responsiveScreenHeight(2)}]}>Doctor Info</Text>
        <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'flex-start',
          marginTop: 20,
        }}>
        <Avatar.Image
          size={64}
          source={require('../assets/assets/doctorimg.png')}
        />
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text style={{color: '#172331', fontFamily: 'Raleway-Bold'}}>
              Dr Rahul
            </Text>
            {/* <Image source={require('../assets/assets/verified.png')} /> */}
            <Verified/>
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              {item.profession}
            </Text>
            <View style={styles.dotCircle} />
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              {item.experience}
            </Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
              <Image source={require('../assets/assets/star.png')} />
              <Text
                style={{
                  color: '#172331',
                  fontFamily: 'Raleway-SemiBold',
                  fontSize: 12,
                }}>
                {item.review_count}
              </Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
              <Image source={require('../assets/assets/location.png')} />
              <Text
                style={{
                  color: '#172331',
                  fontFamily: 'Raleway-SemiBold',
                  fontSize: 12,
                }}>
                {item.hospital}
              </Text>
            </View>
          </View>
        </View>
      </View>
      </View>
      <View style={{gap: 6}}>
        <Text style={styles.textsmbold}>Payment info</Text>
        <View style={styles.flexRow}>
            <Text style={styles.textsm}>Price</Text>
            <Text style={styles.textsm}>₹{item.fee}</Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.textsm}>Tax</Text>
            <Text style={styles.textsm}>₹0</Text>
        </View>
        <View style={styles.flexRow}>
            <Text style={styles.textsm}>Payment Method</Text>
            <Text style={styles.textsm}>On Cash</Text>
        </View>
        <View style={[styles.flexRow, {marginTop: 10}]}>
            <Text style={styles.textsmbold}>Payment Total</Text>
            <Text style={styles.textsmbold}>₹{item.fee}</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity onPress={handleDone}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Done</Text>
          </View>
        </TouchableOpacity>
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop:responsiveScreenHeight(5),
    paddingBottom: 20,
    flex: 1,
    justifyContent: "space-between"
  },
  my2:{
    marginVertical: responsiveScreenHeight(1.5)
  },
  sectionDone:{
   flexDirection:"row",
   gap: 20,
   marginVertical: 20
  },
  h1:{
    color:"#172331",
    fontSize:20,
    fontFamily:"Raleway-Bold"
  },
  textsm:{
    fontSize:14,
fontFamily:"Raleway-Medium",
color: "#172331",
  },
  textsmbold:{
    fontSize:14,
fontFamily:"Raleway-Bold",
color: "#172331",
  },
  appointmentContainer: {
    backgroundColor: '#F5F7F9',
    borderRadius: 12,
    marginTop: 10
  },
  circle: {
    width: 34,
    height: 34,
    borderRadius: 100,
    backgroundColor: '#fff',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmedBtn:{
    backgroundColor:"#48BD69",
    alignItems:"center",
    justifyContent:"center",
    padding: 5,
    borderRadius: 4
  },
  flexRow:{
    flexDirection:"row",
    justifyContent: "space-between"
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: responsiveScreenHeight(6),
    color: "#fff",
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
});

export default BookingDone;