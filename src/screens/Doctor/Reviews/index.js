import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackBtn from '../../../assets/assets/icon-button.svg'
import Header from '../../../components/Header'
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import Star from '../../../assets/assets/StarYellow.svg'
import { Avatar } from 'react-native-paper'
import MyStatusBar from '../../../components/Statusbar'
import { useNavigation } from '@react-navigation/native'

const MyReviews = () => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <MyStatusBar backgroundColor="transparent"/>
        <View style={{flexDirection:"row"}}>
      <Header
          image={<BackBtn/>}
          handlePress={()=> navigation.goBack()}
          />
          <View style={ {textAlign:"center", alignSelf:"center", margin:"auto"}}>
          <Text style={styles.h1}>My Reviews</Text>
          </View>
          </View>
          <View style={[styles.my2,{flexDirection:"row", justifyContent:"space-between"}]}>
          <View style={styles.containers}>
      <Text style={styles.h6}>Total Reviews</Text>
      <Text style={styles.h2}>12</Text>
    </View>
          <View style={[styles.containers, {backgroundColor:"#FCF7F3"}]}>
      <Text style={styles.h6}>Overall Rating</Text>
      <View style={{flexDirection:"row", gap: 5, alignItems:"center"}}>
        <Star/>
      <Text style={[styles.h2, {color:"#D48C6A"}]}>4.8</Text>
      </View>
    </View>
          </View>
          <View style={[styles.my2, {gap: responsiveScreenHeight(2), padding: 10, borderWidth: 1, borderRadius: 12, borderColor:"#E8E8E8"}]}>
                 <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", gap: 10}}>
                        <Avatar.Image size={responsiveScreenWidth(8)} style={{alignSelf:"center"}}/>
                        <View>
                            <Text style={styles.reviewer}>Dayne Martin</Text>
                            <View style={styles.visitNo}>
                                <Text style={{fontFamily:"Raleway-Medium", fontSize: 11,color:"#172331"}}>Visit #1208</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:"row", gap: 5}}>
                            <Star/>
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                        <Text style={styles.durationText}>2 days ago</Text>
                    </View>
                 </View>
                 <Text style={styles.reviewerText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
          </View>
          <View style={[styles.my2, {gap: responsiveScreenHeight(2), padding: 10, borderWidth: 1, borderRadius: 12, borderColor:"#E8E8E8"}]}>
                 <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", gap: 10}}>
                        <Avatar.Image size={responsiveScreenWidth(8)} style={{alignSelf:"center"}}/>
                        <View>
                            <Text style={styles.reviewer}>Dayne Martin</Text>
                            <View style={styles.visitNo}>
                                <Text style={{fontFamily:"Raleway-Medium", fontSize: 11,color:"#172331"}}>Visit #1208</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:"row", gap: 5}}>
                            <Star/>
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                        <Text style={styles.durationText}>2 days ago</Text>
                    </View>
                 </View>
                 <Text style={styles.reviewerText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
          </View>
          <View style={[styles.my2, {gap: responsiveScreenHeight(2), padding: 10, borderWidth: 1, borderRadius: 12, borderColor:"#E8E8E8"}]}>
                 <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{flexDirection:"row", gap: 10}}>
                        <Avatar.Image size={responsiveScreenWidth(8)} style={{alignSelf:"center"}}/>
                        <View>
                            <Text style={styles.reviewer}>Dayne Martin</Text>
                            <View style={styles.visitNo}>
                                <Text style={{fontFamily:"Raleway-Medium", fontSize: 11,color:"#172331"}}>Visit #1208</Text>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{flexDirection:"row", gap: 5}}>
                            <Star/>
                            <Text style={styles.ratingText}>4.8</Text>
                        </View>
                        <Text style={styles.durationText}>2 days ago</Text>
                    </View>
                 </View>
                 <Text style={styles.reviewerText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </Text>
          </View>
    </View>
  )
}

export default MyReviews

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff",
        padding: 20,
        paddingTop: responsiveScreenHeight(6)
    },
    h1: {
        fontFamily: "Raleway-SemiBold",
        fontSize: 20,
        color: "#172331",
        marginHorizontal: responsiveScreenWidth(15)
      },
      my2:{
        marginVertical: responsiveScreenHeight(1)
      },
      containers:{
        backgroundColor:"#F4F9FD",
        borderRadius: 12,
        width: responsiveScreenWidth(42),
        padding: responsiveScreenWidth(4),
        height: responsiveScreenHeight(12),
        gap: 0
    },
    h2:{
        color:"#4464D9",
        fontSize: responsiveScreenHeight(3.5),
        fontFamily:"Raleway-Bold",
    },
    h6:{
        color: "#172331",
        fontFamily: "Raleway-Medium",
        fontSize: 12,
        textAlign:"left"
    },
    reviewer:{
        fontFamily:"Raleway-SemiBold",
        fontSize: 14,
        color:"#172331"
    },
    visitNo:{
        borderColor: "#E8E8E8",
        borderWidth: 1,
        padding: 2
    },
    durationText:{
        color:"#999999",
        fontSize: 11,
        fontFamily:"Raleway-Regular"
    },
    ratingText:{
        color:"#172331",
        fontFamily: "Raleway-SemiBold",
        fontSize: 14
    },
    reviewerText:{
        color:"#172331",
        fontFamily:"Raleway-Medium",
        fontSize: 14
    }
})