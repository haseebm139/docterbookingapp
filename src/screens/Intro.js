import React, {useState} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header/index';
import Logo from '../assets/assets/logo-81.svg';
import CustomButtom from '../components/Button/index';
import {
  responsiveScreenHeight,
  responsiveScreenFontSize,
  responsiveScreenWidth
} from "react-native-responsive-dimensions";
import MyStatusBar from '../components/Statusbar';

const Intro = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigation = useNavigation();

  const handleIndexChanged = index => {
    setCurrentIndex(index);
  };

  const handlePress = () => {
    console.log('pressed');
  };
  const onPress = () => {
    navigation.navigate('DoctorLogin');
  };

  const handleCreateAccount = (role)=>{
    navigation.navigate("Authentication", {role})
    console.log(role)
  }
  return (
    <View>
      <View style={styles.firstSections}>
        <MyStatusBar barStyle="light-content"/>
        <Image
          style={styles.image}
          source={require('../assets/assets/bg.png')}
        />
        <View style={styles.overlay}/>
        <View style={{padding: 20}}>
          <Header
            image={<Logo />}
            title="Skip"
            handlePress={handlePress}
            style={[styles.textBlack, styles.btn]}
          />
        </View>
        {/* <View style={styles.overlay}/> */}
        <Swiper
          loop={false}
          onIndexChanged={handleIndexChanged}
          // dot={<View style={styles.dot} />}
          // activeDot={<View style={styles.activeDot} />}
          showsPagination={false}
          >
          <View style={{position: 'absolute', bottom: -40, left: 20}}>
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                color: '#fff',
                fontSize: responsiveScreenFontSize(2.8),
                marginBottom: 5,
              }}>
              Thousands of doctors
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: responsiveScreenFontSize(1.6),
                color: '#fff',
                width: '40%',
                lineHeight: 16,
                letterSpacing: 1
              }}>
              Access thousands of doctors instantly. You can easily contact with
              the doctors and contact for your needs.
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: -40, left: 20}}>
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                color: '#fff',
                fontSize: responsiveScreenFontSize(2.8),
                marginBottom: 5,
              }}>
              Thousands of doctors
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: responsiveScreenFontSize(1.6),
                color: '#fff',
                width: '40%',
                lineHeight: 16,
                letterSpacing: 1
              }}>
              Access thousands of doctors instantly. You can easily contact with
              the doctors and contact for your needs.
            </Text>
          </View>
          <View style={{position: 'absolute', bottom: -40, left: 20}}>
            <Text
              style={{
                fontFamily: 'Raleway-Bold',
                color: '#fff',
                fontSize: responsiveScreenFontSize(2.8),
                marginBottom: 5,
              }}>
              Thousands of doctors
            </Text>
            <Text
              style={{
                fontFamily: 'Raleway-Medium',
                fontSize: responsiveScreenFontSize(1.6),
                color: '#fff',
                width: '40%',
                lineHeight: 16,
                letterSpacing: 1
              }}>
              Access thousands of doctors instantly. You can easily contact with
              the doctors and contact for your needs.
            </Text>
          </View>
        </Swiper>
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, currentIndex === 0 && styles.activeDot]} />
          <View style={[styles.dot, currentIndex === 1 && styles.activeDot]} />
          <View style={[styles.dot, currentIndex === 2 && styles.activeDot]} />
        </View>
      </View>
      <View style={styles.lastSection}>
        <Text
          style={{
            color: '#172331',
            width: responsiveScreenWidth(70),
            fontFamily: 'Raleway-Bold',
            fontSize: responsiveScreenFontSize(3),
          }}>
          Get Professional Doctor at One Click
        </Text>
        {/* <CustomButtom title="Get Started" onPress={()=> navigation.navigate("Authentication")}/> */}
        {/* <CustomButtom
          style={[styles.btnTransparent, styles.btnPrimaryColor]}
          onPress={onPress}
          title="Doctor Login"
        /> */}
        <CustomButtom title="Get Started" onPress={()=> handleCreateAccount("Customer")}/>
        <CustomButtom title="Doctor Login" style={[styles.btnTransparent, styles.btnPrimaryColor]} onPress={()=> handleCreateAccount("Doctor")}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstSections: {
    height: responsiveScreenHeight(70),
    overflow:"hidden",
    paddingTop: responsiveScreenHeight(5)
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: responsiveScreenHeight(1.4),
  },
  btnPrimaryColor: {
    color: '#4464D9',
    fontFamily: 'Raleway-Bold',
    fontSize: responsiveScreenFontSize(2),
  },
  btn: {
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 40,
    padding: 5
  },
  textBlack: {
    color: '#000',
    fontFamily: 'Raleway-SemiBold',
    opacity: 1
  },
  lastSection: {
    marginTop: responsiveScreenHeight(3),
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  image: {
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'cover',
    alignSelf: 'center',
    zIndex: -1,
    height:responsiveScreenHeight(70)
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 20,
    marginBottom: 30,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginHorizontal: 2,
    opacity: 0.4,
  },
  activeDot: {
    backgroundColor: '#fff',
    opacity: 1,
  },
  overlay:{
      ...StyleSheet.absoluteFillObject,
      backgroundColor:"rgba(0,0,0,0.3)",
      backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0.60) 1.04%, rgba(0,0,0,0.00) 27.93%, rgba(0,0,0,0.80) 100%)'
  },
  
});

export default Intro;
