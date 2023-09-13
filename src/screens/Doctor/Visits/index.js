import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList
} from 'react-native';
// import {FlatList} from 'react-native-gesture-handler';
// import ClockImg from '../../../assets/assets/pace.svg';
// import PhoneIcon from '../../../assets/assets/phoneicon.svg';
import PencilIcon from '../../../assets/assets/border_color.svg';
import {Avatar, Divider} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Visits from '../../../components/doctor/Visits';
import MyStatusBar from '../../../components/Statusbar';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ClockImg from '../../../assets/assets/pace.svg';
import PhoneIcon from '../../../assets/assets/phoneicon.svg';
import Location from '../../../assets/assets/location.svg';
// import PencilIcon from '../../../assets/assets/border_color.svg';
// import { Avatar, Divider } from 'react-native-paper';

const TotalVisits = () => {
  const [status, setStatus] = useState('Upcoming');
  const [dataList, setDataList] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  const [pastData, setPastData] = useState([]);
  // const {upcoming_visits} = useSelector(state => state.doctorDetail.userDetails)
  const user = useSelector(state => state.doctorAccount)
  console.log(user)

  const navigation = useNavigation()
  const ListTab = [
    {
      status: 'Upcoming',
    },
    {
      status: 'Past',
    },
  ];
  const data = [
    {
        id: 1,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
    },
    {
        id: 2,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
      
    },
    {
        id: 3,
      name: 'Dr. Neeraj Mehraniya',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Upcoming',
      statusCode: "Upcoming"
    },
    {
        id: 4,
      name: 'Dr. Neeraj Mehraniyaaaaaaaaaaaa',
      specialist: 'Physiotherapist',
      experience: '24 yrs exp',
      AppointmentDate: 'Fri, 20 Mar',
      AppointmentTime: ' 07:00 - 07:30 PM',
      status: 'Past',
      statusCode: "Past"
    },
  ];
  const setStatusFilter = status => {
     
    if(!status){
        setDataList(data)
    }
    else{
        
      setDataList([...data.filter(e=> e.status === status)])
    }
    setStatus(status);
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://customdemowebsites.com/dbapi/visits/dr/${user.id}`
        );
        console.log(response.data)
        const data = response.data;
        const upcomingData = data.filter((item) => item.is_pending === 1);
        const pastData = data.filter((item) => item.is_done === 1);
        setDataList(upcomingData);
        // Save the filtered data in the "Upcoming" and "Past" tabs
        setUpcomingData(upcomingData);
        setPastData(pastData);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  console.log(upcomingData)
const renderItems = ({item, index})=>{
  console.log(item)
  return (
    <View style={styles.appointContainer}>
    <View style={styles.leftLine} />
  <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View>
        <Text style={styles.textsm}>Visit Date & Time</Text>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginVertical: responsiveScreenHeight(1)
          }}>
          <ClockImg />
          <Text style={styles.h1}>Fri, 20 Mar  |  07:00 - 07:30 PM</Text>
          
        </View>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            marginBottom: responsiveScreenHeight(2)
          }}>
          <Location />
          <Text style={styles.h2}>{item.address}</Text>
          
        </View>
      </View>
       <PhoneIcon />
      
    </View>
    <Divider />
    <View style={{marginTop: responsiveScreenHeight(1), flexDirection:"row", gap: 10, alignItems:"center"}}>
    <Avatar.Image
        size={responsiveScreenWidth(6)}
        source={require('../../../assets/assets/doctorimg.png')}
      />
      <TouchableOpacity onPress={()=> Navigation.navigate("VisitDetails")}>
        <Text style={styles.name}>Mehtab Alam</Text>
        </TouchableOpacity>
    </View>
</View>
  )
}
 
  return (
    <View style={styles.container}>
      <MyStatusBar backgroundColor="transparent"/>
      <View style={styles.my2}>
        <Text style={styles.h1}>Visits</Text>
      </View>
      <View style={styles.tabcontainer}>
        {ListTab.map(e => (
          <TouchableOpacity
            onPress={() => setStatusFilter(e.status)}
            style={[styles.btnTab, status === e.status && styles.btnActiveTab]}>
            <View
              style={{alignItems:"center", flexDirection:"row", justifyContent:"center"}}>
              <Text style={[
                styles.tabText,
                status === e.status && styles.tabActiveText,
              ]}>{e.status}</Text>
              <View style={[styles.totalvisits, status === e.status && styles.totolvisitsActive]}>
                <Text style={{color:"#fff", fontWeight: 600}}>4</Text></View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      {/* <FlatList
        data={dataList}
        keyExtractor={(item, index) => {
            return(index.toString());
         }}
        renderItem={renderItem}
      /> */}
        {/* {data?.map((item, e)=>{
      const leftLine = [ item.statusCode === 'Completed' && styles.linegreen, item.statusCode === 'Cancelled' && styles.linered, !item.statusCode && styles.lineblue];
      return (
          <>
        {status === "Upcoming" && item.statusCode == "Upcoming" && <Visits/>}
        {status === "Past" && item.statusCode == "Past" && <Visits/>}
        </>
      );
    })} */}
    {/* <View style={styles.tabcontainer}>
        {ListTab.map(e => (
          <TouchableOpacity
            onPress={() => setStatusFilter(e.status)}
            style={[styles.btnTab, status === e.status && styles.btnActiveTab]}>
            <Text
              style={[
                styles.tabText,
                status === e.status && styles.tabActiveText,
              ]}>
              {e.status}
            </Text>
          </TouchableOpacity>
        ))}
      </View> */}

{status === 'Upcoming' && (
        <FlatList
          data={upcomingData}
          renderItem={renderItems}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {status === 'Past' && (
        <FlatList
          data={pastData}
          renderItem={({ item }) => (
            <Visits item={item}/>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}



    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: responsiveScreenHeight(5),
    flex: 1,
  },
  appointContainer: {
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#E9ECF2',
    padding: 10,
    gap: 5,
    borderRadius: 12,
    marginLeft: 10
  },
  tabcontainer: {
    backgroundColor: '#F0F4F9',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnActiveTab: {
    backgroundColor: '#FEFEFE',
  },
  btnTab: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 8,
    flex: 2,
    alignContent: 'center',
  },
  tabText: {
    color: '#172331',
    fontFamily: 'Raleway-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    flexDirection:"row",
    gap: 5
  },
  tabActiveText: {
    color: '#666E7D',
  },
  lineblue: {
    borderLeftWidth: 5,
    borderLeftColor: '#4464D9',
    height: '100%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  linegreen: {
    borderLeftWidth: 5,
    borderLeftColor: '#48BD69',
    height: '80%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  linered: {
    borderLeftWidth: 5,
    borderLeftColor: '#FC2C2C',
    height: '100%',
    position:"absolute",
    borderRadius: 10,
    left: -3,
    top: 10
  },
  my2: {
    marginVertical: 10,
  },
  h1: {
    color: '#172331',
    fontSize: 23,
    fontFamily: 'Raleway-SemiBold',
  },
  textsm: {
    color: '#172331',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  textwhitelg: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Raleway-Bold',
  },
  profileDetail: {
    backgroundColor: '#4464D9',
    borderRadius: 12,
    padding: 10,
  },
  sectionDone: {
    flexDirection: 'row',
    gap: 20,
  },
  cardContainer: {
    borderBottomColor: '#E7E7E7',
    borderWidth: 1,
    borderColor: 'transparent',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontFamily: 'Raleway-Bold',
    fontSize: 14,
    color: '#172331',
  },
  cardText: {
    color: '#66708F',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  button: {
    backgroundColor: '#4464D9',
    paddingVertical: 5,
    paddingHorizontal: 10,
    gap: 5,
    color: '#fff',
    borderRadius: 12,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    fontFamily: 'PlusJakartaSans-ExtraBold',
  },
  tag: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontFamily:"Ralway-Medium"
  },
  danger: {
    backgroundColor: '#FC2C2C1A',
  },
  warning: {
    backgroundColor: 'orange',
  },
  success: {
    backgroundColor: '#48BD691A',
  },
  labeldanger:{
    color: "#FC2C2C",
    fontFamily:"Raleway-Medium"
  },
  labelsuccess:{
    color:"#48BD69",
    fontFamily:"Raleway-Medium"
  },
  totalvisits:{
    backgroundColor: "#4464D9",
    width: 18,
    height: 18,
    marginLeft: 10,
    color: "#fff",
    borderRadius: 100,
    alignItems:"center",
    justifyContent:"center",
    alignSelf:"center",
  },
  totolvisitsActive:{
    backgroundColor:"#666E7D",
    width: 18,
    height: 18,
    marginLeft: 10,
    color: "#fff",
    borderRadius: 100,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    justifyContent:"center",
textAlign:"center"
  },
  appointContainer: {
    borderWidth: 1,
    borderColor: '#E9ECF2',
    padding: 10,
    gap: 5,
    borderRadius: 12,
    marginVertical: responsiveScreenHeight(1),
  },
h1: {
    color: '#172331',
    fontSize: 14,
    fontFamily: 'Raleway-SemiBold',
  },
h2: {
    color: '#172331',
    fontSize: 12,
    fontFamily: 'Raleway-Regular',
  },
  textsm: {
    color: '#172331',
    fontFamily: 'Raleway-Medium',
    fontSize: 12,
  },
  name:{
    fontFamily:"Raleway-Bold",
    color: '#172331',
    fontSize: responsiveFontSize(1.7)
  },
  leftLine: {
    borderLeftWidth: 4,
    borderLeftColor: '#4464D9',
    height: '100%',
    position:"absolute",
    borderRadius: 10,
    left: -1,
    top: 10
  },
});

export default TotalVisits;


const Tag = ({ label, color }) => {
    const tagStyles = [styles.tag, color === 'danger' && styles.danger, color === 'warning' && styles.warning, color === 'success' && styles.success];
    const labelStyles = [styles.label, label === 'cancelled' && styles.labeldanger,  label === 'Completed' && styles.labelsuccess];
  
    return (
      <View style={tagStyles}>
        <Text style={labelStyles}>{label}</Text>
      </View>
    );
  };