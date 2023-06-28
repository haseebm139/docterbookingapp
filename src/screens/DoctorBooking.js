import React, { useState } from 'react';
import {  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView, Dimensions, StatusBar  } from 'react-native'
import ExpandMore from "../assets/assets/expand_more.svg"
import { Avatar } from 'react-native-paper'
import MorningICon from '../assets/assets/noon.svg'
import NoonICon from '../assets/assets/Morning.svg'
import EveningICon from '../assets/assets/Evening.svg'
import HomeIcon from '../assets/assets/group.svg'
import ReviewComponent from '../components/Reviews';
import ArrowOutward from '../assets/assets/arrow_outward.svg';
import { useNavigation } from "@react-navigation/native";
import BackBtn from '../assets/assets/icon-button.svg'
import Header from '../components/Header';
import CustomButtom from '../components/Button';
import { responsiveScreenWidth , responsiveScreenHeight} from "react-native-responsive-dimensions";
import MyStatusBar from '../components/Statusbar';



const DoctorBooking = () => {
  const navigation = useNavigation();
    const currentDate = new Date();
    const daysInNumber = [ 'M', 'T', 'W', 'T', 'F', 'S'];
    const morningTimings = ['09:00 AM', '11:00 AM', '11:30 AM'];
  const afternoonTimings = ['12:00 PM', '12:30 PM'];
  const eveningTimings = ['05:00 PM', '05:30 PM', '06:00 PM', ];
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimePress = (time) => {
    setSelectedTime(time);
  };
    const [selectedDayIndex, setSelectedDayIndex] = useState(null);

    const handleDayPress = (index) => {
      setSelectedDayIndex(index);
    };
    const windowWidth = Dimensions.get('window').width;

  const calendarContainerWidth = responsiveScreenWidth(12);
  const calendarContainerHeight = calendarContainerWidth ;

  const calendarContainerStyle = {
    width: calendarContainerWidth,
    margin: 4, 
    // height: calendarContainerHeight,
    backgroundColor:"#fff", borderWidth: 1, borderColor:"#E7E7E7",
    height: responsiveScreenHeight(8), justifyContent:"center", alignItems: "center", borderRadius:30
  };

  const dayTextStyle = {
    fontSize: 12,
    color: '#78879A',
    fontFamily: "Raleway-SemiBold"
  };

  const dateTextStyle = {
    fontSize: 14,
    color: '#172331',
    fontFamily: "Raleway-Bold"
  };

  const calendarContainerSelectedStyle = {
    ...calendarContainerStyle,
    backgroundColor: '#4464D9',
  };

  const daySelectedTextStyle = {
    ...dayTextStyle,
    color: 'white',
  };

  const dateSelectedTextStyle = {
    ...dateTextStyle,
    color: 'white',
  };

  return (
      <View style={styles.container}>
        <View>
        <MyStatusBar backgroundColor="transparent"/>
      <Header
      image={<BackBtn/>}
      handlePress={() => {
        navigation.goBack()
      }}
      />

        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start", marginVertical: responsiveScreenHeight(1.5)}}>
        <Avatar.Image size={responsiveScreenWidth(15)} source={require('../assets/assets/doctorimg.png')} />
        <View style={{gap: 5}}>
           <View style={{flexDirection:"row", alignItems:"center", gap:2, }}>
                    <Text style={{color:"#172331", fontFamily:"Raleway-Bold", }}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
                    <Text style={{color:"#172331", fontSize:12, fontFamily:"Raleway-SemiBold"}}>Physiotherapist</Text>
                    <View style={styles.dotCircle} />
                    <Text style={{color:"#172331", fontSize:12, fontFamily:"Raleway-SemiBold"}}>24 yrs exp</Text>
                </View>
                <View style={{flexDirection:"row", alignItems:"center", gap: 10}}>
                <View style={{flexDirection:"row", alignItems:"center", gap: 2, }}>
                    <Image source={require("../assets/assets/star.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raleway-SemiBold", fontSize: 12}}>4.1</Text>
                    </View>
                    <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                    <Image source={require("../assets/assets/location.png")}/>
                    <Text style={{color:"#172331", fontFamily:"Raleway-SemiBold",  fontSize: 12}}>Patparganj</Text>
                    </View>
                    
                </View>
        </View>
        </View>
        <View>
            
            
            {/* <Text style={styles.day}>{daysInNumber[dayInNumber]}</Text>
      <Text style={styles.date}>{day}</Text> */}
      <View style={{flexDirection: "row", gap: 5}}>
      {daysInNumber.map((day, index) => {
        const futureDate = new Date();
        futureDate.setDate(currentDate.getDate() + index);

        const dayNumber = futureDate.getDate();

        const isSelected = selectedDayIndex === index;
        const style = isSelected ? calendarContainerSelectedStyle : calendarContainerStyle;
        const dayTextStyleToApply = isSelected ? daySelectedTextStyle : dayTextStyle;
        const dateTextStyleToApply = isSelected ? dateSelectedTextStyle : dateTextStyle;

        return (
          <TouchableOpacity
            key={index}
            style={[styles.calendarContainer, style]}
            onPress={() => handleDayPress(index)}
          >
            <Text style={dayTextStyleToApply}>{day}</Text>
            <Text style={dateTextStyleToApply}>{dayNumber}</Text>
          </TouchableOpacity>
        );
      })}
      </View>
      

      <View >
        <View style={styles.row}>
        <MorningICon/>
      <Text style={styles.sectionTitle}>Morning</Text>
      </View>
      <View style={styles.timeContainer}>
        {morningTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <NoonICon/>
        <Text style={styles.sectionTitle}>Afternoon</Text>
      </View>
      
      <View style={styles.timeContainer}>
        {afternoonTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.row}>
        <EveningICon/>
      <Text style={styles.sectionTitle}>Evening</Text>
      </View>
      <View style={styles.timeContainer}>
        {eveningTimings.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeButton,
              selectedTime === time && styles.timeButtonSelected,
            ]}
            onPress={() => handleTimePress(time)}
          >
            <Text
              style={[
                styles.timeText,
                selectedTime === time && styles.timeTextSelected,
              ]}
            >
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

    <View style={{flexDirection: "row", justifyContent:"space-between" , backgroundColor:"#F5F7F9", borderRadius: 8, alignItems:"center", paddingHorizontal:responsiveScreenWidth(6), paddingVertical: responsiveScreenHeight(0)}}>
        <View style={styles.row}>
        <View style={styles.circle}>
            <HomeIcon/>
        </View>
        <Text style={{color:"#172331", fontFamily:"Raleway-Medium", fontSize:14}}>Visit charges</Text>
        </View>
        <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
        <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Fees</Text>
        </View>
    </View>

    <View>
    <ReviewComponent/>
    <View style={{flexDirection:"row", alignItems:"center", justifyContent:"center" , gap: 10,}}>
        <Text  onPress={() => {
        navigation.navigate("DoctorDetail");
      }} style={{color:"#0D1927", fontFamily:"Raleway-SemiBold", fontSize: 16}}>See all reviews</Text>
        <ArrowOutward />
    </View>
    </View>
    {/* <CustomButtom
    title="Continue"
    onPress={()=> navigation.navigate("DoctorDetail")}
    /> */}
     

    </View>
      
            </View>
            <TouchableOpacity style={{ marginTop: 10 }} onPress={() => {
        navigation.navigate("DoctorDetail");
      }}>
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Done</Text>
          </View>
        </TouchableOpacity>
            </View>
 )
}

export default DoctorBooking

const styles = StyleSheet.create({
   container:{
    flex: 1,
    backgroundColor:"#fff",
    paddingHorizontal: 20,
    paddingTop: responsiveScreenHeight(6),
    paddingBottom: 20,
    justifyContent:"space-between"
   },
   sectionTitle: {
    fontSize: 12,
    color:"#78879A",
    fontFamily:"Raleway-SemiBold"
  },
  timeContainer: {
    flexDirection: 'row',
    marginBottom: responsiveScreenHeight(0.8),
    flexWrap: 'wrap',
  },
  timeButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'white',
    borderColor:"#4464D9",
    borderWidth: 1,
    marginRight: 10,
    width: responsiveScreenWidth(24),
    height: responsiveScreenHeight(4)
  },
  timeButtonSelected: {
    backgroundColor: '#4464D9',
  },
  timeText: {
    fontSize: 12,
    color: "#4464D9",
    fontFamily: "Raleway-SemiBold"
  },
  timeTextSelected: {
    color: 'white',
  },
  row:{
    flexDirection: "row",
    gap: 5,
    alignItems:"center",
    marginVertical: responsiveScreenHeight(1)
  },
  circle: {
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: "#4464D9",
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  button: {
    backgroundColor: "#4464D9",
    width: "100%",
    height: responsiveScreenHeight(6),
    color: "#fff",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
})