// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
//   View,
//   Image,
//   ScrollView,
//   Dimensions,
//   Text
// } from 'react-native';
// import ExpandMore from '../assets/assets/expand_more.svg';
// import {Avatar} from 'react-native-paper';
// import {Divider} from 'react-native-paper';
// import CalendarIcon from '../assets/assets/appointment.svg';
// import HomeHealthIcon from '../assets/assets/home_health.svg';
// import LocationIcon from '../assets/assets/my_location.svg';
// import CoupenIcon from '../assets/assets/coupen.svg';
// import BackBtn from '../assets/assets/icon-button.svg'
// import Coupen from '../assets/assets/coupenicon.svg'
// import Verified from '../assets/assets/doctorverified.svg'
// import { useNavigation } from '@react-navigation/native';
// import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
// import MyStatusBar from '../components/Statusbar';

// const DoctorDetail = () => {
//   const  navigation = useNavigation()
//   return (
//     <View  style={{flex: 1, backgroundColor:"#fff"}} >
//       <MyStatusBar backgroundColor="transparents"/>
//           <View style={styles.container}>
//             <View>
//       <TouchableOpacity onPress={() => {
//         navigation.goBack();
//       }}>
//        <BackBtn/>
//       </TouchableOpacity>
//       <View
//         style={{
//           flexDirection: 'row',
//           gap: 20,
//           alignItems: 'flex-start',
//           marginVertical: responsiveScreenHeight(2),
//         }}>
//         <Avatar.Image
//           size={responsiveScreenWidth(16)}
//           source={require('../assets/assets/doctorimg.png')}
//         />
//         <View style={{gap: 5}}>
//           <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
//             <Text style={{color: '#172331',fontFamily:"Raleway-Bold"}}> Dr Rahul </Text>
//             <Verified/>
//           </View>
//           <View style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontSize: 12,
//                 fontFamily: 'Raleway-SemiBold',
//               }}>
//               Physiotherapist
//             </Text>
//             <View style={styles.dotCircle} />
//             <Text
//               style={{
//                 color: '#172331',
//                 fontSize: 12,
//                 fontFamily: 'Raleway-SemiBold',
//               }}>
//               24 yrs exp
//             </Text>
//           </View>
//           <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
//             <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
//               <Image source={require('../assets/assets/star.png')} />
//               <Text
//                 style={{
//                   color: '#172331',
//                   fontFamily: 'Raleway-SemiBold',
//                   fontSize: 12,
//                 }}>
//                 4.1
//               </Text>
//             </View>
//             <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
//               <Image source={require('../assets/assets/location.png')} />
//               <Text
//                 style={{
//                   color: '#172331',
//                   fontFamily: 'Raleway-SemiBold',
//                   fontSize: 12,
//                 }}>
//                 Patparganj
//               </Text>
//             </View>
//           </View>
//         </View>
//       </View>
//       <View style={styles.appointmentContainer}>
//         <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
//           <View style={styles.circle}>
//             <CalendarIcon style={styles.image} />
//           </View>
//           <View>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-Medium',
//                 fontSize: 10,
//               }}>
//               Appointment Time
//             </Text>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-SemiBold',
//                 fontSize: 14,
//               }}>
//               Fri, 10 Mar 11:00 AM
//             </Text>
//           </View>
//         </View>
//         <Divider />
//         <View style={{flexDirection: 'row', gap: 20, padding: 20}}>
//           <View style={styles.circleGreen}>
//             <HomeHealthIcon style={styles.image} />
//           </View>
//           <View>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-Medium',
//                 fontSize: 10,
//               }}>
//               Patient Address
//             </Text>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-Medium',
//                 fontSize: 14,
//                 width: '70%',
//               }}>
//               C-12/74, Khirki Ext. Malviya nagar New Delhi, 110017
//             </Text>
//           </View>
//           <Divider />
//         </View>
//         <Divider />
//         <View
//           style={{
//             flexDirection: 'row',
//             justifyContent: 'center',
//             alignItems: 'center',
//             padding: 10,
//             gap: 5,
//           }}>
//           <LocationIcon />
//           <Text
//             style={{
//               color: '#4464D9',
//               fontFamily: 'Raleway-SemiBold',
//               fontSize: 12,
//             }}>
//             Choose current location
//           </Text>
//         </View>
       
//       </View>
//       <Divider/>
//       <View
//         style={{
//           marginVertical: responsiveScreenHeight(2),
//           flexDirection: 'row',
//           alignItems: 'center',
//           justifyContent: 'space-between',
//           paddingHorizontal: 20,
//           borderColor: '#F5F7F9',
//           borderWidth: 1,
//           borderRadius: 12,
//           paddingVertical: 5,
//           alignContent: 'center',
//         }}>
//         <View style={{flexDirection: 'row', gap: 10}}>
//          <Coupen/>
//           <View>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-SemiBold',
//                 fontSize: 14,
//               }}>
//               Apply Coupon
//             </Text>
//             <Text
//               style={{
//                 color: '#172331',
//                 fontFamily: 'Raleway-Medium',
//                 fontSize: 12,
//                 width: '80%',
//               }}>
//               Unlock offers with coupon codes
//             </Text>
//           </View>
//         </View>
//         <TouchableOpacity>
//         <Text
//           style={{
//             color: '#4464D9',
//             fontFamily: 'Raleway-SemiBold',
//             fontSize: 12,
//           }}>
//           APPLY
//         </Text>
//         </TouchableOpacity>
//       </View>
    
//       <View>
//         <Text style={{fontFamily:"Raleway-SemiBold", fontSize: 14, color: "#172331", marginBottom: responsiveScreenHeight(1.5)}}>Bill Details</Text>
//         <View style={{marginBottom: responsiveScreenHeight(1.5)}}>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <Text style={{
//               color: '#172331',
//               fontFamily: 'Raleway-Medium',
//               fontSize: 12,
//             }}>Consultation Fee</Text>
//           <Text style={{
//               color: '#172331',
//               fontFamily: 'Raleway-Medium',
//               fontSize: 12,
//             }}>₹1000</Text>
//         </View>
//         <View style={{flexDirection:"row", justifyContent:"space-between"}}>
//           <Text style={{
//               color: '#172331',
//               fontFamily: 'Raleway-Medium',
//               fontSize: 12,
//             }}>Service Fee & Tax</Text>
//           <Text style={{
//               color: '#48BD69',
//               fontFamily: 'Raleway-Medium',
//               fontSize: 12,
//             }}>Free</Text>
//         </View>
//         </View>
//         <Divider style={{borderColor:"#48BD69"}} />
//         <View style={{flexDirection:"row", justifyContent:"space-between", marginTop: 10}}>
//           <Text style={{
//               color: '#172331',
//               fontFamily: 'Raleway-Bold',
//               fontSize: 14,
//             }}>Total Payable</Text>
//           <Text style={{
//               color: '#172331',
//               fontFamily: 'Raleway-Bold',
//               fontSize: 14,
//             }}>₹1000</Text>
//         </View>
//       </View>
//       </View>
//       <View style={{marginTop: 30, width:"100%" }} >
//         <TouchableOpacity onPress={()=>{
//           navigation.navigate("AmountPayment")
//         }} >
//           <View style={styles.button}>
//             <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Pay ₹1000</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//       </View>
//     </View>
//   );
// };

// export default DoctorDetail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingHorizontal: 20,
//     justifyContent:"space-between",
//     paddingBottom: 20,
//     paddingTop: responsiveScreenHeight(3)
//   },
//   appointmentContainer: {
//     backgroundColor: '#F5F7F9',
//     borderRadius: 12,
//   },
//   dotCircle:{
//     width: 4,
//     height: 4,
//     borderRadius: 4, color: "#000"
//   },
//   circle: {
//     width: 34,
//     height: 34,
//     borderRadius: 100,
//     backgroundColor: '#fff',
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   circleGreen: {
//     width: 34,
//     height: 34,
//     borderRadius: 100,
//     backgroundColor: '#48BD69',
//     overflow: 'hidden',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: '100%',
//     height: '100%',
//     resizeMode: 'cover',
//   },
//   button: {
//     backgroundColor: "#4464D9",
//     width: "100%",
//     height: responsiveScreenHeight(6),
//     color: "#fff",
//     borderRadius: 40,
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//     fontFamily: "PlusJakartaSans-ExtraBold",
//   },
// });


import React, {useEffect, useState} from 'react';
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
import ExpandMore from '../assets/assets/expand_more.svg';
import {Avatar} from 'react-native-paper';
import {Divider} from 'react-native-paper';
import CalendarIcon from '../assets/assets/appointment.svg';
import HomeHealthIcon from '../assets/assets/home_health.svg';
import LocationIcon from '../assets/assets/my_location.svg';
import CoupenIcon from '../assets/assets/coupen.svg';
import BackBtn from '../assets/assets/icon-button.svg'
import Coupen from '../assets/assets/coupenicon.svg'
import Verified from '../assets/assets/doctorverified.svg'
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import MyStatusBar from '../components/Statusbar';
import axios from 'axios';
import { parse, format } from 'date-fns';
import Geolocation from '@react-native-community/geolocation';
import { useSelector } from 'react-redux';

const DoctorDetail = ({route}) => {
  const { selectedDate, selectedTime, item ,visitId} = route.params;
  console.log(selectedDate, selectedTime, visitId)
  
  const [data, setData] = useState([])
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const parsedDate = parse(selectedDate, 'yyyy-MM-dd', new Date());
  const user = useSelector((state)=> state.customerAccount)
  const phone = useSelector((State) => State.phone)
  console.log(user, phone)
  
console.log(address)
  // // Format the date to "Fri, 10 Mar" format
  const formattedDate = format(parsedDate, 'E, d MMM');
  // console.log(formattedDate)
  
  const  navigation = useNavigation()
  // useEffect(() => {
  //   async function fetchData() {
  //       try {
  //         const response = await axios.get(`https://customdemowebsites.com/dbapi/drUsers/${id}`)
  //         // console.log(response.data)
  //         setData(response.data)
  //       } catch (err) {
  //         console.log(err);
  //       }
  //   }

  //   fetchData();
  // }, []);
  console.log(data)
  // const getCurrentLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     async (position) => {
  //       const { latitude, longitude } = position.coords;
  //       console.log('Current Latitude:', latitude);
  //       console.log('Current Longitude:', longitude);
  
  //       try {
  //         const response = await axios.get(
  //           `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${GOOGLE_MAPS_API_KEY}`
  //         );
  
  //         if (response.data.status === 'OK') {
  //           const addressComponents = response.data.results[0].address_components;
  //           const formattedAddress = response.data.results[0].formatted_address;
  //           console.log('Complete Address:', formattedAddress);
  
  //           // You can now use the 'formattedAddress' in your patient address field or perform other operations with the address components.
  //         } else {
  //           console.log('Error retrieving address:', response.data.status);
  //         }
  //       } catch (error) {
  //         console.log('Error fetching address:', error);
  //       }
  //     },
  //     (error) => {
  //       console.log('Error getting current location:', error);
  //       // Handle location fetch error here
  //     },
  //     { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  //   );
  // };

  useEffect(() => {
    // Check and request location permission for Android
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ).then((granted) => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          // If permission granted, get user's location
          getCurrentLocation();
        }
      });
    } else {
      // For iOS, no need to request location permission
      getCurrentLocation();
    }
  }, []);

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        getReverseGeocode(latitude, longitude);
      },
      (error) => console.log('Error getting location: ', error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  const getReverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      if (response && response.data) {
        const {
          house_number,
          road,
          city,
          country,
          postcode,
        } = response.data.address;
        setAddress({
          houseNumber: house_number,
          streetNumber: road,
          city: city,
          country: country,
          postalCode: postcode,
        });
      }
    } catch (error) {
      console.log('Error getting address: ', error);
    }
  };
  const formattedAddress = address
    ? `${address.houseNumber? address.houseNumber: ''}, ${address.streetNumber}, ${address.city}, ${address.country}, ${address.postalCode}`
    : 'Loading...';

    const handlePay = async()=>{
      const data = await axios.put(`https://customdemowebsites.com/dbapi/paUsers/${user.id}`,{
        f_name: user.firstName,
        l_name:user.lastName,
        phone_no: phone,
        email:user.email,
        address: formattedAddress,
        gender:user.gender
      })
      console.log(data.data)
        navigation.navigate("AmountPayment", {
          item: item,
          selectedDate: selectedDate, // Pass the selectedDate
          selectedTime: selectedTime,
          visitId: visitId // Pass the selectedTime
        })
    }
  return (
    <View  style={{flex: 1, backgroundColor:"#fff"}} >
      <MyStatusBar backgroundColor="transparents"/>
          <View style={styles.container}>
            <View>
      <TouchableOpacity onPress={() => {
        navigation.goBack();
      }}>
       <BackBtn/>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          gap: 20,
          alignItems: 'flex-start',
          marginVertical: responsiveScreenHeight(2),
        }}>
        <Avatar.Image
          size={responsiveScreenWidth(16)}
          source={require('../assets/assets/doctorimg.png')}
        />
        <View style={{gap: 5}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
            <Text style={{color: '#172331',fontFamily:"Raleway-Bold"}}> Dr {item.f_name} </Text>
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
            {/* <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 14,
                width: '70%',
              }}>
              C-12/74, Khirki Ext. Malviya nagar New Delhi, 110017
            </Text> */}
            {address ? (
          <Text
            style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 14,
              width: '70%',
            }}>
            {formattedAddress}
          </Text>
        ) : (
          <Text>Loading...</Text>
        )}
          </View>
          <Divider />
        </View>
        <Divider />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            gap: 5,
          }}>
          <LocationIcon />
          <Text
            style={{
              color: '#4464D9',
              fontFamily: 'Raleway-SemiBold',
              fontSize: 12,
            }}>
            Choose current location
          </Text>
        </View>
       
      </View>
      <Divider/>
      <View
        style={{
          marginVertical: responsiveScreenHeight(2),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          borderColor: '#F5F7F9',
          borderWidth: 1,
          borderRadius: 12,
          paddingVertical: 5,
          alignContent: 'center',
        }}>
        <View style={{flexDirection: 'row', gap: 10}}>
         <Coupen/>
          <View>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-SemiBold',
                fontSize: 14,
              }}>
              Apply Coupon
            </Text>
            <Text
              style={{
                color: '#172331',
                fontFamily: 'Raleway-Medium',
                fontSize: 12,
                width: '80%',
              }}>
              Unlock offers with coupon codes
            </Text>
          </View>
        </View>
        <TouchableOpacity>
        <Text
          style={{
            color: '#4464D9',
            fontFamily: 'Raleway-SemiBold',
            fontSize: 12,
          }}>
          APPLY
        </Text>
        </TouchableOpacity>
      </View>
    
      <View>
        <Text style={{fontFamily:"Raleway-SemiBold", fontSize: 14, color: "#172331", marginBottom: responsiveScreenHeight(1.5)}}>Bill Details</Text>
        <View style={{marginBottom: responsiveScreenHeight(1.5)}}>
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
            }}>₹{item.fee}</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
          <Text style={{
              color: '#172331',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Service Fee & Tax</Text>
          <Text style={{
              color: '#48BD69',
              fontFamily: 'Raleway-Medium',
              fontSize: 12,
            }}>Free</Text>
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
            }}>₹{item.fee}</Text>
        </View>
      </View>
      </View>
      <View style={{marginTop: 30, width:"100%" }} >
        <TouchableOpacity onPress={handlePay} >
          <View style={styles.button}>
            <Text style={{fontSize:16, color:"#fff", fontFamily:"PlusJakartaSans-Bold"}}>Pay ₹{item.fee}</Text>
          </View>
        </TouchableOpacity>
      </View> 
      </View>
    </View>
  );
};

export default DoctorDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent:"space-between",
    paddingBottom: 20,
    paddingTop: responsiveScreenHeight(3)
  },
  appointmentContainer: {
    backgroundColor: '#F5F7F9',
    borderRadius: 12,
  },
  dotCircle:{
    width: 4,
    height: 4,
    borderRadius: 4, color: "#000"
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
    height: responsiveScreenHeight(6),
    color: "#fff",
    borderRadius: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    fontFamily: "PlusJakartaSans-ExtraBold",
  },
});