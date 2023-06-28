import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    ScrollView,
    Dimensions,
    Text
  } from 'react-native';
import React from 'react'
import {Avatar, Divider} from 'react-native-paper';
import CalendarIcon from '../../../assets/assets/appointment.svg';
import HomeHealthIcon from '../../../assets/assets/home_health.svg';
import LocationIcon from '../../../assets/assets/my_location.svg';
import CoupenIcon from '../../../assets/assets/coupen.svg';
import Backbtn from '../../../assets/assets/icon-button.svg';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MyStatusBar from '../../../components/Statusbar';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header'

const VisitDetails = () => {
  const Navigation = useNavigation()
  return (
    
          <View style={styles.container}>
            <View>
            <MyStatusBar backgroundColor="transparent"/>
            <View style={{flexDirection:"row"}}>
      <Header
          image={<Backbtn/>}
          handlePress={()=> Navigation.goBack()}
          />
          <View style={ {textAlign:"center", alignSelf:"center", margin:"auto"}}>
          <Text style={styles.h1}>Visit#1208</Text>
          </View>
          </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'flex-start',
          marginVertical: 20,
          justifyContent:"space-between"
        }}>
            <View style={{flexDirection:"row", gap: 20}}>
        <Avatar.Image
          size={responsiveScreenWidth(10)}
          source={require('../../../assets/assets/doctorimg.png')}
        />
        <View style={{gap: 2}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text style={{color: '#172331', fontFamily: 'Raleway-Bold'}}>
              Javed Ahmed
            </Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              Delhi
            </Text>
            <View style={styles.dotCircles} />
            <Text
              style={{
                color: '#172331',
                fontSize: 12,
                fontFamily: 'Raleway-SemiBold',
              }}>
              24 yrs exp
            </Text>
          </View>
         
        </View>
        </View>
        
        <View style={styles.confirmedBtn}>
                <Text style={{color:"#fff", fontFamily: "Raleway-SemiBold", fontSize: 12}}>Upcoming</Text>
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
              Fri, 10 Mar 11:00 AM
            </Text>
          </View>
        </View>
        <Divider />
        <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
          <View style={styles.circleGreen}>
            <HomeHealthIcon style={styles.image} />
          </View>
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 10,
              }}>
              Patient Address
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 14,
                width: '70%',
              }}>
              C-12/74, Khirki Ext. Malviya nagar New Delhi, 110017
            </Text>
          </View>
          <Divider />
        </View>
 
      </View>
    <View style={{marginVertical: responsiveScreenHeight(2), margin:"auto", justifyContent:"center", alignItems:"center"}}>
        <TouchableOpacity  style={[styles.button, {backgroundColor:"#fff", borderColor:"#BE2831", borderWidth: 1, borderRadius: 30, width:"80%", margin:"auto"}]}>
            <Text style={{fontSize:16, color:"#BE2831",fontWeight: 700, fontFamily:"PlusJakartaSans-Bold"}}>Cancel Booking</Text>
        </TouchableOpacity>
    </View>
      <View>
        <Text style={{fontFamily:"Raleway-SemiBold", fontSize: 14, color: "#172331", marginBottom: 10}}>Bill Details</Text>
        <View style={{marginBottom: 20}}>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Consultation Fee</Text>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>₹1000</Text>
        </View>
        
        </View>
        <Divider style={{borderColor:"#48BD69"}} />
        <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 10}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Bold',
              fontSize: 14,
            }}>Total Payable</Text>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Bold',
              fontSize: 14,
            }}>₹1000</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity >
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Show Route Map</Text>
          </View>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default VisitDetails

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      paddingTop: responsiveScreenHeight(5),
      justifyContent: "space-between"
    },
    h1:{
      ontFamily: "Raleway-Medium",
        fontSize: 16,
        color: "#172331",
        marginHorizontal: responsiveScreenWidth(15)
    },
    appointmentContainer: {
      backgroundColor: '#F5F7F9',
      borderRadius: 12,
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
    circleGreen: {
      width: 34,
      height: 34,
      borderRadius: 100,
      backgroundColor: '#48BD69',
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
      height: responsiveScreenHeight(6.5),
      color: "#fff",
      borderRadius: 30,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 10,
      fontFamily: "PlusJakartaSans-ExtraBold",
    },
    confirmedBtn:{
        backgroundColor:"#4464D9",
        alignItems:"center",
        justifyContent:"center",
        padding: 5,
        borderRadius: 4
      },
      dotCircles:{
        width: 4,
        height:4,
        color: "#000",
        zIndex: 1
      }
  });