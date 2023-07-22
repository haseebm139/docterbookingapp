import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Head from '../../../components/doctor/Header'
import NotificationIcon from '../../../assets/assets/notification.svg'
import ArrowRightIcon from '../../../assets/assets/arrowRight.svg'
import Orange from '../../../assets/assets/orange.svg'
import Green from '../../../assets/assets/green.svg'
import HomePageCard from '../../../components/doctor/HomeCard/indeex'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Visits from '../../../components/doctor/Visits'
import Swiper from 'react-native-swiper'
import MyStatusBar from '../../../components/Statusbar'
import { useSelector } from 'react-redux'

const DoctorHomePage = () => {
    const CustomDot = ({ active }) => (
        <View style={[styles.dot, active && styles.activeDot]} />
      );
      const doctordetails = useSelector(state => state.doctorAccount)
      console.log(doctordetails)
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="transparent" barStyle="dark-content"/>
      <Green style={{position:"absolute", top:0, right: 0}}/>
      <Orange style={{position:"absolute", top:0, right: 70}}/>
      <Head
      title="Hello, Dr. Mehul 👋🏼"
      image={<NotificationIcon/>}
      />
      
      <View style={styles.my}>
        <HomePageCard
        Head="₹ 5000"
        style={{ backgroundColor: "#DFE6FF" }}
        />
        <HomePageCard
        Head="4.5"
        style={{ backgroundColor: "#E5F3E3" , color:"#77BE6C"}}
        reviews="12 reviews added"
        />
      </View>

      <View style={styles.my}>
        <Text style={styles.textsm}>Upcoming visit (3)</Text>
        <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
            <Text style={styles.textsmsemi}>View All</Text>
        <ArrowRightIcon/>
        </View>
      </View>
      <View style={styles.containerss}>
      <Swiper
        loop={false}
        dot={<CustomDot />}
        activeDot={<CustomDot active />}
        paginationStyle={styles.pagination}
      >
   <Visits/>
   <Visits/>
   <Visits/>
   </Swiper>
   </View>

   <View style={styles.popup}>
    <Text style={styles.popupTextlg}>More availability, </Text>
<Text style={styles.popupTextlg}>more chances to get booked 😀</Text>
<Text style={styles.popuptextsm}>With our quick & easy scheduling system. 
Add/Manage your availability purely 
based on your preferences.</Text>
<TouchableOpacity style={styles.popupbtn}>
    <Text style={styles.btnText}>Update availability now</Text>
</TouchableOpacity>
   </View>
     
    </View>
  )
}

export default DoctorHomePage

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff",
        padding: 20,
        paddingTop: responsiveScreenHeight(5)
    },
    containerss: {
        marginTop: responsiveScreenHeight(3),
        height: responsiveScreenHeight(27) ,
        position: "relative"
      },
    my:{
        flexDirection:"row", justifyContent:"space-between", marginTop: responsiveScreenHeight(3)
    },
    textsm:{
        color: "#172331",
        fontFamily:"Raleway-Medium",
        fontSize: 14
    },
    textsmsemi:{
        color: "#172331",
        fontFamily:"Raleway-SemiBold",
        fontSize: 14
    },
    dot: {
       
        backgroundColor: "#aaa",
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 3,
      },
      activeDot: {
        backgroundColor: '#4464D9',
        width: 15,
        height: 8,
        borderRadius: 15,
        marginLeft: 3,
        marginRight: 3,
        marginBottom: 3,
      },
      popup:{
        backgroundColor:"#4464D9",
        padding: 15,
        borderRadius:12
      },
      popupTextlg:{
        color:"#fff",
        fontFamily: "Raleway-SemiBold",
        fontSize: 16,
      },
      popuptextsm:{
        fontSize: 10,
        color: "#fff",
        fontFamily:"Raleway-Regular",
        width: "50%",
        lineHeight: 14,
        marginVertical: responsiveScreenHeight(1)
      },
      popupbtn:{
        backgroundColor:"#fff",
        borderRadius: 12,
        width: responsiveScreenWidth(40),
        paddingHorizontal: responsiveScreenWidth(2),
        height: responsiveScreenHeight(3),
        alignItems:"center",
        justifyContent:"center"
    },
    btnText:{
        color: "#4464D9",
        fontSize: 12,
        fontFamily:"Raleway-Medium"
    },
    gradient:{
      position: "absolute",
      top: 0,
      right: 0,
      width: "30%",
      height: "30%",
      backgroundColor: "#F66E34",
      opacity: 0.05,
      borderRadius: 381

    }
})