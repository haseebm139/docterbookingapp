import {  StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import ExpandMore from "../assets/assets/expand_more.svg"
import { Avatar } from 'react-native-paper'
import { responsiveScreenHeight } from 'react-native-responsive-dimensions'
import MyStatusBar from '../components/Statusbar'
import { useNavigation } from '@react-navigation/native'



const Specialist = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={styles.container}>
        <MyStatusBar />
    <View >
        <View style={{flexDirection:"row", gap: 10, alignItems:"center"}}>
            <TouchableOpacity onPress={()=> navigation.goBack()}>
        <Image source={require("../assets/assets/icon-button.png")}/>
        </TouchableOpacity>
        <Text style={{color:"#172331",fontFamily:"Raleway-SemiBold", fontSize: 14}}>Physiotherapist</Text>
        </View>
        <View style={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", marginVertical: 20}}>
            <Text style={{color:"#172331",fontFamily:"Raleway-Medium", fontSize:12 }}>76 doctors found</Text>
            <View style={{flexDirection:"row", alignItems:"center", gap: 5}}>
                <Text>Nearest</Text>
                <ExpandMore/>
            </View>
        </View>
        <View style={{gap: 20, paddingBottom: 20, marginTop: 10,  borderBottomColor:"#E7E7E7", borderWidth: 2 , alignself: 'self', borderColor: "transparent"}}>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start"}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
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
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Consultation Fees</Text>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate("DoctorBooking")} style={{backgroundColor:"#4464D9",  borderRadius: 38, width:155, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:"Raleway-SemiBold", color:"#fff"}}>Book</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={{gap: 20, paddingBottom: 20, marginTop: 10,  borderBottomColor:"#E7E7E7", borderWidth: 2 , alignself: 'self', borderColor: "transparent"}}>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start"}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
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
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Consultation Fees</Text>
            </View>
            <View style={{backgroundColor:"#4464D9",  borderRadius: 38, width:155, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:"Raleway-SemiBold", color:"#fff"}}>Book</Text>
            </View>
        </View>
        </View>
        <View style={{gap: 20, paddingBottom: 20, marginTop: 10,  borderBottomColor:"#E7E7E7", borderWidth: 2 , alignself: 'self', borderColor: "transparent"}}>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start"}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
        <View style={{gap: 5}}>
           <View style={{flexDirection:"row", alignItems:"center", gap:2, }}>
                    <Text style={{color:"#172331", fontFamily:"Raleway-Bold", }}>Dr Rahul</Text>
                    <Image source={require("../assets/assets/verified.png")}/>
                </View>
                <View style={{flexDirection:"row", gap: 5 , alignItems:"center"}}>
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
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Consultation Fees</Text>
            </View>
            <View style={{backgroundColor:"#4464D9",  borderRadius: 38, width:155, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:"Raleway-SemiBold", color:"#fff"}}>Book</Text>
            </View>
        </View>
        </View>
        <View style={{gap: 20, paddingBottom: 20, marginTop: 10,  borderBottomColor:"#E7E7E7", borderWidth: 2 , alignself: 'self', borderColor: "transparent"}}>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start"}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
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
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Consultation Fees</Text>
            </View>
            <View style={{backgroundColor:"#4464D9",  borderRadius: 38, width:155, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:"Raleway-SemiBold", color:"#fff"}}>Book</Text>
            </View>
        </View>
        </View>
        <View style={{gap: 20, paddingBottom: 20, marginTop: 10,  borderBottomColor:"#E7E7E7", borderWidth: 2 , alignself: 'self', borderColor: "transparent"}}>
        <View style={{flexDirection:"row", gap: 20, alignItems:"flex-start"}}>
        <Avatar.Image size={64} source={require('../assets/assets/doctorimg.png')} />
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
        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View style={{}}>
                <Text style={{fontFamily:"Raleway-Bold", fontSize: 14, color:"#172331" }}>₹1000</Text>
                <Text style={{fontFamily:"Raleway-Medium", fontSize: 12, color:"#172331"}}>Consultation Fees</Text>
            </View>
            <View style={{backgroundColor:"#4464D9",  borderRadius: 38, width:155, height: 40, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontFamily:"Raleway-SemiBold", color:"#fff"}}>Book</Text>
            </View>
        </View>
        </View>
          </View>
          </ScrollView>
 )
}

export default Specialist

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flex: 1,
        paddingHorizontal: 20,
    paddingTop:responsiveScreenHeight(6),
    paddingBottom: 40

    },
    dotCircle: {
        width: 4,
        height: 4,
        borderRadius: 5,
        backgroundColor: '#172331', // Customize the dot color
      },
})